import React from "react";
import { Container, Navbar, Row, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = ({ isLoggedIn }) => {
  return (
    <Navbar id="footer" className="shadow">
      <Container
        fluid
        className="d-flex justify-content-center vertical-align-middle"
        style={{
          paddingTop: "0px",
          marginTop: "0px",
          marginBottom: "0px",
          paddingBottom: "0px",
        }}
      >
        <Container
          style={{
            paddingTop: "0px",
            marginTop: "0px",
            paddingBottom: "0",
            marginBottom: "0",
          }}
        >
          <Row
            style={{
              paddingBottom: "5px",
              paddingTop: "5px",
              textAlign: "center",
            }}
          >
            <div className="mx-auto d-flex justify-content-center align-items-center">
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
            </div>
          </Row>{" "}
          <Row
            style={{
              paddingBottom: "5px",
              paddingTop: "5px",
              textAlign: "center",
            }}
          >
            <div className="mx-auto d-flex justify-content-center align-items-center">
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "12px",
                  fontWeight: "400",
                  padding: "5px",
                }}
              >
                Contact Us{" "}
              </Link>{" "}
              •
              <Link
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "12px",
                  fontWeight: "400",
                  padding: "5px",
                }}
              >
                About Us
              </Link>
              {isLoggedIn && (
                <>
                  •
                  <Link
                    to="/feedback"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontSize: "12px",
                      fontWeight: "400",
                      padding: "5px",
                    }}
                  >
                    Share Feedback
                  </Link>
                </>
              )}
            </div>
          </Row>
          <hr />
          <Row style={{ padding: "0", margin: "0" }}>
            <div
              className="d-flex justify-content-center"
              style={{
                fontSize: "10px",
                color: "#332C2C",
                fontWeight: "300",
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
