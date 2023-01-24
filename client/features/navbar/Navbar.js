import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import zIndex from "@mui/material/styles/zIndex";

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
        <Nav>
          <Navbar.Brand href="/">
            <img
              src="/MedExpert.png"
              height="30"
              className="d-inline-block align-top"
              alt="Med Expert Logo"
            />
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto my-2 my-lg-0">
            {isLoggedIn ? (
              <div>
                <Link to="/home">Home</Link>
              </div>
            ) : (
              // temporarily moved some logged-in user features to this section so I can visualize what they look like & until we hook up login features completely
              <>
                <Nav.Link
                  className="nav-links"
                  style={{ color: "white" }}
                  to="/questions"
                >
                  Questions
                </Nav.Link>

                <Nav.Link
                  className="nav-links"
                  style={{ color: "white" }}
                  to="/dashboard"
                >
                  Dashboard
                </Nav.Link>

                <Nav.Link
                  className="nav-links"
                  style={{ color: "white" }}
                  to="/favorites"
                >
                  Favorites
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <NavDropdown
              title={<AccountCircleRoundedIcon />}
              drop={"start"}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={logoutAndRedirectHome}
                style={{ color: "#FF6262" }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
