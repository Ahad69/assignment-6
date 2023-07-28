import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  builders: {},
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      const { product, category } = action.payload;
      if (!state.builders[category]) {
        state.builders[category] = [];
      }
      state.builders[category].push(product);
    },
    removeBuilder: (state, action) => {
      const category = action.payload;
      delete state.builders[category];
    },
  },
});

export const { addToBuilder, removeBuilder } = builderSlice.actions;
export default builderSlice.reducer;
