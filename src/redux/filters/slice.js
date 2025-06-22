import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  brand: "",
  price: "",
  mileage: {
    from: "",
    to: "",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setMileage(state, action) {
      state.mileage = {
        from: action.payload.from,
        to: action.payload.to,
      };
    },
  },
});

export const { setBrand, setPrice, setMileage } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
