import React from "react";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
	title: string;
	alignment?: "left" | "right" | "center";
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, alignment = "left" }) => {
	const wrapperClassName = `${styles["section-title__wrapper"]} ${styles[alignment]}`;

	return (
		<div className={wrapperClassName}>
			<div className={styles["section-title"]}>{title}</div>
		</div>
	);
};

export default SectionTitle;
