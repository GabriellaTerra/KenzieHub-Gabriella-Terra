import React, {
	createContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export interface ListProviderProps {
	children: ReactNode;
}
export interface techsProps {
	id: string;
	title: string;
	status: string;
	created_at: string;
	updated_at: string;
}

interface UserAddProps {
	newTech: techsProps[];
	techsList: techsProps[];
	setTechsList: Dispatch<SetStateAction<techsProps[]>>;
	onSubmitAddTech: (data: { title: string; status: string }) => void;
	setNewTech: Dispatch<SetStateAction<techsProps[]>>;
	deleteTech: (id: string) => void;
	GetItem: (id: string) => Promise<techsProps[]>;
}

export const UserAddTech = createContext<UserAddProps>({} as UserAddProps);

function AddTechProvider({ children }: ListProviderProps) {
	const [newTech, setNewTech] = useState<techsProps[]>([]);
	const [techsList, setTechsList] = useState<techsProps[]>([]);

	async function onSubmitAddTech(data: { title: string; status: string }) {
		const token = JSON.stringify(localStorage.getItem("@KenzieHub:Token"));

		console.log(token);

		await api.post("/users/techs", data, {});
	}
	console.log(techsList);

	async function GetItem(id: string) {
		const response = await api.get(`/users/${id}`);
		return response.data.techs;
	}

	async function deleteTech(id: string) {
		console.log(id);
		await api.delete(`/users/techs/${id}`);
		const getId = localStorage.getItem("@KenzieHub:Id");
		const response = await GetItem(getId as string);
		if (response) {
			setTechsList(response);
			console.log(response);
		}
		toast.success("Excluido com sucesso!");
	}

	return (
		<UserAddTech.Provider
			value={{
				techsList,
				newTech,
				onSubmitAddTech,
				setNewTech,
				deleteTech,
				GetItem,
				setTechsList,
			}}
		>
			{children}
		</UserAddTech.Provider>
	);
}
export default AddTechProvider;
