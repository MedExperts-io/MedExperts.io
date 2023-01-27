import React from "react";
import { Form, Button, Container, Card, Row } from "react-bootstrap";

const ResetPassword = () => {
  return (
    <Container>
      <Row className="p-5">
        <Card border="light" className="p-5 mx-auto" style={{ maxWidth: "800px" }}>
          <Form>
            <h1>Reset Password</h1>
            <p>
              Please enter your email address. You will receive a link to create a new password via
              email.
            </p>
            <Form.Group className="mb-3" controlId="resetPassWordForm">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
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

export default ResetPassword;
