import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
    <div className="mb-3 mt-md-4">
      <div className="mb-3">
        <Form onSubmit={handleSubmit} name="login">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-center">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
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
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <p className="small">
              <a className="text-primary">Forgot password?</a>
            </p>
          </Form.Group>
          <div className="d-grid">
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
