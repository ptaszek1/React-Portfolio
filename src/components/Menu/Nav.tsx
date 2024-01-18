import React from "react";
import styles from "./Nav.module.scss";
import MenuItem from "./MenuItem";

const data = [
	{
		id: 1,
		title: "Strona główna",
		to: "/",
	},
	{
		id: 2,
		title: "O mnie",
		to: "/about",
	},
	{
		id: 3,
		title: "Portfolio",
		to: "/projects",
	},
	{
		id: 4,
		title: "Kontakt",
		to: "/contact",
	},
];

const Nav: React.FC = () => {
	return (
		<nav>
			<ul id={styles["menu-main-menu"]}>
				{data.map((item) => (
					<MenuItem title={item.title} to={item.to} key={item.id} />
				))}
			</ul>
		</nav>
	);
};

export default Nav;
