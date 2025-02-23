import { createContext, useReducer, useEffect } from "react";
import { Task } from "@/store/taskStore";

type TaskAction =
	| { type: "ADD"; payload: string }
	| { type: "TOGGLE"; payload: string }
	| { type: "DELETE"; payload: string }
	| { type: "INIT"; payload: Task[] };

function taskReducer(tasks: Task[], action: TaskAction): Task[] {
	switch (action.type) {
		case "ADD":
			return [
				...tasks,
				{ id: crypto.randomUUID(), title: action.payload, completed: false },
			];
		case "TOGGLE":
			return tasks.map((task) =>
				task.id === action.payload
					? { ...task, completed: !task.completed }
					: task
			);
		case "DELETE":
			return tasks.filter((task) => task.id !== action.payload);
		case "INIT":
			return action.payload;
		default:
			return tasks;
	}
}

export const TaskContext = createContext<{
	tasks: Task[];
	dispatch: React.Dispatch<TaskAction>;
}>({ tasks: [], dispatch: () => null });

export function TaskProvider({ children }: { children: React.ReactNode }) {
	const [tasks, dispatch] = useReducer(taskReducer, []);

	useEffect(() => {
		const saved = localStorage.getItem("tasks");
		if (saved) dispatch({ type: "INIT", payload: JSON.parse(saved) });
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	return (
		<TaskContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
}
