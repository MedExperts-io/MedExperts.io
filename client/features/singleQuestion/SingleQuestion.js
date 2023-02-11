import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleQuestion,
  deleteSingleQuestion,
} from "./singleQuestionSlice";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  Stack,
  Button,
  Breadcrumb,
  ProgressBar,
  Container,
  Row,
  Col,
  Accordion,
  Table,
} from "react-bootstrap/";
import ReactHtmlParser from "react-html-parser";
import {
  fetchAllUserQuestions,
  fetchUserQuestions,
  updateUserQuestion,
  updateUserQuestionInput,
} from "../stats/user_questionsSlice";
import SingleQAadmin from "./SingleQAadmin";
import { Divider } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

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
    // dispatch(
    //   updateUserQuestionInput({
    //     userId: userId,
    //     questionAnswerId: singleQuestionId,
    //   })
    // ).then(() => dispatch(fetchSingleQuestion(singleQuestionId)));
    // dispatch(fetchUserQuestions(userId)).then(()=>dispatch(fetchSingleQuestion(singleQuestionId)) )
  }, []);

  useEffect(() => {
    dispatch(fetchUserQuestions(userId)).then(()=>dispatch(fetchSingleQuestion(singleQuestionId)))
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
    displayId,
  } = singleQ;

  const AllUserQuestion = useSelector(
    (state) => state.userQuestions.UserQuestions
  );
  const CurrentQuestionArray = AllUserQuestion.filter(
    (object) => object.questionAnswerId === id
  );

  const CurrentQuestion = CurrentQuestionArray[0];

  const handleSubmit = () => {
    setShowAnswer(true);
    dispatch(fetchSingleQuestion(id))
      .then(() =>
        dispatch(
          updateUserQuestionInput({
            userId: userId,
            questionAnswerId: id,
            userInput: selectedOption,
            answered: selectedOption === correctAnswer ? "right" : "wrong",
            category: category,
            level: level,
            userExpertise: userExpertise,
          })
        )
      )
      .then(() => dispatch(fetchUserQuestions(userId)));
  };

  // if (CurrentQuestion){
  //   const {answered, favorite,questionAnswerId, userExpertise,userQuestionId,userInput} = CurrentQuestion
  //   console.log({answered, favorite,questionAnswerId, userExpertise,userQuestionId,userInput});
  // }

  if (admin) {
    return <SingleQAadmin />;
  } else {
    if (CurrentQuestionArray.length > 0 && CurrentQuestion.answered) {
      return (
        <Container fluid>
          {loading ? (
            <ProgressBar animated now={100} />
          ) : (
            <>
              {" "}
              <Stack gap={3} className="p-3">
                <Stack gap={3}>
                  <Stack gap={3}>
                    <Breadcrumb>
                      <Breadcrumb.Item
                        href="/questions"
                        id="breadcrumb"
                        style={{
                          textDecorationLine: "underline",
                          // fontWeight: "bold",
                          // color: "black",
                        }}
                      >
                        All Questions
                      </Breadcrumb.Item>
                      <Breadcrumb.Item
                        id="breadcrumb"
                        active
                        style={
                          {
                            // fontWeight: "bold",
                            // color: "black",
                          }
                        }
                      >
                        {" "}
                        Question No.{displayId}
                      </Breadcrumb.Item>
                    </Breadcrumb>

                    <Card>
                      <Card.Header
                        className="mb-2 text-center"
                        style={{
                          fontSize: "100%",
                          // fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {question}
                      </Card.Header>
                      <Card.Body className="mx-auto">
                        {/* </Stack> */}
                        <Stack
                          gap={3}
                          className="mx-auto"
                          direction="horizontal"
                        >
                          {questionImage
                            ? questionImage.map((image, index) => (
                                <Card
                                  gap={3}
                                  key={uuidv4()}
                                  className="mx-auto"
                                  id="no-border"
                                >
                                  <img
                                    src={image}
                                    style={{
                                      maxHeight: `12rem`,
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
                        {/* </Stack> */}

                        <Row style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                          <center>
                            <Divider>Select your answer:</Divider>
                          </center>
                        </Row>
                        <Row className="mx-auto">
                          {answerOptions
                            ? answerOptions.map((ans, index) => (
                                <Button
                                  as={Col}
                                  className="ms-3 mb-2"
                                  key={uuidv4()}
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
                        </Row>
                      </Card.Body>
                      <Card.Footer>
                        <Stack
                          direction="horizontal"
                          gap={3}
                          className=" mx-auto"
                        >
                          <Button
                            className="mx-auto"
                            variant="danger"
                            // onClick={handleSubmit}
                            disabled={selectedOption === null}
                          >
                            Submit
                          </Button>
                        </Stack>
                      </Card.Footer>
                    </Card>
                  </Stack>
                </Stack>

                {
                  <Stack gap={3}>
                    <Card className="mx-auto">
                      <Table>
                        <thead>
                          <tr className="text-center">
                            <th>Correct Answer</th>
                            <th>Your Answer</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="no-border">
                            <td style={{ borderBottomWidth: "0px" }}>
                              <style type="text/css">
                                {`
    .btn-success {
      background-color: #7cb69d;
      border-color:#7cb69d;
      color: white;
    }
    .btn-danger{
      background-color: #FF7276;
      border-color: #FF7276;
    }

    `}
                              </style>
                              <Button variant={"success"}>
                                {correctAnswer}
                              </Button>
                            </td>
                            <td style={{ borderBottomWidth: "0px" }}>
                              {" "}
                              <Button
                                id="btn-muted"
                                variant={
                                  CurrentQuestion.userInput
                                    ? CurrentQuestion.userInput ===
                                      correctAnswer
                                      ? "success"
                                      : "danger"
                                    : CurrentQuestion.userInput ===
                                      selectedOption
                                    ? "success"
                                    : "outline-success"
                                }
                              >
                                {CurrentQuestion.userInput}
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                    {/* <Stack gap={3} className="mx-auto" direction="horizontal"> */}
                    {/* <div>Correct Answer: {correctAnswer} and you selected: {selectedOption}</div> */}
                    {/* <Card className="mx-auto">
                      <Card.Body>
                        <Row>
                          <Col>
                            <Card.Title>Correct Answer</Card.Title>
                            <Button variant={"success"}>{correctAnswer}</Button>
                            {/* <Card.Body> */}
                    {/* </Col>
                          <Col>
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
                          </Col>
                        </Row>

                        {/* </Card.Body> */}
                    {/* </Card.Body>
                    </Card> */}{" "}
                    {/* <Card> */}
                    {/* <Card.Body>
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
                        </Card.Body> */}
                    {/* </Card> */}
                    {/* </Stack> */}
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>View Explanation</Accordion.Header>
                        <Accordion.Body>{explanation}</Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>View References</Accordion.Header>
                        <Accordion.Body>
                          {explanationLinks.length ? (
                            explanationLinks.map((sourcelink, index) => (
                              <Card
                                key={uuidv4()}
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
                          ) : (
                            <p>No references available for this question.</p>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    {/* <Card>
                      <Card.Body
                        className="m-2 text-center"
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Explanation: {explanation}
                        <Stack
                          gap={3}
                          className="mx-auto"
                          direction="horizontal"
                        >
                          {explanationImage
                            ? explanationImage.map((image, index) => (
                                <Card gap={3} key={uuidv4()}>
                                  <img
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
                      </Card.Body>
                    </Card> */}
                    {/* <Stack gap={3} className="mx-auto" direction="horizontal">
                      {explanationImage
                        ? explanationImage.map((image, index) => (
                            <Card gap={3} key={uuidv4()}>
                              <img
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
                    </Stack> */}
                    {/*    alternate to react-html-parser:
      not preferred but this works:
      <div dangerouslySetInnerHTML={{ __html: sourcelink }}/>{" "} */}
                    {/* <Stack gap={3}>
                      <Card gap={3} className="mb-2 text-decoration-none ">
                        <Card.Header>References</Card.Header>
                        {explanationLinks
                          ? explanationLinks.map((sourcelink, index) => (
                              <Card
                                key={uuidv4()}
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
                          : "null"}
                      </Card>
                    </Stack> */}
                  </Stack>
                }
              </Stack>
            </>
          )}
        </Container>
      );
    } else {
      // <------------------Not answered view ------------------>
      return (
        <Container fluid>
          {loading ? (
            <ProgressBar animated now={100} />
          ) : (
            <Stack gap={3} className="p-3">
              <Stack gap={3}>
                <Stack gap={3}>
                  <Breadcrumb>
                    <Breadcrumb.Item
                      id="breadcrumb"
                      href="/questions"
                      style={{
                        textDecorationLine: "underline",
                        // fontWeight: "bold",
                      }}
                    >
                      All Questions
                    </Breadcrumb.Item>
                    <Breadcrumb.Item
                      id="breadcrumb"
                      active
                      style={
                        {
                          // fontWeight: "bold",
                        }
                      }
                    >
                      Question No.{displayId}
                    </Breadcrumb.Item>
                  </Breadcrumb>

                  <Card>
                    <Card.Header
                      className="mb-2 text-center"
                      style={{
                        fontSize: "100%",
                        // fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {question}
                    </Card.Header>
                    <Card.Body className="mx-auto">
                      <Stack gap={3} className="mx-auto" direction="horizontal">
                        {questionImage
                          ? questionImage.map((image, index) => (
                              // <Col sm>
                              <Card
                                gap={3}
                                key={uuidv4()}
                                className="mx-auto"
                                id="no-border"
                              >
                                <img
                                  src={image}
                                  style={{
                                    maxHeight: `12rem`,
                                  }}
                                />

                                <Card.Subtitle
                                  className="m-2 text-center"
                                  style={{ fontSize: "10px" }}
                                >
                                  figure:{index + 1}
                                </Card.Subtitle>
                              </Card>
                              // </Col>
                            ))
                          : null}
                      </Stack>
                      <Row style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                        <center>
                          <Divider>Select your answer:</Divider>
                        </center>
                      </Row>
                      <Row className="mx-auto">
                        <style type="text/css">
                          {`
    .btn-success {
      background-color: #7cb69d;
      border-color:#7cb69d;
      color: white;
    }
    .btn-danger{
      background-color: #FF7276;
      border-color: #FF7276;
    }
    .btn-outline-success{
   
      border-color:#7cb69d;
   
    }

    `}
                        </style>
                        {answerOptions
                          ? answerOptions.map((ans, index) => (
                              <Button
                                as={Col}
                                className="ms-3 mb-2"
                                key={uuidv4()}
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
                      </Row>
                    </Card.Body>
                    <Card.Footer>
                      <Stack
                        direction="horizontal"
                        gap={3}
                        className=" mx-auto"
                      >
                        <Button
                          className="mx-auto"
                          id="question-submit-btn"
                          variant="danger"
                          onClick={handleSubmit}
                          disabled={selectedOption === null}
                        >
                          Submit
                        </Button>
                      </Stack>
                    </Card.Footer>
                  </Card>
                </Stack>
              </Stack>

              {showAnswer && (
                <Stack gap={3}>
                  <Card className="mx-auto">
                    <Table>
                      <thead>
                        <tr className="text-center">
                          <th>Correct Answer</th>
                          <th>Your Answer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="no-border">
                          <td style={{ borderBottomWidth: "0px" }}>
                            <style type="text/css">
                              {`
.btn-success {
background-color: #7cb69d;
border-color:#7cb69d;
color: white;
}
.btn-danger{
background-color: #FF7276;
border-color: #FF7276;
}

`}
                            </style>
                            <Button variant={"success"}>{correctAnswer}</Button>
                          </td>
                          <td style={{ borderBottomWidth: "0px" }}>
                            {" "}
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
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>View Explanation</Accordion.Header>
                      <Accordion.Body>{explanation}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>View References</Accordion.Header>
                      <Accordion.Body>
                        {explanationLinks.length ? (
                          explanationLinks.map((sourcelink, index) => (
                            <Card
                              key={uuidv4()}
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
                        ) : (
                          <p>No references available for this question.</p>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Stack>

                //           <Stack gap={3}>
                //             <Stack gap={3} className="mx-auto" direction="horizontal">
                //               {/* <div>Correct Answer: {correctAnswer} and you selected: {selectedOption}</div> */}
                //               <Card>
                //                 <Card.Body>
                //                   <Card.Title>Correct Answer</Card.Title>
                //                   <Button variant={"success"}>{correctAnswer}</Button>
                //                 </Card.Body>
                //               </Card>
                //               <Card>
                //                 <Card.Body>
                //                   <Card.Title>Your Answer</Card.Title>
                //                   <Button
                //                     variant={
                //                       showAnswer
                //                         ? selectedOption === correctAnswer
                //                           ? "success"
                //                           : "danger"
                //                         : selectedOption === selectedOption
                //                         ? "success"
                //                         : "outline-success"
                //                     }
                //                   >
                //                     {selectedOption}
                //                   </Button>
                //                 </Card.Body>
                //               </Card>
                //             </Stack>

                //             <Card>
                //               <Card.Body
                //                 className="m-2 text-center"
                //                 style={{
                //                   fontSize: "15px",
                //                   fontWeight: "bold",
                //                   textAlign: "center",
                //                 }}
                //               >
                //                 Explanation: {explanation}
                //               </Card.Body>
                //             </Card>

                //             <Stack gap={3} className="mx-auto" direction="horizontal">
                //               {explanationImage
                //                 ? explanationImage.map((image, index) => (
                //                     <Card gap={3} key={uuidv4()}>
                //                       <img
                //                         src={image}
                //                         style={{
                //                           height: `12rem`,
                //                         }}
                //                       />
                //                       <Card.Subtitle
                //                         className="m-2 text-center"
                //                         style={{ fontSize: "10px" }}
                //                       >
                //                         figure:{index + 1}
                //                       </Card.Subtitle>
                //                     </Card>
                //                   ))
                //                 : null}
                //             </Stack>

                //             {/*    alternate to react-html-parser:
                // not preferred but this works:
                // <div dangerouslySetInnerHTML={{ __html: sourcelink }}/>{" "} */}
                //             <Stack gap={3}>
                //               <Card gap={3} className="mb-2 text-decoration-none ">
                //                 <Card.Header>References</Card.Header>
                //                 {explanationLinks
                //                   ? explanationLinks.map((sourcelink, index) => (
                //                       <Card
                //                         key={uuidv4()}
                //                         className="m-2 text-decoration-none "
                //                       >
                //                         <Card.Body>
                //                           {" "}
                //                           <div>
                //                             {index + 1}{" "}
                //                             <div>
                //                               {ReactHtmlParser(sourcelink)}
                //                               <style>
                //                                 {` a {
                //                         color: inherit;
                //                          text-decoration: none;}`}
                //                               </style>
                //                             </div>
                //                           </div>
                //                         </Card.Body>
                //                       </Card>
                //                     ))
                //                   : null}
                //               </Card>
                //             </Stack>
                //           </Stack>
              )}
            </Stack>
          )}
        </Container>
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
