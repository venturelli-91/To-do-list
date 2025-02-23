import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiTable, HiMenuAlt1 } from "react-icons/hi";
import { useEffect, useRef, useCallback } from "react";

interface TaskSidebarProps {
	isOpen: boolean;
	toggleSidebar: () => void;
}

export default function TaskSidebar({
	isOpen,
	toggleSidebar,
}: TaskSidebarProps) {
	const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

	const startTimer = useCallback(() => {
		if (isOpen) {
			clearTimeout(timerRef.current);
			timerRef.current = setTimeout(() => {
				toggleSidebar();
			}, 5000);
		}
	}, [isOpen, toggleSidebar]);

	useEffect(() => {
		startTimer();

		const handleMouseMove = () => {
			startTimer();
		};

		if (isOpen) {
			window.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isOpen, toggleSidebar, startTimer]);

	return (
		<>
			<button
				onClick={toggleSidebar}
				className={`fixed top-1.5 left-4 z-50 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-opacity duration-300 ${
					isOpen ? "opacity-0" : "opacity-100"
				}`}>
				<HiMenuAlt1 className="w-6 h-6 dark:text-white" />
			</button>
			<div
				className={`fixed transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
				onMouseEnter={() => clearTimeout(timerRef.current)}
				onMouseLeave={startTimer}>
				<Sidebar
					aria-label="Sidebar with tasks navigation"
					className="h-screen">
					<Sidebar.Items>
						<Sidebar.ItemGroup>
							<Sidebar.Item
								href="#"
								icon={HiChartPie}>
								Tarefas
							</Sidebar.Item>
							<Sidebar.Item
								href="#"
								icon={HiInbox}>
								About Us
							</Sidebar.Item>
							<Sidebar.Item
								href="#"
								icon={HiTable}>
								Contact
							</Sidebar.Item>
						</Sidebar.ItemGroup>
					</Sidebar.Items>
				</Sidebar>
			</div>
		</>
	);
}
