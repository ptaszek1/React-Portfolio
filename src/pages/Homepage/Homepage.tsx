import React from "react";
import Hello from "../../components/Hello/Hello";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";

const Homepage: React.FC = () => {
	return (
		<>
			<Hello />
			<AboutMe />
			<Services />
		</>
	);
};

export default Homepage;
