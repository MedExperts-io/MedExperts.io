import React, { useEffect } from "react";
import { useDispatch, useSelector, Navigate } from "react-redux";
import { Route, Routes } from "react-router-dom";
import QuestionsAnswers from "../features/allQA/AllQA";

import Login from "../features/auth/Login";
import SignUp from "../features/auth/Signup";
// import Home from "../features/home/Home";
import Profile from "../features/auth/Profile";
import RequestNewPassword from "../features/auth/RequestNewPW";
import { me } from "./store";
import ResetPassword from "../features/auth/ResetPassword";
import PasswordRequestConfirmation from "../features/auth/PasswordRequestConfirmation";
import SingleQuestion from "../features/singleQuestion/SingleQuestion";
import LoadingScreen from "../features/loading/LoadingScreen";
import Dashboard from "../features/landingPage/Dashboard";
import AllQAadmin from "../features/allQA/AllQAadmin";
import EditQA from "../features/singleQuestion/EditQA";
import VerifyEmail from "../features/auth/VerifyEmail";
import AddQuestion from "../features/addQ/AddQuestion";
import MainLandingPage from "../features/landingPage/MainLandingPage";
import NoExist from "../features/doesNotExist/NoExist";
import Testing from "../features/tailwindTest/testing";

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
          <Route path="/*" element={<NoExist />} />
          <Route path="/" element={<MainLandingPage />} />
          <Route
            path="/dashboard"
            element={<Dashboard isLoggedIn={isLoggedIn} />}
          />
          <Route path="/questions" element={<QuestionsAnswers />} />
          <Route path="/addQuestion" element={<AddQuestion />} />
          {/* <Route path="/questions/admin" element={<AllQAadmin />} /> */}
          <Route
            path="/questions/:singleQuestionId"
            element={<SingleQuestion />}
          />
          <Route
            path="/questions/:singleQuestionId/edit"
            element={<EditQA />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tailwind/*" element={<Testing />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<NoExist />} />
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<RequestNewPassword />} />
          <Route
            path="/forgotPassword/confirmation"
            element={<PasswordRequestConfirmation />}
          />
          <Route path="/resetPassword/*" element={<ResetPassword />} />
          <Route path="/verifyEmail/*" element={<VerifyEmail />} />
          <Route path="/tailwind/*" element={<Testing />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
