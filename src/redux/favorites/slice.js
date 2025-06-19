import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    toggleFavorite(state, action) {
      const carId = action.payload;
      const index = state.items.findIndex((id) => id === carId);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(carId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
