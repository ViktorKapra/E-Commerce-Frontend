import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "@/redux/features/authUserSlice";
import signInOpenReducer from "@/redux/features/signInSlice";

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    signInOpen: signInOpenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
