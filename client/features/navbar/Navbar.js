import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ReactHtmlParser from "react-html-parser";

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
            <Link to="/home">
              <Navbar.Brand>
                <img src="/MedExpert.png" height="30" alt="Med Expert Logo" />
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Button
                  style={{ color: "#FF6262" }}
                  as={Link}
                  to="/home"
                  variant="light"
                  className="m-2"
                >
                  Dashboard
                </Button>

                <Button
                  variant="light"
                  as={Link}
                  to="/questions"
                  className="m-2"
                  style={{ color: "#FF6262" }}
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
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>
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
        ) : (
          <Navbar.Brand href="/">
            <img src="/MedExpert.png" height="30" alt="Med Expert Logo" />
          </Navbar.Brand>
        )}
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
