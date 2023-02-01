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
        <Navbar.Brand href="/home">
          <img src="/MedExpert.png" height="30" alt="Med Expert Logo" />
        </Navbar.Brand>

        {isLoggedIn && (
          <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Button
                  variant="light"
                  href="/home"
                  style={{ color: "#FF6262" }}
                  className="m-2"
                >
                  Dashboard
                </Button>
                <Button
                  variant="light"
                  href="/questions"
                  style={{ color: "#FF6262" }}
                  className="m-2"
                >
                  Questions
                </Button>
                <Button
                  variant="light"
                  href="/favorites"
                  style={{ color: "#FF6262" }}
                  className="m-2"
                >
                  Favorites
                </Button>
              </Nav>
              <Nav>
                <Button
                  className="m-2"
                  variant="light"
                  style={{
                    paddingTop: "0",
                    paddingBottom: "0",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  <NavDropdown
                    className="buttonIcon"
                    style={{
                      paddingTop: "0",
                      paddingBottom: "0",
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                    title={
                      <AccountCircleRoundedIcon
                        style={{
                          color: "#FF6262",
                          height: "30",
                          width: "30",
                          paddingRight: "5px",
                          paddingTop: "0",
                          paddingBottom: "0",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      />
                    }
                    drop={"start"}
                    id="collapsible-nav-dropdown"
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
