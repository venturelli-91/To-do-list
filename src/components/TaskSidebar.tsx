import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiTable } from "react-icons/hi";

export default function TaskSidebar() {
	return (
		<Sidebar
			aria-label="Sidebar with tasks navigation"
			className="h-screen fixed">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item
						href="#"
						icon={HiChartPie}>
						Dashboard
					</Sidebar.Item>
					<Sidebar.Item
						href="#"
						icon={HiInbox}>
						Tarefas
					</Sidebar.Item>
					<Sidebar.Item
						href="#"
						icon={HiTable}>
						Categorias
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
}
