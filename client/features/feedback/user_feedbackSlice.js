import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// <-------- For admin's dashboard: ALL survey data------->
export const fetchAllUserFeedback = createAsyncThunk(
  "fetchAllUserFeedback",
  async () => {
    try {
      const { data } = await axios.get(`api/user_feedback`, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const recordUserFeedback = createAsyncThunk(
  "recordUserFeedback",
  async ({ Source, Frequency, Satisfaction, OtherFeedback, Features }) => {
    const { data } = await axios.post(
      `/api/user_feedback/response`,
      {
        Source,
        Frequency,
        Satisfaction,
        OtherFeedback,
        Features,
      },
      {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      }
    );
    return data;
  }
);

export const user_FeedbackSlice = createSlice({
  name: "user_Feedback",
  initialState: {
    response: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(recordUserFeedback.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(recordUserFeedback.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(fetchAllUserFeedback.fulfilled, (state, action) => {
        state.response = action.payload;
      });
  },
});

export default user_FeedbackSlice.reducer;
