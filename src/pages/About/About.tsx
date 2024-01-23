import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	return (
		<div className="container w">
			<AboutMe sectionTitleTag="h1" />
			<Services />
		</div>
	);
};

export default About;
