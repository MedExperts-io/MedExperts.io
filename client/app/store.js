import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allQASliceReducer from "../features/allQA/allQASlice";
import allQuestionsSliceReducer from "../features/allQA/allQuestionsSlice";
import allUser_QuestionsSliceReducer from "../features/stats/user_questionsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    questionsAnswers: allQASliceReducer,
    questions: allQuestionsSliceReducer,
    userQuestions: allUser_QuestionsSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
