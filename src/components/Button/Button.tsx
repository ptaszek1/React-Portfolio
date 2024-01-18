import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

type ButtonProps = {
	className?: keyof typeof styles;
	to?: string;
	children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, to, children }) => {
	if (to) {
		return (
			<NavLink to={to} className={className ? styles[className] : undefined}>
				{children}
			</NavLink>
		);
	}

	return (
		<button className={className ? styles[className] : undefined}>{children}</button>
	);
};

export default Button;
