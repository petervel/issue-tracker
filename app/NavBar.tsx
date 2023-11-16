"use client";

import Link from "next/link";
import css from "./NavBar.module.css";
import classNames from "classnames";

import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";

const NavBar = () => {
	const pathname = usePathname();
	console.log(pathname);
	const links = [
		{
			label: "Dashboard",
			href: "/",
		},
		{
			label: "Issues",
			href: "/issues",
		},
	];
	return (
		<nav className={classNames(css.navBar, css.navItems)}>
			<Link href="/">
				<AiFillBug />
			</Link>
			<ul className={css.navItems}>
				{links.map((link) => (
					<li
						className={classNames(
							css.link,
							pathname === link.href ? css.active : ""
						)}
						key={link.href}
					>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
