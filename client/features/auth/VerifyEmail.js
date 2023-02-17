import React, { useEffect, useEffectß } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Button, Container, Row, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { verifyNewUserEmail } from "./authSlice";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const tempId = searchParams.get("tempId");

  useEffect(() => {
    // dispatch(verifyNewUserEmail({ token, tempId }));
  }, []);

  return (
    <Container>
      <Row className="p-5">
        <Card className="p-5 mx-auto" style={{ maxWidth: "800px" }}>
          {error ? (
            <>
              <h3>Uh oh, there was an error with your request! </h3>
              <p>
                If you haven't already, please create an account following the
                link below and be sure to check your inbox for an email from
                MedExperts with next steps.
              </p>
              <br />
              <p>
                If you already verified your account and believe you received
                this message in error, you may <a href="/login">login</a> using
                your credentials.
              </p>
              <Row>
                <Col>
                  <Button onClick={() => navigate("/signup")}>
                    Create Account
                  </Button>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <h3>Thank you for verifying your email! </h3>
              <p>Please login using your credentials.</p>
              <Button onClick={() => navigate("/login")}>Login</Button>
            </>
          )}
        </Card>
      </Row>
    </Container>
  );
};

export default VerifyEmail;
