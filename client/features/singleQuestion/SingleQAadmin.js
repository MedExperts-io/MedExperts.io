import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Card,
  Stack,
  Button,
  ProgressBar,
  Table,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap/";
import ReactHtmlParser from "react-html-parser";
import {
  fetchSingleQuestion,
  fetchQAVersions,
  deleteSingleQuestion,
} from "./singleQuestionSlice";
import {
  fetchAllUserQuestions,
  fetchUserQuestions,
  updateUserQuestion,
  updateUserQuestionInput,
} from "../stats/user_questionsSlice";
import { fetchAllQuestionsAnswers } from "../allQA/allQASlice";

const SingleQAadmin = () => {
  const { singleQuestionId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    dispatch(fetchQAVersions(singleQuestionId));
    //dispatch(fetchAllQuestionsAnswers());
  }, [qaVersions]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const qaVersions = useSelector((state) => state.SingleQuestion.qaAllVersions);

  const responseData = (qaId, ansOption) => {
    let numOfPicks = 0;
    let totalResponses = 0;
    const userResponses = qaVersions.map((aVersion) => {
      if (aVersion.id == qaId) {
        aVersion.user_questions.map((eachUserInput) => {
          totalResponses++;
          if (eachUserInput.userInput == ansOption) {
            numOfPicks++;
          }
        });
      }
    });
    // console.log("Answer and numOfPicks", ansOption, numOfPicks);
    if (numOfPicks !== 0) {
      return Math.round((numOfPicks * 100) / totalResponses);
    } else {
      return null;
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteSingleQuestion(id));
  };

  return (
    <div>
      {loading ? (
        <ProgressBar animated now={100} />
      ) : (
        <Stack gap={3} className="p-3">
          <div>
            {qaVersions && qaVersions?.length ? (
              <div>
                {" "}
                <div className="d-flex justify-content-start">
                  {/* singleQuestion */}
                  <Link
                    to={`/questions/${singleQuestionId}/edit`}
                    style={{ textDecoration: `none` }}
                  >
                    <Button
                      variant="outline-danger"
                      size="lg"
                      style={{ textAlign: "center" }}
                    >
                      Edit Question
                    </Button>
                  </Link>
                </div>
                {qaVersions.map((eachVersion, idx) => (
                  <Stack gap={3} key={uuidv4()}>
                    <Card>
                      <Card.Body
                        style={{ fontSize: "20px" }}
                        className="d-flex justify-content-between"
                      >
                        <div>Unique ID: {eachVersion.id}</div>

                        <Button
                          variant="secondary"
                          size="md"
                          style={{ textAlign: "center" }}
                          onClick={() => {
                            handleDelete(eachVersion.id);

                            if (qaVersions.length > 1) {
                              if (idx === 0) {
                                navigate(`/questions/${qaVersions[1].id}`);
                              }
                            } else {
                              navigate(`/questions`);
                            }
                          }}
                        >
                          Delete Version
                        </Button>
                      </Card.Body>

                      <Card.Body
                        className="mb-2 text-center"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Question {qaVersions[0].displayId}:{" "}
                        {eachVersion.question}
                      </Card.Body>
                      <Stack gap={3} className="mx-auto" direction="horizontal">
                        {eachVersion.questionImage
                          ? eachVersion.questionImage.map((image, index) => (
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
                                  Figure:{index + 1}
                                </Card.Subtitle>
                              </Card>
                            ))
                          : null}
                      </Stack>

                      <Stack gap={10}>
                        <Table size="sm" borderless>
                          <thead>
                            <tr>
                              <th>Options</th>
                              <th>Responses</th>
                            </tr>
                          </thead>
                          <tbody>
                            {eachVersion.answerOptions
                              ? eachVersion.answerOptions.map((ans, index) => (
                                  <tr key={uuidv4()}>
                                    <td>
                                      <Button
                                        // gap={3}
                                        variant={
                                          ans === eachVersion.correctAnswer
                                            ? "success"
                                            : "danger"
                                        }
                                      >
                                        {ans}
                                      </Button>
                                    </td>
                                    <td>
                                      <OverlayTrigger
                                        placement="left"
                                        overlay={
                                          <Tooltip id={`tooltip-left`}>
                                            {`${
                                              responseData(eachVersion.id, ans)
                                                ? responseData(
                                                    eachVersion.id,
                                                    ans
                                                  )
                                                : "0"
                                            }%`}
                                          </Tooltip>
                                        }
                                      >
                                        <ProgressBar
                                          variant={
                                            ans === eachVersion.correctAnswer
                                              ? "success"
                                              : "danger"
                                          }
                                          style={{
                                            height: "30px",
                                          }}
                                          now={
                                            responseData(eachVersion.id, ans) ||
                                            responseData(eachVersion.id, ans) ==
                                              0
                                              ? responseData(
                                                  eachVersion.id,
                                                  ans
                                                )
                                              : 0
                                          }
                                          label={`${
                                            responseData(eachVersion.id, ans)
                                              ? responseData(
                                                  eachVersion.id,
                                                  ans
                                                )
                                              : "0"
                                          }%`}
                                        />
                                      </OverlayTrigger>
                                    </td>
                                  </tr>
                                ))
                              : null}
                          </tbody>
                        </Table>
                      </Stack>
                    </Card>

                    <Stack gap={3}>
                      <Stack gap={3}>
                        <Card>
                          <Card.Body
                            className="m-2 text-center"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            Explanation: {eachVersion.explanation}
                          </Card.Body>

                          <Stack
                            gap={3}
                            className="mx-auto"
                            direction="horizontal"
                          >
                            {eachVersion.explanationImage
                              ? eachVersion.explanationImage.map(
                                  (image, index) => (
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
                                        Figure:{index + 1}
                                      </Card.Subtitle>
                                    </Card>
                                  )
                                )
                              : null}
                          </Stack>
                          <Stack gap={3}>
                            <Card
                              gap={3}
                              className="mb-2 text-decoration-none "
                            >
                              <Card.Header>References</Card.Header>
                              {eachVersion.explanationLinks
                                ? eachVersion.explanationLinks.map(
                                    (sourcelink, index) => (
                                      <Card
                                        key={uuidv4()}
                                        className="m-2 text-decoration-none"
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
                                    )
                                  )
                                : null}
                            </Card>
                          </Stack>
                        </Card>
                      </Stack>
                    </Stack>
                  </Stack>
                ))}{" "}
              </div>
            ) : (
              <>
                {/* {" "}
                <Link to={`/questions`} style={{ textDecoration: `none` }}>
                  <Button
                    variant="outline-danger"
                    size="lg"
                    style={{ textAlign: "center" }}
                  >
                    Navigate to All Questions
                  </Button>
                </Link> */}
              </>
            )}
          </div>
        </Stack>
      )}
    </div>
  );
};

export default SingleQAadmin;
