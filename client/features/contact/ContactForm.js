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
          {/* <label>Name</label>
            <input type="text" name="user_name" /> */}
          {/* <Form.Group className="mb-3" controlId="contact-email" required> */}
          <FloatingLabel
            className="mb-3"
            controlId="contact-email"
            label="Email Address"
          >
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="Your email address" />
          </FloatingLabel>
          {/* </Form.Group> */}
          {/* <Form.Group className="mb-3" controlId="contact-phone" required> */}
          <FloatingLabel
            className="mb-3"
            controlId="contact-phone"
            label="Phone Number"
          >
            {/* <Form.Label>Phone Number</Form.Label> */}
            <Form.Control type="tel" placeholder="Your phone number" />
          </FloatingLabel>
          {/* </Form.Group> */}
          {/* <label>Email</label>
            <input type="email" name="user_email" /> */}
          {/* <label>Message</label>
            <textarea name="message" /> */}
          {/* <Form.Group className="mb-3" controlId="contact-msg" required> */}
          {/* <Form.Label>Message</Form.Label> */}
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
          {/* </Form.Group> */}
          <div className="d-grid gap-2">
            <Button type="submit"> Submit </Button>
          </div>
        </Form>
        <form action="?" method="POST">
          <div
            class="g-recaptcha"
            data-sitekey="6LfhBIYlAAAAAIzn87g7kjLB_UzhWkL5WV3Xh82i"
          ></div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </Col>
    </Container>
  );
};

export default ContactForm;
