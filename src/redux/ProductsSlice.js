// src/redux/productsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // Use 'items' consistently here
};

const productsSlice = createSlice({
  name: 'favorites',  // Name of the slice
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);  // Adding the item if it doesn't exist
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);  // Remove the item by id
    },
  },
});

export const { addFavorite, removeFavorite } = productsSlice.actions;  // Export actions
export default productsSlice.reducer;  // Export the reducer
