import React, {
	createContext,
	useEffect,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { techsProps } from "../../contexts/AddTech/AddTechContext";
import { HeadersDefaults } from "axios";
import { SubmitHandler } from "react-hook-form";

export interface IHeaders extends HeadersDefaults {
	authorization?: string;
}

interface ListProviderProps {
	children: ReactNode;
}

export interface PersonDataProps {
	id: string;
	name: string;
	email: string;
	course_module: string;
	bio: string;
	contact: string;
	tech: techsProps;
}

interface UserDataProps {
	user: PersonDataProps | undefined;
	signIn: SubmitHandler<PersonDataProps>;
	isLoggedIn: boolean;
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<UserDataProps>({} as UserDataProps);

function UserProvider({ children }: ListProviderProps) {
	const [user, setUser] = useState();

	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const navigate = useNavigate();
	console.log(isLoggedIn);

	const token = localStorage.getItem("@KenzieHub:Token");

	useEffect(() => {
		async function UserAuth() {
			if (token) {
				try {
					const headersApi: IHeaders = api.defaults.headers;
					headersApi.authorization = `Bearer ${token}`;
					const { data } = await api.get("/profile");
					setUser(data);
					setIsLoggedIn(true);
				} catch (error) {
					setIsLoggedIn(false);
					console.log(error);
					localStorage.clear();
					navigate("/LogIn");
				}
			}
		}
		UserAuth();
	}, [token, navigate]);

	async function signIn(data: PersonDataProps) {
		const response = await api.post("/sessions", data);

		if (response.status === 200) {
			localStorage.clear();
			localStorage.setItem("@KenzieHub:Token", response.data.token);
			localStorage.setItem("@KenzieHub:Id", response.data.user.id);
			localStorage.setItem(
				"@KenzieHub:User",
				JSON.stringify(response.data.user)
			);
			setUser(response.data);

			setIsLoggedIn(true);
			toast.success("Bem-Vindo!");
			setTimeout(
				() => {
					navigate("/Dashboard");
				},
				2000,
				{ replace: true }
			);
		}
		if (response.status > 202) {
			toast.error("Ops algo deu errado! Tente novamente");
			setTimeout(() => {
				navigate("/LogIn");
			}, 2000);
		}
	}

	return (
		<UserContext.Provider value={{ user, signIn, isLoggedIn, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
