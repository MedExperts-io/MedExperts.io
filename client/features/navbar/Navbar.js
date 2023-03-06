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

  const navBarButtonClicked = (event) => {
    const button = event.target.className;
    console.log("button:", button);
  };

  return (
    <Navbar collapseOnSelect style={{ backgroundColor: "#FF6262" }} expand="lg" variant="dark">
      <Container fluid>
        {isLoggedIn ? (
          <>
            <Link to="/">
              <Navbar.Brand>
                <img src="/MedExpert.svg" style={{ height: "50px" }} alt="Med Expert Logo" />
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav style={{ borderRadius: "50px", background: "white", marginRight: "15px" }}>
                <Nav className="navbarButton" onClick={navBarButtonClicked}>
                  <Button
                    variant="light"
                    as={Link}
                    to="/dashboard"
                    style={{
                      fontSize: "120%",
                      background: "none",
                      border: "none",
                      color: "#2b2b2b",
                      paddingTop: "10px",
                      height: "48px",
                    }}
                  >
                    Dashboard
                  </Button>
                </Nav>
                <Nav className="navbarButton">
                  <Button
                    variant="light"
                    as={Link}
                    to="/questions"
                    style={{
                      fontSize: "120%",
                      background: "none",
                      border: "none",
                      color: "#2b2b2b",
                      paddingTop: "10px",
                      height: "48px",
                    }}
                  >
                    Questions
                  </Button>
                </Nav>

                <Nav className="navbarButton">
                  <Button
                    variant="light"
                    style={{
                      paddingTop: "0",
                      paddingBottom: "0",
                      marginTop: "0",
                      marginBottom: "0",
                      borderRadius: "50px",
                    }}
                  >
                    <NavDropdown
                      className="buttonIcon"
                      style={{
                        paddingTop: "0",
                        marginTop: "0",
                        marginBottom: "0",
                      }}
                      title={
                        <AccountCircleRoundedIcon
                          className="mx-auto"
                          style={{
                            color: "#FF6262",
                            height: "30",
                            width: "30",
                            paddingRight: "7px",
                            paddingTop: "0px",
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
                      <NavDropdown.Item onClick={logoutAndRedirectHome} style={{ color: "#FF6262" }}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Button>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <>
            <Link to="/">
              <Navbar.Brand>
                <img src="/MedExpert.svg" style={{ height: "50px" }} alt="Med Expert Logo" />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse style={{ hover: "none" }} id="responsive-navbar-nav" className="justify-content-end">
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
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                    title={
                      <AccountCircleRoundedIcon
                        style={{
                          color: "#FF6262",
                          height: "30",
                          width: "30",
                          paddingRight: "7px",
                          paddingTop: "0px",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      />
                    }
                    drop={"start"}
                    id="collapsible-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="/login">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/signup">
                      Create Account
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
