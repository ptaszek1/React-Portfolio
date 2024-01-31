import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import styles from "./About.module.scss";
import Container from "../../components/Container/Container";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";
import PageTitleSetter from "../../components/PageTitleSetter/PageTitleSetter";
import GeometryTopLeft from "../../components/Svg/GeometryTopLeft";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	return (
		<MotionWrapper className={styles["about-me"]}>
			<PageTitleSetter title="Mariusz Ptaszek - O mnie" />
			<GeometryTopLeft />
			<Container>
				<AboutMe sectionTitleTag="h1" />
				<Services />
			</Container>
		</MotionWrapper>
	);
};

export default About;
