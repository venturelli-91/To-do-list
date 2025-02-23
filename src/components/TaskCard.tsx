import React, { useState } from "react";
import { Alert, Button, Card, MegaMenu } from "flowbite-react";
import TaskModal from "./TaskModal";

interface CardProps {
	id: number;
	title: string;
	description: string;
}

const TaskCard = () => {
	const [tarefas, setTarefas] = useState<CardProps[]>([
		{ id: 1, title: "Estudar React", description: "Focar no uso de hooks" },
		{
			id: 2,
			title: "Refazer a todo List",
			description: "Adicionar flowbite na todoList",
		},
	]);

	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const [deleteMessage, setDeleteMessage] = useState<string | null>(null);
	const [openModal, setOpenModal] = useState(false);

	const addTarefa = (title: string, description: string) => {
		const novaTarefa: CardProps = {
			id: Date.now(),
			title,
			description,
		};
		setTarefas([...tarefas, novaTarefa]);
		setSuccessMessage("Tarefa adicionada com sucesso!");
		setTimeout(() => setSuccessMessage(null), 4000);
	};

	const deletarTarefa = (id: number) => {
		setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
		setDeleteMessage("Tarefa removida!");
		setTimeout(() => setDeleteMessage(null), 4000);
	};

	return (
		<>
			<MegaMenu>
				<div className="flex justify-center items-center w-full m-4">
					<Button
						onClick={() => setOpenModal(true)}
						color="green">
						Adicionar Tarefa
					</Button>

					<TaskModal
						openModal={openModal}
						setOpenModal={setOpenModal}
						addTarefa={addTarefa}
					/>
				</div>
			</MegaMenu>

			{successMessage && (
				<Alert color="green">
					<span>{successMessage}</span>
				</Alert>
			)}

			{deleteMessage && (
				<Alert color="red">
					<span>{deleteMessage}</span>
				</Alert>
			)}

			<div>
				{tarefas.map((tarefa) => (
					<Card key={tarefa.id}>
						<h4 className="font-bold text-yellow-600">{tarefa.title}</h4>
						<p className="font-bold text-purple-300">{tarefa.description}</p>
						<Button
							color="pink"
							onClick={() => deletarTarefa(tarefa.id)}>
							Remover Tarefa
						</Button>
					</Card>
				))}
			</div>
		</>
	);
};

export default TaskCard;
