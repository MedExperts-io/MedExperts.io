import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

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
        <Navbar.Brand href="/">
          <img
            src="/MedExpert.png"
            height="30"
            className="d-inline-block align-top"
            alt="Med Expert Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex">
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
            <Dropdown drop={"start"}>
              <Dropdown.Toggle variant="light" style={{ color: "#FF6262" }}>
                <PersonIcon sx={{ color: "#FF6262" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item
                  onClick={logoutAndRedirectHome}
                  style={{ color: "#FF6262" }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
