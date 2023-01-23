import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../app/store";

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    dispatch(authenticate({ email, password, method: formName }));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit} name="login">
        <Row className="p-2" style={{ margin: "0px", padding: "0px" }}>
          <Form.Group controlId="email">
            <Row style={{ margin: "0px", padding: "0px" }}>
              <Form.Label label="Email Address" style={{ paddingLeft: "16px" }}>
                Email Address
              </Form.Label>
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
          </Form.Group>
        </Row>

        <Button id="buttons" variant="secondary" type="submit" size="md">
          Login
        </Button>
        <br />
      </Form>
      <div className="p-1"></div>
    </Container>
  );
};

export default Login;
