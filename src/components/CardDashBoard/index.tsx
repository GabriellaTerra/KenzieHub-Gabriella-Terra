import React, { useContext, useEffect } from "react";
import { UserAddTech } from "../../contexts/AddTech/AddTechContext";
import { techsProps } from "../../contexts/AddTech/AddTechContext";
import ButtonMoreTechs from "../ButtonMoreTechs";
import Techs from "../Techs";
import {
	DivInfoDashBoard,
	DivInfo,
	DivInfoCurse,
	DivInfoName,
	InfoDashBoard,
} from "./style";

interface ListCardUserProps {
	name: string;
	course_module: string;
	tech?: techsProps;
}

function CardUser({ name, course_module }: ListCardUserProps) {
	const { GetItem } = useContext(UserAddTech);
	const { techsList, setTechsList } = useContext(UserAddTech);
	const id = localStorage.getItem("@KenzieHub:Id");
	console.log(id);

	async function getData() {
		if (id) {
			const response = await GetItem(id);
			if (response) {
				setTechsList(response);
				console.log(response);
			}
		}
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<DivInfo>
				<DivInfoName>Olá,{name}!</DivInfoName>
				<DivInfoCurse>Módulo do curso:{course_module}</DivInfoCurse>
			</DivInfo>
			<DivInfoDashBoard>
				<InfoDashBoard>Tecnologias</InfoDashBoard>
				<ButtonMoreTechs />
			</DivInfoDashBoard>
			{techsList?.map((e, index) => (
				<Techs key={index} tech={e} />
			))}
		</>
	);
}

export default CardUser;
