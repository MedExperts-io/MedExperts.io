import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { Button, Form, InputGroup, Container, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../app/store";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);
  const [err, setErr] = useState(error);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.loginEmail.value;
    const password = evt.target.loginPassword.value;

    await dispatch(authenticate({ email, password, method: formName }))
      .unwrap()
      .then(() => {
        if (err) navigate("/login");
        else navigate("/dashboard");
      });
  };

  return (
    <Container>
      <Row className="p-5 justify-content-center">
        <Col md={8} lg={6} s={10} xs={12}>
          <Card className="shadow">
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <div className="mb-3">
                  <Form onSubmit={handleSubmit} name="login">
                    <Form.Group className="mb-3" controlId="loginEmail">
                      <Form.Label className="text-center" label="Email Address">
                        Email address
                      </Form.Label>
                      <Form.Control required autoComplete="email" type="email" placeholder="Enter email" />
                      <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="loginPassword">
                      <Form.Label label="Password">Password</Form.Label>
                      <InputGroup>
                        <Form.Control required autoComplete="current-password" type={passwordShown ? "text" : "password"} placeholder="Enter password" />
                        <Button title="hide or show password" variant="outline-secondary" onClick={togglePassword} size="md" style={{ zIndex: 0 }}>
                          {passwordShown ? <VisibilityOffIcon title="show password" /> : <RemoveRedEyeIcon title="hide password" />}
                        </Button>

                        <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>{" "}
                    <Form.Group className="mb-3">
                      <p className="small">
                        <a className="text" style={{ color: "black" }} href="/forgotPassword">
                          Forgot password?
                        </a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="secondary" type="submit">
                        Login
                      </Button>
                      {error ? (
                        <p className="small" style={{ color: "red" }}>
                          {error}
                        </p>
                      ) : null}
                    </div>
                  </Form>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <p className="small">
                <a className="text" style={{ color: "black" }} href="/signup">
                  New to MedExperts? Create account.
                </a>
              </p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
