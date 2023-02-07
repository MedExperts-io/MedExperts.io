import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Row,
  Col,
  Container,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchQAVersions, editQuestion } from "./singleQuestionSlice";

const EditQA = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const qaVersions = useSelector((state) => state.SingleQuestion.qaAllVersions);
  console.log("qaVersions", qaVersions);
  const {
    id,
    question,
    questionImage,
    answerOptions,
    correctAnswer,
    explanation,
    explanationImage,
    explanationLinks,
    category,
    level,
    ancestorId,
  } = qaVersions[0];

  const [newQuestion, setNewQuestion] = useState(question);
  const [newQuestionImage, setNewQuestionImage] = useState(questionImage);
  const [newSingleOption, setNewSingleOption] = useState("");
  const [newAnswerOptions, setNewAnswerOptions] = useState(answerOptions);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState(correctAnswer);
  const [newExplanation, setNewExplanation] = useState(explanation);
  const [newExplanationImage, setNewExplanationImage] =
    useState(explanationImage);
  const [newExplanationLinks, setNewExplanationLinks] =
    useState(explanationLinks);
  const [newCategory, setNewCategory] = useState(category);
  const [newLevel, setNewLevel] = useState(level);

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
    console.log("ID BEFORE DISPATCH", id);

    dispatch(
      editQuestion({
        question: newQuestion,
        questionImage: newQuestionImage,
        answerOptions: newAnswerOptions,
        correctAnswer: newCorrectAnswer,
        explanation: newExplanation,
        explanationImage: newExplanationImage,
        explanationLinks: newExplanationLinks,
        category: newCategory,
        level: newLevel,
        ancestorId,
      })
    );
    console.log("ID AFTER DISPATCH", id);
    // .then(()=> dispatch(fetchQAVersions(id)))
    setValidated(true);
  };

  return (
    <Container>
      <Row className="p-5">
        <Card
          border="light"
          className="p-5 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h1>Edit Question</h1>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="question">
                  <Form.Label>Question</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={newQuestion}
                    onChange={(e) => {
                      setNewQuestion(e.target.value);
                    }}
                    // onFocus={(e) =>
                    //   (e.target.placeholder = "Enter Your First Name")
                    // }
                    // onBlur={(e) => (e.target.placeholder = userFirstName)}
                  />
                </Form.Group>

                {/* <Form.Group as={Col} controlId="questionImage">
                  <Form.Label>Question Figures</Form.Label>
                  <Form.Control
                    onClick={clearText}
                    type="text"
                    defaultValue={newQuestionImage}
                    onChange={(e) => {
                      setNewQuestionImage(e.target.value);
                    }}
                    onFocus={(e) =>
                      (e.target.placeholder = "Enter Your Last Name")
                    }
                    onBlur={(e) => (e.target.placeholder = userLastName)}
                  />
                </Form.Group> */}
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="answerOptions">
                  <Form.Label>Options</Form.Label>

                  <Form.Control
                    type="text"
                    defaultValue={newSingleOption}
                    onChange={(e) => {
                      setNewSingleOption(e.target.value);
                    }}
                    // onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
                    // onBlur={(e) => (e.target.placeholder = userEmail)}
                  ></Form.Control>

                  
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="correctAnswer">
                  <Form.Label>Answer</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={newCorrectAnswer}
                    onChange={(e) => {
                      setNewCorrectAnswer(e.target.value);
                    }}
                    // onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
                    // onBlur={(e) => (e.target.placeholder = userEmail)}
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="explanation">
                  <Form.Label>Explanation</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={newExplanation}
                    onChange={(e) => {
                      setNewExplanation(e.target.value);
                    }}
                    // onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
                    // onBlur={(e) => (e.target.placeholder = userEmail)}
                  ></Form.Control>
                </Form.Group>
              </Row>

              {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="explanationImage">
                  <Form.Label>Explanation Figures</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={newExplanationImage}
                    onChange={(e) => {
                      setNewExplanationImage(e.target.value);
                    }}
                    // onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
                    // onBlur={(e) => (e.target.placeholder = userEmail)}
                  ></Form.Control>
                </Form.Group>
              </Row> */}

              <Row className="mb-3">
                <Form.Group as={Col} controlId="explanationLinks">
                  <Form.Label>Explanation Links</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={newExplanationLinks}
                    onChange={(e) => {
                      setNewExplanationLinks(e.target.value);
                    }}
                    // onFocus={(e) => (e.target.placeholder = "Enter Your Email")}
                    // onBlur={(e) => (e.target.placeholder = userEmail)}
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    aria-label="default select example"
                    onChange={(e) => {
                      setNewCategory(e.target.value);
                    }}
                  >
                    <option defaultValue> {category}</option>
                    <option value="Asthma">Asthma</option>
                    <option value="Bronchiectasis">Bronchiectasis</option>
                    <option value="Chronic Obstructive Pulmonary Disease">
                      Chronic Obstructive Pulmonary Disease
                    </option>
                    <option value="Critical Care">Critical Care</option>
                    <option value="Infection">Infection</option>
                    <option value="Interstitial Lung Diseases">
                      Interstitial Lung Diseases
                    </option>
                    <option value="Lung Transplant">Lung Transplant</option>
                    <option value="Lung Cancer">Lung Cancer</option>
                    <option value="Mediastinal Disorders">
                      Mediastinal Disorders
                    </option>
                    <option value="Other Pulmonary Diseases">
                      Other Pulmonary Diseases
                    </option>
                    <option value="Pharmacology">Pharmacology</option>
                    <option value="Pleural Diseases">Pleural Diseases</option>
                    <option value="Pulmonary Function Testing">
                      Pulmonary Function Testing
                    </option>
                    <option value="Pulmonary Vascular Disease">
                      Pulmonary Vascular Disease
                    </option>
                    <option value="Sleep">Sleep</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="level">
                  <Form.Label>Level</Form.Label>
                  <Form.Select
                    aria-label="default select example"
                    onChange={(e) => {
                      setNewLevel(e.target.value);
                    }}
                  >
                    <option defaultValue> {level}</option>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Hard">Hard</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <center>
                <Button type="submit" variant="secondary" onClick={handleShow}>
                  Update
                </Button>
              </center>

              <Modal show={show} onHide={handleClose}>
                <Modal.Body>Your changes have been recorded!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Keep Editing
                  </Button>
                  <Button variant="secondary" onClick={() => navigate(`/home`)}>
                    View Question
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </Col>
        </Card>
      </Row>
    </Container>
  );
};

export default EditQA;
