import { me } from "./store";
import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector, Navigate } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "../features/loading/LoadingScreen";
import MainLandingPage from "../features/landingPage/MainLandingPage";
const QuestionsAnswers = lazy(() => import("../features/allQA/AllQA"));
const Login = lazy(() => import("../features/auth/Login"));
const SignUp = lazy(() => import("../features/auth/Signup"));
const Profile = lazy(() => import("../features/auth/Profile"));
const RequestNewPassword = lazy(() => import("../features/auth/RequestNewPW"));
const ResetPassword = lazy(() => import("../features/auth/ResetPassword"));
const PasswordRequestConfirmation = lazy(() =>
  import("../features/auth/PasswordRequestConfirmation")
);
const SingleQuestion = lazy(() =>
  import("../features/singleQuestion/SingleQuestion")
);
const Dashboard = lazy(() => import("../features/landingPage/Dashboard"));
const EditQA = lazy(() => import("../features/singleQuestion/EditQA"));
const VerifyEmail = lazy(() => import("../features/auth/VerifyEmail"));
const AddQuestion = lazy(() => import("../features/addQ/AddQuestion"));
const NoExist = lazy(() => import("../features/doesNotExist/NoExist"));
const ContactUs = lazy(() => import("../features/contact/ContactUs"));
const Testing = lazy(() => import("../features/tailwindTest/Testing"));

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <Suspense fallback={<LoadingScreen />}>
        {isLoggedIn ? (
          <Routes>
            <Route path="/*" element={<NoExist />} />
            <Route path="/" element={<MainLandingPage />} />
            <Route
              path="/dashboard"
              element={<Dashboard isLoggedIn={isLoggedIn} />}
            />
            <Route path="/questions" element={<QuestionsAnswers />} />
            <Route
              path="/questions/topic/:topic"
              element={<QuestionsAnswers />}
            />
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
            <Route path="/contact" element={<ContactUs />} />
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
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/tailwind/*" element={<Testing />} />
          </Routes>
        )}
      </Suspense>
    </div>
  );
};

export default AppRoutes;
