import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleQuestion,
  fetchQAVersions,
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
import { v4 as uuidv4 } from "uuid";

const SingleQAadmin = () => {
  console.log("HLLO HEELLO HEELLO");
  const { singleQuestionId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    dispatch(fetchQAVersions(singleQuestionId));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const qaVersions = useSelector((state) => state.SingleQuestion.qaAllVersions);

  const handleDelete = () => {
    dispatch(deleteSingleQuestion(id));
  };

  return (
    <div>
      {loading ? (
        <ProgressBar animated now={100} />
      ) : (
        <Stack gap={3} className="p-3">
          <div style={{ fontSize: "20px", textAlign: "center" }}>
            singleQuestion
            <Link
              to={`/questions/${singleQuestionId}/edit`}
              style={{ textDecoration: `none` }}
            >
              <Button variant="danger" size="lg">
                Edit
              </Button>
            </Link>
          </div>
          <div>
            {qaVersions && qaVersions?.length ? (
              qaVersions.map((eachVersion, idx) => (
                <Stack gap={3} key={uuidv4()}>
                  <Card>
                    <Card.Body
                      style={{ fontSize: "20px", textAlign: "center" }}
                    >
                      Question {qaVersions[0].displayId} {"\n"}
                      Unique ID {eachVersion.id}
                    </Card.Body>
                    <Card.Body
                      className="mb-2 text-center"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
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
                      <Stack
                        direction="horizontal"
                        gap={3}
                        className=" mx-auto"
                      >
                        {eachVersion.answerOptions
                          ? eachVersion.answerOptions.map((ans, index) => (
                              <Button
                                key={uuidv4()}
                                variant={
                                  ans === eachVersion.correctAnswer
                                    ? "success"
                                    : "danger"
                                }
                              >
                                {ans}
                              </Button>
                            ))
                          : null}
                      </Stack>
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
                          <Card gap={3} className="mb-2 text-decoration-none ">
                            <Card.Header>References</Card.Header>
                            {eachVersion.explanationLinks
                              ? eachVersion.explanationLinks.map(
                                  (sourcelink, index) => (
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
                                  )
                                )
                              : null}
                          </Card>
                        </Stack>
                      </Card>
                    </Stack>
                  </Stack>
                </Stack>
              ))
            ) : (
              <></>
            )}
          </div>
        </Stack>
      )}
    </div>
  );
};

export default SingleQAadmin;
