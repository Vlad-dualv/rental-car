import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPages: 1,
    totalCars: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const { cars, page, totalCars, totalPages } = action.payload;
        if (page === 1) {
          state.items = cars;
        } else {
          state.items = [...state.items, ...cars];
        }
        state.isLoading = false;
        state.error = null;
        state.page = page;
        state.totalCars = totalCars;
        state.totalPages = totalPages;
        //state.items = action.payload.cars;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const car = action.payload;
        const exists = state.items.some((item) => item.id === car.id);
        if (!exists) {
          state.items.push(car);
        }
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
export const selectCars = (state) => state.cars.items;
export const selectPage = (state) => state.cars.page;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
