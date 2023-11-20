"use client";

import Link from "next/link";
import css from "./NavBar.module.css";
import classnames from "classnames";

import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
	const pathname = usePathname();
	const { status, data: session } = useSession();

	const links = [
		{
			label: "Dashboard",
			href: "/",
		},
		{
			label: "Issues",
			href: "/issues/list",
		},
	];
	return (
		<nav className="border-b mb-5 px-5 py-3">
			<Container>
				<Flex justify="between">
					<Flex align="center" gap="3">
						<Link href="/">
							<AiFillBug />
						</Link>
						<ul className="flex space-x-6">
							{links.map((link) => (
								<li
									className={classnames(
										css.link,
										pathname === link.href ? css.active : ""
									)}
									key={link.href}
								>
									<Link href={link.href}>{link.label}</Link>
								</li>
							))}
						</ul>
					</Flex>
					<Box>
						{status === "authenticated" && (
							<Link href="/api/auth/signout">Log out</Link>
						)}
						{status === "unauthenticated" && (
							<Link href="/api/auth/signin">Login</Link>
						)}
					</Box>
				</Flex>
			</Container>
		</nav>
	);
};

export default NavBar;
