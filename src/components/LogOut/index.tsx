import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLogOut, DivButtonLogOut } from "./style";
import { UserContext } from "../../contexts/logInContext/AuthContext";
function LogOut() {
	const navigate = useNavigate();
	const { setIsLoggedIn } = useContext(UserContext);

	function cleanLocalStorage() {
		setIsLoggedIn(false);
		localStorage.clear();
		navigate("/LogIn");
	}

	return (
		<DivButtonLogOut>
			<ButtonLogOut onClick={cleanLocalStorage}>Sair</ButtonLogOut>
		</DivButtonLogOut>
	);
}

export default LogOut;
