import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = window.localStorage.getItem("token");

export const fetchSingleQuestion = createAsyncThunk(
  "fetchSingleQuestion",
  async (singleQuestionId) => {
    const { data } = await axios.get(`/api/questions/${singleQuestionId}`, {
      headers: {
        authorization: token,
      },
    });
    console.log('single Q inside Thunk');
    return data;
  }
);

const singleQuestionSlice = createSlice({
  name: "singleQuestion",
  initialState: {
    Question: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSingleQuestion.fulfilled, (state, action) => {
        state.Question = action.payload;
      })
      .addCase(fetchSingleQuestion.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default singleQuestionSlice.reducer;
