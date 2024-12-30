import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";

interface AuthUserState {
  value: string;
}

const initialState: AuthUserState = {
  value: NONE_AUTHENTICATED_USER,
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<string>) => {
      return { ...state, value: action.payload };
    },
    logout: (state) => {
      return { ...state, value: NONE_AUTHENTICATED_USER };
    },
  },
});

export const { authenticate, logout } = authUserSlice.actions;

export const selectAuthUser = (state: RootState) => state.authUser.value;

export default authUserSlice.reducer;
