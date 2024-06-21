import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import products from "../DUMMY-PRODUCTS";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const index = state.cartItems.findIndex((x) => x.id === action.payload);
      if (index >= 0) {
        state.cartItems[index].quantity++;
      } else {
        const item = products.find((x) => x.id === action.payload);
        state.cartItems.push({
          id: item.id,
          title: item.title,
          quantity: 1,
          price: item.price,
        });
      }
    },
    decreaseCartQty(state, action) {
      const index = state.cartItems.findIndex((x) => x.id === action.payload);
      if(state.cartItems[index].quantity > 1){
        state.cartItems[index].quantity--;
      }
      else{
        state.cartItems.splice(index, 1);
        //state.cartItems = state.cartItems.filter(item => item.id != state.cartItems[index].id);
      }
    }
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
