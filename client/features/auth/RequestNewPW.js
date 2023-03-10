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
          <Card className="shadow mx-auto" id="request-pw-reset-card">
            <Card.Header id="request-pw-reset-card-header">
              Request new password
            </Card.Header>
            <Card.Body>
              <div>
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
                    <p>
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
