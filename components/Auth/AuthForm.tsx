"use client";
import React from "react";
import * as Api from "@/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { setAccessToken } from "@/utils/handleAccessToken";
import { useRouter } from "next/navigation";

const loginFormSchema = z.object({
	email: z.string().min(2, {
		message: "Email должен содержать как минимум 2 символа.",
	}),
	password: z.string().min(2, {
		message: "Пароль должен содержать как минимум 2 символа.",
	}),
});

const registerFormSchema = z.object({
	firstName: z.string().min(2, {
		message: "Имя должно содержать как минимум 2 символа.",
	}),
	lastName: z.string().min(2, {
		message: "Фамилия должна содержать как минимум 2 символа.",
	}),
	email: z.string().min(2, {
		message: "Email должен содержать как минимум 2 символа.",
	}),
	password: z.string().min(2, {
		message: "Пароль должен содержать как минимум 2 символа.",
	}),
});

const AuthForm = () => {
	const router = useRouter();
	const loginForm = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),

		defaultValues: {
			email: "",
			password: "",
		},
	});

	const registerForm = useForm<z.infer<typeof registerFormSchema>>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	});



	const onLogin = async (credentials: z.infer<typeof loginFormSchema>) => {
		try {
			const response = await Api.auth.login(credentials);
			const { token } = response;
			setAccessToken(token);
			router.push("/");
		} catch (error) {
			console.log("Ошибка входа");
		}
	};
	const onRegister = async (
		credentials: z.infer<typeof registerFormSchema>
	) => {
		try {
			const response = await Api.auth.register(credentials);
			const { token } = response;
			setAccessToken(token);
			router.push("/");
		} catch (error) {
			console.log("Ошибка входа");
		}
	};

	return (
		<Tabs defaultValue="login" className="w-[400px] z-[100] ">
			<TabsList className="grid w-full grid-cols-2 bg-black/60 backdrop-blur-md ">
				<TabsTrigger className="" value="login">
					Войти
				</TabsTrigger>
				<TabsTrigger value="register">Создать аккаунт</TabsTrigger>
			</TabsList>
			<TabsContent value="login">
				<Card className="bg-black/20 backdrop-blur-md">
					<CardHeader>
						<CardTitle>Войти</CardTitle>
						<CardDescription>
							Войдите в свой аккаунт здесь. Если у вас его нет, создайте один.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<Form {...loginForm}>
							<form
								onSubmit={loginForm.handleSubmit(onLogin)}
								className="space-y-4"
							>
								<FormField
									control={loginForm.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input placeholder="Email" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={loginForm.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Пароль</FormLabel>
											<FormControl>
												<Input placeholder="Пароль" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="flex flex-col items-start gap-y-4">
									<Button className="text-white">Войти</Button>
									<div className="flex gap-x-3 ">
										<Link href={"/forgot-password"} className="">
											Забыли пароль?
										</Link>
									</div>
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="register">
				<Card className="bg-black/20 backdrop-blur-md">
					<CardHeader>
						<CardTitle>Создать аккаунт</CardTitle>
						<CardDescription>
							Создайте аккаунт здесь. После регистрации вы автоматически войдете
							в аккаунт
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<Form {...registerForm}>
							<form
								onSubmit={registerForm.handleSubmit(onRegister)}
								className="space-y-4"
							>
								<FormField
									control={registerForm.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Имя</FormLabel>
											<FormControl>
												<Input placeholder="John" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={registerForm.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Фамилия</FormLabel>
											<FormControl>
												<Input placeholder="Doe" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={registerForm.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input placeholder="johndoe@gmail.com" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={registerForm.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Пароль</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex flex-col items-start gap-y-4">
									<Button className="text-white">Создать</Button>
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
};

export default AuthForm;
