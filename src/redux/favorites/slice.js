import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
});

export const favoritesReducer = favoritesSlice.reducer;
