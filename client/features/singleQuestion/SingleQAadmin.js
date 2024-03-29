import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  Breadcrumb,
  Button,
  Card,
  Container,
  Modal,
  ProgressBar,
  Stack,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap/";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { deleteSingleQuestion, fetchQAVersions } from "./singleQuestionSlice";

const SingleQAadmin = () => {
  const { singleQuestionId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(newestVersion?.id);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    dispatch(fetchQAVersions(singleQuestionId));
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
        aVersion.user_questions?.map((eachUserInput) => {
          totalResponses++;
          if (eachUserInput.userInput == ansOption) {
            numOfPicks++;
          }
        });
      }
    });
    if (numOfPicks !== 0) {
      return Math.round((numOfPicks * 100) / totalResponses);
    } else {
      return null;
    }
  };

  //------------ Delete modal details
  const [deleteId, setDeleteId] = useState(null);
  const [deletePosition, setDeletePosition] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = (id, position) => {
    //Step2: handleShow sets state with provided id & position & shows modal
    setDeleteId(id);
    setDeletePosition(position);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleDelete = (id, position) => {
    //Step4: Based on position, delete dispatched & navigation called.
    dispatch(deleteSingleQuestion(id));
    if (position === "only") {
      navigate(`/questions`);
    } else if (position === "newest") {
      setKey();
      navigate(`/questions/${qaVersions[1].id}`);
    } else if (position === "older") {
      setKey(newestVersion?.id);
    }
    handleClose(); //Step5: Modal closed
  };
  //----------- end Delete modal details

  return (
    <Container fluid>
      {loading ? (
        <ProgressBar animated now={100} />
      ) : (
        <Stack gap={3} className="p-3">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Delete version with unique ID {deleteId}?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Once you delete, the previous version of this question will be
              activated. If no other versions exist, you will be redirected to
              the Questions page.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  //Step3: Final delete button clicked and handleDelete function called with deleteId and deletePosition from state
                  handleDelete(deleteId, deletePosition);
                }}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
          <div>
            {qaVersions && qaVersions?.length ? (
              <div>
                <Breadcrumb>
                  <Breadcrumb.Item href="/questions" id="breadcrumb">
                    All Questions
                  </Breadcrumb.Item>
                  <Breadcrumb.Item id="breadcrumb" active>
                    Question {qaVersions[0].displayId}
                  </Breadcrumb.Item>
                </Breadcrumb>
                {qaVersions.length === 1 ? (
                  qaVersions.map((eachVersion, idx) => (
                    <Card
                      className="mb-4 mx-auto"
                      key={uuidv4()}
                      style={{ width: "100%" }}
                    >
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
                        Question {qaVersions[0].displayId}:{" "}
                        {eachVersion.question}
                      </Card.Header>
                      <Card.Header
                        id="no-border"
                        className="d-flex justify-content-center"
                      >
                        <Stack
                          direction="horizontal"
                          style={{ paddingTop: "10px" }}
                        >
                          {eachVersion.questionImage
                            ? eachVersion.questionImage.map((image, index) => (
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
                                            eachVersion.questionImageAltText
                                              ? eachVersion
                                                  .questionImageAltText[index]
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
                      </Card.Header>
                      <Card.Header
                        className="d-flex justify-content-end"
                        style={{ paddingTop: "0" }}
                      >
                        <Button tabIndex={-1} size="small" variant="link">
                          <Link
                            to={`/questions/${singleQuestionId}/edit`}
                            style={{ color: "#1362d8", textDecoration: `none` }}
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
                          style={{ color: "#1362d8" }}
                          onClick={() => handleShow(eachVersion.id, "only")} //Step1: Delete icon clicked and specific id & position passed to handleShow function
                        >
                          {" "}
                          <DeleteIcon />
                          Delete Version
                        </Button>
                        {/* <------------------End delete q Btn---------------> */}
                      </Card.Header>

                      <Stack>
                        <Card
                          className="mx-auto"
                          id="no-border"
                          style={{ minWidth: "50%" }}
                        >
                          <Table responsive="sm" borderless>
                            <thead>
                              <tr>
                                <th>Answer Options</th>
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
                              {eachVersion.answerOptions
                                ? eachVersion.answerOptions.map(
                                    (ans, index) => (
                                      <tr key={uuidv4()}>
                                        <td>
                                          <Button
                                            tabIndex="-1"
                                            style={{ margin: "0" }}
                                            variant={
                                              ans === eachVersion.correctAnswer
                                                ? "outline-success"
                                                : "outline-danger"
                                            }
                                          >
                                            {ans}
                                          </Button>
                                        </td>

                                        <td>
                                          <span className="visually-hidden">{`${
                                            responseData(eachVersion.id, ans)
                                              ? responseData(
                                                  eachVersion.id,
                                                  ans
                                                )
                                              : 0
                                          }%`}</span>
                                          {
                                            <ProgressBar
                                              // title="Progress bar for responses"
                                              // aria-label="Progress bar for responses"
                                              // name="Progress bar for responses"
                                              aria-hidden="true"
                                              variant={
                                                ans ===
                                                eachVersion.correctAnswer
                                                  ? "success"
                                                  : "danger"
                                              }
                                              style={{
                                                height: "38px",
                                                minWidth: "100%",
                                              }}
                                              now={
                                                // responseData(
                                                //   eachVersion.id,
                                                //   ans
                                                // ) ||
                                                // responseData(
                                                //   eachVersion.id,
                                                //   ans
                                                // ) == "0"
                                                //   ?
                                                //     responseData(
                                                //       eachVersion.id,
                                                //       ans
                                                //     )
                                                //   : 100
                                                100
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
                                                // : 0
                                              }%`}
                                            />
                                          }
                                        </td>
                                      </tr>
                                    )
                                  )
                                : null}
                            </tbody>
                          </Table>
                        </Card>{" "}
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              View Explanation
                            </Accordion.Header>
                            <Accordion.Body>
                              {eachVersion.explanation}
                              <Stack
                                direction="horizontal"
                                style={{ paddingTop: "10px" }}
                              >
                                {eachVersion.explanationImage
                                  ? eachVersion.explanationImage.map(
                                      (image, index) => (
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
                                                    eachVersion.explanationImageAltText
                                                      ? eachVersion
                                                          .explanationImageAltText[
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
                                      )
                                    )
                                  : null}
                              </Stack>
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
                                  )
                                )
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
                    </Card>
                  ))
                ) : (
                  // <---------------if more than 1 version-------------->

                  <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
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
                            Question {newestVersion.displayId}:{" "}
                            {newestVersion.question}
                          </Card.Header>
                          <Card.Header
                            id="no-border"
                            className="d-flex justify-content-center"
                          >
                            <Stack
                              direction="horizontal"
                              style={{ paddingTop: "10px" }}
                            >
                              {newestVersion.questionImage
                                ? newestVersion.questionImage.map(
                                    (image, index) => (
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
                                                  newestVersion.questionImageAltText
                                                    ? newestVersion
                                                        .questionImageAltText[
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
                                              style={{
                                                fontSize: "10px",
                                                paddingLeft: "10px",
                                              }}
                                            >
                                              Figure:{index + 1}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    )
                                  )
                                : null}
                            </Stack>
                          </Card.Header>
                          <Card.Header className="d-flex justify-content-end">
                            <Button tabIndex={-1} size="small" variant="link">
                              <Link
                                to={`/questions/${singleQuestionId}/edit`}
                                style={{
                                  color: "#1362d8",
                                  textDecoration: `none`,
                                }}
                              >
                                {" "}
                                <EditIcon style={{ color: "#1362d8" }} />
                                Edit Question{" "}
                              </Link>
                            </Button>

                            {/* <---------------End edit q btn----------------> */}

                            <Button
                              variant="link"
                              size="small"
                              style={{
                                color: "#1362d8",
                                textDecoration: `none`,
                              }}
                              onClick={() =>
                                handleShow(newestVersion.id, "newest")
                              } //Step1: Delete icon clicked and specific id & position passed to handleShow function
                            >
                              {" "}
                              <DeleteIcon />
                              Delete Version
                            </Button>
                            {/* <------------------End delete q Btn---------------> */}
                          </Card.Header>

                          <Stack>
                            <Card
                              className="mx-auto"
                              id="no-border"
                              style={{ minWidth: "50%" }}
                            >
                              <Table responsive="sm" borderless>
                                <thead>
                                  <tr>
                                    <th>Answer Options</th>
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
                                                tabIndex="-1"
                                                style={{ margin: "0" }}
                                                variant={
                                                  ans ===
                                                  newestVersion.correctAnswer
                                                    ? "outline-success"
                                                    : "outline-danger"
                                                }
                                              >
                                                {ans}
                                              </Button>
                                            </td>
                                            <td>
                                              <span className="visually-hidden">{`${
                                                responseData(
                                                  newestVersion.id,
                                                  ans
                                                )
                                                  ? responseData(
                                                      newestVersion.id,
                                                      ans
                                                    )
                                                  : 0
                                              }%`}</span>
                                              {
                                                <ProgressBar
                                                  // title="Progress bar for responses"
                                                  // aria-label="Progress bar for responses"
                                                  // name="Progress bar for responses"
                                                  aria-hidden="true"
                                                  variant={
                                                    ans ===
                                                    newestVersion.correctAnswer
                                                      ? "success"
                                                      : "danger"
                                                  }
                                                  style={{
                                                    height: "38px",
                                                    minWidth: "100%",
                                                  }}
                                                  now={
                                                    // responseData(
                                                    //   newestVersion.id,
                                                    //   ans
                                                    // ) ||
                                                    // responseData(
                                                    //   newestVersion.id,
                                                    //   ans
                                                    // ) == "0"
                                                    //   ?
                                                    //     responseData(
                                                    //       newestVersion.id,
                                                    //       ans
                                                    //     )
                                                    //   : 100
                                                    100
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
                                                    // : 0
                                                  }%`}
                                                />
                                              }
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
                                  <Stack
                                    direction="horizontal"
                                    style={{ paddingTop: "10px" }}
                                  >
                                    {newestVersion.explanationImage
                                      ? newestVersion.explanationImage.map(
                                          (image, index) => (
                                            <Table
                                              responsive="sm"
                                              size="sm"
                                              key={uuidv4()}
                                              borderless
                                              style={{ paddingBottom: "0px" }}
                                            >
                                              <thead>
                                                <tr>
                                                  <th
                                                    style={{ padding: "0px" }}
                                                  >
                                                    {" "}
                                                    <img
                                                      alt={
                                                        newestVersion.explanationImageAltText
                                                          ? newestVersion
                                                              .explanationImageAltText[
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
                                          )
                                        )
                                      : null}
                                  </Stack>
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
                                      )
                                    )
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
                            Question {eachVersion.displayId}:{" "}
                            {eachVersion.question}
                          </Card.Header>
                          <Card.Header
                            id="no-border"
                            className="d-flex justify-content-center"
                          >
                            <Stack
                              direction="horizontal"
                              style={{ paddingTop: "10px" }}
                            >
                              {eachVersion.questionImage
                                ? eachVersion.questionImage.map(
                                    (image, index) => (
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
                                                  eachVersion.questionImageAltText
                                                    ? eachVersion
                                                        .questionImageAltText[
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
                                    )
                                  )
                                : null}
                            </Stack>
                          </Card.Header>
                          <Card.Header className="d-flex justify-content-end">
                            <Button
                              variant="link"
                              size="small"
                              onClick={() =>
                                handleShow(eachVersion.id, "older")
                              } //Step1: Delete icon clicked and specific id & position passed to handleShow function
                            >
                              {" "}
                              <DeleteIcon />
                              Delete Version
                            </Button>
                            {/* <------------------End delete q Btn---------------> */}
                          </Card.Header>

                          <Stack>
                            <Card
                              className="mx-auto"
                              id="no-border"
                              style={{ minWidth: "50%" }}
                            >
                              <Table responsive="sm" borderless>
                                <thead>
                                  <tr>
                                    <th>Answer Options</th>
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
                                  {eachVersion.answerOptions
                                    ? eachVersion.answerOptions.map(
                                        (ans, index) => (
                                          <tr key={uuidv4()}>
                                            <td>
                                              <Button
                                                tabIndex="-1"
                                                style={{ margin: "0" }}
                                                variant={
                                                  ans ===
                                                  eachVersion.correctAnswer
                                                    ? "outline-success"
                                                    : "outline-danger"
                                                }
                                              >
                                                {ans}
                                              </Button>
                                            </td>
                                            <td>
                                              <span className="visually-hidden">{`${
                                                responseData(
                                                  eachVersion.id,
                                                  ans
                                                )
                                                  ? responseData(
                                                      eachVersion.id,
                                                      ans
                                                    )
                                                  : 0
                                              }%`}</span>
                                              {
                                                <ProgressBar
                                                  // title="Progress bar for responses"
                                                  // aria-label="Progress bar for responses"
                                                  // name="Progress bar for responses"
                                                  aria-hidden="true"
                                                  variant={
                                                    ans ===
                                                    eachVersion.correctAnswer
                                                      ? "success"
                                                      : "danger"
                                                  }
                                                  style={{
                                                    height: "38px",
                                                    minWidth: "100%",
                                                  }}
                                                  now={
                                                    // responseData(
                                                    //   eachVersion.id,
                                                    //   ans
                                                    // ) ||
                                                    // responseData(
                                                    //   eachVersion.id,
                                                    //   ans
                                                    // ) == "0"
                                                    //   ?
                                                    //     responseData(
                                                    //       eachVersion.id,
                                                    //       ans
                                                    //     )
                                                    //   : 100
                                                    100
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
                                                    // : 0
                                                  }%`}
                                                />
                                              }
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
                                  <Stack
                                    direction="horizontal"
                                    style={{ paddingTop: "10px" }}
                                  >
                                    {eachVersion.explanationImage
                                      ? eachVersion.explanationImage.map(
                                          (image, index) => (
                                            <Table
                                              responsive="sm"
                                              size="sm"
                                              key={uuidv4()}
                                              borderless
                                              style={{ paddingBottom: "0px" }}
                                            >
                                              <thead>
                                                <tr>
                                                  <th
                                                    style={{ padding: "0px" }}
                                                  >
                                                    {" "}
                                                    <img
                                                      alt={
                                                        eachVersion.explanationImageAltText
                                                          ? eachVersion
                                                              .explanationImageAltText[
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
                                                    className=" text-center"
                                                    style={{ fontSize: "10px" }}
                                                  >
                                                    Figure:{index + 1}
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </Table>
                                          )
                                        )
                                      : null}
                                  </Stack>
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
                                      )
                                    )
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
