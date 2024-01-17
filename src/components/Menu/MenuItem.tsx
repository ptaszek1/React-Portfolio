import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";

type MenuItemProps = {
	title: string;
	to: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, to }) => {
	return (
		<li className={styles["menu-item"]}>
			<NavLink to={to}>{title}</NavLink>
		</li>
	);
};

export default MenuItem;
