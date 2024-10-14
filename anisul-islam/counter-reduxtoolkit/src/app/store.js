import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../features/counter/conunterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
