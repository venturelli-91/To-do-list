import React, { useState } from "react";
import { Button, Card } from "flowbite-react";
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

	const [openModal, setOpenModal] = useState(false);

	const addTarefa = (title: string, description: string) => {
		const novaTarefa: CardProps = {
			id: Date.now(),
			title,
			description,
		};
		setTarefas([...tarefas, novaTarefa]);
	};

	const deletarTarefa = (id: number) => {
		setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
	};

	return (
		<>
			<div>
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

				<div>
					{tarefas.map((tarefa) => (
						<Card key={tarefa.id}>
							<h4 className="font-bold text-pink-600">{tarefa.title}</h4>
							<p className="font-bold text-purple-900">{tarefa.description}</p>
							<Button
								color="pink"
								onClick={() => deletarTarefa(tarefa.id)}>
								Remover Tarefa
							</Button>
						</Card>
					))}
				</div>
			</div>
		</>
	);
};

export default TaskCard;
