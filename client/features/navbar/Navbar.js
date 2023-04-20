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
import { Container, Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("/");
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutAndRedirectHome = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="font-sans antialiased">
        <nav className="flex items-center justify-between flex-wrap p-6 bg-gradient-to-r from-red-500 to-red-800">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <Link to="/">
              <img
                src="/img/MedExpert.svg"
                className="text-white mt-4 md:w-60 sm:w-56"
                alt="Med Expert Logo"
              />
            </Link>
          </div>
          {/* RIGHT NAV */}
          <div className="block sm:hidden items-center">
            <button
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
              className="flex items-center px-3 py-2 text-white"
            >
              <svg
                className="fill-current h-10 w-10"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* MAIN LINKS */}
          {isLoggedIn ? (
            <div
              className={
                isOpen
                  ? "block w-full flex-grow sm:flex sm:items-center sm:w-auto"
                  : "hidden w-full flex-grow sm:flex sm:items-center sm:w-auto"
              }
            >
              <div className="sm:flex-grow text-white" />
              <div className="flex space-x-5 items-center">
                {/* DASHBOARD */}
                <div className="flex space-y-2">
                  <button
                    label="dashboard"
                    onClick={() => {
                      navigate("/dashboard");
                      setActive("dashboard");
                    }}
                    className={
                      active === "dashboard"
                        ? "navbutton border-b-2 border-b-white"
                        : "navbutton"
                    }
                  >
                    <DashboardIcon />
                    <span className="text-md xs:hidden py-1">Dashboard</span>
                  </button>
                </div>
                {/* QUESTIONS */}
                <div className="flex space-y-4">
                  <button
                    label="questions"
                    onClick={() => {
                      navigate("/questions");
                      setActive("questions");
                    }}
                    className={
                      active === "questions"
                        ? "navbutton border-b-2 border-b-white"
                        : "navbutton"
                    }
                  >
                    <QuizIcon />
                    <span className="text-md xs:hidden py-1">Questions</span>
                  </button>
                </div>
                {/* PROFILE */}
                <div className="flex space-y-2">
                  <button
                    label="profile"
                    onClick={() => {
                      navigate("/profile");
                      setActive("profile");
                    }}
                    className={
                      active === "profile"
                        ? "navbutton border-b-2 border-b-white"
                        : "navbutton"
                    }
                  >
                    <AccountCircleRoundedIcon />
                    <span className="text-md xs:hidden py-1">Profile</span>
                  </button>
                </div>
                {/* LOGOUT */}
                <div className="flex space-y-2">
                  <button
                    onClick={() => {
                      setActive("home");
                      logoutAndRedirectHome;
                    }}
                    label="logout"
                    className="navbutton"
                  >
                    <LogoutIcon />
                    <span className="text-md xs:hidden py-1">Log Out</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={
                isOpen
                  ? "block w-full flex-grow sm:flex sm:items-center sm:w-auto"
                  : "hidden w-full flex-grow sm:flex sm:items-center sm:w-auto"
              }
            >
              <div className="sm:flex-grow text-white" />
              <div className="flex flex-row space-x-5">
                {/* HOME */}
                <div className="flex space-y-2">
                  <button
                    label="home"
                    onClick={() => {
                      navigate("/");
                      setActive("home");
                    }}
                    className={
                      active === "home"
                        ? "navbutton border-b-2 border-b-white"
                        : "navbutton"
                    }
                  >
                    <Home />
                    <span className="text-md xs:hidden py-1">Home</span>
                  </button>
                </div>
                {/* LOGIN */}
                <div className="flex space-y-2">
                  <button
                    label="login"
                    onClick={() => {
                      navigate("/login");
                      setActive("login");
                    }}
                    className={
                      active === "login"
                        ? "navbutton border-b-2 border-b-white"
                        : "navbutton"
                    }
                  >
                    <LoginIcon />
                    <span className="text-md xs:hidden py-1">Login</span>
                  </button>
                </div>
                {/* SIGNUP */}
                <div className="flex space-y-2">
                  <button
                    label="signup"
                    onClick={() => {
                      navigate("/signup");
                      setActive("signup");
                    }}
                    className={
                      active === "signup"
                        ? "navbutton border-b-2 border-b-white"
                        : "navbutton"
                    }
                  >
                    <PersonAddIcon />
                    <span className="text-md xs:hidden py-1">Sign Up</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default SiteNavbar;
