import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const token = window.localStorage.getItem("token");

export const fetchAllQuestionsAnswers = createAsyncThunk(
  "fetchQAs",
  async () => {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.get(`/api/questions`, {
      headers: {
        authorization: token,
      },
    });
    // console.log("THUNK", data);
    return data;
  }
);

export const allQASlice = createSlice({
  name: "allQA",
  initialState: {
    questionsAnswers: [],
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
        state.loading = false;
      })
      .addCase(fetchAllQuestionsAnswers.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default allQASlice.reducer;
