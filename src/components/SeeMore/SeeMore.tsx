import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./SeeMore.module.scss";

interface SeeMoreProps extends Omit<NavLinkProps, `title`> {
	align?: string;
	title?: React.ReactNode;
}

const SeeMore: React.FC<SeeMoreProps> = ({ align = "", title, ...props }) => {
	const className = `${styles["view-all"]} ${styles[align]}`;

	return (
		<NavLink className={className} {...props}>
			{title}
		</NavLink>
	);
};

export default SeeMore;
