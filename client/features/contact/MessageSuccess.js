import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FloatingLabel,
  Row,
} from "react-bootstrap";

const MessageSuccess = () => {
  return (
    <Container fluid>
      <Col>
        <br />
        <p style={{ fontWeight: "300", fontSize: "14px" }}>
          We have received your message and appreciate you taking the time to
          reach out to us. Our team is reviewing your inquiry and we will do our
          best to get back to you as soon as possible.
          <br />
          <br /> <br />
          Thank you again for reaching out to MedExperts. We look forward to
          speaking with you soon!
        </p>
      </Col>
    </Container>
  );
};

export default MessageSuccess;
