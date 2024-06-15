import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
