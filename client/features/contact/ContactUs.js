import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";

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
                <Card.Body className="me-auto">
                  <p
                    style={{
                      fontWeight: "300",
                      fontSize: "14px",
                    }}
                  >
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      target="_blank"
                      href={"mailto:support@medexperts.io"}
                    >
                      <EmailIcon /> support@medexperts.io
                    </a>
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
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      target="_blank"
                      href={"https://www.linkedin.com/company/medexperts-io/"}
                    >
                      <LinkedInIcon /> LinkedIn
                    </a>
                  </p>
                  <p style={{ fontWeight: "300", fontSize: "14px" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      target="_blank"
                      href={"https://www.instagram.com/medexperts.io/"}
                    >
                      <InstagramIcon /> Instagram
                    </a>
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
