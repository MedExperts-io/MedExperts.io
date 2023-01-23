import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { authenticate } from "../../app/store";

const SignUp = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState("");

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
          <Form.Group controlId="firstName">
            <Row style={{ margin: "0px" }}>
              <Form.Label label="First Name">First Name</Form.Label>
            </Row>

            <Col sm={6}>
              <InputGroup>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter First Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your first name.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Form.Group>
        </Row>

        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Form.Group controlId="lastName">
            <Row style={{ margin: "0px", padding: "0px" }}>
              <Form.Label label="Last Name">Last Name</Form.Label>
            </Row>
            <Col sm={6}>
              <InputGroup>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Last Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your last name.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Form.Group>
        </Row>

        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Form.Group controlId="email">
            <Row style={{ margin: "0px", padding: "0px" }}>
              <Form.Label label="Email Address">Email Address</Form.Label>
            </Row>
            <Col sm={6}>
              <InputGroup>
                <Form.Control required type="text" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">
                  Please provide your email.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Form.Group>
        </Row>

        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Form.Group controlId="password">
            <Row style={{ margin: "0px", padding: "0px" }}>
              <Form.Label label="Password" style={{ paddingLeft: "16px" }}>
                Password
              </Form.Label>
            </Row>

            <Col sm={6}>
              <InputGroup>
                <Form.Control
                  required
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter Password"
                />
                <Button
                  variant="outline-primary"
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
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <div className="p-1"></div>
    </Container>
  );
};

export default SignUp;
