import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/userSlice'

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})


export default store;