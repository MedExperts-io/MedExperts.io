import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Navbar id="footer" style={{ backgroundColor: "#FF6262" }}>
      <Container fluid className="d-flex justify-content-center">
        <Nav>
          <p
            style={{
              fontSize: "10px",
              color: "#332C2C",
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
