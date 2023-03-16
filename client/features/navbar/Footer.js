import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Navbar
      id="footer"
      // style={{ backgroundColor: "#FF6262" }}
      // className="text-center"
    >
      <Container fluid>
        <Container>
          <br />
          <Row>
            <Col xs={5} className="mx-auto">
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
            <Col xs={3} className="mx-auto">
              <ul className="footer-col">
                <li className="footer-col-header"> Our Company </li>
                <li className="footer-li"> Contact Us </li>
                <li className="footer-li"> About Us </li>
                <li className="footer-li"> FAQ </li>
              </ul>
            </Col>
            <Col xs={3} className="mx-auto">
              {/* <ul className="footer-col"> */}
              <li className="footer-col-header"> Follow Us</li>
              <div className="footer-li">
                {/* <li className="footer-li"> */}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/medexperts-io/"
                >
                  <LinkedInIcon className="footer-icon" />
                </a>
                {/* </li> */}
                {/* <li className="footer-li"> */}
                <a
                  target="_blank"
                  href="https://www.instagram.com/medexperts.io/"
                >
                  <InstagramIcon className="footer-icon" />{" "}
                </a>
                {/* </li> */}

                {/* <li className="footer-li"> */}
                <a
                  target="_blank"
                  href="https://github.com/MedExperts-io/MedExperts.io"
                >
                  <GitHubIcon className="footer-icon" />{" "}
                </a>
                {/* </li> */}
              </div>
              {/* </ul> */}
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
