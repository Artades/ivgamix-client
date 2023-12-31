"use server";

import { cookies } from "next/headers";

export const checkAuth = async () => {
	const cookieStore = cookies();
	const authToken: any = cookieStore.get("authToken");

	console.log(authToken);
	try {
		// Check if the user is authenticated based on your cookie key
		if (authToken.value !== null ) {
			return {
				props: {},
			};
		} else {
			
			return {
				redirect: {
					destination: "/auth",
					permanent: false,
				},
			};
			
		}
	} catch (err) {
		console.error("Authentication error:", err);

		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}
};
