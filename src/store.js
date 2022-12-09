import { configureStore } from "@reduxjs/toolkit";

import newGameSlice from "./components/slices/Character/setCharacterSlice.js";
import newUserSlice from "./components/slices/User/UserSlice.js";

const store = configureStore({
  reducer: {
    newGame: newGameSlice,
    newUser: newUserSlice
  },
});

export default store;
