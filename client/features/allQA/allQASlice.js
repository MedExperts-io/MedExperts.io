import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = window.localStorage.getItem("token");

export const fetchAllQuestionsAnswers = createAsyncThunk(
  "fetchQAs",
  async () => {
    const token = window.localStorage.getItem("token");

    const { data } = await axios.get(`/api/questions`, {
      headers: {
        authorization: token,
      },
    });
    // API placeholder until the routes are corrected
    return data;
  }
);

// export const NewQuestionsAnswers = createAsyncThunk("NewQAs", async () => {
//   const { data } = await axios.post(`/api/questions`,  {
//     headers: {
//       authorization: token,
//     },
//   });
//   return data;
// });

export const NewQuestionsAnswers = createAsyncThunk(
  "NewQAs",
  async ({
    question,
    questionImage,
    answerOptions,
    correctAnswer,
    explanation,
    explanationImage,
    explanationLinks,
    category,
    level,
  }) => {
    const { data } = await axios.post(
      `/api/questions/`,
      {
        question,
        questionImage,
        answerOptions,
        correctAnswer,
        explanation,
        explanationImage,
        explanationLinks,
        category,
        level,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  }
);

export const allQASlice = createSlice({
  name: "allQA",
  initialState: {
    questionsAnswers: [],
    easy: [],
    moderate: [],
    hard: [],
    newQuestion: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllQuestionsAnswers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllQuestionsAnswers.fulfilled, (state, action) => {
        state.questionsAnswers = action.payload;
        state.easy = action.payload.filter(
          (question) => question.level === "Easy"
        );
        state.moderate = action.payload.filter(
          (question) => question.level === "Moderate"
        );
        state.hard = action.payload.filter(
          (question) => question.level === "Hard"
        );
        state.loading = false;
      })
      .addCase(NewQuestionsAnswers.fulfilled, (state, action) => {
        state.newQuestion = action.payload;
        // console.log(action.payload)
      })
      .addCase(fetchAllQuestionsAnswers.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(NewQuestionsAnswers.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default allQASlice.reducer;
