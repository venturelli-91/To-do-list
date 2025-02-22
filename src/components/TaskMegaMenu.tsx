import React, { useState } from "react";
import { MegaMenu, Button, Navbar } from "flowbite-react";
import TaskModal from "./TaskModal";

interface Tarefa {
	id: number;
	title: string;
	description: string;
}

const TaskMegaMenu = () => {
	const [openModal, setOpenModal] = useState(true);
	const [tarefas, setTarefas] = useState<Tarefa[]>([
		{ id: 1, title: "Estudar React", description: "Focar no uso de hooks" },
		{
			id: 2,
			title: "Refazer a todo List",
			description: "Adicionar flowbite na todoList",
		},
	]);

	const addTarefa = (title: string, description: string) => {
		const novaTarefa: Tarefa = {
			id: Date.now(),
			title,
			description,
		};
		setTarefas([...tarefas, novaTarefa]);
	};

	return (
		<>
			<MegaMenu>
				<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
					<Navbar.Brand href="/">
						<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
							To-do List
						</span>
					</Navbar.Brand>
					<div className="order-2 hidden items-center md:flex">
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
					<Navbar.Toggle />
				</div>
			</MegaMenu>
		</>
	);
};

export default TaskMegaMenu;
