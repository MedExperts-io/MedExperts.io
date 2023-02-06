import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../app/store";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CreateAQuestion = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [validated, setValidated] = useState(false);
  const expertiseLevel = ["Student", "Resident", "Fellow", "Physician Assistant", "Nurse", "Nurse Practitioner", "Pharmacist", "Internal Med", "Other"];

  //password checker
  const atLeastOneUppercase = /[A-Z]/g;
  const atLeastOneLowercase = /[a-z]/g;
  const atLeastOneNumber = /[0-9]/g;
  const atLeastOneSpecialCharacter = /[#?!@$%^&*-]/g;
  const eightCharactersOrMore = /.{8,}/g;
  const [showReqs, setShowReqs] = useState(false);
  const [password, setPassword] = useState("");

  const passwordTracker = {
    uppercase: password.match(atLeastOneUppercase),
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumber),
    specialCharacter: password.match(atLeastOneSpecialCharacter),
    eightCharactersOrGreater: password.match(eightCharactersOrMore),
  };

  const passwordStrength = Object.values(passwordTracker).filter((value) => value).length;
  //end password checker

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const expertise = evt.target.expertiseLevel.value;
    const school = evt.target.school.value;
    const email = evt.target.signupEmail.value;
    const password = evt.target.signupPassword.value;

    dispatch(
      authenticate({
        firstName,
        lastName,
        email,
        password,
        expertise,
        school,
        method: "signup",
      })
    );
  };

  return (
    <div className="mb-3 mt-md-4">
      <div className="mb-3">
        <Form onSubmit={handleSubmit} noValidate validated={validated} name="signup">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="firstName">
              <Form.Label label="First Name">First Name</Form.Label>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control style={{ borderRadius: "10px" }} required type="text" placeholder="Enter first name" />
                  <Form.Control.Feedback type="invalid">Please provide your first name.</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label label="Last Name">Last Name</Form.Label>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control style={{ borderRadius: "10px" }} required type="text" placeholder="Enter last name" />
                  <Form.Control.Feedback type="invalid">Please provide your last name.</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3" as={Col} controlId="expertiseLevel">
              <Form.Label label="Expertise Level">Expertise Level</Form.Label>
              <Form.Select aria-label="Default select example">
                {expertiseLevel.map((level) => (
                  <option key={level} value={level}>
                    {level}
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

            <Form.Group as={Col} controlId="signupPassword">
              <Form.Label label="Password">Password</Form.Label>

              <Row className="mb-3">
                <Col sm={12}>
                  <InputGroup>
                    <Form.Control
                      required
                      onFocus={() => setShowReqs(true)}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      autoComplete="new-password"
                      type={passwordShown ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <Button variant="outline-secondary" onClick={togglePassword} size="md" style={{ zIndex: 0 }}>
                      {passwordShown ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                    </Button>
                    <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>
          </Row>

          <div className="d-grid">
            <Button onClick={() => setValidated(true)} disabled={passwordStrength != 5} id="buttons" variant="secondary" type="submit" size="md">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateAQuestion;
