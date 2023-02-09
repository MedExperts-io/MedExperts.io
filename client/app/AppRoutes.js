import React, { useEffect } from "react";
import { useDispatch, useSelector, Navigate } from "react-redux";
import { Route, Routes } from "react-router-dom";
import QuestionsAnswers from "../features/allQA/AllQA";
import LoginOrSignup from "../features/auth/LoginOrSignup";
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
import LandingPage from "../features/landingPage/LandingPage";
import AllQAadmin from "../features/allQA/AllQAadmin";
import EditQA from "../features/singleQuestion/EditQA";
import VerifyEmail from "../features/auth/VerifyEmail";

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
          <Route path="/*" element={<LandingPage isLoggedIn={isLoggedIn} />} />
          <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} />} />
          <Route path="/questions" element={<QuestionsAnswers />} />
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
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<RequestNewPassword />} />
          <Route
            path="/forgotPassword/confirmation"
            element={<PasswordRequestConfirmation />}
          />
          <Route path="/resetPassword/*" element={<ResetPassword />} />
          {/* <Route path="/" element={<VerifyEmail />} /> */}
          <Route path="/verifyEmail/*" element={<VerifyEmail />} />
          {/* <Route path="/*" element={<LoginOrSignup />} /> */}
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
