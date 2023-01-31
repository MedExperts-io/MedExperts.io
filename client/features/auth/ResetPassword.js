import React, { useState, useEffect } from "react";
import {
  Form,
  Container,
  Row,
  Card,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  resetPassword,
  isResetLinkValid,
} from "./authSlice";
import { useSearchParams } from "react-router-dom";
import RequestNewPassword from "./RequestNewPW";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // const [isLinkValid, setIsLinkValid] = useState(false);
  const token = searchParams.get("token");
  const uid = searchParams.get("uid");
  console.log(token, uid);
  const [validated, setValidated] = useState(false);
  const { error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isResetLinkValid({ token, uid }));
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const password1 = evt.target.password1.value;
    const password2 = evt.target.password2.value;

    if (validated) {
      dispatch(
        resetPassword({ password1, password2, token, uid })
      );
      // if reset password is successful redirect to navigate("/home") otherwise redirect to error page
    }
    navigate("/home");
  };

  return (
    <Container>
      <Row className="p-5">
        {error ? (
          <>
            <center>
              <p style={{ color: "red" }}>
                Sorry, your reset password link has either
                expired or already been used. You may
                request a new link below.
              </p>
              <RequestNewPassword />
            </center>
          </>
        ) : (
          <Card
            border="light"
            className="p-5 mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <h1>Reset Password</h1>
              <p>Enter your new password below:</p>
              <Form.Group
                className="mb-3"
                controlId="password1"
              >
                <Form.Label>New password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="password2"
              >
                <Form.Label>
                  Confirm new password
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
              <Button
                onClick={() => setValidated(true)}
                variant="secondary"
                type="submit"
              >
                Submit
              </Button>
            </Form>{" "}
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default ResetPassword;
