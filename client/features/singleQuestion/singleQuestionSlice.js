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
    console.log("single Q inside Thunk", data);
    return data;
  }
);

export const fetchQAVersions = createAsyncThunk(
  "fetchQAVersions",
  async (singleQuestionId) => {
    const { data } = await axios.get(`/api/questions/${singleQuestionId}`, {
      headers: {
        authorization: token,
      },
    });
    console.log("Q all versions inside Thunk", data);
    return data;
  }
);

export const deleteSingleQuestion = createAsyncThunk(
  "deleteSingleQuestion",
  async (singleQuestionId) => {
    const { data } = await axios.delete(`/api/questions/${singleQuestionId}`, {
      headers: {
        authorization: token,
      },
    });
    console.log("Delete Thunk", data);
    return data;
  }
);

const singleQuestionSlice = createSlice({
  name: "singleQuestion",
  initialState: {
    qaAllVersions: [],
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
      })
      .addCase(fetchQAVersions.fulfilled, (state, action) => {
        state.qaAllVersions = action.payload;
      })
      .addCase(deleteSingleQuestion.fulfilled, (state, action) => {
        state.Question = action.payload;
      });
  },
});

export default singleQuestionSlice.reducer;
