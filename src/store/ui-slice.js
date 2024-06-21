import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
