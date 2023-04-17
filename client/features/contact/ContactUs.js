import React, { useRef } from "react";
import { Container, Card, Row, Col, Button, Form } from "react-bootstrap";
import ContactForm from "./ContactForm";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";


const ContactUs = () => {
  return (
    <Container fluid style={{ marginTop: "35px", marginBottom: "35px" }}>
      <Col lg={10} md={10} className="mx-auto">
        <h1 className="text-center">Get in Touch</h1>
        <p
          className="text-center"
          style={{ fontSize: "18px", fontWeight: "300" }}
        >
          We'd love to hear from you! If you have any questions or comments for
          us, fill out the form below with all your details and we'll get back
          to you within 48 hours.
        </p>
      </Col>
      <Card className="mx-auto shadow" style={{ width: "80%" }}>
        <Card.Body>
          <Row>
            <Col>
              <Card
                style={{
                  width: "100%",
                  backgroundColor: "#f5f3f2",
                  border: "none",
                  height: "100%",
                }}
              >
                <Card.Title
                  style={{
                    padding: "10px",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  Contact Information
                </Card.Title>
                <Card.Body
                  className="me-auto"
                  //   style={{ verticalAlign: "middle" }}
                >
                  <p
                    style={{
                      fontWeight: "300",
                      fontSize: "14px",
                    }}
                  >
                    <EmailIcon /> support@medexperts.io
                  </p>
                  <p style={{ fontWeight: "300", fontSize: "14px" }}>
                    <LocationOnIcon />
                    New York, NY
                  </p>

                  <hr style={{ width: "100%" }} />

                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    Connect with MedExperts on Social Media
                  </p>
                  <p style={{ fontWeight: "300", fontSize: "14px" }}>
                    <LinkedInIcon /> LinkedIn
                  </p>
                  <p style={{ fontWeight: "300", fontSize: "14px" }}>
                    <InstagramIcon /> Instagram
                  </p>
                  <p style={{ fontWeight: "300", fontSize: "14px" }}>
                    <GitHubIcon /> GitHub
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Title
                  style={{
                    padding: "10px",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  Send us a Message
                </Card.Title>
                {<ContactForm />}
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUs;
