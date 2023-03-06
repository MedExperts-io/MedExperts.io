import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuizIcon from "@mui/icons-material/Quiz";

const SiteNavbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAndRedirectHome = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect className="navbar" expand="lg" variant="dark">
      <Container fluid>
        {isLoggedIn ? (
          <>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src="/MedExpert.svg"
                  className="navbar-logo"
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
                <Link to="/dashboard" className="navbar-link">
                  Dashboard
                </Link>

                <Link to="/questions" className="navbar-link">
                  Questions
                </Link>

                <Link to="/profile" className="navbar-link">
                  Profile
                </Link>
                <Link onClick={logoutAndRedirectHome} className="navbar-link">
                  Logout
                </Link>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src="/MedExpert.svg"
                  className="navbar-logo"
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
                <Link to="/login" className="navbar-link">
                  Login
                </Link>
                <Link to="/signup" className="navbar-link">
                  Create Account
                </Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
