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
  async ({userId, questionAnswerId }) => {
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
export const updateUserQuestionInput = createAsyncThunk(
  "updateUserQuestionInput",
  async ({ userId, questionAnswerId, userInput, answered, category,level }) => {
    try {
      const { data } = await axios.post(
        `/api/user_questions/${userId}`,
        {
          questionAnswerId: questionAnswerId,
          userInput: userInput,
          answered: answered,
          category: category,
          level:level,
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

export const allUser_QuestionsSlice = createSlice({
  name: "allUser_Questions",
  initialState: {
    allUserQuestions: [],
    UserQuestions: [],
    currentUserQuestion: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUserQuestions.fulfilled, (state, action) => {
        console.log("builder function", action);
        state.allUserQuestions = action.payload;
      })
      .addCase(fetchUserQuestions.fulfilled, (state, action) => {
        console.log("User_Questions", action.payload);
        state.UserQuestions = action.payload;
      })
      .addCase(updateUserQuestion.fulfilled, (state, action) => {
        console.log("FAVORITED ACTION PAYLOAD", action.payload);
        //state.UserQuestions = action.payload;

        state.currentUserQuestion = action.payload;
      })
      .addCase(updateUserQuestionInput.fulfilled, (state, action) => {
        state.currentUserQuestion = action.payload;
      });
  },
});

export default allUser_QuestionsSlice.reducer;
