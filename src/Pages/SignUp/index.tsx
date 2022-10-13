import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
	ButtonGoToLogIn,
	ButtonSubmit,
	CardFormSignUp,
	DivLabels,
	ErrorMesssage,
	Form,
	DivHeader,
	InputSignUp,
	Label,
	Tittle,
	MainTittle,
	Select,
	Option,
} from "./style";
import { UserSignUpContext } from "../../contexts/signUpContext/AuthContextSignUp";

interface IResponseData {
	name: string;
	email: string;
	password: string;
	contact: number;
	bio: string;
	course_module: string;
}

const schema = yup.object({
	name: yup.string().required("Campo obrigatório"),
	email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
	course_module: yup.string().required("Campo obrigatório"),
	contact: yup
		.string()
		.required("Campo obrigatório")
		.matches(
			/^([1-9]{2}) [9]{0,1}[6-9]{1}[0-9]{3}-[0-9]{4}$/,
			"Contato deve ser como este exemplo: 47 9658-9631 "
		),
	bio: yup.string().required("Campo obrigatório"),
	password: yup
		.string()
		.required("Campo obrigatório")
		.matches(
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
			"Senha deverá conter no mínimo uma letra minúscula, uma maiúscula, um número, um caractere especial e com o comprimento mínimo de oito caracteres."
		),
});

function SignUp() {
	const { onSubmit } = useContext(UserSignUpContext);

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IResponseData>({
		resolver: yupResolver(schema),
	});

	function GoToLogin() {
		navigate("/LogIn", { replace: true });
	}

	return (
		<>
			<DivHeader>
				<MainTittle>Kenzie Hub</MainTittle>
				<ButtonGoToLogIn onClick={GoToLogin}>Voltar</ButtonGoToLogIn>
			</DivHeader>

			<CardFormSignUp>
				<Tittle>Crie sua conta</Tittle>
				<Form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
					<DivLabels>
						<Label>Nome</Label>
					</DivLabels>
					<InputSignUp type="text" id="name" {...register("name")} />
					<ErrorMesssage>{errors.name?.message}</ErrorMesssage>

					<DivLabels>
						<Label>Email</Label>
					</DivLabels>
					<InputSignUp type="text" id="email" {...register("email")} />
					<ErrorMesssage>{errors.email?.message}</ErrorMesssage>

					<DivLabels>
						<Label>Senha</Label>
					</DivLabels>
					<InputSignUp type="text" id="password" {...register("password")} />
					<ErrorMesssage>{errors.password?.message}</ErrorMesssage>

					<DivLabels>
						<Label>Confirmar senha</Label>
					</DivLabels>
					<InputSignUp type="text" id="password" {...register("password")} />
					<ErrorMesssage>{errors.password?.message}</ErrorMesssage>

					<DivLabels>
						<Label>Bio</Label>
					</DivLabels>
					<InputSignUp type="text" id="bio" {...register("bio")} />
					<ErrorMesssage>{errors.bio?.message}</ErrorMesssage>

					<DivLabels>
						<Label>Contato</Label>
					</DivLabels>
					<InputSignUp type="text" id="contact" {...register("contact")} />
					<ErrorMesssage>{errors.contact?.message}</ErrorMesssage>

					<DivLabels>
						<Label>Selecionar Módulo</Label>
					</DivLabels>
					<Select id="course_module" {...register("course_module")}>
						<Option value={1}>1</Option>
						<Option value={2}>2</Option>
						<Option value={3}>3</Option>
					</Select>

					<ErrorMesssage>{errors.course_module?.message}</ErrorMesssage>

					<ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
				</Form>
			</CardFormSignUp>
		</>
	);
}
export default SignUp;
