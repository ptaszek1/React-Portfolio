import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import styles from "./About.module.scss";
import Container from "../../components/Container/Container";
import { motion } from "framer-motion";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	return (
		<motion.div
			className={styles["about-me"]}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Container>
				<AboutMe sectionTitleTag="h1" />
				<Services />
			</Container>
		</motion.div>
	);
};

export default About;
