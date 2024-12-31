import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // This will store both cart and favorite items
  isToast: false, // Indicates if a toast notification should show
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Add Item to Favorites
    addFavorite: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push({ ...action.payload, isFavorite: true });  // Add item to favorites
      }
    },
    removeFavorite: (state, action) => {
      // Remove the item from favorites by filtering out the item based on id
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Add Product to Cart (from the product page or elsewhere)
    addProduct: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      if (isExist) {
        state.isToast = true;  // Show toast if the product already exists in cart
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add product to cart with quantity 1
      }
    },

    // Add Item to Cart (from product page or anywhere)
    addToCart: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      if (isExist) {
        state.isToast = true;  // Show toast if the product already exists in cart
        isExist.quantity += 1;  // Increase the quantity by 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 });  // Add new item with quantity 1
      }
    },

    // Increase the quantity of an item in the cart
    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);

      if (product) {
        product.quantity += 1; // Safely increment the quantity
      }
    },

    // Decrease the quantity of an item in the cart
    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        // If quantity is 0, remove the product from cart
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

// Exporting the actions for use in components
export const {
  addFavorite,
  removeFavorite,
  addProduct,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} = productsSlice.actions;

export default productsSlice.reducer;
