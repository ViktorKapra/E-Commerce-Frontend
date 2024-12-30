import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

// Define a type for the slice state
interface SignInOpenState {
  value: boolean;
}

// Define the initial state using that type
const initialState: SignInOpenState = {
  value: false,
};

export const signInOpenSlice = createSlice({
  name: "signInOpen",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openSignIn: (state) => {
      return { ...state, value: true };
    },
    closeSignIn: (state) => {
      return { ...state, value: false };
    },
  },
});

export const { openSignIn, closeSignIn } = signInOpenSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSignInOpen = (state: RootState) => state.signInOpen.value;

export default signInOpenSlice.reducer;
