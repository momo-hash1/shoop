import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "alert",
  initialState: {
    messages: [],
  },
  reducers: {
    add: (state, action) => {
      state.messages.push({ ...action.payload, id: state.messages.length + 1 });
    },
    remove: (state, action) => {
      state.messages.splice(state.messages.indexOf(action.payload), 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = messageSlice.actions;

export default messageSlice.reducer;
