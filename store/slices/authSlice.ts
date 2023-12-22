// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

type AuthInitialStateType = {
	auth: "not authinticated" | "authinticated";
};

const initialState: AuthInitialStateType = {
	auth: "not authinticated",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state) => {
			state.auth = "authinticated";
		},
		logout: (state) => {
			state.auth = "not authinticated";
		},
	},
});

export const { login, logout } = authSlice.actions;

export const selectAuthState = (state: { auth: AuthInitialStateType }) =>
	state.auth.auth;

export default authSlice.reducer;
