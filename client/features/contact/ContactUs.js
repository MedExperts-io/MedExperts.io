import React, { useRef } from "react";
import { Container, Card, Row, Col, Button, Form } from "react-bootstrap";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <Container fluid style={{ marginTop: "35px" }}>
      <h1 className="text-center">Contact Us</h1>
      <p className="text-center" style={{ fontSize: "18px" }}>
        Fill out the form and a member of our team will get back to you within
        24 hours, or scroll down for more ways to get in touch.
      </p>
      <Card className="mx-auto shadow" style={{ width: "80%" }}>
        <Card.Body>
          <Row>
            <Col>
              <Card
                style={{
                  width: "90%",
                  backgroundColor: "#f5f3f2",
                  border: "none",
                }}
              >
                <Card.Title style={{ padding: "10px" }}>
                  Contact MedExperts
                </Card.Title>
              </Card>
            </Col>
            <Col>{<ContactForm />}</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUs;
