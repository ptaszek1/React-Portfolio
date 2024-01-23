import React from "react";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
	title: string;
	alignment?: "left" | "right" | "center";
	tag?: keyof JSX.IntrinsicElements; // Allow any valid HTML tag
}

const SectionTitle: React.FC<SectionTitleProps> = ({
	title,
	alignment = "left",
	tag: Tag = "div", // Default to div
}) => {
	const wrapperClassName = `${styles["section-title__wrapper"]} ${styles[alignment]}`;

	return (
		<div className={wrapperClassName}>
			<Tag className={styles["section-title"]}>{title}</Tag>
		</div>
	);
};

export default SectionTitle;
