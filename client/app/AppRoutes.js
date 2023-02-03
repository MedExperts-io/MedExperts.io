import React, { useEffect } from "react";
import { useDispatch, useSelector, Navigate } from "react-redux";
import { Route, Routes } from "react-router-dom";
import QuestionsAnswers from "../features/allQA/AllQA";
import LoginOrSignup from "../features/auth/LoginOrSignup";
import Home from "../features/home/Home";
import Profile from "../features/auth/Profile";
import RequestNewPassword from "../features/auth/RequestNewPW";
import { me } from "./store";
import ResetPassword from "../features/auth/ResetPassword";
import PasswordRequestConfirmation from "../features/auth/PasswordRequestConfirmation";
import SingleQuestion from "../features/singleQuestion/SingleQuestion";
import LoadingScreen from "../features/loading/LoadingScreen";
import LandingPage from "../features/home/LandingPage";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {loading && <LoadingScreen />}
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/questions" element={<QuestionsAnswers />} />
          <Route
            path="/questions/:singleQuestionId"
            element={<SingleQuestion />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginOrSignup />} />
          <Route path="/forgotPassword" element={<RequestNewPassword />} />
          <Route
            path="/forgotPassword/confirmation"
            element={<PasswordRequestConfirmation />}
          />
          <Route path="/resetPassword/*" element={<ResetPassword />} />
          {/* <Route path="/*" element={<LoginOrSignup />} /> */}
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
