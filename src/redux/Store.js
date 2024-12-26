// src/redux/Store.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favouriteSlice';  // Import the correct slice

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,  // Use the correct reducer in the store
  },
});

export default store;
