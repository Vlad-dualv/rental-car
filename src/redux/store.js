import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice";
import { filterReducer } from "./filters/slice";
import { selectedReducer } from "./selected/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filterReducer,
    selected: selectedReducer,
  },
});
