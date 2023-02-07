import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const token = window.localStorage.getItem("token");

export const fetchAllQuestionsAnswers = createAsyncThunk("fetchQAs", async () => {
  const token = window.localStorage.getItem("token");
  const { data } = await axios.get(`/api/questions`, {
    headers: {
      authorization: token,
    },
  });
  // API placeholder until the routes are corrected
  console.log("THUNK", data);
  return data;
});

export const createAQuestion = createAsyncThunk("createAQuestion", async ({ question, correctAnswer, image }) => {
  const token = window.localStorage.getItem("token");
  const { data } = await axios.post(`/api/questions`, { question: question, correctAnswer: correctAnswer, questionImage: image });
  console.log("submitted question data", data);
  return data;
});

export const allQASlice = createSlice({
  name: "allQA",
  initialState: {
    questionsAnswers: [],
    easy: [],
    moderate: [],
    hard: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllQuestionsAnswers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllQuestionsAnswers.fulfilled, (state, action) => {
        console.log("builder function", action);
        state.questionsAnswers = action.payload;
        state.easy = action.payload.filter((question) => question.level === "Easy");
        state.moderate = action.payload.filter((question) => question.level === "Moderate");
        state.hard = action.payload.filter((question) => question.level === "Hard");
        state.loading = false;
      })
      .addCase(createAQuestion.fulfilled, (state, action) => {
        console.log("create a question ACTTION.PAYLOAD", action.payload);
      })
      .addCase(fetchAllQuestionsAnswers.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default allQASlice.reducer;
