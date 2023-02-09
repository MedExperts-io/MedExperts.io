import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = window.localStorage.getItem("token");

// --------For admin's dashboard analytics (aggregate)--------------
export const fetchAllUserQuestions = createAsyncThunk(
  "fetchAllUserQuestions",
  async () => {
    try {
      const { data } = await axios.get(`/api/user_questions`, {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// --------For admin's dashboard analytics (by expertise)--------------
export const fetchExpertiseQuestions = createAsyncThunk("fetchExpertiseQuestions", async () => {
  try {
    const { data } = await axios.get(`/api/user_questions/expertise/all`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

// --------For logged in user's dashboard analytics--------------
export const fetchUserQuestions = createAsyncThunk(
  "fetchUserQuestions",
  async (userId) => {
    try {
      const { data } = await axios.get(`/api/user_questions/${userId}`, {
        headers: {
          authorization: token,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// --------TO FAVORITE, UNFAVORITE, ANSWERED OR NOT--------------

export const updateUserQuestion = createAsyncThunk(
  "updateUserQuestion",
  async ({ userId, questionAnswerId }) => {
    try {
      const { data } = await axios.put(
        `/api/user_questions/${userId}`,
        {
          questionAnswerId: questionAnswerId,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log("THUNK", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// --------TO STORE USER INPUT--------------
export const updateUserQuestionInput = createAsyncThunk("updateUserQuestionInput", async ({ userId, questionAnswerId, userInput, answered, category, level, userExpertise }) => {
  try {
    const { data } = await axios.post(`/api/user_questions/${userId}`, {
      questionAnswerId: questionAnswerId,
      userInput: userInput,
      answered: answered,
      category: category,
      level: level,
      userExpertise: userExpertise,
    });
    // console.log("THUNK", data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const allUser_QuestionsSlice = createSlice({
  name: "allUser_Questions",
  initialState: {
    allUserQuestions: [],
    UserQuestions: [],
    userEasy: [],
    userModerate: [],
    userHard: [],
    currentUserQuestion: {},
    expertiseQuestions: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUserQuestions.fulfilled, (state, action) => {
        state.allUserQuestions = action.payload;
      })
      .addCase(fetchExpertiseQuestions.fulfilled, (state, action) => {
        state.expertiseQuestions = action.payload;
      })
      .addCase(fetchUserQuestions.fulfilled, (state, action) => {
        state.UserQuestions = action.payload;
        state.userEasy = action.payload.filter(
          (question) => question.level === "Easy" && question.userInput
        );
        state.userModerate = action.payload.filter(
          (question) => question.level === "Moderate" && question.userInput
        );
        state.userHard = action.payload.filter(
          (question) => question.level === "Hard" && question.userInput
        );
      })
      .addCase(updateUserQuestion.fulfilled, (state, action) => {
        // console.log("FAVORITED ACTION PAYLOAD", action.payload);
        state.currentUserQuestion = action.payload;
      })
      .addCase(updateUserQuestionInput.fulfilled, (state, action) => {
        state.currentUserQuestion = action.payload;
      });
  },
});

export default allUser_QuestionsSlice.reducer;
