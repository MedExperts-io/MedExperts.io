import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      id="footer"
      style={{ backgroundColor: "#FF6262" }}
      className="text-center"
    >
      <Container fluid>
        <Container>
          <Row className="mx-auto">
            <Col className="mx-auto mb-4">
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
            <Col className="mx-auto mb-4">
              <ul className="footer-col">
                <li className="footer-col-header"> Our Company </li>
                <li className="footer-li"> Contact Us </li>
                <li className="footer-li"> About Us </li>
                <li className="footer-li"> FAQ </li>
              </ul>
            </Col>
            <Col className="mx-auto mb-1">
              <ul className="footer-col">
                <li className="footer-col-header"> Follow Us</li>
                <li className="footer-li"> LinkedIn </li>
                <li className="footer-li"> Instagram </li>
                <li className="footer-li"> Twitter </li>
                <li className="footer-li"> Github </li>
              </ul>
            </Col>
          </Row>
          <hr />
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
        </Container>
      </Container>
    </Navbar>
  );
};

export default Footer;
