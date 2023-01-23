import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
    <Navbar style={{ backgroundColor: "#FF6262" }} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/MedExpert.png"
            height="30"
            className="d-inline-block align-top"
            alt="Med Expert Logo"
          />
        </Navbar.Brand>
        <Nav>
          {" "}
          {isLoggedIn ? (
            <div>
              <Link to="/home">Home</Link>
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            </div>
          ) : (
            // temporarily moved some logged-in user features to this section so I can visualize what they look like & until we hook up login features completely
            <div>
              <Link to="/home">Home</Link>
              <Link to="/profile">Profile</Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
