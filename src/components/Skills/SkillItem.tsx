import React from "react";
import styles from "./SkillItem.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillItemProps {
	name: string;
	level: number;
	key: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
	});

	return (
		<div className={styles["skills-item"]} ref={ref}>
			<div className={styles["skills-item-top"]} style={{ maxWidth: `${level}%` }}>
				<div className={styles["skills-item-top-name"]}>{name}</div>
				<div className={styles["skills-item-top-value"]}>{level}%</div>
			</div>
			<motion.div className={styles["skills-item-bar"]}>
				<motion.div
					className={styles["skills-item-bar-inside"]}
					initial={{ width: 0, opacity: 0 }}
					animate={inView ? { width: `${level}%`, opacity: 1 } : {}}
					transition={{ duration: 1 }} // adjust duration as needed
				></motion.div>
			</motion.div>
		</div>
	);
};

export default SkillItem;
