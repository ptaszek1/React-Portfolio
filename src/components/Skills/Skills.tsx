import React from "react";
import SkillsData from "../../data/SkillsData/SkillsData";
import SkillItem from "./SkillItem";
import styles from "./Skills.module.scss";

interface Skill {
	id: number;
	name: string;
	level: number;
}

interface SkillsProps {
	skills?: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills = SkillsData }) => {
	return (
		<div className={styles.skills}>
			{skills.map((skill) => (
				<SkillItem name={skill.name} level={skill.level} key={skill.id} />
			))}
		</div>
	);
};

export default Skills;
