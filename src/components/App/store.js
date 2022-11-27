import { configureStore } from "@reduxjs/toolkit";
import testSlice from "../../features/testeRedux.js";

const store = configureStore({
  reducer: {
    changeName: testSlice,
  },
});

export default store;
