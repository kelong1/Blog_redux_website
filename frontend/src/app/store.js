import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import blogReducer from "../features/Blogs/blogSlice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    blogs:blogReducer
  },
});
