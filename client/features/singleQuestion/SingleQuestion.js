import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleQuestion,
  deleteSingleQuestion,
} from "./singleQuestionSlice";
import { useParams, Link } from "react-router-dom";
import { Card, Stack } from "react-bootstrap/";
import Button from "react-bootstrap/Button";
import ReactHtmlParser from "react-html-parser";
import {
  fetchAllUserQuestions,
  fetchUserQuestions,
  updateUserQuestion,
  updateUserQuestionInput,
} from "../stats/user_questionsSlice";
import { ProgressBar } from "react-bootstrap";
import SingleQAadmin from "./SingleQAadmin";

const SingleQuestion = () => {
  const admin = useSelector((state) => state.auth.me.isAdmin);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleOptionSelection = (option) => {
    if (showAnswer) {
      return;
    }
    setSelectedOption(option);
  };

  const { singleQuestionId } = useParams();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.me.id);
  const userExpertise = useSelector((state) => state.auth.me.expertise);
  useEffect(() => {
    dispatch(fetchSingleQuestion(singleQuestionId));
    dispatch(fetchUserQuestions(userId));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const singleQ = useSelector((state) => state.SingleQuestion.Question);
  const {
    id,
    question,
    answerOptions,
    correctAnswer,
    explanation,
    explanationImage,
    questionImage,
    explanationLinks,
    category,
    level,
    ancestorId,
  } = singleQ;

  const AllUserQuestion = useSelector(
    (state) => state.userQuestions.UserQuestions
  );
  const CurrentQuestionArray = AllUserQuestion.filter(
    (object) => object.questionAnswerId === id
  );

  const CurrentQuestion = CurrentQuestionArray[0];

  const handleSubmit = () => {
    const rightorwrong = selectedOption === correctAnswer ? "right" : "wrong";
    setShowAnswer(true);
    // console.log(selectedOption, correctAnswer);
    dispatch(
      updateUserQuestionInput({
        userId: userId,
        questionAnswerId: id,
        userInput: selectedOption,
        answered: rightorwrong,
        category: category,
        level: level,
        userExpertise: userExpertise,
      })
    )
      .then(() => dispatch(fetchSingleQuestion(singleQuestionId)))
      // .then(() => dispatch(updateUserQuestionInput({answered:rightorwrong})))
      .then(() => dispatch(fetchUserQuestions(userId)));
  };

  // if (CurrentQuestion){
  //   const {answered, favorite,questionAnswerId, userExpertise,userQuestionId,userInput} = CurrentQuestion
  //   console.log({answered, favorite,questionAnswerId, userExpertise,userQuestionId,userInput});
  // }

  const handleDelete = () => {
    dispatch(deleteSingleQuestion(id, ancestorId));
  };

  if (admin) {
    return <SingleQAadmin />;
  } else {
    if (CurrentQuestionArray.length > 0 && CurrentQuestion.answered) {
      return (
        <div>
          {loading ? (
            <ProgressBar animated now={100} />
          ) : (
            <Stack gap={3} className="p-3">
              <Stack gap={3}>
                <Stack gap={3}>
                  <div style={{ fontSize: "20px", textAlign: "center" }}>
                    singleQuestion
                  </div>
                  <Card>
                    <Card.Body
                      style={{ fontSize: "20px", textAlign: "center" }}
                    >
                      Question Number: {id}
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Body
                      className="mb-2 text-center"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Question: {question}
                    </Card.Body>
                  </Card>
                </Stack>

                <Stack gap={3} className="mx-auto" direction="horizontal">
                  {questionImage
                    ? questionImage.map((image, index) => (
                        <Card gap={3}>
                          <img
                            key={index}
                            src={image}
                            style={{
                              height: `12rem`,
                            }}
                          />
                          <Card.Subtitle
                            className="m-2 text-center"
                            style={{ fontSize: "10px" }}
                          >
                            figure:{index + 1}
                          </Card.Subtitle>
                        </Card>
                      ))
                    : null}
                </Stack>
              </Stack>

              <Stack gap={5}>
                <Stack direction="horizontal" gap={3} className=" mx-auto">
                  {answerOptions
                    ? answerOptions.map((ans, index) => (
                        <Button
                          key={index}
                          // variant={selectedOption === ans ? "success" : "outline-success"}
                          variant={
                            CurrentQuestion.userInput
                              ? ans === correctAnswer
                                ? "success"
                                : "danger"
                              : CurrentQuestion.answered === ans
                              ? "success"
                              : "outline-success"
                          }
                        >
                          {ans}
                        </Button>
                      ))
                    : null}
                </Stack>
                <Stack direction="horizontal" gap={3} className=" mx-auto">
                  <Button
                    variant="danger"
                    // onClick={handleSubmit}
                    disabled={selectedOption === null}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>

              {
                <Stack gap={3}>
                  <Stack gap={3} className="mx-auto" direction="horizontal">
                    {/* <div>Correct Answer: {correctAnswer} and you selected: {selectedOption}</div> */}
                    <Card>
                      <Card.Body>
                        <Card.Title>Correct Answer</Card.Title>
                        <Button variant={"success"}>{correctAnswer}</Button>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <Card.Title>Your Answer</Card.Title>
                        <Button
                          variant={
                            CurrentQuestion.userInput
                              ? CurrentQuestion.userInput === correctAnswer
                                ? "success"
                                : "danger"
                              : CurrentQuestion.userInput === selectedOption
                              ? "success"
                              : "outline-success"
                          }
                        >
                          {CurrentQuestion.userInput}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Stack>

                  <Card>
                    <Card.Body
                      className="m-2 text-center"
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Explanation: {explanation}
                    </Card.Body>
                  </Card>

                  <Stack gap={3} className="mx-auto" direction="horizontal">
                    {explanationImage
                      ? explanationImage.map((image, index) => (
                          <Card gap={3}>
                            <img
                              key={index}
                              src={image}
                              style={{
                                height: `12rem`,
                              }}
                            />
                            <Card.Subtitle
                              className="m-2 text-center"
                              style={{ fontSize: "10px" }}
                            >
                              figure:{index + 1}
                            </Card.Subtitle>
                          </Card>
                        ))
                      : null}
                  </Stack>

                  {/*    alternate to react-html-parser:
      not preferred but this works:
      <div dangerouslySetInnerHTML={{ __html: sourcelink }}/>{" "} */}

                  <Stack gap={3}>
                    <Card gap={3} className="mb-2 text-decoration-none ">
                      <Card.Header>References</Card.Header>
                      {explanationLinks
                        ? explanationLinks.map((sourcelink, index) => (
                            <Card
                              key={index}
                              className="m-2 text-decoration-none "
                            >
                              <Card.Body>
                                {" "}
                                <div>
                                  {index + 1}{" "}
                                  <div>
                                    {ReactHtmlParser(sourcelink)}
                                    <style>
                                      {` a {
                              color: inherit;
                               text-decoration: none;}`}
                                    </style>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          ))
                        : null}
                    </Card>
                  </Stack>
                </Stack>
              }
            </Stack>
          )}
        </div>
      );
    } else {
      return (
        <div>
          {loading ? (
            <ProgressBar animated now={100} />
          ) : (
            <Stack gap={3} className="p-3">
              <Stack gap={3}>
                <Stack gap={3}>
                  <div style={{ fontSize: "20px", textAlign: "center" }}>
                    singleQuestion
                  </div>
                  <Card>
                    <Card.Body
                      style={{ fontSize: "20px", textAlign: "center" }}
                    >
                      Question Number: {id}
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Body
                      className="mb-2 text-center"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Question: {question}
                    </Card.Body>
                  </Card>
                </Stack>

                <Stack gap={3} className="mx-auto" direction="horizontal">
                  {questionImage
                    ? questionImage.map((image, index) => (
                        <Card gap={3}>
                          <img
                            key={index}
                            src={image}
                            style={{
                              height: `12rem`,
                            }}
                          />
                          <Card.Subtitle
                            className="m-2 text-center"
                            style={{ fontSize: "10px" }}
                          >
                            figure:{index + 1}
                          </Card.Subtitle>
                        </Card>
                      ))
                    : null}
                </Stack>
              </Stack>

              <Stack gap={5}>
                <Stack direction="horizontal" gap={3} className=" mx-auto">
                  {answerOptions
                    ? answerOptions.map((ans, index) => (
                        <Button
                          key={index}
                          // variant={selectedOption === ans ? "success" : "outline-success"}
                          variant={
                            showAnswer
                              ? ans === correctAnswer
                                ? "success"
                                : "danger"
                              : selectedOption === ans
                              ? "success"
                              : "outline-success"
                          }
                          onClick={() => handleOptionSelection(ans)}
                        >
                          {ans}
                        </Button>
                      ))
                    : null}
                </Stack>
                <Stack direction="horizontal" gap={3} className=" mx-auto">
                  <Button
                    variant="danger"
                    onClick={handleSubmit}
                    disabled={selectedOption === null}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>

              {showAnswer && (
                <Stack gap={3}>
                  <Stack gap={3} className="mx-auto" direction="horizontal">
                    {/* <div>Correct Answer: {correctAnswer} and you selected: {selectedOption}</div> */}
                    <Card>
                      <Card.Body>
                        <Card.Title>Correct Answer</Card.Title>
                        <Button variant={"success"}>{correctAnswer}</Button>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <Card.Title>Your Answer</Card.Title>
                        <Button
                          variant={
                            showAnswer
                              ? selectedOption === correctAnswer
                                ? "success"
                                : "danger"
                              : selectedOption === selectedOption
                              ? "success"
                              : "outline-success"
                          }
                        >
                          {selectedOption}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Stack>

                  <Card>
                    <Card.Body
                      className="m-2 text-center"
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Explanation: {explanation}
                    </Card.Body>
                  </Card>

                  <Stack gap={3} className="mx-auto" direction="horizontal">
                    {explanationImage
                      ? explanationImage.map((image, index) => (
                          <Card gap={3}>
                            <img
                              key={index}
                              src={image}
                              style={{
                                height: `12rem`,
                              }}
                            />
                            <Card.Subtitle
                              className="m-2 text-center"
                              style={{ fontSize: "10px" }}
                            >
                              figure:{index + 1}
                            </Card.Subtitle>
                          </Card>
                        ))
                      : null}
                  </Stack>

                  {/*    alternate to react-html-parser:
      not preferred but this works:
      <div dangerouslySetInnerHTML={{ __html: sourcelink }}/>{" "} */}
                  <Stack gap={3}>
                    <Card gap={3} className="mb-2 text-decoration-none ">
                      <Card.Header>References</Card.Header>
                      {explanationLinks
                        ? explanationLinks.map((sourcelink, index) => (
                            <Card
                              key={index}
                              className="m-2 text-decoration-none "
                            >
                              <Card.Body>
                                {" "}
                                <div>
                                  {index + 1}{" "}
                                  <div>
                                    {ReactHtmlParser(sourcelink)}
                                    <style>
                                      {` a {
                              color: inherit;
                               text-decoration: none;}`}
                                    </style>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          ))
                        : null}
                    </Card>
                  </Stack>
                </Stack>
              )}
            </Stack>
          )}
        </div>
      );
    }
  }
};

export default SingleQuestion;




// const App = () => {
//   const [answers, setAnswers] = useState([
//     { id: 1, text: 'Option 1' },
//     { id: 2, text: 'Option 2' },
//     { id: 3, text: 'Option 3' },
//   ]);
//   const [editMode, setEditMode] = useState({});

//   const handleEdit = (id) => {
//     setEditMode({ ...editMode, [id]: true });
//   };

//   const handleSave = (id, text) => {
//     const newAnswers = answers.map((answer) => {
//       if (answer.id === id) {
//         return { id, text };
//       }
//       return answer;
//     });
//     setAnswers(newAnswers);
//     setEditMode({ ...editMode, [id]: false });
//   };

//   return (
//     <div>
//       {answers.map((answer) => {
//         return editMode[answer.id] ? (
//           <div key={answer.id}>
//             <input
//               type="text"
//               value={answer.text}
//               onChange={(e) => handleSave(answer.id, e.target.value)}
//             />
//           </div>
//         ) : (
//           <div key={answer.id} onClick={() => handleEdit(answer.id)}>
//             {answer.text}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

