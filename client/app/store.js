import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allQASliceReducer from "../features/allQA/allQASlice";
import allUser_QuestionsSliceReducer from "../features/stats/user_questionsSlice";
import SingleQuestionSliceReducer from "../features/singleQuestion/singleQuestionSlice";
import contactFormSliceReducer from "../features/contact/contactFormSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    questionsAnswers: allQASliceReducer,
    SingleQuestion: SingleQuestionSliceReducer,
    userQuestions: allUser_QuestionsSliceReducer,
    contactForm: contactFormSliceReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
