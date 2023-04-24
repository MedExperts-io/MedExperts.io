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

// <-------- For admin's dashboard: SATISFACTION RATINGS survey data------->
export const fetchSatisfactionFeedback = createAsyncThunk(
  "fetchSatisfactionFeedback",
  async () => {
    try {
      const { data } = await axios.get(`api/user_feedback/satisfaction`, {
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

// <-------- For admin's dashboard: SOURCE survey data------->
export const fetchSourceFeedback = createAsyncThunk(
  "fetchSourceFeedback",
  async () => {
    try {
      const { data } = await axios.get(`api/user_feedback/source`, {
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

// <-------- For admin's dashboard: SUGGESTED FEATURES survey data------->
export const fetchSuggestedFeaturesFeedback = createAsyncThunk(
  "fetchSuggestedFeaturesFeedback",
  async () => {
    try {
      const { data } = await axios.get(`api/user_feedback/suggestedFeatures`, {
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

// <-------- For admin's dashboard: OTHER Feedback survey data------->
export const fetchOtherFeedback = createAsyncThunk(
  "fetchOtherFeedback",
  async () => {
    try {
      const { data } = await axios.get(`api/user_feedback/otherFeedback`, {
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
    try {
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
    builder
      .addCase(recordUserFeedback.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(fetchAllUserFeedback.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(fetchSatisfactionFeedback.fulfilled, (state, action) => {
        state.response = action.payload;
      });
    // .addCase(fetchS.fulfilled, (state, action) => {
    //   state.response = action.payload;
    // })
    // .addCase(fetchAllUserFeedback.fulfilled, (state, action) => {
    //   state.response = action.payload;
    // });
  },
});

export default user_FeedbackSlice.reducer;
