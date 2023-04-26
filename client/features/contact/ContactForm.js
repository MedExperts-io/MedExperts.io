import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, FloatingLabel } from "react-bootstrap";
import MessageSuccess from "./MessageSuccess";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { contactFormResponse } from "./contactFormSlice";

const ContactForm = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.contactForm);

  console.log(response, "response");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const [captchaError, setCaptchaError] = useState(null);
  const [captchaVal, setCaptchaVal] = useState(null);

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendEmail = async (captchaVal, event) => {
    console.log("captchaVal from inside", captchaVal);
    event.preventDefault();
    const params = {
      "g-recaptcha-response": captchaVal,
      ...formData,
    };

    await dispatch(contactFormResponse({ token: captchaVal }));

    if (response.status === "OK" || response == "OK") {
      console.log("i'm ok");
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        params,
        process.env.REACT_APP_PUBLIC_KEY
      );
      setMessageSent(true);
      form.current.reset();
    } else {
      console.log("error in dispatch");
    }

    // try {
    //   const response = await axios.post("/recaptcha", { token: captchaVal });
    //   console.log(response.status, "RESPONSE>STATUS SENDEMAIL,");
    //   if (response.status === 200) {
    //     await emailjs.send(
    //       process.env.REACT_APP_SERVICE_ID,
    //       process.env.REACT_APP_TEMPLATE_ID,
    //       params,
    //       process.env.REACT_APP_PUBLIC_KEY
    //     );
    //     setMessageSent(true);
    //     form.current.reset();
    //   } else {
    //     // setCaptchaError("Error verifying ReCAPTCHA token");
    //     console.log("Error verifying ReCAPTCHA token");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      {!messageSent ? (
        <Container fluid>
          <Col>
            <Form ref={form} onSubmit={(event) => sendEmail(captchaVal, event)}>
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

              <>
                <ReCAPTCHA
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
                  disabled={!captchaVal && !formData.length}
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
