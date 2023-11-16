import Link from "next/link";
import css from "./NavBar.module.css";
import classNames from "classnames";

import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
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
					<li className={css.link} key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
