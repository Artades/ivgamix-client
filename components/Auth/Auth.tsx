"use client";

import React, { useState, useEffect } from "react";
import Typography from "../Typography/Typography";
import { hints } from "@/config/hints";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Head from "next/head";

type InputType = "password" | "text";

const Auth = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const getRandomAuthValues = () => {
		let randomNum = Math.floor(Math.random() * hints.length);
		let randomHint = hints[randomNum]!.hint;
		let randomAnswer = hints[randomNum]!.answer;
		return { randomHint, randomAnswer };
	};

	const [values, setValues] = useState(getRandomAuthValues);
	const [enteredPassword, setEnteredPassword] = useState("");
	const [inputType, setInputType] = useState<InputType>("password");

	const changeInputTypeOnClick = () => {
		inputType === "password" ? setInputType("text") : setInputType("password");
	};

	useEffect(() => {
		setValues(getRandomAuthValues());
	}, []);

	const handlePasswordChange = (e: any) => {
		setEnteredPassword(e.target.value);
	};

	const handleLogin = () => {
		dispatch(login());
		router.push("/");
	};

	useEffect(() => {
		if (
			enteredPassword.trim().length === values.randomAnswer.trim().length &&
			enteredPassword.toLowerCase().trim() ===
				values.randomAnswer.toLowerCase().trim()
		) handleLogin();
	});

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
					<p className="text-muted-foreground mt-3"></p>
					<div className="mt-5 absolute top-5 md:top-10 md:right-20 right-5">
						<HoverCard>
							<HoverCardTrigger asChild>
								<Button variant="link" className="text-white text-lg">
									Подсказка
								</Button>
							</HoverCardTrigger>
							<HoverCardContent className="px-5 py-4">
								<div className="flex justify-between">
									<div className="space-y-1">
										<h4 className="text-lg font-semibold">Подсказка</h4>
										<p className="text-sm">{values.randomHint}</p>
									</div>
								</div>
							</HoverCardContent>
						</HoverCard>
					</div>
				</div>
			</div>
		</>
	);
};

export default Auth;
