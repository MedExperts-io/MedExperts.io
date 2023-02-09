import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
  CONSTANT VARIABLES
*/
const TOKEN = "token";

/*
  THUNKS
*/
export const me = createAsyncThunk("auth/me", async () => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if (token) {
      const res = await axios.get("/auth/me", {
        headers: {
          authorization: token,
        },
      });
      return res.data;
    } else {
      return {};
    }
  } catch (err) {
    if (err.response.data) {
      return thunkAPI.rejectWithValue(err.response.data);
    } else {
      return "There was an issue with your request.";
    }
  }
});

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (
    { firstName, lastName, email, password, expertise, school, method },
    thunkAPI
  ) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        firstName,
        lastName,
        email,
        password,
        expertise,
        school,
      });
      if (method === "login") {
        window.localStorage.setItem(TOKEN, res.data.token);
        thunkAPI.dispatch(me());
      } else {
        return res.data;
      }
    } catch (err) {
      if (err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data);
      } else {
        return "There was an issue with your request.";
      }
    }
  }
);

export const verifyNewUserEmail = createAsyncThunk(
  "auth/verifyNewUserEmail",
  async ({ token, tempId }) => {
    const { data } = await axios.get(
      `/auth/verifyEmail/?token=${token}&tempId=${tempId}`
    );
    return data;
  }
);

export const editProfile = createAsyncThunk(
  "auth/profile",
  async ({ firstName, lastName, email, expertise }) => {
    const token = window.localStorage.getItem(TOKEN);

    if (token) {
      const { data } = await axios.put(
        "/auth/profile",
        { firstName, lastName, email, expertise },
        { headers: { authorization: token } }
      );
      return data;
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ email }) => {
    const { data } = await axios.post("/auth/forgotPassword", { email });

    return data;
  }
);

export const isResetLinkValid = createAsyncThunk(
  "auth/isResetLinkValid",
  async ({ token, uid }) => {
    const { data } = await axios.get(
      `/auth/resetPassword/?token=${token}&uid=${uid}`
    );
    return data;
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ password1, password2, token, uid }) => {
    const { data } = await axios.post("/auth/resetPassword", {
      password1,
      password2,
      token,
      uid,
    });

    return data;
  }
);

/*
  SLICE
*/
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: {},
    error: null,
    // loading: false,
  },
  reducers: {
    logout(state, action) {
      window.localStorage.removeItem(TOKEN);
      state.me = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(me.pending, (state, action) => {
    //   state.loading = true;
    // });
    builder.addCase(me.fulfilled, (state, action) => {
      // state.loading = false;
      state.me = action.payload;
    });
    builder.addCase(me.rejected, (state, action) => {
      state.error = action.error;
    });
    // builder.addCase(authenticate.pending, (state, action) => {
    //   state.loading = true;
    // });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.error = action.payload;
      // state.loading = false;
    });
    builder.addCase(verifyNewUserEmail.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(verifyNewUserEmail.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(editProfile.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(isResetLinkValid.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(isResetLinkValid.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

/*
  ACTIONS
*/
export const { logout } = authSlice.actions;

/*
  REDUCER
*/
export default authSlice.reducer;
