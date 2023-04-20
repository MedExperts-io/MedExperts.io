import React, { useState } from "react";
import { Home } from "@mui/icons-material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import QuizIcon from "@mui/icons-material/Quiz";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const SiteNavbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutAndRedirectHome = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar
      collapseOnSelect
      className="bg-gradient-to-r from-red-500 to-red-800 flex"
      expand="md"
      variant="dark"
    >
      <Container fluid>
        {isLoggedIn ? (
          <>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src="/img/MedExpert.svg"
                  className="text-white mt-4"
                  alt="Med Expert Logo"
                />
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <BottomNavigation
                showLabels
                className="text-white bg-transparent"
                // style={{ backgroundColor: "transparent", color: "white" }}
              >
                <BottomNavigationAction
                  label="Dashboard"
                  className={
                    location.pathname === "/signup"
                      ? "text-white border-b-2 border-b-white border-solid"
                      : "text-red-200"
                  }
                  onClick={() => navigate("/dashboard")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  // style={
                  //   location.pathname === "/dashboard"
                  //     ? {
                  //         color: "white",
                  //         borderBottomColor: "white",
                  //         borderBottomWidth: "2px",
                  //         borderBottomStyle: "solid",
                  //       }
                  //     : { color: "#f2ecec" }
                  // }
                  icon={<DashboardIcon />}
                />

                <BottomNavigationAction
                  label="Questions"
                  className={
                    location.pathname === "/signup"
                      ? "text-white border-b-2 border-b-white border-solid"
                      : "text-red-200"
                  }
                  onClick={() => navigate("/questions")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  // style={
                  //   location.pathname === "/questions"
                  //     ? {
                  //         color: "white",
                  //         borderBottomColor: "white",
                  //         borderBottomWidth: "2px",
                  //         borderBottomStyle: "solid",
                  //       }
                  //     : { color: "#f2ecec" }
                  // }
                  icon={<QuizIcon />}
                />

                <BottomNavigationAction
                  label="Profile"
                  className={
                    location.pathname === "/signup"
                      ? "text-white border-b-2 border-b-white border-solid"
                      : "text-red-200"
                  }
                  onClick={() => navigate("/profile")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  // style={
                  //   location.pathname === "/profile"
                  //     ? {
                  //         color: "white",
                  //         borderBottomColor: "white",
                  //         borderBottomWidth: "2px",
                  //         borderBottomStyle: "solid",
                  //       }
                  //     : { color: "#f2ecec" }
                  // }
                  icon={<AccountCircleRoundedIcon />}
                />

                <BottomNavigationAction
                  label="Logout"
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  className="navbar-link text-white"
                  // style={{ color: "#f2ecec" }}
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
                  src="/img/MedExpert.svg"
                  className="h-48"
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
              <BottomNavigation
                showLabels
                className="bg-transparent text-white"
                // style={{ backgroundColor: "transparent", color: "white" }}
              >
                <BottomNavigationAction
                  label="Home"
                  // className="navbar-link"
                  onClick={() => navigate("/")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  className={
                    location.pathname === "/signup"
                      ? "text-white border-b-2 border-b-white border-solid"
                      : "text-white"
                  }
                  // style={
                  //   location.pathname === "/"
                  //     ? {
                  //         color: "white",
                  //         borderBottomColor: "white",
                  //         borderBottomWidth: "2px",
                  //         borderBottomStyle: "solid",
                  //       }
                  //     : { color: "white" }
                  // }
                  icon={<Home />}
                />
                <BottomNavigationAction
                  label="Login"
                  // className="navbar-link"
                  onClick={() => navigate("/login")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  className={
                    location.pathname === "/signup"
                      ? "text-white border-b-2 border-b-white border-solid"
                      : "text-red-200"
                  }
                  // style={
                  //   location.pathname === "/login"
                  //     ? {
                  //         color: "white",
                  //         borderBottomColor: "white",
                  //         borderBottomWidth: "2px",
                  //         borderBottomStyle: "solid",
                  //       }
                  //     : { color: "#f2ecec" }
                  // }
                  icon={<LoginIcon />}
                />
                <BottomNavigationAction
                  label="Sign Up"
                  // className="navbar-link"
                  onClick={() => navigate("/signup")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  className={
                    location.pathname === "/signup"
                      ? "text-white border-b-2 border-b-white border-solid"
                      : "text-red-200"
                  }
                  // style={
                  //   location.pathname === "/signup"
                  //     ? {
                  //         color: "white",
                  //         borderBottomColor: "white",
                  //         borderBottomWidth: "2px",
                  //         borderBottomStyle: "solid",
                  //       }
                  //     : { color: "#f2ecec" }
                  // }
                  icon={<PersonAddIcon />}
                />
              </BottomNavigation>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
