import { createSlice } from "@reduxjs/toolkit";

const newGameSlice = createSlice({
  name: "newGame",
  initialState: {
    characterName: "",
    friendName: "",
  },
  reducers: {
    setCharacter: (state, action) => {
      state.characterName = action.payload;
    },

    chooseFriend: (state, action) => {
      state.friendName = action.payload;
    },
  },
});

export default newGameSlice.reducer;
export const { setCharacter, chooseFriend } = newGameSlice.actions;
