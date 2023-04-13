import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FloatingLabel,
  Row,
} from "react-bootstrap";

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
      <Col>
        <Form ref={form} onSubmit={sendEmail}>
          <FloatingLabel className="mb-3" controlId="contact-name" label="Name">
            <Form.Control type="text" placeholder="Your name" />
          </FloatingLabel>

          <FloatingLabel
            className="mb-3"
            controlId="contact-email"
            label="Email Address"
          >
            <Form.Control type="email" placeholder="Your email address" />
          </FloatingLabel>

          <FloatingLabel
            className="mb-3"
            controlId="contact-phone"
            label="Phone Number"
          >
            <Form.Control type="tel" placeholder="Your phone number" />
          </FloatingLabel>

          <FloatingLabel
            className="mb-3"
            controlId="contact-msg"
            label="Message"
          >
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              placeholder="Your message"
            />
          </FloatingLabel>

          <div className="d-grid gap-2">
            <Button type="submit"> Submit </Button>
          </div>
        </Form>

        <div
          className="g-recaptcha"
          data-sitekey="6LfhBIYlAAAAAIzn87g7kjLB_UzhWkL5WV3Xh82i"
        ></div>
        <br />
      </Col>
    </Container>
  );
};

export default ContactForm;
