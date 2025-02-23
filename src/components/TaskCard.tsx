import { Card, Checkbox } from "flowbite-react";
import { HiTrash } from "react-icons/hi";
import { useTaskStore } from "@/store/taskStore";

export default function TaskCard() {
	const { tasks, toggleTask, deleteTask } = useTaskStore();

	return (
		<div className="p-4">
			{tasks.map((task) => (
				<Card
					key={task.id}
					className="mb-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<Checkbox
								checked={task.completed}
								onChange={() => toggleTask(task.id)}
							/>
							<span
								className={task.completed ? "line-through text-gray-500" : ""}>
								{task.title}
							</span>
						</div>
						<button
							onClick={() => deleteTask(task.id)}
							className="p-1 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-700 text-red-500">
							<HiTrash className="w-5 h-5" />
						</button>
					</div>
				</Card>
			))}
		</div>
	);
}
