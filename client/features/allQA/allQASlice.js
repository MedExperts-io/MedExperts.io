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
        //at the end we want an array of questions, and the questions should have the key topicSubcategory inside of them.
        //The property is an object that contains all of topics and their subcategories in an array.
        let allTopicSubQA = action.payload[0].slice();
        let allQA = action.payload[1].slice();
        let qaTopicSubcat = {};

        console.log("allTopicSubQA ONE", allTopicSubQA, "allQA ONE", allQA);

        // for (let i = 0; i < allTopicSubQA.length; i++) {
        //   const questionId =
        //     allTopicSubQA[i]["topic_question"]["question_answer"]["id"];
        //   const topic = allTopicSubQA[i]["topic_question"]["topic"]["topic"];
        //   const subcategory = allTopicSubQA[i]["subcategory"]["subcategory"];

        //   if (!qaTopicSubcat[questionId]) {
        //     qaTopicSubcat[questionId] = {};
        //   }
        //   if (!qaTopicSubcat[questionId][topic]) {
        //     qaTopicSubcat[questionId][topic] = [];
        //   }
        //   qaTopicSubcat[questionId][topic].push(subcategory);
        // }

        console.log("allTopicSubQA TWO", allTopicSubQA, "allQA TWO", allQA);

        // allTopicSubQA = allTopicSubQA.map((question) => {
        //   return {
        //     ...question,
        //     topicSubcategory:
        //       qaTopicSubcat[
        //         question["topic_question"]["question_answer"]["id"]
        //       ],
        //   };
        // });

        // for (let i = 0; i < allQA.length; i++) {
        //   const questionId =
        //     allQA[i]["topic_question"]["question_answer"]["id"];
        //   const topic = allQA[i]["topic_question"]["topic"]["topic"];
        //   const subcategory = allQA[i]["subcategory"]["subcategory"];

        //   if (!qaTopicSubcat[questionId]) {
        //     qaTopicSubcat[questionId] = {};
        //   }
        //   if (!qaTopicSubcat[questionId][topic]) {
        //     qaTopicSubcat[questionId][topic] = [];
        //   }
        //   qaTopicSubcat[questionId][topic].push(subcategory);
        // }

        ///big break

        // let allQA = action.payload.map((question) => {
        //   let topicSubcat = {};

        //   // for (let i = 0; i < question["topic_questions"].length; i++) {
        //   //   const key = question["topic_questions"][i]["topic"]["topic"];
        //   //   const property = question["topic_questions"][i][
        //   //     "subcategories"
        //   //   ].map((subCat) => {
        //   //     return subCat["subcategory"];
        //   //   });

        //   //   topicSubcat[key] = property;
        //   // }

        //   return {
        //     ...question,
        //     topicSubcategory: topicSubcat,
        //   };
        // });

        // let topicQs = {};
        // for (let i = 0; i < allQA.length; i++) {
        //   const question = allQA[i];
        //   for (let j = 0; j < question["topic_questions"].length; j++) {
        //     const topic = question["topic_questions"][j]["topic"]["topic"];
        //     if (!topicQs[topic]) {
        //       topicQs[topic] = [];
        //     }
        //     topicQs[topic].push(question);
        //   }

        let topicQs = {};

        state.questionsAnswers = "plceholder";
        state.topic_questions = "placeholder";

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
      .addCase(fetchAllQuestionsAnswers.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(NewQuestionsAnswers.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default allQASlice.reducer;
