import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  isAuthenticated: localStorage.getItem('token') ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      const {email, token} = action.payload

      if (email, token) {
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('token', token);
      }
    },
    logout: (state) => {
      state.email = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('email', JSON.stringify(state.email));
      localStorage.removeItem('token', state.token);
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
