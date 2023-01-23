import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const SiteNavbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Navbar collapseOnSelect style={{ backgroundColor: "#FF6262" }} expand="lg">
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
          <Nav className="mx-auto">
            {isLoggedIn ? (
              <div>
                <Link to="/home">Home</Link>
                <button type="button" onClick={logoutAndRedirectHome}>
                  Logout
                </button>
              </div>
            ) : (
              // temporarily moved some logged-in user features to this section so I can visualize what they look like & until we hook up login features completely
              <>
                <Button size="sm" variant="light" style={{ padding: "0" }}>
                  <Nav.Link to="/home">Home</Nav.Link>
                </Button>
                <Button variant="light">
                  <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                </Button>
                <Button variant="light">
                  <Nav.Link to="/favorites">Favorites</Nav.Link>
                </Button>
              </>
            )}
          </Nav>
          <Nav>
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/placeholder">
                Placeholder 1
              </NavDropdown.Item>
              <NavDropdown.Item href="/placeholder2">
                Placeholder 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signout">Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
