import React, { useState } from "react";
import { Form, Container, Row, Card, Button } from "react-bootstrap";
import { forgotPassword } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequestNewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1>Reset Password</h1>
            <p>
              Please enter your email address. You will receive a link to create
              a new password via email.
            </p>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              onClick={() => setValidated(true)}
              variant="secondary"
              type="submit"
            >
              Get New Password
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default RequestNewPassword;
