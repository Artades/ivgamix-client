'use server'
import {cookies} from "next/headers";

export const setAccessToken = (token: string) => {
     const oneDay = 24 * 60 * 60 * 1000;
    cookies().set("accessToken", token, {
			secure: true,
			path: "/",
			// httpOnly: true
			// expires: Date.now() - oneDay,
		});
}

export const burnAccessToken = () => {
      cookies().delete("accessToken");
}

export const getAccessToken = () => {
	const accessToken = cookies().get("accessToken");
	console.log("Access Token (getAccessToken):", accessToken);
	return accessToken;
};