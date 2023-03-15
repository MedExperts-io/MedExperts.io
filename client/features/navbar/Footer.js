import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      id="footer"
      style={{ backgroundColor: "#FF6262" }}
      className="text-center"
    >
      {/* <Container fluid className="d-flex justify-content-center">
       */}{" "}
      <Container fluid>
        {/* <section> */}
        {/* <Row className="d-flex justify-content-center"> */}
        <Container>
          <Row className="mx-auto">
            <Col className="me-auto mb-4">
              <img
                src="/MedExpert.svg"
                className="footer-logo"
                alt="Med Expert Logo"
              />

              <p className="footer-description">
                MedExperts is a question and answer portal designed for medical
                professionals in the field of pulmonary medicine.
              </p>
            </Col>
            <Col className="me-auto mb-4">
              <ul style={{ listStyle: "none", textAlign: "start" }}>
                <li> Our Company </li>
                <li> Contact Us </li>
                <li> About Us </li>
                <li> FAQ </li>
              </ul>
            </Col>
            <Col className="me-auto mb-1">
              {" "}
              <ul style={{ listStyle: "none", textAlign: "start" }}>
                <li> Follow Us</li>
                <li> LinkedIn </li>
                <li> Instagram </li>
                <li> Twitter </li>
                <li> Github </li>
              </ul>
            </Col>
          </Row>
        </Container>
        {/* </section> */}
        {/* <Container>
          {" "}
          <Row>
            <div
              style={{
                fontSize: "10px",
                color: "#332C2C",
                padding: "0px",
                margin: "0px",
              }}
            >
              Copyright © 2023 Fluence LLC. All rights reserved.
            </div>{" "}
          </Row>
        </Container> */}
      </Container>
    </Navbar>
  );
};

export default Footer;
