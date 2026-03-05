import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  info: null,
};
export const counterSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadtv: (state, action) => {
      state.info = action.payload;
    },
    removetv: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadtv, removetv } = counterSlice.actions;

export default counterSlice.reducer;