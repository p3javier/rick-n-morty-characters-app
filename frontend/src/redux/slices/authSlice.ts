import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface AuthState {
  value: boolean;
}

// Define the initial state using that type

const initialState: AuthState = {
  value: false,
};

export const authSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    authenticate: (state) => {
      state.value = true;
    },
    deAuthenticate: (state) => {
      state.value = false;
    },
  },
});

export const { authenticate, deAuthenticate } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.authentication.value;

export default authSlice.reducer;
