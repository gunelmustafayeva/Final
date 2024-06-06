import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
  totalAmount: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      if (!state.products.find((m) => m.id === action.payload.id)) {
        // state.products.push(action.payload)
        state.products = [...state.products, action.payload];
        console.log(state.products, "products");
      }
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increment: (state, action) => {
      state.count += 1;
      // state.totalAmount = state.count * action.payload.price;
    },
    decrement: (state, action) => {
      if (state.count > 0) {
        state.count -= 1;
        // state.totalAmount -= action.payload.price;
      }
    },
  },
});

export const { addProduct, removeProduct, increment, decrement } =
  productsSlice.actions;

export default productsSlice.reducer;
