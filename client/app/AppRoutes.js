import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import QuestionsAnswers from "../features/allQA/AllQA";
import LoginOrSignup from "../features/auth/LoginOrSignup";
import Home from "../features/home/Home";
import Profile from "../features/auth/Profile";
import RequestNewPassword from "../features/auth/RequestNewPW";
import { me } from "./store";
import ResetPassword from "../features/auth/ResetPassword";
import PasswordRequestConfirmation from "../features/auth/PasswordRequestConfirmation";

const AppRoutes = () => {
  const isLoggedIn = useSelector(
    (state) => !!state.auth.me.id
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/questions"
            element={<QuestionsAnswers />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<LoginOrSignup />} />
          <Route
            path="/forgotPassword"
            element={<RequestNewPassword />}
          />
          <Route
            path="/forgotPassword/confirmation"
            element={<PasswordRequestConfirmation />}
          />
          <Route
            path="/resetPassword/*"
            element={<ResetPassword />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
