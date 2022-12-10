import { configureStore } from "@reduxjs/toolkit";
import newGameSlice from "../../features/setCharacterSlice.js";

const store = configureStore({
  reducer: {
    newGame: newGameSlice,
  },
});

export default store;
