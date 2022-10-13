import React, { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { PersonDataProps } from "../../contexts/logInContext/AuthContext";

interface ListProviderProps {
	children: ReactNode;
}

interface SingUpProps {
	onSubmit: (data: PersonDataProps) => void;
}

export const UserSignUpContext = createContext<SingUpProps>({} as SingUpProps);

function SignUpProvider({ children }: ListProviderProps) {
	const navigate = useNavigate();

	async function onSubmit(data: PersonDataProps) {
		console.log(data);
		const response = await api.post("/users", data);
		if (response) {
			toast.success("Cadastrado com sucesso!");
			setTimeout(() => {
				navigate("/LogIn");
			}, 5000);
			console.log(response);
		}
		if (response.data.status > 202) {
			toast.error("Ops algo deu errado! Tente novamente");
		}
	}

	return (
		<UserSignUpContext.Provider value={{ onSubmit }}>
			{children}
		</UserSignUpContext.Provider>
	);
}

export default SignUpProvider;
