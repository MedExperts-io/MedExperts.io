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
import {
  fetchAllUserQuestions,
  fetchUserQuestions,
  updateUserQuestion,
  updateUserQuestionInput,
} from "../stats/user_questionsSlice";
import SingleQAadmin from "./SingleQAadmin";
import { Divider } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import parse from "html-react-parser";

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
    dispatch(fetchUserQuestions()).then(() =>
      dispatch(fetchSingleQuestion(singleQuestionId))
    );
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
    explanationImageAltText,
    questionImage,
    questionImageAltText,
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
            questionAnswerId: id,
            userInput: selectedOption,
            answered: selectedOption === correctAnswer ? "right" : "wrong",
            category: category,
            level: level,
            userExpertise: userExpertise,
          })
        )
      )
      .then(() => dispatch(fetchUserQuestions()));
  };

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
              <Stack gap={3} className="p-3">
                <Stack gap={3}>
                  <Stack gap={3}>
                    <Breadcrumb>
                      <Breadcrumb.Item href="/questions" id="breadcrumb">
                        All Questions
                      </Breadcrumb.Item>
                      <Breadcrumb.Item id="breadcrumb" active>
                        {" "}
                        Question {displayId}
                      </Breadcrumb.Item>
                    </Breadcrumb>

                    <Card>
                      <Card.Header
                        className="mb-2 text-center"
                        style={{
                          fontSize: "100%",
                          textAlign: "center",
                        }}
                      >
                        {question}
                      </Card.Header>
                      <Card.Body
                        className="mx-auto"
                        style={{ paddingBottom: "0px", marginBottom: "0px" }}
                      >
                        <Row className="mx-auto">
                          <Stack
                            style={{
                              paddingTop: "10px",
                              paddingLeft: "0px",
                              paddingRight: "0px",
                            }}
                            direction="horizontal"
                          >
                            {questionImage
                              ? questionImage.map((image, index) => (
                                  <Table
                                    responsive="sm"
                                    size="sm"
                                    key={uuidv4()}
                                    borderless
                                    style={{ paddingBottom: "0px" }}
                                  >
                                    <thead>
                                      <tr>
                                        <th style={{ padding: "0px" }}>
                                          {" "}
                                          <img
                                            alt={
                                              questionImageAltText
                                                ? questionImageAltText[index]
                                                : "We're missing an explanation here, contact us!"
                                            }
                                            src={image}
                                            style={{
                                              paddingLeft: "10px",
                                              maxHeight: `12rem`,
                                              maxInlineSize: "100%",
                                            }}
                                          />
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="text-center"
                                          style={{ fontSize: "10px" }}
                                        >
                                          Figure:{index + 1}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                ))
                              : null}
                          </Stack>
                        </Row>
                      </Card.Body>
                      <Card.Body className="mx-auto">
                        <Row style={{ paddingBottom: "2%" }}>
                          <center>
                            <span className="visually-hidden">
                              Select your answer:
                            </span>
                            <Divider aria-hidden="true">
                              Select your answer:
                            </Divider>
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
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>View Explanation</Accordion.Header>
                        <Accordion.Body>{explanation}</Accordion.Body>
                        <Accordion.Body
                          className="mx-auto"
                          style={{ paddingBottom: "0px", marginBottom: "0px" }}
                        >
                          <Row className="mx-auto">
                            <Stack
                              style={{
                                paddingTop: "10px",
                                paddingLeft: "0px",
                                paddingRight: "0px",
                              }}
                              direction="horizontal"
                            >
                              {explanationImage
                                ? explanationImage.map((image, index) => (
                                    <Table
                                      responsive="sm"
                                      size="sm"
                                      key={uuidv4()}
                                      borderless
                                      style={{ paddingBottom: "0px" }}
                                    >
                                      <thead>
                                        <tr>
                                          <th style={{ padding: "0px" }}>
                                            {" "}
                                            <img
                                              alt={
                                                explanationImageAltText
                                                  ? explanationImageAltText[
                                                      index
                                                    ]
                                                  : "We're missing an explanation here, contact us!"
                                              }
                                              src={image}
                                              style={{
                                                paddingLeft: "10px",
                                                maxHeight: `12rem`,
                                                maxInlineSize: "100%",
                                              }}
                                            />
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td
                                            className="text-center"
                                            style={{ fontSize: "10px" }}
                                          >
                                            Figure:{index + 1}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  ))
                                : null}
                            </Stack>
                          </Row>
                        </Accordion.Body>
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
                                      {parse(sourcelink)}
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
                            <p
                              style={{
                                fontSize: "16px",
                              }}
                            >
                              No references available for this question.
                            </p>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
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
                    <Breadcrumb.Item id="breadcrumb" href="/questions">
                      All Questions
                    </Breadcrumb.Item>
                    <Breadcrumb.Item id="breadcrumb" active>
                      Question {displayId}
                    </Breadcrumb.Item>
                  </Breadcrumb>

                  <Card>
                    <Card.Header
                      className="mb-2 text-center"
                      style={{
                        fontSize: "100%",

                        textAlign: "center",
                      }}
                    >
                      {question}
                    </Card.Header>
                    <Card.Body
                      className="mx-auto"
                      style={{ paddingBottom: "0px", marginBottom: "0px" }}
                    >
                      <Row className="mx-auto">
                        <Stack
                          style={{
                            paddingTop: "10px",
                            paddingLeft: "0px",
                            paddingRight: "0px",
                          }}
                          direction="horizontal"
                        >
                          {questionImage
                            ? questionImage.map((image, index) => (
                                <Table
                                  responsive="sm"
                                  size="sm"
                                  key={uuidv4()}
                                  borderless
                                  style={{ paddingBottom: "0px" }}
                                >
                                  <thead>
                                    <tr>
                                      <th style={{ padding: "0px" }}>
                                        {" "}
                                        <img
                                          alt={
                                            questionImageAltText
                                              ? questionImageAltText[index]
                                              : "We're missing an explanation here, contact us!"
                                          }
                                          src={image}
                                          style={{
                                            paddingLeft: "10px",
                                            maxHeight: `12rem`,
                                            maxInlineSize: "100%",
                                          }}
                                        />
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td
                                        className="text-center"
                                        style={{ fontSize: "10px" }}
                                      >
                                        Figure:{index + 1}
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              ))
                            : null}
                        </Stack>
                      </Row>
                    </Card.Body>
                    <Card.Body className="mx-auto">
                      <Row style={{ paddingBottom: "2%" }}>
                        <center>
                          <span className="visually-hidden">
                            Select your answer:
                          </span>
                          <Divider aria-hidden="true">
                            Select your answer:
                          </Divider>
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
                                    {parse(sourcelink)}
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
                          <p
                            style={{
                              fontSize: "16px",
                            }}
                          >
                            No references available for this question.
                          </p>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Stack>
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
