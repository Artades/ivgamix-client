"use client";

import React, { useState, useEffect, useCallback } from "react";
import Typography from "../Typography/Typography";

import { Input } from "../ui/input";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Head from "next/head";
import Logo from "../Layout/Header/Logo";
import * as Api from "@/api";
import { login } from "@/store/slices/authSlice";


import useAuthentication from "@/hooks/useAuthentication";
import AuthForm from "./AuthForm";

type InputType = "password" | "text";

const Auth = () => {
	useAuthentication();
	const router = useRouter();
	const dispatch = useDispatch();
	const [password, setPassword] = useState("");
	const [inputType, setInputType] = useState<InputType>("password");

	const changeInputTypeOnClick = () => {
		inputType === "password" ? setInputType("text") : setInputType("password");
	};

	// const loginOnSubmit = useCallback(
	// 	async (password: string) => {
	// 		try {
	// 			const response = await Api.auth.login(password);

	// 			const { accessToken } = response;

	// 			setAuthToken(accessToken as string);
	// 			router.push("/");
	// 			dispatch(login());
	// 			console.log(response);
	// 			return response;
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	},
	// 	[router, dispatch]
	// );

	return (
		<>
			<Head>
				<title>Вход в систему</title>
			</Head>
			<div className="relative w-full h-screen">
				<div
					className="absolute inset-0 bg-center z-0 bg-cover filter blur-md brightness-[10%]"
					style={{ backgroundImage: `url('/images/auth_image.jpg')` }}
				></div>

				<div className="flex items-center justify-center h-full">
					<AuthForm />
				</div>
			</div>
		</>
	);
};

export default Auth;
