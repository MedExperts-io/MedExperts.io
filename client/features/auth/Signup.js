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
  const expertiseLevel = [
    "Student",
    "Resident",
    "Fellow",
    "Physician Assistant",
    "Nurse",
    "Nurse Practitioner",
    "Pharmacist",
    "Internal Med",
    "Other",
  ];

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
    const email = evt.target.email.value;
    const password = evt.target.password.value;

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
                  <Form.Control
                    style={{ borderRadius: "10px" }}
                    required
                    type="text"
                    placeholder="Enter first name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your first name.
                  </Form.Control.Feedback>
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
                  <Form.Control
                    style={{ borderRadius: "10px" }}
                    required
                    type="text"
                    placeholder="Enter last name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your last name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Col>
            <Form.Group controlId="expertiseLevel">
              <Form.Label label="Expertise Level">Expertise Level</Form.Label>
              <Form.Select aria-label="Default select example">
                {expertiseLevel.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Row style={{ margin: "0px" }}>
                <Form.Label label="Email Address">Email Address</Form.Label>
              </Row>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control
                    style={{ borderRadius: "10px" }}
                    required
                    type="text"
                    placeholder="Enter email"
                  />
                  <Form.Control.Feedback type="invalid">Enter email</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Col>
            <Form.Group controlId="password">
              <Row style={{ margin: "0px", padding: "0px" }}>
                <Form.Label label="Password" style={{ paddingLeft: "16px" }}>
                  Password
                </Form.Label>
              </Row>
              <Row>
                <Col sm={12}>
                  <InputGroup>
                    <Form.Control
                      required
                      type={passwordShown ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={togglePassword}
                      size="md"
                      style={{ zIndex: 0 }}
                    >
                      {passwordShown ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                    </Button>
                    <Form.Control.Feedback type="invalid">
                      Please provide a password.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Row>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="school">
              <Row style={{ margin: "0px", padding: "0px" }}>
                <Form.Label label="School Affiliation">School Affiliation</Form.Label>
              </Row>
              <Col sm={12}>
                <InputGroup>
                  <Form.Control
                    style={{ borderRadius: "10px" }}
                    type="text"
                    placeholder="Enter school name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your school affiliation.
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Row className="p-2">
          <Button
            // style={{ textAlign: "right", justifyContent: "right", float: "right" }}
            id="buttons"
            variant="secondary"
            type="submit"
            size="md"
          >
            Sign Up
          </Button>
        </Row>
      </Form>
      <div className="p-1"></div>
    </Container>
  );
};

export default SignUp;
