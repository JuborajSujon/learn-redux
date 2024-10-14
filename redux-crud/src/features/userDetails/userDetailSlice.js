import { createSlice } from "@reduxjs/toolkit";

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    isLoading: false,
    users: [],
    error: null,
  },
});

export default userDetails.reducer;
