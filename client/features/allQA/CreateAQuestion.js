import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../app/store";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { createAQuestion } from "./allQASlice";

const CreateAQuestion = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [validated, setValidated] = useState(false);
  const answerChoices = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    const question = "What is pi?";
    const correctAnswer = "A long number.";
    const image = event.target.formFileMultiple.value;

    console.log(image);
    dispatch(createAQuestion({ question, correctAnswer, image }));
  };

  return (
    <div className="auto" style={{ margin: "5%" }}>
      <div className="auto">
        <Form onSubmit={handleSubmit} noValidate validated={validated} name="signup">
          <Row className="auto">
            <Form.Group as={Col} controlId="Question">
              <Form.Label label="Question">Question</Form.Label>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control style={{ borderRadius: "10px" }} required type="text" placeholder="Enter first name" />
                  <Form.Control.Feedback type="invalid">Please provide question here.</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            <Form.Group as={Col} controlId="Image Upload">
              <Form.Label label="Image Upload">Image Upload</Form.Label>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control style={{ borderRadius: "10px" }} required type="text" placeholder="Enter last name" />
                  <Form.Control.Feedback type="invalid">Image Upload.</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3" as={Col} controlId="Answer Choices">
              <Form.Label label="Answer Choices">Answer Choices</Form.Label>
              <Form.Select aria-label="Default select example">
                {answerChoices.map((answer) => (
                  <option key={answer} value={answer}>
                    {answer}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="school">
              <Form.Label label="School Affiliation">School Affiliation</Form.Label>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control style={{ borderRadius: "10px" }} type="text" placeholder="Enter school name" />
                  <Form.Control.Feedback type="invalid">Please provide your school affiliation.</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="signupEmail">
              <Form.Label label="Email Address">Email Address</Form.Label>

              <Col sm={12}>
                <InputGroup>
                  <Form.Control style={{ borderRadius: "10px" }} required autoComplete="email" type="email" placeholder="Enter email" />
                  <Form.Control.Feedback type="invalid">Enter email</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Multiple files input example</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Row>

          <div className="d-grid" style={{ marginTop: "15px" }}>
            <Button id="buttons" type="submit" variant="secondary" size="md">
              Submit
            </Button>
            {/*type="submit"*/}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateAQuestion;
