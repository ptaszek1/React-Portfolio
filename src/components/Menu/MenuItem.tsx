import React from "react";
import { motion, MotionProps } from "framer-motion";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";

type MenuItemProps = {
	title: string;
	to: string;
	customClass?: string;
	isMotion?: boolean;
	onClick?: () => void;
} & MotionProps;

const MenuItem: React.FC<MenuItemProps> = ({
	title,
	to,
	customClass,
	isMotion,
	onClick,
	...motionProps
}) => {
	const activeClass = customClass ? styles[customClass] : "";
	const pendingClass = customClass ? styles.pending : "";

	if (isMotion) {
		return (
			<motion.li
				className={`${styles["menu-item"]} ${activeClass}`}
				{...motionProps}
				onClick={onClick}
			>
				<NavLink
					to={to}
					className={({ isActive, isPending }) =>
						isPending ? pendingClass : isActive ? styles.active : ""
					}
				>
					{title}
				</NavLink>
			</motion.li>
		);
	} else {
		return (
			<li className={`${styles["menu-item"]} ${activeClass}`} onClick={onClick}>
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
	}
};

export default MenuItem;
