import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllQuestions = createAsyncThunk("fetchQuestions", async () => {
  const { data } = await axios.get(`/api/questions`);
  return data;
});

const allQuestionsSlice = createSlice({
  name: "allQuestions",
  initialState: {
    products: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllQuestions.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchAllQuestions.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default allQuestionsSlice.reducer;
