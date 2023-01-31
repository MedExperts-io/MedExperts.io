import React, { useState, useEffect } from "react";
import { Form, Container, Row, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword, isResetLinkValid } from "./authSlice";
import { useSearchParams } from "react-router-dom";
import RequestNewPassword from "./RequestNewPW";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const { error } = useSelector((state) => state.auth);
  const [validated, setValidated] = useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const uid = searchParams.get("uid");

  useEffect(() => {
    dispatch(isResetLinkValid({ token, uid }));
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const password1 = evt.target.resetPassword.value;
    const password2 = evt.target.confirmResetPassword.value;

    if (validated) {
      dispatch(resetPassword({ password1, password2, token, uid }));
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
                Sorry, your reset password link has either expired or already
                been used. You may request a new link below.
              </p>
            </center>
            <RequestNewPassword />
          </>
        ) : (
          <Card
            border="light"
            className="p-5 mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h1>Reset Password</h1>
              <p>Enter your new password below:</p>
              <Form.Group className="mb-3" controlId="resetPassword">
                <Form.Label>New password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setPassword1(e.target.value);
                  }}
                  required
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmResetPassword">
                <Form.Label>Confirm new password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
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
            </Form>
            {password1 !== password2 ? (
              <div style={{ color: "red" }}>Passwords do not match</div>
            ) : null}
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default ResetPassword;
