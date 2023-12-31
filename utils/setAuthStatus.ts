'use server'
import {cookies} from "next/headers";

export const setAuthToken = (token: string) => {
     const oneDay = 24 * 60 * 60 * 1000;
    cookies().set("authToken", token, {
			secure: true,
			path: "/",
			// expires: Date.now() - oneDay,
		});
}

export const burnAuthToken = () => {
      cookies().delete("authToken");
}