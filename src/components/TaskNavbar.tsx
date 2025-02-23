import Link from "next/link";
import { Navbar } from "flowbite-react";
import React from "react";

const TaskNavbar = () => {
	return (
		<Navbar
			fluid
			rounded>
			<Navbar.Brand
				as={Link}
				href="https://flowbite-react.com">
				<span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
					To-do List
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link
					href="#"
					active>
					Home
				</Navbar.Link>
				<Navbar.Link
					as={Link}
					href="#">
					About
				</Navbar.Link>
				<Navbar.Link href="#">GitHub</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default TaskNavbar;
