import { Modal, Button } from "flowbite-react";
import React, { useState } from "react";

interface ModalProps {
	openModal: boolean;
	setOpenModal: (open: boolean) => void;
	addTarefa: (title: string, description: string) => void;
}

const TaskModal = ({ openModal, setOpenModal, addTarefa }: ModalProps) => {
	const [titulo, setTitulo] = useState("");
	const [description, setDescription] = useState("");

	const handleAddTarefa = () => {
		if (titulo.trim() && description.trim()) {
			addTarefa(titulo, description);
			setTitulo("");
			setDescription("");
			setOpenModal(false);
		}
	};

	return (
		<>
			<Modal
				show={openModal}
				onClose={() => setOpenModal(false)}>
				<Modal.Header>Lista de tarefas:</Modal.Header>
				<Modal.Body>
					<input
						type="text"
						placeholder="Insira uma nova tarefa..."
						value={titulo}
						onChange={(e) => setTitulo(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Descreva a tarefa..."
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<Button onClick={handleAddTarefa}>Adicionar Tarefa</Button>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default TaskModal;
