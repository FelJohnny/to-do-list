import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice/userSlice';
import todoSlice from './todoSlice/todoSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice
  },
  devTools: __DEV__,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;