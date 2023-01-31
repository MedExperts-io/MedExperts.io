import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = window.localStorage.getItem("token");

export const fetchAllQuestionsAnswers = createAsyncThunk(
  "fetchQAs",
  async () => {
    const { data } = await axios.get(`/api/questions`, {
      headers: {
        authorization: token,
      },
    });
    // API placeholder until the routes are corrected
    console.log("THUNK", data);
    return data;
  }
);

export const allQASlice = createSlice({
  name: "allQA",
  initialState: {
    questionsAnswers: [],

    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllQuestionsAnswers.fulfilled, (state, action) => {
        console.log("builder function", action);
        state.questionsAnswers = action.payload;
      })
      .addCase(fetchAllQuestionsAnswers.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default allQASlice.reducer;
