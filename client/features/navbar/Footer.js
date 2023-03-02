import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar id="footer" style={{ backgroundColor: "#FF6262" }}>
      <Container fluid className="d-flex justify-content-center">
        <Nav>
          <p
            style={{
              fontSize: "10px",
              color: "white",
              padding: "0px",
              margin: "0px",
            }}
          >
            Copyright © 2023 Fluence LLC. All rights reserved.
          </p>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
