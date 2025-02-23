import { Toast } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";
import { useEffect } from "react";
import { useTaskStore } from "@/store/taskStore";

export default function TaskToasts() {
	const { showSuccessToast, showDeleteToast, hideToasts } = useTaskStore();

	useEffect(() => {
		if (showSuccessToast || showDeleteToast) {
			const timer = setTimeout(hideToasts, 3000);
			return () => clearTimeout(timer);
		}
	}, [showSuccessToast, showDeleteToast, hideToasts]);

	return (
		<div className="fixed bottom-4 right-4 space-y-4">
			{showSuccessToast && (
				<Toast>
					<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
						<HiCheck className="h-5 w-5" />
					</div>
					<div className="ml-3 text-sm font-normal text-green-700">
						Tarefa adicionada com sucesso!
					</div>
					<Toast.Toggle onClick={hideToasts} />
				</Toast>
			)}

			{showDeleteToast && (
				<Toast>
					<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500">
						<HiX className="h-5 w-5" />
					</div>
					<div className="ml-3 text-sm font-normal text-red-700">
						Tarefa excluída com sucesso!
					</div>
					<Toast.Toggle onClick={hideToasts} />
				</Toast>
			)}
		</div>
	);
}
