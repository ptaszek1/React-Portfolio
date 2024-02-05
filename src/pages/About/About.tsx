import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import styles from "./About.module.scss";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";
import PageTitleSetter from "../../components/PageTitleSetter/PageTitleSetter";
import GeometryTopLeft from "../../components/Svg/GeometryTopLeft";
import MetaDescriptionSetter from "../../components/MetaDescriptionSetter/MetaDescriptionSetter";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	return (
		<MotionWrapper className={styles["about-me"]}>
			<PageTitleSetter title="Mariusz Ptaszek - O mnie" />
			<MetaDescriptionSetter description="Cześć! Jestem Mariusz, Front-end developer. Jestem programistą z 7-letnim doświadczeniem praktycznym, specjalizującym się w tworzeniu stron internetowych." />
			<GeometryTopLeft />
			<AboutMe sectionTitleTag="h1" />
			<Services />
		</MotionWrapper>
	);
};

export default About;
