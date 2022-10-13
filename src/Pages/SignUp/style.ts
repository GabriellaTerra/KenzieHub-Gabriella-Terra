import styled from 'styled-components';

export const DivHeader = styled.div`
	display: flex;
	width: 280px;
	justify-content: space-between;
`;

export const MainTittle = styled.h1`
	color: #ff577f;
	font-size: 20px;
`;

export const ButtonGoToLogIn = styled.button`
	height: 40px;
	width: 67px;
	background-color: #212529;
	color: #f8f9fa;
	border-radius: 5px;
	cursor: pointer;
	:hover {
		background-color: #ff577f;
	}
`;

export const Tittle = styled.h3`
	color: #f8f9fa;
	font-size: 10px;
`;

export const CardFormSignUp = styled.div`
	display: flex;
	width: 280px;
	padding-bottom: 20px;
	flex-direction: column;
	background-color: #212529;
	border-radius: 3px;
`;
export const Form = styled.form`
	width: 100%;
	height: 80%;
`;
export const DivLabels = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 10%;
`;
export const Label = styled.label`
	color: #f8f9fa;
	font-size: 12px;
	font-weight: 400;
`;
export const InputSignUp = styled.input`
	height: 35px;
	width: 80%;
	border-radius: 4px;
	color: #f8f9fa;
	background-color: #212526;
	border: 1px solid #f8f9fa;
`;
export const ErrorMesssage = styled.p`
	width: 100%;
	font-size: 10px;
	color: #ff577f;
`;
export const ButtonSubmit = styled.button`
	border-radius: 4px;
	border: 0px;
	width: 84%;
	height: 35px;
	background-color: #59323f;
	color: #f8f9fa;
	cursor: pointer;
	:hover {
		background-color: #ff577f;
	}
`;

export const Select = styled.select`
	width: 84%;
	height: 35px;
	color: #f8f9fa;
	background-color: #212526;
	border: 1px solid #f8f9fa;
	border-radius: 4px;
`;
export const Option = styled.option``;
