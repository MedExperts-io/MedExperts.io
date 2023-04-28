import { Home } from "@mui/icons-material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import QuizIcon from "@mui/icons-material/Quiz";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import React, { useState } from "react";
import { Container, Navbar, Modal, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const SiteNavbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  // const handleClose = () => setShowFeedbackModal(false);
  // const handleFeedback = () => {
  //   navigate("/feedback");
  //   setShowFeedbackModal(false);
  // };
  // const handleShow = () => setShowFeedbackModal(true);

  const logoutAndRedirectHome = async () => {
    // setShowFeedbackModal(true);
    await dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect className="navbar" expand="md" variant="dark">
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
              <BottomNavigation
                showLabels
                style={{ backgroundColor: "transparent", color: "white" }}
              >
                <BottomNavigationAction
                  label="Dashboard"
                  className="navbar-link"
                  onClick={() => navigate("/dashboard")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  style={
                    location.pathname === "/dashboard"
                      ? {
                          color: "white",
                          borderBottomColor: "white",
                          borderBottomWidth: "2px",
                          borderBottomStyle: "solid",
                        }
                      : { color: "#f2ecec" }
                  }
                  icon={<DashboardIcon />}
                />

                <BottomNavigationAction
                  label="Questions"
                  className="navbar-link"
                  onClick={() => navigate("/questions")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  style={
                    location.pathname === "/questions"
                      ? {
                          color: "white",
                          borderBottomColor: "white",
                          borderBottomWidth: "2px",
                          borderBottomStyle: "solid",
                        }
                      : { color: "#f2ecec" }
                  }
                  icon={<QuizIcon />}
                />

                <BottomNavigationAction
                  label="Profile"
                  className="navbar-link"
                  onClick={() => navigate("/profile")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  style={
                    location.pathname === "/profile"
                      ? {
                          color: "white",
                          borderBottomColor: "white",
                          borderBottomWidth: "2px",
                          borderBottomStyle: "solid",
                        }
                      : { color: "#f2ecec" }
                  }
                  icon={<AccountCircleRoundedIcon />}
                />

                <BottomNavigationAction
                  label="Logout"
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  className="navbar-link"
                  style={{ color: "#f2ecec" }}
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
              <BottomNavigation
                showLabels
                style={{ backgroundColor: "transparent", color: "white" }}
              >
                <BottomNavigationAction
                  label="Home"
                  className="navbar-link"
                  onClick={() => navigate("/")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  style={
                    location.pathname === "/"
                      ? {
                          color: "white",
                          borderBottomColor: "white",
                          borderBottomWidth: "2px",
                          borderBottomStyle: "solid",
                        }
                      : { color: "white" }
                  }
                  icon={<Home />}
                />
                <BottomNavigationAction
                  label="Login"
                  className="navbar-link"
                  onClick={() => navigate("/login")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  style={
                    location.pathname === "/login"
                      ? {
                          color: "white",
                          borderBottomColor: "white",
                          borderBottomWidth: "2px",
                          borderBottomStyle: "solid",
                        }
                      : { color: "#f2ecec" }
                  }
                  icon={<LoginIcon />}
                />
                <BottomNavigationAction
                  label="Sign Up"
                  className="navbar-link"
                  onClick={() => navigate("/signup")}
                  sx={{
                    "&& .MuiTouchRipple-rippleVisible": {
                      color: "rgba(255, 255, 255, 0.354)",
                    },
                  }}
                  style={
                    location.pathname === "/signup"
                      ? {
                          color: "white",
                          borderBottomColor: "white",
                          borderBottomWidth: "2px",
                          borderBottomStyle: "solid",
                        }
                      : { color: "#f2ecec" }
                  }
                  icon={<PersonAddIcon />}
                />
              </BottomNavigation>
            </Navbar.Collapse>
          </>
        )}
      </Container>

      {/* <Modal show={showFeedbackModal} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ border: "none", paddingTop: "2px", paddingBottom: "2px" }}
        ></Modal.Header>
        <Modal.Body style={{ border: "none", paddingBottom: "2px" }}>
          <Row>
            <Col>
              <p style={{ fontWeight: "500", fontSize: "24px" }}>
                Before you go...
              </p>
              <p style={{ fontWeight: "300", fontSize: "18px" }}>
                We'd love to know what you think about MedExperts.
              </p>
              <Button onClick={handleFeedback}> Take our survey!</Button>
            </Col>
            <Col>
              <img src="survey.png" />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ border: "none", paddingBottom: "2px" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Navbar>
  );
};

export default SiteNavbar;
