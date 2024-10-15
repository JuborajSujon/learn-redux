import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://670d0846073307b4ee420a41.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// read action
export const showUser = createAsyncThunk("showUser", async () => {
  const response = await fetch(
    "https://670d0846073307b4ee420a41.mockapi.io/crud"
  );

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return error.response.data.message;
  }
});

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    isLoading: false,
    users: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload);
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(showUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(showUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.isLoading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});

export default userDetails.reducer;
