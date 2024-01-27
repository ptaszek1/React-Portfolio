import React from "react";
import styles from "./SectionTitle.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
	const { ref, inView } = useInView({
		triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
	});

	const MotionTag = motion[Tag as keyof typeof motion];
	const wrapperClassName = `${styles["section-title__wrapper"]} ${styles[alignment]}`;
	const titleClassName = `${styles["section-title"]} ${size && styles[size]} ${
		inView ? styles["animated"] : ""
	}`;

	return (
		<div className={wrapperClassName} ref={ref}>
			<MotionTag className={titleClassName}>{title}</MotionTag>
		</div>
	);
};

export default SectionTitle;
