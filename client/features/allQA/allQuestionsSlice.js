import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllQuestions = createAsyncThunk("fetchQs", async () => {
  const { data } = await axios.get(``); // API placeholder until the routes are corrected
  console.log("THUNK", data);
  return data;
});

export const allQuestionsSlice = createSlice({
  name: "allQuestions",
  initialState: {
    questions: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllQuestions.fulfilled, (state, action) => {
        console.log("builder function", action);
        state.questions = action.payload;
      })
      .addCase(fetchAllQuestions.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default allQuestionsSlice.reducer;
