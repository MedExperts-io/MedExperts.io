import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const recordUserFeedback = createAsyncThunk(
  "recordUserFeedback",
  async ({ userId, surveyResponse }) => {
    try {
      const { data } = await axios.post(
        `/api/user_feedback/response`,
        {
          userId: userId,
          surveyResponse: surveyResponse,
        },
        {
          headers: {
            authorization: window.localStorage.getItem("token"),
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const user_FeedbackSlice = createSlice({
  name: "user_Feedback",
  initialState: {
    response: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(recordUserFeedback.fulfilled, (state, action) => {
      state.response = action.payload;
    });
  },
});

export default user_FeedbackSlice.reducer;
