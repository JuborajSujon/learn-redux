import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "../features/userDetails/userDetailSlice";

export const store = configureStore({
  reducer: {
    app: userDetailsReducer,
  },
});
