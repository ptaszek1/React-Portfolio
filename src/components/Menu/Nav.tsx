import React from "react";
import styles from "./Nav.module.scss";
import MenuItem from "./MenuItem";

const data = [
	{
		title: "Strona główna",
		to: "/",
	},
	{
		title: "O mnie",
		to: "/about",
	},
	{
		title: "Portfolio",
		to: "/projects",
	},
	{
		title: "Kontakt",
		to: "/contact",
	},
];

const Nav: React.FC = () => {
	return (
		<nav>
			<ul id={styles["menu-main-menu"]}>
				{data.map((item) => (
					<MenuItem title={item.title} to={item.to} />
				))}
			</ul>
		</nav>
	);
};

export default Nav;
