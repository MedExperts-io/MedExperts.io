import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
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
      <Row className="p-5">
        <Card
          border="light"
          className="p-5 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <Form onSubmit={handleSubmit}>
            <h1>Reset Password</h1>
            <p>
              Please enter your email address. You will receive a link to create
              a new password via email.
            </p>
            <Form.Group className="mb-3" controlId="email">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Email Address" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="secondary" type="submit">
              Get New Password
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default RequestNewPassword;
