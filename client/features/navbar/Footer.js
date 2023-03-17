import React from "react";
import { Container, Navbar, Row, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Navbar id="footer">
      <Container fluid className="d-flex justify-content-center">
        <Container>
          <br />
          <Row className="mx-auto">
            <Col xs={5}>
              <div className="d-flex justify-content-center">
                <Col xs={8}>
                  <img
                    src="/MedExpert.svg"
                    className="footer-logo"
                    alt="Med Expert Logo"
                  />

                  <p className="footer-description">
                    MedExperts is a question and answer portal designed for
                    medical professionals in the field of pulmonary medicine.
                  </p>
                </Col>
              </div>
            </Col>
            <Col xs={3} className="mx-auto">
              <div className="d-flex justify-content-center">
                <ul className="footer-col">
                  <li className="footer-col-header"> Our Company </li>
                  <li className="footer-li"> Contact Us </li>
                  <li className="footer-li"> About Us </li>
                  <li className="footer-li"> FAQ </li>
                </ul>
              </div>
            </Col>
            <Col xs={3} className="mx-auto">
              <div className="d-flex justify-content-center">
                <ul className="footer-col">
                  <li className="footer-col-header"> Follow Us</li>
                  <li>
                    <div className="footer-li">
                      <a
                        target="_blank"
                        href="https://github.com/MedExperts-io/MedExperts.io"
                      >
                        <GitHubIcon className="footer-icon" />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/medexperts.io/"
                      >
                        <InstagramIcon className="footer-icon" />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/medexperts-io/"
                      >
                        <LinkedInIcon className="footer-icon" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <div
              className="d-flex justify-content-center"
              style={{
                fontSize: "10px",
                color: "#332C2C",
                padding: "0px",
                margin: "0px",
              }}
            >
              Copyright © 2023 Fluence LLC. All rights reserved.
            </div>
          </Row>
        </Container>
      </Container>
    </Navbar>
  );
};

export default Footer;
