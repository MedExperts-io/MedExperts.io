import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Navbar id="footer"  style={{ backgroundColor: "#FF6262" }}>
      <Container fluid>
        <Nav>
          <p
            style={{
              fontSize: "7px",
              color: "white",
              padding: "0px",
              margin: "0px",
            }}
          >
            © MedExperts, LLC. All Rights Reserved.
          </p>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
