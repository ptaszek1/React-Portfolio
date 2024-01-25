import React from "react";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
	title: string;
	alignment?: "left" | "right" | "center";
	tag?: keyof JSX.IntrinsicElements; // Allow any valid HTML tag
	size?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
	title,
	alignment = "left",
	tag: Tag = "div", // Default to div
	size = "",
}) => {
	const wrapperClassName = `${styles["section-title__wrapper"]} ${styles[alignment]}`;
	const titleClassName = `${styles["section-title"]} ${size && styles[size]}`;

	return (
		<div className={wrapperClassName}>
			<Tag className={titleClassName}>{title}</Tag>
		</div>
	);
};

export default SectionTitle;
