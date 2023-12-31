"use client"

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

import { setAuthToken } from "@/utils/setAuthStatus";
import useAuthentication from "@/hooks/useAuthentication";
import { config } from "dotenv";
config();

type InputType = "password" | "text";

const Auth = () => {
	useAuthentication();
	const router = useRouter();
	const dispatch = useDispatch();
	const [enteredPassword, setEnteredPassword] = useState("");
	const [inputType, setInputType] = useState<InputType>("password");

	const changeInputTypeOnClick = () => {
		inputType === "password" ? setInputType("text") : setInputType("password");
	};

	const handlePasswordChange = (e: any) => {
		setEnteredPassword(e.target.value);
	};

	const loginOnSubmit = useCallback(
		async (password: string) => {
			try {
				const response = await Api.auth.login(password);

				const { accessToken } = response;

				setAuthToken(accessToken as string);
				router.push("/");
				dispatch(login());
				console.log(response);
				return response;
			} catch (error) {
				console.log(error);
			}
		},
		[router, dispatch]
	);
	useEffect(() => {

		if (enteredPassword.trim().length > 0) {
			console.log("Logging In");
			loginOnSubmit(enteredPassword as string);
		}
	}, [enteredPassword, loginOnSubmit]);

	return (
		<>
			<Head>
				<title>Вход в систему</title>
			</Head>
			<div className="relative w-full min-h-screen">
				<div
					className="absolute inset-0 bg-center bg-cover filter blur-md brightness-[10%]"
					style={{ backgroundImage: `url('/images/auth_image.jpg')` }}
				></div>
				<div className="relative z-10 flex h-screen items-center justify-center flex-col">
					<Logo size={100} withLabel={false} />
					<Typography label="Введите пароль" />
					<div
						className={`bg-transparent flex items-center justify-center px-3 md:px-5   md:max-w-[600px]  max-w-[350px] rounded-[0.5rem] bg-transparent border border-white  
				
				`}
						style={{
							boxShadow:
								enteredPassword.trim().length > 0
									? "0 0 30px rgba(213, 8, 80,0.6)"
									: "none",
						}}
					>
						<Input
							type={inputType}
							value={enteredPassword}
							onChange={handlePasswordChange}
							className="ring-none bg-transparent  md:py-10 py-9 text-3xl border-none focus-visible:ring-offset-0 focus-visible:ring-0"
						/>

						{inputType === "password" ? (
							<FiEye
								onClick={() => changeInputTypeOnClick()}
								className="cursor-pointer w-6 h-6 text-muted-foreground hover:opacity-70"
							/>
						) : (
							<FiEyeOff
								onClick={() => changeInputTypeOnClick()}
								className="cursor-pointer w-6 h-6 text-muted-foreground hover:opacity-70"
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Auth;
