import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
	className?: keyof typeof styles;
	children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, children }) => {
	return (
		<button className={className ? styles[className] : undefined}>{children}</button>
	);
};

export default Button;
