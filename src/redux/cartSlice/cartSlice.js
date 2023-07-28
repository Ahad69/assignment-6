import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.cart.find((a) => a._id == action.payload._id);
      if (isExist) {
        isExist.quantity = isExist.quantity + 1;
        return;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne: (state, action) => {
      const isExist = state.cart.find(
        (product) => product._id == action.payload._id
      );
      if (isExist && isExist.quantity > 1) {
        isExist.quantity = isExist.quantity - 1;
        state.total -= action.payload.price;
      }
    },
  },
});

export const { addToCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
