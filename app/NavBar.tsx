"use client";

import Link from "next/link";
import css from "./NavBar.module.css";
import classnames from "classnames";

import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

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
		<nav className={classnames(css.navBar, css.navItems)}>
			<Link href="/">
				<AiFillBug />
			</Link>
			<ul className={css.navItems}>
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
			<Box>
				{status === "authenticated" && (
					<Link href="/api/auth/signout">Log out</Link>
				)}
				{status === "unauthenticated" && (
					<Link href="/api/auth/signin">Login</Link>
				)}
			</Box>
		</nav>
	);
};

export default NavBar;
