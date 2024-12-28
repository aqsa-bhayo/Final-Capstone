import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // Use 'items' consistently here
  isToast: false, // Indicates if a toast notification should show
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Add Favorite Logic
    addFavorite: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);  // Adding the item if it doesn't exist
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);  // Remove the item by id
    },

    // Product Management Logic
    addProduct: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      if (isExist) {
        state.isToast = true;  // Show toast if product already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add the product to the cart with initial quantity 1
      }
    },

    // Add Item to Cart
    addToCart: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      if (isExist) {
        state.isToast = true;  // Show toast if product already exists in cart
        isExist.quantity += 1;  // Increase quantity if the product already exists in cart
      } else {
        state.items.push({ ...action.payload, quantity: 1 });  // Add new item with quantity 1
      }
    },

    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);

      if (product) {
        product.quantity += 1; // Safely increment the quantity
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);  // Remove the item if quantity is 0
      }
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  addProduct,
  addToCart, // Exporting the new action
  increaseQuantity,
  decreaseQuantity,
} = productsSlice.actions;

export default productsSlice.reducer;
