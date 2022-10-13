import styled from "styled-components";

export const Tittle = styled.h1`
	margin-top: 50px;
	font-size: 25px;
	color: #ff577f;
`;

export const CardForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	padding: 8px;
	align-items: center;
	width: 280px;
	background-color: #212529;
	border-radius: 4px;
`;

export const SubTittle = styled.h3`
	color: #f8f9fa;
	font-size: 17px;
	margin: 0 auto;
`;

export const Form = styled.form`
	color: #f8f9fa;
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 50%;
`;

export const DivLabels = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Label = styled.p`
	font-weight: 400;
	font-size: 11px;
`;

export const Input = styled.input`
	height: 35px;
	border-radius: 4px;
	background-color: #212526;
	border: 1px solid #f8f9fa;
	color: #f8f9fa;
`;

export const LogInButton = styled.button`
	background-color: #ff577f;
	color: #f8f9fa;
	border: 0px;
	height: 35px;
	border-radius: 4px;

	cursor: pointer;
	:hover {
		background-color: #f8f9fa;
		color: #ff577f;
	}
`;

export const ErrorMessages = styled.p`
	font-size: 10px;
	color: #ff577f;
`;

export const InfoSignUp = styled.p`
	color: #868e96;
`;

export const GoToSignUpBnt = styled.button`
	width: 80%;
	height: 35px;
	border-radius: 4px;
	border: 0px;
	background-color: #868e96;
	cursor: pointer;
	color: #f8f9fa;
	:hover {
		background-color: #ff577f;
	}
`;
