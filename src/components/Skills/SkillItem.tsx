import React from "react";
import styles from "./SkillItem.module.scss";

interface SkillItemProps {
	name: string;
	level: number;
	key: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, key }) => (
	<div className={styles["skills-item"]} key={key}>
		<div className={styles["skills-item-top"]} style={{ maxWidth: `${level}%` }}>
			<div className={styles["skills-item-top-name"]}>{name}</div>
			<div className={styles["skills-item-top-value"]}>{level}%</div>
		</div>
		<div className={styles["skills-item-bar"]}>
			<div
				className={styles["skills-item-bar-inside"]}
				style={{ maxWidth: `${level}%` }}
			></div>
		</div>
	</div>
);

export default SkillItem;