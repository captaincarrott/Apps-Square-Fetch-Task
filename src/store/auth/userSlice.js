import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  isAuthenticated: false, // Initially false, will be rehydrated by Redux Persist
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      // No need to manage localStorage here, Redux Persist will handle it
    },
    logout: (state) => {
      state.email = null;
      state.token = null;
      state.isAuthenticated = false;
      // No need to remove items from localStorage here
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
