import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.carts.push(action.payload);
    },
    removeCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { addCart, removeCart, setCarts } = cartSlice.actions;

export default cartSlice.reducer;
