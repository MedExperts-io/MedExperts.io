import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../app/store";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const { error } = useSelector((state) => state.auth);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.loginEmail.value;
    const password = evt.target.loginPassword.value;

    if (validated) {
      dispatch(authenticate({ email, password, method: formName })).then(() =>
        navigate("/home")
      );
    }
  };
  return (
    <div className="mb-3 mt-md-4">
      <div className="mb-3">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          name="login"
        >
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label className="text-center" label="Email Address">
              Email address
            </Form.Label>
            <Form.Control
              required
              autoComplete="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label label="Password">Password</Form.Label>
            <InputGroup>
              <Form.Control
                required
                autoComplete="current-password"
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
          <Form.Group className="mb-3" controlId="checkbox">
            <p className="small">
              <a
                className="text"
                style={{ color: "#FF6262" }}
                href="/forgotPassword"
              >
                Forgot password?
              </a>
            </p>
          </Form.Group>
          <div className="d-grid">
            <Button
              onClick={() => setValidated(true)}
              variant="secondary"
              type="submit"
            >
              Login
            </Button>
            {error ? <p>{error}</p> : null}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
