import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useCallback } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FloatingLabel,
  Row,
} from "react-bootstrap";
import MessageSuccess from "./MessageSuccess";

const ContactForm = () => {
  const form = useRef();
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  // const recaptcha = () => {
  //   const recaptchaChecked = recaptcha.getResponse() ? true : false;

  //   if (recaptchaChecked) {
  //     setDisableSubmit(true);
  //   } else {
  //     alert(
  //       "You must check the 'I am not a robot' box before you can start a game!"
  //     );
  //     setDisableSubmit(false);
  //   }
  // };

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
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      {!messageSent ? (
        <Container fluid>
          <Col>
            <Form ref={form} onSubmit={sendEmail}>
              <FloatingLabel
                className="mb-3"
                controlId="contact-name"
                label="Name"
              >
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  name="from_name"
                />
              </FloatingLabel>

              <FloatingLabel
                className="mb-3"
                controlId="contact-email"
                label="Email Address"
              >
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  name="from_email"
                />
              </FloatingLabel>

              <FloatingLabel
                className="mb-3"
                controlId="contact-phone"
                label="Phone Number"
              >
                <Form.Control
                  type="tel"
                  placeholder="Your phone number"
                  name="from_phone"
                />
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
                  name="message"
                />
              </FloatingLabel>
              <br />

              <div className="g-recaptcha" data-sitekey=""></div>
              <br />

              <div className="d-grid gap-2">
                <Button type="submit"> Submit </Button>
              </div>
            </Form>
          </Col>
        </Container>
      ) : (
        <MessageSuccess />
      )}
    </>
  );
};

export default ContactForm;
