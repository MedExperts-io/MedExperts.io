import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../app/store";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState("");
  const expertiseLevel = ["Student", "Resident", "Fellow", "P/A", "N/P", "Nurse", "Pharmacist", "Internal med", "Other Board certified professionals"];

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    dispatch(
      authenticate({
        firstName,
        lastName,
        email,
        password,
        method: "signup",
      })
    );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} name="signup">
        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Col>
            <Form.Group controlId="firstName">
              <Row style={{ margin: "0px" }}>
                <Form.Label label="First Name">First Name</Form.Label>
              </Row>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control style={{ borderRadius: "10px" }} required type="text" placeholder="Enter first name" />
                  <Form.Control.Feedback type="invalid">Please provide your first name.</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="lastName">
              <Row style={{ margin: "0px", padding: "0px" }}>
                <Form.Label label="Last Name">Last Name</Form.Label>
              </Row>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control style={{ borderRadius: "10px" }} required type="text" placeholder="Enter last name" />
                  <Form.Control.Feedback type="invalid">Please provide your last name.</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Col>
            <Form.Group controlId="emailAddress">
              <Row style={{ margin: "0px" }}>
                <Form.Label label="Email Address">Email Address</Form.Label>
              </Row>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control style={{ borderRadius: "10px" }} required type="text" placeholder="Enter email" />
                  <Form.Control.Feedback type="invalid">Enter email</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Label label="Expertise Level">Expertise Level</Form.Label>
            <Form.Select aria-label="Default select example">
              {expertiseLevel.map((level) => (
                <option value={level}>{level}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Form.Group controlId="password">
            <Row style={{ margin: "0px", padding: "0px" }}>
              <Form.Label label="Password" style={{ paddingLeft: "16px" }}>
                Password
              </Form.Label>
            </Row>
            <Row>
              <Col sm={6}>
                <InputGroup>
                  <Form.Control required type={passwordShown ? "text" : "password"} placeholder="Enter password" />
                  <Button variant="outline-secondary" onClick={togglePassword} size="md" style={{ zIndex: 0 }}>
                    {passwordShown ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                  </Button>
                  <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                </InputGroup>
              </Col>

              <Col>
                <Button style={{ textAlign: "right", justifyContent: "right", float: "right" }} id="buttons" variant="secondary" type="submit" size="md">
                  Sign Up
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Row>
      </Form>
      <div className="p-1"></div>
    </Container>
  );
};

export default SignUp;
