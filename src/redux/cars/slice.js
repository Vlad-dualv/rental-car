import { createSlice } from "@reduxjs/toolkit";

const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
});

export const carsReducer = carsSlice.reducer;
``;
