import React, { useContext } from "react";
import { techsProps, UserAddTech } from "../../contexts/AddTech/AddTechContext";
import { BsTrash } from "react-icons/bs";
import {
	BntAndLevelDiv,
	ButtonDelete,
	DivContainer,
	InfoDiv,
	LevelInfo,
	NewTechInfo,
	TechsContainer,
	TechsDiv,
} from "./style";

interface ITechsProps {
	tech: techsProps;
}

function Techs({ tech }: ITechsProps) {
	const { deleteTech } = useContext(UserAddTech);
	return (
		<DivContainer>
			<TechsContainer>
				<TechsDiv>
					<InfoDiv>
						<NewTechInfo>{tech.title}</NewTechInfo>
					</InfoDiv>
					<BntAndLevelDiv>
						<LevelInfo>{tech.status}</LevelInfo>
						<ButtonDelete onClick={() => deleteTech(tech.id)}>
							<BsTrash />
						</ButtonDelete>
					</BntAndLevelDiv>
				</TechsDiv>
			</TechsContainer>
		</DivContainer>
	);
}
export default Techs;
