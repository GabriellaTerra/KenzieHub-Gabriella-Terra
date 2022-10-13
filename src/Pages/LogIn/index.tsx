import { UserContext } from "../../contexts/logInContext/AuthContext";
import React, { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
	CardForm,
	Form,
	Input,
	Label,
	LogInButton,
	GoToSignUpBnt,
	InfoSignUp,
	DivLabels,
	SubTittle,
	Tittle,
	ErrorMessages,
} from "./style";

interface IResponseData {
	email: string;
	password: string;
}

const schema = yup.object({
	email: yup.string().required("E-mail obrigátorio").email("E-mail inválido"),
	password: yup.string().required("Senha obrigatória"),
});

function LogIn() {
	const { signIn, isLoggedIn } = useContext(UserContext);

	const navigate = useNavigate();

	function GoToSignUp() {
		navigate("/SignUp");
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IResponseData>({
		resolver: yupResolver(schema),
	});

	if (isLoggedIn) {
		return <Navigate to="/Dashboard" />;
	}

	return (
		<>
			<Tittle>Kenzie Hub</Tittle>
			<CardForm>
				<SubTittle>Login</SubTittle>
				<Form onSubmit={handleSubmit(signIn as SubmitHandler<FieldValues>)}>
					<DivLabels>
						<Label>Email</Label>
					</DivLabels>

					<Input type="text" id="email" {...register("email")} />
					<ErrorMessages>{errors.email?.message}</ErrorMessages>

					<DivLabels>
						<Label>Senha</Label>
					</DivLabels>
					<Input type="password" id="password" {...register("password")} />
					<ErrorMessages>{errors.password?.message}</ErrorMessages>

					<LogInButton type="submit">Entrar</LogInButton>
				</Form>
				<InfoSignUp>Não possui uma conta ?</InfoSignUp>
				<GoToSignUpBnt onClick={GoToSignUp}>Cadastre-se</GoToSignUpBnt>
			</CardForm>
		</>
	);
}

export default LogIn;
