import { ButtonAddTechs, DivButton } from "./style";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useContext } from "react";
import { UserAddTech } from "../../contexts/AddTech/AddTechContext";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	FormControl,
	Button,
} from "@chakra-ui/react";

function ButtonMoreTechs() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { onSubmitAddTech } = useContext(UserAddTech);

	const schema = yup.object({
		title: yup.string().required("Campo obrigatório"),
		status: yup.string().required("Campo obrigatório"),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<>
			<DivButton>
				<ButtonAddTechs onClick={onOpen}>+</ButtonAddTechs>
			</DivButton>
			<Modal border-radius="4px" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent backgroundColor="#212529" color="white">
					<ModalHeader backgroundColor="#343B41">
						Cadastrar Tecnologias
					</ModalHeader>
					<ModalCloseButton
						border="0px"
						color="white"
						backgroundColor="#343B41"
						cursor="pointer"
					/>
					<ModalBody pb={6}>
						<form
							onSubmit={handleSubmit(
								onSubmitAddTech as SubmitHandler<FieldValues>
							)}
						>
							<FormControl display="flex" flexDirection="column" width="50%">
								<label>Nome</label>
								<input type="text" id="title" {...register("title")} />

								<label>Selecionar status</label>
								<select id="status" {...register("status")}>
									<option value={"iniciante"}>Iniciante</option>
									<option value={"intermediário"}>Intermediário</option>
									<option value={"avançado"}>Avançado</option>
								</select>
								<Button
									type="submit"
									backgroundColor="#FF577F"
									color="white"
									cursor="pointer"
									mr={3}
								>
									Save
								</Button>
							</FormControl>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ButtonMoreTechs;
