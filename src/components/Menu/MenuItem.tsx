import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";

type MenuItemProps = {
	title: string;
	to: string;
	customClass?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, to, customClass }) => {
	const activeClass = customClass ? styles[customClass] : "";
	const pendingClass = customClass ? styles.pending : "";

	return (
		<li className={`${styles["menu-item"]} ${activeClass}`}>
			<NavLink
				to={to}
				className={({ isActive, isPending }) =>
					isPending ? pendingClass : isActive ? styles.active : ""
				}
			>
				{title}
			</NavLink>
		</li>
	);
};

export default MenuItem;
