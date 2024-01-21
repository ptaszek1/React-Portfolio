import React from "react";
import SkillsData from "../../data/SkillsData/SkillsData";
import SkillItem from "./SkillItem";
import styles from "./Skills.module.scss";

interface Skill {
	name: string;
	level: number;
}

interface SkillsProps {
	skills?: Skill[]; // Make the skills prop optional
}

const Skills: React.FC<SkillsProps> = ({ skills = SkillsData }) => {
	return (
		<div className={styles.skills}>
			{skills.map((skill) => (
				<SkillItem name={skill.name} level={skill.level} />
			))}
		</div>
	);
};

export default Skills;
