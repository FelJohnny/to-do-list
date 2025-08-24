import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice
    
  },
  devTools: __DEV__,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;