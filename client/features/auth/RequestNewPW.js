import React from "react";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "./authSlice";

const RequestNewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = evt.target.email.value;

    dispatch(forgotPassword({ email }));
    navigate("/forgotPassword/confirmation");
  };

  return (
    <Container>
      <Row className="p-5 justify-content-center">
        <Col>
          <Card className="shadow mx-auto" style={{ maxWidth: "600px" }}>
            <Card.Header>Reset your password</Card.Header>
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
                    {/* <h3 style={{ fontSize: "25px" }}>Reset your password</h3>s */}
                    <p style={{ fontSize: "15px" }}>
                      Enter your user account's verified email address and we
                      will send you a password reset link.
                    </p>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="success" type="submit">
                      Send password reset email
                    </Button>
                  </Form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestNewPassword;
