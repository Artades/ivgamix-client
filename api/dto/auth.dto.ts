export interface LoginFormDTO {
	email: string;
	password: string;
}

export interface LoginResponseDTO {
	token: string;
}

export type RegisterFormDTO = LoginFormDTO & {
	firstName: string;
	lastName: string;
};

export type RegisterResponseDTO = LoginResponseDTO;




