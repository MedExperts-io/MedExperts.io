import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allQASliceReducer from "../features/allQA/allQASlice";
import allQuestionsSliceReducer from "../features/allQA/allQuestionsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    questionsAnswers: allQASliceReducer,
    questions: allQuestionsSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
