import React, { useState } from "react";
import { Form, Container, Row, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  
  return (
    <Container>
      <Row className="p-5">
        <Card border="light" className="p-5 mx-auto" style={{ maxWidth: "800px" }}>
          <Form >
            <h1>Create new password</h1>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Enter new password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Re-enter new password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button  variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default ResetPassword;
