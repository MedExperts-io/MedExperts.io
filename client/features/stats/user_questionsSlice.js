import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = window.localStorage.getItem("token");

export const fetchAllUserQuestions = createAsyncThunk("fetchAllUserQuestions", async () => {
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
});

export const fetchUserQuestions = createAsyncThunk("fetchUserQuestions", async (userId) => {
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
});

export const updateUserQuestion = createAsyncThunk("fetchUserQuestions", async ({ userId, questionAnswerId, favorite, userInput, answered, showExplanation }) => {
  try {
    const { data } = await axios.put(
      `/api/user_questions/${userId}`,
      {
        questionAnswerId: questionAnswerId,
        favorite: favorite,
        userInput: userInput,
        answered: answered,
        showExplanation: showExplanation,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(data);
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
        console.log("User_Questions", action.payload);
        state.UserQuestions = action.payload;
      })
      .addCase(fetchAllUserQuestions.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default allUser_QuestionsSlice.reducer;
