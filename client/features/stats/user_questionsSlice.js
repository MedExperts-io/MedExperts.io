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
          authorization: window.localStorage.getItem("token"),
        },
      });
      return data
    } catch (error) {
      console.log(error);
    }
  }
);

// --------For admin's dashboard analytics (aggregate)--------------
export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  try {
    const { data } = await axios.get(`/api/users`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchByAnswerFrequency = createAsyncThunk(
  "fetchByAnswerFrequency",
  async () => {
    try {
      const { data } = await axios.get(`/api/user_questions/frequency`, {
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

export const fetchPercentCorrect = createAsyncThunk(
  "fetchPercentCorrect",
  async () => {
    try {
      const { data } = await axios.get(`/api/user_questions/percent_correct`, {
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

export const fetchActiveQAs = createAsyncThunk("fetchActiveQAs", async () => {
  try {
    const { data } = await axios.get(`/api/user_questions/all_active`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

// --------For admin's dashboard analytics (by expertise)--------------
export const fetchExpertiseQuestions = createAsyncThunk(
  "fetchExpertiseQuestions",
  async () => {
    try {
      const { data } = await axios.get(`/api/user_questions/expertise/all`, {
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

// --------For logged in user's dashboard analytics--------------
export const fetchUserQuestions = createAsyncThunk(
  "fetchUserQuestions",
  async () => {
    try {
      const { data } = await axios.get(`/api/user_questions/dashboard`, {
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

// --------TO FAVORITE, UNFAVORITE--------------
export const updateUserQuestion = createAsyncThunk(
  "updateUserQuestion",
  async ({ questionAnswerId }) => {
    try {
      const { data } = await axios.put(
        `/api/user_questions/favorite`,
        {
          questionAnswerId: questionAnswerId,
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

// --------TO STORE USER INPUT--------------
export const updateUserQuestionInput = createAsyncThunk(
  "updateUserQuestionInput",
  async ({
    questionAnswerId,
    userInput,
    answered,
    category,
    level,
    userExpertise,
  }) => {
    try {
      const { data } = await axios.post(
        `/api/user_questions/response`,
        {
          questionAnswerId: questionAnswerId,
          userInput: userInput,
          answered: answered,
          category: category,
          level: level,
          userExpertise: userExpertise,
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

export const allUser_QuestionsSlice = createSlice({
  name: "allUser_Questions",
  initialState: {
    allUserQuestions: [],
    allUsers: [],
    UserQuestions: [],
    userEasy: [],
    userModerate: [],
    userHard: [],
    currentUserQuestion: {},
    expertiseQuestions: {},
    mostAnswered: [],
    leastAnswered: [],
    mostCorrect: [],
    leastCorrect: [],
    activeQAs: [],
    activeUserQAs: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllUserQuestions.fulfilled, (state, action) => {
        state.allUserQuestions = action.payload;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload;
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
        state.currentUserQuestion = action.payload;
      })
      .addCase(updateUserQuestionInput.fulfilled, (state, action) => {
        state.currentUserQuestion = action.payload;
      })
      .addCase(fetchByAnswerFrequency.fulfilled, (state, action) => {
        const allQAs = action.payload[0];
        const frequency = action.payload[1];

        const allQuestions = allQAs.map((question) => {
          return {
            ...question,
            frequency: frequency[question.id],
          };
        });
        const sortedByFrequency = allQuestions.sort(
          (a, b) => b.frequency - a.frequency
        );
        const sortedByFrequencyReverse = sortedByFrequency.slice().reverse();

        state.mostAnswered = sortedByFrequency;
        state.leastAnswered = sortedByFrequencyReverse;
      })
      .addCase(fetchPercentCorrect.fulfilled, (state, action) => {
        const allQAs = action.payload[0];
        const frequency = action.payload[1];

        const allQuestions = allQAs.map((question) => {
          return {
            ...question,
            percentCorrect: Math.round(
              (frequency[question.id]["right"] /
                frequency[question.id]["total"]) *
                100
            ),
          };
        });
        const sortedByPercentCorrect = allQuestions.sort(
          (a, b) => b.percentCorrect - a.percentCorrect
        );
        const sortedByPercentCorrectReverse = sortedByPercentCorrect
          .slice()
          .reverse();

        state.mostCorrect = sortedByPercentCorrect;
        state.leastCorrect = sortedByPercentCorrectReverse;
      })
      .addCase(fetchActiveQAs.fulfilled, (state, action) => {
        state.activeQAs = action.payload[0];
        state.activeUserQAs = action.payload[1];
      });
  },
});

export default allUser_QuestionsSlice.reducer;
