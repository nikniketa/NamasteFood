import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => action.payload !== item.card.info.id
      );
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
