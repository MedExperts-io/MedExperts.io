import React, { useEffect, useState } from "react";
import {
  Accordion,
  Breadcrumb,
  Button,
  Card,
  Container,
  ProgressBar,
  Stack,
  Table,
  Row,
  Col,
  Tabs,
  Tab,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap/";
import ReactHtmlParser from "react-html-parser";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { deleteSingleQuestion, fetchQAVersions } from "./singleQuestionSlice";

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

  const newestVersion = qaVersions[0];
  const allOtherVersions = qaVersions.slice(1);

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
    <Container fluid>
      {loading ? (
        <ProgressBar animated now={100} />
      ) : (
        <Stack gap={3} className="p-3">
          <div>
            {qaVersions && qaVersions?.length ? (
              <div>
                <Breadcrumb>
                  <Breadcrumb.Item
                    href="/questions"
                    id="breadcrumb"
                    style={{
                      textDecorationLine: "underline",
                    }}
                  >
                    Back
                  </Breadcrumb.Item>
                  <Breadcrumb.Item id="breadcrumb" active>
                    Question {qaVersions[0].displayId}
                  </Breadcrumb.Item>
                </Breadcrumb>
                {qaVersions.length === 1 ? (
                  qaVersions.map((eachVersion, idx) => (
                    <Stack gap={3} key={uuidv4()}>
                      <Card className="mb-4 mx-auto" style={{ width: "100%" }}>
                        <Card.Header
                          style={{ fontSize: "75%", color: "red" }}
                          id="no-border"
                          className="d-flex justify-content-end"
                        >
                          Unique ID: {eachVersion.id}
                        </Card.Header>

                        <Card.Header
                          id="no-border"
                          className="text-center "
                          style={{
                            fontSize: "100%",
                            textAlign: "center",
                          }}
                        >
                          {eachVersion.question}
                        </Card.Header>
                        <Card.Header className="d-flex justify-content-end">
                          <Button size="small" variant="link">
                            <Link
                              to={`/questions/${singleQuestionId}/edit`}
                              style={{ textDecoration: `none` }}
                            >
                              {" "}
                              <EditIcon />
                              Edit Question{" "}
                            </Link>
                          </Button>

                          {/* <---------------End edit q btn----------------> */}
                          <Button
                            variant="link"
                            size="small"
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
                            {" "}
                            <DeleteIcon />
                            Delete Version
                          </Button>
                        </Card.Header>
                        <Card.Body>
                          {/* <------------------Edit Q Btn---------------> */}
                        </Card.Body>
                        <Stack
                          gap={3}
                          className="mx-auto"
                          direction="horizontal"
                        >
                          {eachVersion.questionImage
                            ? eachVersion.questionImage.map((image, index) => (
                                <Card gap={3} key={uuidv4()} id="no-border">
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

                        {/* <Stack gap={3}> */}
                        <Card className="mx-auto" id="no-border">
                          <Table size="sm" borderless>
                            <thead>
                              <tr>
                                <th style={{ paddingRight: "20px" }}>
                                  Options
                                </th>

                                <th style={{ paddingLeft: "20px" }}>
                                  Responses
                                </th>
                              </tr>
                            </thead>
                            <tbody>
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
                              {eachVersion.answerOptions
                                ? eachVersion.answerOptions.map(
                                    (ans, index) => (
                                      <tr key={uuidv4()}>
                                        <td style={{ paddingRight: "20px" }}>
                                          <Button
                                            variant={
                                              ans === eachVersion.correctAnswer
                                                ? "success"
                                                : "danger"
                                            }
                                          >
                                            {ans}
                                          </Button>
                                        </td>

                                        <td style={{ paddingLeft: "20px" }}>
                                          <OverlayTrigger
                                            placement="right"
                                            overlay={
                                              <Tooltip id={`tooltip-right`}>
                                                {`${
                                                  responseData(
                                                    eachVersion.id,
                                                    ans
                                                  )
                                                    ? responseData(
                                                        eachVersion.id,
                                                        ans
                                                      )
                                                    : "0"
                                                }%`}
                                              </Tooltip>
                                            }
                                          >
                                            {
                                              <ProgressBar
                                                variant={
                                                  ans ===
                                                  eachVersion.correctAnswer
                                                    ? "success"
                                                    : "danger"
                                                }
                                                style={{
                                                  height: "38px",
                                                  minWidth: "200%",
                                                }}
                                                now={
                                                  responseData(
                                                    eachVersion.id,
                                                    ans
                                                  ) ||
                                                  responseData(
                                                    eachVersion.id,
                                                    ans
                                                  ) == 0
                                                    ? responseData(
                                                        eachVersion.id,
                                                        ans
                                                      )
                                                    : 0
                                                }
                                                label={`${
                                                  responseData(
                                                    eachVersion.id,
                                                    ans
                                                  )
                                                    ? responseData(
                                                        eachVersion.id,
                                                        ans
                                                      )
                                                    : "0"
                                                }%`}
                                              />
                                            }
                                          </OverlayTrigger>
                                        </td>
                                      </tr>
                                    )
                                  )
                                : null}
                            </tbody>
                          </Table>
                        </Card>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              View Explanation
                            </Accordion.Header>
                            <Accordion.Body>
                              {eachVersion.explanation}
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>View References</Accordion.Header>
                            <Accordion.Body>
                              {eachVersion.explanationLinks.length ? (
                                eachVersion.explanationLinks.map(
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
                              ) : (
                                <p>
                                  No references available for this question.
                                </p>
                              )}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        {/* </Stack> */}
                      </Card>
                    </Stack>
                  ))
                ) : (
                  // <---------------if more than 1 version-------------->

                  <Tabs
                    defaultActiveKey={`${newestVersion.id}`}
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab
                      eventKey={`${newestVersion.id}`}
                      title="Current Version"
                    >
                      <Stack gap={3} key={uuidv4()}>
                        <Card
                          className="mb-4 mx-auto"
                          style={{ width: "100%" }}
                        >
                          <Card.Header
                            style={{ fontSize: "75%", color: "red" }}
                            id="no-border"
                            className="d-flex justify-content-end"
                          >
                            Unique ID: {newestVersion.id}
                          </Card.Header>

                          <Card.Header
                            id="no-border"
                            className="text-center"
                            style={{
                              fontSize: "100%",
                              textAlign: "center",
                            }}
                          >
                            {newestVersion.question}
                          </Card.Header>
                          <Card.Header className="d-flex justify-content-end">
                            <Button size="small" variant="link">
                              <Link
                                to={`/questions/${singleQuestionId}/edit`}
                                style={{ textDecoration: `none` }}
                              >
                                {" "}
                                <EditIcon />
                                Edit Question{" "}
                              </Link>
                            </Button>

                            {/* <---------------End edit q btn----------------> */}
                            <Button
                              variant="link"
                              size="small"
                              onClick={() => {
                                handleDelete(newestVersion.id);
                                if (qaVersions.length > 1) {
                                  // if (idx === 0) {
                                  navigate(`/questions/${qaVersions[1].id}`);
                                  // }
                                } else {
                                  navigate(`/questions`);
                                }
                              }}
                            >
                              {" "}
                              <DeleteIcon />
                              Delete Version
                            </Button>
                          </Card.Header>
                          <Card.Body></Card.Body>
                          <Stack
                            gap={3}
                            className="mx-auto"
                            direction="horizontal"
                          >
                            {newestVersion.questionImage
                              ? newestVersion.questionImage.map(
                                  (image, index) => (
                                    <Card gap={3} key={uuidv4()} id="no-border">
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
                            <Card className="mx-auto" id="no-border">
                              <Table size="sm" borderless>
                                <thead>
                                  <tr className="text-center">
                                    <th>Options</th>
                                    <th>Responses</th>
                                  </tr>
                                </thead>
                                <tbody>
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
                                  {newestVersion.answerOptions
                                    ? newestVersion.answerOptions.map(
                                        (ans, index) => (
                                          <tr key={uuidv4()}>
                                            <td>
                                              <Button
                                                variant={
                                                  ans ===
                                                  newestVersion.correctAnswer
                                                    ? "success"
                                                    : "danger"
                                                }
                                              >
                                                {ans}
                                              </Button>
                                            </td>
                                            <td>
                                              <OverlayTrigger
                                                placement="right"
                                                overlay={
                                                  <Tooltip id={`tooltip-right`}>
                                                    {`${
                                                      responseData(
                                                        newestVersion.id,
                                                        ans
                                                      )
                                                        ? responseData(
                                                            newestVersion.id,
                                                            ans
                                                          )
                                                        : "0"
                                                    }%`}
                                                  </Tooltip>
                                                }
                                              >
                                                {
                                                  <ProgressBar
                                                    variant={
                                                      ans ===
                                                      newestVersion.correctAnswer
                                                        ? "success"
                                                        : "danger"
                                                    }
                                                    style={{
                                                      height: "38px",
                                                      minWidth: "200%",
                                                    }}
                                                    now={
                                                      responseData(
                                                        newestVersion.id,
                                                        ans
                                                      ) ||
                                                      responseData(
                                                        newestVersion.id,
                                                        ans
                                                      ) == 0
                                                        ? responseData(
                                                            newestVersion.id,
                                                            ans
                                                          )
                                                        : 0
                                                    }
                                                    label={`${
                                                      responseData(
                                                        newestVersion.id,
                                                        ans
                                                      )
                                                        ? responseData(
                                                            newestVersion.id,
                                                            ans
                                                          )
                                                        : "0"
                                                    }%`}
                                                  />
                                                }
                                              </OverlayTrigger>
                                            </td>
                                          </tr>
                                        )
                                      )
                                    : null}
                                </tbody>
                              </Table>{" "}
                            </Card>
                            <Accordion>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  View Explanation
                                </Accordion.Header>
                                <Accordion.Body>
                                  {newestVersion.explanation}
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                  View References
                                </Accordion.Header>
                                <Accordion.Body>
                                  {newestVersion.explanationLinks.length ? (
                                    newestVersion.explanationLinks.map(
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
                                  ) : (
                                    <p>
                                      No references available for this question.
                                    </p>
                                  )}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </Stack>
                        </Card>
                      </Stack>
                    </Tab>
                    {/* <----------------------End of V1-------------------> */}

                    {allOtherVersions.map((eachVersion, idx) => (
                      <Tab
                        eventKey={`${eachVersion.id}`}
                        key={uuidv4()}
                        title={`Version ${allOtherVersions.length - idx} `}
                      >
                        <Card className="mb-4">
                          <Card.Header
                            style={{ fontSize: "75%", color: "red" }}
                            id="no-border"
                            className="d-flex justify-content-end"
                          >
                            Unique ID: {eachVersion.id}
                          </Card.Header>

                          <Card.Header
                            id="no-border"
                            className="text-center"
                            style={{
                              fontSize: "100%",
                              textAlign: "center",
                            }}
                          >
                            {eachVersion.question}
                          </Card.Header>
                          <Card.Header className="d-flex justify-content-end">
                            <Button
                              variant="link"
                              size="small"
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
                              <DeleteIcon />
                              Delete Version
                            </Button>
                          </Card.Header>
                          <Card.Body></Card.Body>
                          <Stack
                            gap={3}
                            className="mx-auto"
                            direction="horizontal"
                          >
                            {eachVersion.questionImage
                              ? eachVersion.questionImage.map(
                                  (image, index) => (
                                    <Card gap={3} key={uuidv4()} id="no-border">
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

                          <Stack gap={3}>
                            <Card className="mx-auto" id="no-border">
                              <Table size="sm" borderless>
                                <thead>
                                  <tr className="text-center">
                                    <th>Options</th>
                                    <th>Responses</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {eachVersion.answerOptions
                                    ? eachVersion.answerOptions.map(
                                        (ans, index) => (
                                          <tr key={uuidv4()}>
                                            <td>
                                              <Button
                                                // gap={3}
                                                variant={
                                                  ans ===
                                                  eachVersion.correctAnswer
                                                    ? "success"
                                                    : "danger"
                                                }
                                              >
                                                {ans}
                                              </Button>
                                            </td>
                                            <td>
                                              <OverlayTrigger
                                                placement="right"
                                                overlay={
                                                  <Tooltip id={`tooltip-right`}>
                                                    {`${
                                                      responseData(
                                                        eachVersion.id,
                                                        ans
                                                      )
                                                        ? responseData(
                                                            eachVersion.id,
                                                            ans
                                                          )
                                                        : "0"
                                                    }%`}
                                                  </Tooltip>
                                                }
                                              >
                                                {
                                                  <ProgressBar
                                                    variant={
                                                      ans ===
                                                      eachVersion.correctAnswer
                                                        ? "success"
                                                        : "danger"
                                                    }
                                                    style={{
                                                      height: "38px",
                                                      minWidth: "200%",
                                                    }}
                                                    now={
                                                      responseData(
                                                        eachVersion.id,
                                                        ans
                                                      ) ||
                                                      responseData(
                                                        eachVersion.id,
                                                        ans
                                                      ) == 0
                                                        ? responseData(
                                                            eachVersion.id,
                                                            ans
                                                          )
                                                        : 0
                                                    }
                                                    label={`${
                                                      responseData(
                                                        eachVersion.id,
                                                        ans
                                                      )
                                                        ? responseData(
                                                            eachVersion.id,
                                                            ans
                                                          )
                                                        : "0"
                                                    }%`}
                                                  />
                                                }
                                              </OverlayTrigger>
                                            </td>
                                          </tr>
                                        )
                                      )
                                    : null}
                                </tbody>
                              </Table>{" "}
                            </Card>
                            <Accordion>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  View Explanation
                                </Accordion.Header>
                                <Accordion.Body>
                                  {eachVersion.explanation}
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                  View References
                                </Accordion.Header>
                                <Accordion.Body>
                                  {eachVersion.explanationLinks.length ? (
                                    eachVersion.explanationLinks.map(
                                      (sourcelink, index) => (
                                        // {explanationLinks.length ? (
                                        //   explanationLinks.map((sourcelink, index) => (
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
                                  ) : (
                                    <p>
                                      No references available for this question.
                                    </p>
                                  )}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </Stack>
                        </Card>
                      </Tab>
                    ))}
                  </Tabs>
                )}
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
    </Container>
  );
};

export default SingleQAadmin;
