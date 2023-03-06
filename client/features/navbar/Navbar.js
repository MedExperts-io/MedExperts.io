import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const SiteNavbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar
      collapseOnSelect
      style={{ backgroundColor: "#FF6262" }}
      expand="lg"
      variant="dark"
    >
      <Container fluid>
        {isLoggedIn ? (
          <>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src="/MedExpert.svg"
                  style={{ height: "50px" }}
                  alt="Med Expert Logo"
                />
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Button
                  variant="light"
                  as={Link}
                  to="/dashboard"
                  className="m-2"
                  style={{
                    color: "#FF6262",
                    paddingTop: "10px",
                    height: "48px",
                  }}
                >
                  Dashboard
                </Button>
              </Nav>
              <Nav>
                <Button
                  variant="light"
                  as={Link}
                  to="/questions"
                  className="m-2"
                  style={{
                    color: "#FF6262",
                    paddingTop: "10px",
                    height: "48px",
                  }}
                >
                  Questions
                </Button>
              </Nav>

              <Nav>
                <Button
                  variant="light"
                  as={Link}
                  to="/profile"
                  className="m-2"
                  style={{
                    color: "#FF6262",
                    paddingTop: "10px",
                    height: "48px",
                  }}
                >
                  My Profile
                </Button>
                <Button
                  variant="light"
                  onClick={logoutAndRedirectHome}
                  className="m-2"
                  style={{
                    color: "#FF6262",
                    paddingTop: "10px",
                    height: "48px",
                  }}
                >
                  Logout
                </Button>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src="/MedExpert.svg"
                  style={{ height: "50px" }}
                  alt="Med Expert Logo"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              style={{ hover: "none" }}
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Button
                  variant="light"
                  as={Link}
                  to="/login"
                  className="m-2"
                  style={{
                    color: "#FF6262",
                    paddingTop: "10px",
                    height: "48px",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="light"
                  as={Link}
                  to="/signup"
                  className="m-2"
                  style={{
                    color: "#FF6262",
                    paddingTop: "10px",
                    height: "48px",
                  }}
                >
                  Create Account
                </Button>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
