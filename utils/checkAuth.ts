import { getAccessToken } from "./handleAccessToken";

export const checkAuth = async () => {
	try {
		// Wait for the access token to resolve
		const accessToken = await getAccessToken();
		console.log("Access Token:", accessToken);

		// Check if the user is authenticated based on your cookie key
		if (accessToken && accessToken.value ) {
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
