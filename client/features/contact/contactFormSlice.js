import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const contactFormResponse = createAsyncThunk(
  "contactFormResponse",
  async (token) => {
    const { data } = await axios.post(`/api/recaptcha/`, token);
    return data;
  }
);

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: {
    response: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(contactFormResponse.fulfilled, (state, action) => {
      state.response = action.payload;
    });
    builder.addCase(contactFormResponse.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default contactFormSlice.reducer;
