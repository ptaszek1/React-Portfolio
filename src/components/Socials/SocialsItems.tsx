import React, { ReactNode } from "react";
import styles from "./SocialsItems.module.scss";

type SocialsItemProps = {
	link: string;
	children?: ReactNode;
};

const SocialsItem: React.FC<SocialsItemProps> = ({ link, children }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={styles["social-item"]}
		>
			{children}
		</a>
	);
};

export default SocialsItem;
