import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Container, Card, Button, Modal, InputGroup, Toast, ToastContainer, Table } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleQuestion, fetchQAVersions, editQuestion } from "./singleQuestionSlice";
import { v4 as uuidv4 } from "uuid";
import LoadingScreen from "../loading/LoadingScreen";

const EditQA = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { singleQuestionId } = useParams();
  useEffect(() => {
    dispatch(fetchQAVersions(singleQuestionId));
  }, []);

  const [validated, setValidated] = useState(false);
  const qaVersions = useSelector((state) => state.SingleQuestion.qaAllVersions);

  console.log("qaVersions", qaVersions);
  // const qa = qaVersions[0];
  // console.log("qa Object", qa);

  //const { id, question, questionImage, answerOptions, correctAnswer, explanation, explanationImage, explanationLinks, category, level, ancestorId } = qaVersions[0];

  // const [newQuestion, setNewQuestion] = useState(question);

  // const [newSingleQuestionImage, setNewSingleQuestionImage] = useState("");
  // const [newQuestionImage, setNewQuestionImage] = useState(questionImage);

  // const [newSingleOption, setNewSingleOption] = useState("");
  // const [newAnswerOptions, setNewAnswerOptions] = useState(answerOptions);

  // const [newCorrectAnswer, setNewCorrectAnswer] = useState(correctAnswer);
  // const [newExplanation, setNewExplanation] = useState(explanation);

  // const [newSingleExpImage, setNewSingleExpImage] = useState("");
  // const [newExplanationImage, setNewExplanationImage] = useState(explanationImage);

  // const [newSingleLink, setNewSingleLink] = useState("");
  // const [newSource, setNewSource] = useState("");
  // const [newExplanationLinks, setNewExplanationLinks] = useState(explanationLinks);

  // const [newCategory, setNewCategory] = useState(category);
  // const [newLevel, setNewLevel] = useState(level);
  // const [showToast, setShowToast] = useState(false);
  // const [showUpdate, setShowUpdate] = useState("");

  // modal details
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setValidated(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  // end modal details

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      editQuestion({
        id,
        question: newQuestion.trim(),
        questionImage: newQuestionImage,
        answerOptions: newAnswerOptions,
        correctAnswer: newCorrectAnswer,
        explanation: newExplanation.trim(),
        explanationImage: newExplanationImage,
        explanationLinks: newExplanationLinks,
        category: newCategory,
        level: newLevel,
        ancestorId: ancestorId || id,
      })
    );
    setValidated(true); //??????
  };

  const clearText = (evt, text) => {
    console.log("EVT TEXT", `${text}`);
    evt.target.value = text;
  };

  const toggleShowToast = () => setShowToast(!showToast);
  console.log("Do we have qaVersions?", qaVersions);

  if (qaVersions && qaVersions.length) {
    return (
      <Container>
        <Row className="p-5">
          {/* <ToastContainer className="p-3" position="middle-end">
            <Toast bg="success" show={showToast} onClose={toggleShowToast} delay={3000} autohide animation={true}>
              <Toast.Header>
                <strong className="me-auto">Saved!</strong>
              </Toast.Header>
              <Toast.Body>{showUpdate}</Toast.Body>
            </Toast>
          </ToastContainer> */}
          <Card border="light" className="p-5 mx-auto" style={{ maxWidth: "800px" }}>
            <Col>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h1>Edit Question</h1>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="question">
                    <Form.Label>
                      <strong className="me-auto">Question</strong>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      defaultValue={qaVersions[0].question}
                      // onChange={(e) => {
                      //   setNewQuestion(e.target.value);
                      // }}
                    />
                  </Form.Group>
                </Row>
              </Form>
            </Col>
          </Card>
        </Row>
      </Container>
    );
  } else {
    return <div>hi, how are ya</div>;
  }
};

export default EditQA;
