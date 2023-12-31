import axios from "@/core/axios";

interface LoginResponse {
	accessToken: string;
}

export const login = async (password: string): Promise<LoginResponse> => {
	return (await axios.post("/auth/login", { password })).data;
};
