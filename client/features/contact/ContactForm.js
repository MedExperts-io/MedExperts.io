import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, FloatingLabel, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { contactFormResponse } from "./contactFormSlice";
import MessageSuccess from "./MessageSuccess";

const ContactForm = () => {
  const dispatch = useDispatch();
  const form = useRef();
  const [captchaVal, setCaptchaVal] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const params = {
    ...formData,
  };
  const { response } = useSelector((state) => state.contactForm);

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    dispatch(contactFormResponse({ token: captchaVal }));
  };

  useEffect(() => {
    if (response === "OK") {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          params,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(() => {
          setMessageSent(true);
          form.current.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [response]);

  return (
    <>
      {!messageSent ? (
        <Container fluid>
          <Col>
            <Form ref={form} onSubmit={(event) => sendEmail(event)}>
              <FloatingLabel
                className="mb-3"
                controlId="contact-name"
                label="Name"
              >
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  name="from_name"
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </FloatingLabel>

              <>
                <ReCAPTCHA
                  id="recaptcha"
                  sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE}`}
                  onChange={(captchaValue) => {
                    setCaptchaVal(captchaValue);
                  }}
                />

                <br />
              </>

              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  disabled={
                    !(
                      captchaVal &&
                      formData.from_email &&
                      formData.from_name &&
                      formData.message
                    )
                  }
                >
                  Submit
                </Button>
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
