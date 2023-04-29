import { QuestionAnswer } from "@mui/icons-material";
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
    console.log("ALL QUESTions SLCIE:", "DATA IN SLICE:", data);
    return data;
  }
);

export const fetchTopicQuestionsAnswers = createAsyncThunk(
  "fetchTopicQuestionsAnswers",
  async (topic) => {
    const token = window.localStorage.getItem("token");

    const { data } = await axios.get(`/api/questions/topic/${topic}`, {
      headers: {
        authorization: token,
      },
    });
    console.log("TOPIC QUESTions SLCIE:", "DATA IN SLICE:", data);
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
    questionImageAltText,
    answerOptions,
    correctAnswer,
    explanation,
    explanationImage,
    explanationImageAltText,
    explanationLinks,
    category,
    level,
  }) => {
    const { data } = await axios.post(
      `/api/questions`,
      {
        question,
        questionImage,
        questionImageAltText,
        answerOptions,
        correctAnswer,
        explanation,
        explanationImage,
        explanationImageAltText,
        explanationLinks,
        category,
        level,
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

export const allQASlice = createSlice({
  name: "allQA",
  initialState: {
    questionsAnswers: [],
    topic_questions: {},
    easy: [],
    moderate: [],
    hard: [],
    newQuestion: {},
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
        console.log(action.payload);
        const allQuestionsSubcategoriesSplit = action.payload.map(
          (question) => {
            if (!question.subcategories)
              return {
                ...question,
                subcategories: null,
              };
            return {
              ...question,
              subcategories: question.subcategories.split(","),
            };
          }
        );

        state.questionsAnswers = allQuestionsSubcategoriesSplit;
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
      })
      .addCase(fetchTopicQuestionsAnswers.fulfilled, (state, action) => {
        const topicQuestions = action.payload["topic_questions"].map(
          (question) => {
            if (!question.subcategories.length)
              return {
                ...question.question_answer,
                subcategories: null,
              };
            return {
              ...question.question_answer,
              subcategories: question.subcategories.map(
                (subcategory) => subcategory["subcategory"]
              ),
            };
          }
        );
        state.questionsAnswers = topicQuestions;
        state.easy = topicQuestions.filter(
          (question) => question.level === "Easy"
        );
        state.moderate = topicQuestions.filter(
          (question) => question.level === "Moderate"
        );
        state.hard = topicQuestions.filter(
          (question) => question.level === "Hard"
        );
        state.loading = false;
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
