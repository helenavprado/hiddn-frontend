import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    value: "batatinha",
  },
  reducers: {
    changeName: (state, action) => {
      state.value = "João";
    },
  },
});

export default testSlice.reducer;
export const { changeName } = testSlice.actions;
