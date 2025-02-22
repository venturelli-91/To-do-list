"use client";
import TaskModal from "@/components/TaskModal";
import "@/pages/_app";
import React from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import TaskCard from "@/components/TaskCard";
import TaskMegaMenu from "@/components/TaskMegaMenu";

export default function Home() {
	return (
		<React.StrictMode>
			<Flowbite>
				<TaskMegaMenu />
				<DarkThemeToggle />
				<TaskModal />
				<TaskCard />
			</Flowbite>
		</React.StrictMode>
	);
}
