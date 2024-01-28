import React from "react";
import { motion, MotionProps } from "framer-motion";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";

type MenuItemProps = {
	title: string;
	to: string;
	customClass?: string;
	isMotion?: boolean;
} & MotionProps;

const MenuItem: React.FC<MenuItemProps> = ({
	title,
	to,
	customClass,
	isMotion,
	...motionProps
}) => {
	const activeClass = customClass ? styles[customClass] : "";
	const pendingClass = customClass ? styles.pending : "";

	const LiComponent = isMotion ? motion.li : "li";

	return (
		<LiComponent className={`${styles["menu-item"]} ${activeClass}`} {...motionProps}>
			<NavLink
				to={to}
				className={({ isActive, isPending }) =>
					isPending ? pendingClass : isActive ? styles.active : ""
				}
			>
				{title}
			</NavLink>
		</LiComponent>
	);
};

export default MenuItem;
