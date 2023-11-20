"use client";

import Link from "next/link";
import css from "./NavBar.module.css";
import classnames from "classnames";

import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
	Avatar,
	Box,
	Container,
	DropdownMenu,
	Flex,
	Text,
} from "@radix-ui/themes";

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
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Text>
										<Avatar
											src={session?.user!.image!}
											fallback="?"
											size="2"
											radius="full"
											className="cursor-pointer"
										/>
									</Text>
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Label>
										<Text size="1">{session.user!.email}</Text>
									</DropdownMenu.Label>
									<DropdownMenu.Item>
										<Link href="/api/auth/signout">Log out</Link>
									</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
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
