import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "@/redux/features/authUserSlice";
import signInOpenReducer from "@/redux/features/signInSlice";

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    signInOpen: signInOpenReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
