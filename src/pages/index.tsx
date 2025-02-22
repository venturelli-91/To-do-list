"use client";
import TaskModal from "@/components/TaskModal";
import "@/pages/_app";
import React from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import TaskCard from "@/components/TaskCard";

export default function Home() {
	return (
		<React.StrictMode>
			<Flowbite>
				<DarkThemeToggle />
				<TaskModal />
				<TaskCard />
			</Flowbite>
		</React.StrictMode>
	);
}
