import { createSlice } from "@reduxjs/toolkit";
import products from "../DUMMY-PRODUCTS";

const initialState = {
  products,
};

const produtSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export default produtSlice.reducer;
