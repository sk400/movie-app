import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logIn(state, action) {
      state.user = action.payload;
    },
    logOut(state) {
      state.user = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const user = (state) => state.user.user;

export default userSlice.reducer;
