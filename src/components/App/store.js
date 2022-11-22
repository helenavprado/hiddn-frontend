import { createStore, combineReducers } from "redux";
import nameReducer from "../../features/testeRedux";

const reducersSlices = {
  nameReducer: nameReducer,
};

const store = createStore(combineReducers(reducersSlices));

export default store;
