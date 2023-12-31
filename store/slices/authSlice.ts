// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

type AuthInitialStateType = {
	auth: "not authenticated" | "authenticated";
};

const initialState: AuthInitialStateType = {
	auth: "not authenticated",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state) => {
			state.auth = "authenticated";
		},
		logout: (state) => {
			state.auth = "not authenticated";
		},
	},
});

export const { login, logout } = authSlice.actions;

export const selectAuthState = (state: { auth: AuthInitialStateType }) =>
	state.auth.auth;

export default authSlice.reducer;
