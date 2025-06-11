import { createSlice } from "@reduxjs/toolkit";

const selectedInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const selectedSlice = createSlice({
  name: "selected",
  initialState: selectedInitialState,
});

export const selectedReducer = selectedSlice.reducer;
