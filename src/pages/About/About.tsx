import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import styles from "./About.module.scss";
import Container from "../../components/Container/Container";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	return (
		<div className={styles["about-me"]}>
			<Container>
				<AboutMe sectionTitleTag="h1" />
				<Services />
			</Container>
		</div>
	);
};

export default About;
