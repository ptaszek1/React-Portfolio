import React, { ReactNode } from "react";
import styles from "./SocialsItems.module.scss";

type SocialsItemProps = {
	link: string;
	name: string;
	children?: ReactNode;
};

const SocialsItem: React.FC<SocialsItemProps> = ({ link, children, name }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={styles["social-item"]}
			aria-label={`Link do ${name}`}
		>
			{children}
		</a>
	);
};

export default SocialsItem;
