import React, { useEffect, useState } from "react";
import {
  Accordion,
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
  Stack,
  Table,
} from "react-bootstrap/";
import ReactHtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  fetchUserQuestions,
  updateUserQuestionInput,
} from "../stats/user_questionsSlice";
import SingleQAadmin from "./SingleQAadmin";
import { fetchSingleQuestion } from "./singleQuestionSlice";
import { Divider } from "@mui/material";
import "./singleQStyle.css";

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
    dispatch(fetchUserQuestions(userId)).then(() =>
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

  if (admin) {
    return <SingleQAadmin />;
  } else {
    return (
      //has the user already answered the question? yes -->
      CurrentQuestionArray.length > 0 && CurrentQuestion.answered ? (
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
                      <Card.Header className="mb-2" id="sq-header">
                        {question}
                      </Card.Header>
                      <Card.Body className="mx-auto" id="sq-body">
                        <Row className="mx-auto">
                          <Stack id="sq-stack" direction="horizontal">
                            {questionImage
                              ? questionImage.map((image, index) => (
                                  <Table
                                    responsive="sm"
                                    size="sm"
                                    key={uuidv4()}
                                    borderless
                                    id="sq-table"
                                  >
                                    <thead>
                                      <tr>
                                        <th id="sq-table-heading">
                                          {" "}
                                          <img src={image} id="sq-img" />
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="text-muted"
                                          id="sq-table-td"
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
                        <Row id="sq-row">
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
                            <td id="sq-answer-td">
                              <Button variant={"success"}>
                                {correctAnswer}
                              </Button>
                            </td>
                            <td id="sq-answer-td">
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
                        <Accordion.Body className="mx-auto" id="sq-body">
                          <Row className="mx-auto">
                            <Stack id="sq-stack" direction="horizontal">
                              {explanationImage
                                ? explanationImage.map((image, index) => (
                                    <Table
                                      responsive="sm"
                                      size="sm"
                                      key={uuidv4()}
                                      borderless
                                      id="sq-table"
                                    >
                                      <thead>
                                        <tr>
                                          <th id="sq-table-heading">
                                            <img src={image} id="sq-img" />
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td
                                            className="text-muted"
                                            id="sq-table-td"
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
                                    <div id="references">
                                      {ReactHtmlParser(sourcelink)}
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
                }
              </Stack>
            </>
          )}
        </Container>
      ) : (
        // <------------------Not answered yet ------------------>

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
                    <Card.Header className="mb-2 text-center" id="sq-header">
                      {question}
                    </Card.Header>
                    <Card.Body className="mx-auto" id="sq-body">
                      <Row className="mx-auto">
                        <Stack id="sq-stack" direction="horizontal">
                          {questionImage
                            ? questionImage.map((image, index) => (
                                <Table
                                  responsive="sm"
                                  size="sm"
                                  key={uuidv4()}
                                  borderless
                                  id="sq-table"
                                >
                                  <thead>
                                    <tr>
                                      <th id="sq-table-heading">
                                        {" "}
                                        <img src={image} id="sq-img" />
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td
                                        className="text-muted"
                                        id="sq-table-td"
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
                      <Row id="sq-row">
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
                          <td id="sq-answer-td">
                            <Button variant={"success"}>{correctAnswer}</Button>
                          </td>
                          <td id="sq-answer-td">
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
                                  <div id="references">
                                    {ReactHtmlParser(sourcelink)}
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
              )}
            </Stack>
          )}
        </Container>
      )
    );
  }
};

export default SingleQuestion;
