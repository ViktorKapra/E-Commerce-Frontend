import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import NONE_AUTHENTICATED_USER from "@/helpers/constants";

// Define a type for the slice state
interface AuthUserState {
  value: string;
}

// Define the initial state using that type
const initialState: AuthUserState = {
  value: NONE_AUTHENTICATED_USER,
};

export const authUserSlice = createSlice({
  name: "authUser",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    authenticate: (state, action: PayloadAction<string>) => {
      return { ...state, value: action.payload };
    },
    logout: (state) => {
      return { ...state, value: NONE_AUTHENTICATED_USER };
    },
  },
});

export const { authenticate, logout } = authUserSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuthUser = (state: RootState) => state.authUser.value;

export default authUserSlice.reducer;
