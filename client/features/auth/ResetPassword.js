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
  const { error } = useSelector((state) => state.auth);
  const [validated, setValidated] = useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const uid = searchParams.get("uid");

  useEffect(() => {
    dispatch(isResetLinkValid({ token, uid }));
  }, []);

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  //password checker start
  const atLeastOneUppercase = /[A-Z]/g;
  const atLeastOneLowercase = /[a-z]/g;
  const atLeastOneNumber = /[0-9]/g;
  const atLeastOneSpecialCharacter = /[#?!@$%^&*-]/g;
  const eightCharactersOrMore = /.{8,}/g;
  const [showReqs, setShowReqs] = useState(false);

  const passwordTracker = {
    uppercase: password1.match(atLeastOneUppercase),
    lowercase: password1.match(atLeastOneLowercase),
    number: password1.match(atLeastOneNumber),
    specialCharacter: password1.match(atLeastOneSpecialCharacter),
    eightCharactersOrGreater: password1.match(eightCharactersOrMore),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length;
  //password checker end

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const password1 = evt.target.resetPassword.value;
    const password2 = evt.target.confirmResetPassword.value;

    if (validated) {
      dispatch(resetPassword({ password1, password2, token, uid })).then(() =>
        navigate("/")
      );
    }
  };

  return (
    <Container>
      <Row className="p-5">
        {error ? (
          <>
            <center>
              <p style={{ color: "red", fontSize: "25px" }}>
                Sorry, your reset password link has either expired or already
                been used. You may request a new link below.
              </p>
            </center>
            <RequestNewPassword />
          </>
        ) : (
          <Card className="p-5 mx-auto" style={{ maxWidth: "800px" }}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h3 style={{ fontSize: "25px" }}>Reset Password</h3>
              <p>Enter your new password below:</p>
              <Form.Group className="mb-3" controlId="resetPassword">
                <Form.Label>New password</Form.Label>
                <Form.Control
                  onFocus={() => setShowReqs(true)}
                  onChange={(e) => {
                    setPassword1(e.target.value);
                  }}
                  value={password1}
                  required
                  type="password"
                  autoComplete="new-password"
                  placeholder="Enter password"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmResetPassword">
                <Form.Label>Confirm new password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                  required
                  autoComplete="re-enter-new-password"
                  type="password"
                  placeholder="Enter password"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>
              {password1 !== password2 && (
                <div style={{ color: "red" }}>Passwords do not match</div>
              )}
              {showReqs && (
                <div>
                  <div className="password-strength-meter"></div>
                  <div className="text-muted">
                    <ul>
                      <small style={{ textDecorationLine: "underline" }}>
                        {passwordStrength < 5 && "Password Requirements"}
                      </small>
                      <small>
                        {!passwordTracker.uppercase && (
                          <li>MUST contain at least one uppercase letter</li>
                        )}
                        {!passwordTracker.lowercase && (
                          <li>MUST contain at least one lowercase letter</li>
                        )}
                        {!passwordTracker.specialCharacter && (
                          <li>
                            MUST contain at least one special character
                            (#?!@$%^&*-)
                          </li>
                        )}
                        {!passwordTracker.number && (
                          <li>MUST contain at least one number</li>
                        )}
                        {!passwordTracker.eightCharactersOrGreater && (
                          <li>MUST contain at least 8 characters</li>
                        )}
                      </small>
                    </ul>
                  </div>
                </div>
              )}
              <Button
                onClick={() => setValidated(true)}
                variant="secondary"
                type="submit"
                disabled={password1 !== password2 || passwordStrength != 5}
              >
                Submit
              </Button>
            </Form>
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default ResetPassword;
