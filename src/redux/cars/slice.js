import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchInProgress(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const carsReducer = carsSlice.reducer;
export const { fetchInProgress, fetchSuccess, fetchError } = carsSlice.actions;
export const selectCars = (state) => state.cars.items;
export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
