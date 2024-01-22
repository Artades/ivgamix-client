import axios from "@/core/axios";
import { LoginFormDTO, LoginResponseDTO, RegisterFormDTO, RegisterResponseDTO } from "./dto/auth.dto";



export const login = async (credentials: LoginFormDTO): Promise<LoginResponseDTO> => {
	return (await axios.post("/auth/login", credentials)).data;
};

export const register = async (credentials: RegisterFormDTO): Promise<RegisterResponseDTO>  => {
		return (await axios.post("/auth/register", credentials)).data;
}