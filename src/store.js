import { configureStore } from "@reduxjs/toolkit";

import newGameSlice from "./components/slices/Character/setCharacterSlice.js";
import newUserSlice from "./components/slices/User/UserSlice.js";
import newRoomSlice from "./components/slices/Room/RoomSlice.js";

const store = configureStore({
  reducer: {
    newGame: newGameSlice,
    newUser: newUserSlice,
    newRoom: newRoomSlice
  },
});

export default store;
