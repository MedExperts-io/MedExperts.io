import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../app/store";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const SiteNavbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
                  id={
                    location.pathname === "/dashboard"
                      ? "navButton-active"
                      : "navButton"
                  }
                >
                  Dashboard
                </Button>

                <Button
                  variant="light"
                  as={Link}
                  to="/questions"
                  id={
                    location.pathname === "/questions"
                      ? "navButton-active"
                      : "navButton"
                  }
                  className="m-2"
                >
                  Questions
                </Button>

                <Button
                  className="m-2"
                  variant="light"
                  id={
                    location.pathname === "/profile"
                      ? "navProfileButton-active"
                      : "navProfileButton"
                  }
                >
                  <NavDropdown
                    className="buttonIcon"
                    title={
                      <AccountCircleRoundedIcon
                        className="mx-auto"
                        id={
                          location.pathname === "/profile"
                            ? "navProfileButtonIcon-active"
                            : "navProfileButtonIcon"
                        }
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
                  className="m-2"
                  variant="light"
                  id={
                    location.pathname === "/login" ||
                    location.pathname === "/signup"
                      ? "navProfileButton-active"
                      : "navProfileButton"
                  }
                >
                  <NavDropdown
                    className="buttonIcon"
                    title={
                      <AccountCircleRoundedIcon
                        id={
                          location.pathname === "/login" ||
                          location.pathname === "/signup"
                            ? "navProfileButtonIcon-active"
                            : "navProfileButtonIcon"
                        }
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
