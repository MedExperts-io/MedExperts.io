import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, FloatingLabel } from "react-bootstrap";
import MessageSuccess from "./MessageSuccess";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const [captcha, showCaptcha] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    showCaptcha(true);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendEmail = async (captchaValue) => {
    const params = {
      "g-recaptcha-response": captchaValue,
      ...formData,
    };

    try {
      const response = await axios.post("/recaptcha", { token: captchaValue });

      if (response.status === 200) {
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          params,
          process.env.REACT_APP_PUBLIC_KEY
        );
        setMessageSent(true);
        form.current.reset();
      } else {
        console.log("Error verifying ReCAPTCHA token");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!messageSent ? (
        <Container fluid>
          <Col>
            <Form ref={form} onSubmit={submitForm}>
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
                controlId="contact-phone"
                label="Phone Number"
              >
                <Form.Control
                  type="tel"
                  placeholder="Your phone number"
                  name="from_phone"
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

              {captcha && (
                <>
                  <ReCAPTCHA
                    sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE}`}
                    onChange={(captchaValue) => sendEmail(captchaValue)}
                  />
                  <br />
                </>
              )}

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
