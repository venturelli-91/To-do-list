import { Navbar } from "flowbite-react";
import React from "react";

export default function TaskNavbar() {
	return (
		<Navbar
			fluid
			className="border-b">
			<div className="pl-20">
				<Navbar.Brand href="/">
					<span className="text-xl font-semibold dark:text-white">
						Todo List
					</span>
				</Navbar.Brand>
			</div>
		</Navbar>
	);
}
