import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product-slice";
import cartReducer from "./cart-slice";
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    ui: uiSlice.reducer,
  },
});

export default store;
