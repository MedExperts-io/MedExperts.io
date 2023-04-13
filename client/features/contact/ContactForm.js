import React, { useRef } from "react";
import { Container, Card, Row, Col, Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container fluid>
      {/* <Card className="mx-auto shadow"> */}
      <Col>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="contact-name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          {/* <label>Name</label>
            <input type="text" name="user_name" /> */}
          <Form.Group className="mb-3" controlId="contact-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          {/* <label>Email</label>
            <input type="email" name="user_email" /> */}
          {/* <label>Message</label>
            <textarea name="message" /> */}
          <Form.Group className="mb-3" controlId="contact-msg">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button type="submit"> Submit </Button>
        </Form>
      </Col>
      {/* </Card> */}
    </Container>
  );
};

export default ContactForm;
