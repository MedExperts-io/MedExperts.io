import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import QuizIcon from "@mui/icons-material/Quiz";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import BottomNavigation from "@mui/material/BottomNavigation";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";

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
              {" "}
              <BottomNavigation
                showLabels
                style={{ backgroundColor: "transparent", color: "white" }}
              >
                <BottomNavigationAction
                  label="Dashboard"
                  className="navbar-link"
                  onClick={() => navigate("/dashboard")}
                  style={{ color: "white" }}
                  icon={<DashboardIcon />}
                />

                <BottomNavigationAction
                  label="Questions"
                  className="navbar-link"
                  onClick={() => navigate("/questions")}
                  style={{ color: "white" }}
                  icon={<QuizIcon />}
                />

                <BottomNavigationAction
                  label="Profile"
                  className="navbar-link"
                  onClick={() => navigate("/profile")}
                  style={{ color: "white" }}
                  icon={<AccountCircleRoundedIcon />}
                />

                <BottomNavigationAction
                  label="Logout"
                  className="navbar-link"
                  style={{ color: "white" }}
                  onClick={logoutAndRedirectHome}
                  icon={<LogoutIcon />}
                />
              </BottomNavigation>
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
                  <LoginIcon /> Login
                </Link>
                <Link to="/signup" className="navbar-link">
                  <PersonAddIcon /> Create Account
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
