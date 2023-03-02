import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar id="footer" style={{ backgroundColor: "#FF6262" }}>
      <Container fluid className="d-flex justify-content-end">
        <Nav>
          <p
            style={{
              fontSize: "7px",
              color: "white",
              padding: "0px",
              margin: "0px",
            }}
          >
            © Fluence, LLC. All Rights Reserved.
          </p>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
