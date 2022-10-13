import LogOut from "../LogOut";
import React from "react";
import {
	DivButton,
	DivHeader,
	DivTittle,
	Tittle,
	ContainerHeader,
} from "./style";

function Header() {
	return (
		<DivHeader>
			<ContainerHeader>
				<DivTittle>
					<Tittle>kenzie Hub</Tittle>
				</DivTittle>
				<DivButton>
					<LogOut />
				</DivButton>
			</ContainerHeader>
		</DivHeader>
	);
}

export default Header;
