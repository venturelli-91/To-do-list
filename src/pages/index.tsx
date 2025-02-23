"use client";
import TaskModal from "@/components/TaskModal";
import "@/pages/_app";
import React from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import TaskCard from "@/components/TaskCard";
import TaskFooter from "@/components/TaskFooter";
import TaskNavbar from "@/components/TaskNavbar";
import TaskSidebar from "@/components/TaskSidebar";

export default function Home() {
	return (
		<React.StrictMode>
			<Flowbite>
				<div className="flex min-h-screen">
					<TaskSidebar />
					<div className="flex-1 ml-64">
						<TaskNavbar />
						<TaskModal
							openModal={false}
							setOpenModal={() => {}}
							addTarefa={() => {}}
						/>
						<TaskCard />
						<DarkThemeToggle />
						<TaskFooter />
					</div>
				</div>
			</Flowbite>
		</React.StrictMode>
	);
}
