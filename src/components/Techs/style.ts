import styled from 'styled-components';

export const DivContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 100px;
	background-color: #212529;
	overflow: hidden;
	@media screen and (max-width: 320px) {
		width: 100%;
	}
	@media screen and (max-width: 700px) {
		width: 100%;
	}
`;

export const TechsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: 9px;
	border-radius: 4px;
	border: 0px solid;
	background-color: black;
`;
export const TechsDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 4px;
	:hover {
		background-color: #212529;
	}
`;
export const InfoDiv = styled.div``;
export const NewTechInfo = styled.p`
	color: #ffffff;
	margin-left: 5px;
	padding: 5px;
	font-size: 18px;
`;
export const BntAndLevelDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 25%;
`;
export const LevelInfo = styled.div`
	color: #868e96;
	font-size: 15px;
`;
export const ButtonDelete = styled.button`
	display: flex;
	width: 30px;
	height: 15px;
	margin-right: 5px;
	justify-content: center;
	border: 0px;
	background-color: #000000;
	color: white;
	cursor: pointer;
	:hover {
		background-color: #ff577f;
	}
`;
