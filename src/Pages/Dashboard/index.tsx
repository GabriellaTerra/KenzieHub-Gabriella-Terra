import CardUser from "../../components/CardDashBoard";
import Header from "../../components/Header";
import React from "react";
import "./style.css";
import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserAddTech } from "../../contexts/AddTech/AddTechContext";
import { PersonDataProps } from "../../contexts/logInContext/AuthContext";

function Dashboard() {
	const [userLogado, setUserLogado] = useState<PersonDataProps>(
		JSON.parse(localStorage.getItem("@KenzieHub:User") as string)
	);
	const { newTech } = useContext(UserAddTech);
	useEffect(() => {
		setUserLogado(
			JSON.parse(localStorage.getItem("@KenzieHub:User") as string)
		);
	}, [newTech]);

	return (
		<>
			{userLogado ? (
				<>
					<Header />
					<CardUser
						name={userLogado?.name}
						course_module={userLogado?.course_module}
						tech={userLogado?.tech}
					/>
				</>
			) : (
				<Navigate to="/LogIn" />
			)}
		</>
	);
}

export default Dashboard;
