import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { display } from "@mui/system";

const SiteNavbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect style={{ backgroundColor: "#FF6262" }} expand="lg" variant="dark">
      <Container fluid style={{ display: "flex", justifyContent: "space-between" }}>
        <section style={{ width: "33%", display: "inline-block" }}>
          <Nav className="NAV WRAPPER">
            <Navbar.Brand href="/" className="NAV BRAND">
              <img src="/MedExpert.png" height="30" className="d-inline-block align-top" alt="Med Expert Logo" />
            </Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </section>
        <span style={{ width: "67%" }}>
          <Navbar.Collapse id="responsive-navbar-nav" className="UH the other stuff">
            <section style={{ width: "50%", textAlign: "center" }}>
              {isLoggedIn ? (
                <div>
                  <Link to="/home">Home</Link>
                </div>
              ) : (
                // temporarily moved some logged-in user features to this section so I can visualize what they look like & until we hook up login features completely
                <>
                  <Button variant="outline-light" href="/dashboard" style={{ marginRight: "10px" }}>
                    Dashboard
                  </Button>
                  <Button variant="outline-light" href="/questions" style={{ marginRight: "10px" }}>
                    Questions
                  </Button>
                  <Button variant="outline-light" href="/favorites" style={{ marginRight: "10px" }}>
                    Favorites
                  </Button>
                </>
              )}
            </section>
            <section style={{ width: "50%" }}>
              <Nav style={{ justifyContent: "right" }}>
                <NavDropdown title={<AccountCircleRoundedIcon />} drop={"start"} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutAndRedirectHome} style={{ color: "#FF6262" }}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </section>
          </Navbar.Collapse>
        </span>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
