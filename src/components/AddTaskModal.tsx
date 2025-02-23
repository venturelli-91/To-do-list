import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useTaskStore } from "@/store/taskStore";

interface AddTaskModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function AddTaskModal({ isOpen, onClose }: AddTaskModalProps) {
	const [title, setTitle] = useState("");
	const addTask = useTaskStore((state) => state.addTask);

	const handleSubmit = () => {
		if (title.trim()) {
			addTask(title);
			setTitle("");
			onClose();
		}
	};

	return (
		<Modal
			show={isOpen}
			onClose={onClose}>
			<Modal.Header>Nova Tarefa</Modal.Header>
			<Modal.Body>
				<TextInput
					type="text"
					placeholder="Digite o título da tarefa"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="mb-4"
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={handleSubmit}>Adicionar</Button>
				<Button
					color="gray"
					onClick={onClose}>
					Cancelar
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
