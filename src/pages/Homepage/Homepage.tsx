import React from "react";
import Hello from "../../components/Hello/Hello";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import Articles from "../../components/Articles/Articles";

const Homepage: React.FC = () => {
	return (
		<>
			<Hello />
			<AboutMe />
			<Services />
			<Articles />
		</>
	);
};

export default Homepage;
