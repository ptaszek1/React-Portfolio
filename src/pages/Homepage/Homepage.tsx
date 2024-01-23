import React from "react";
import Hello from "../../components/Hello/Hello";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import Articles from "../../components/Articles/Articles";
import Contact from "../Contact/Contact";

const Homepage: React.FC = () => {
	return (
		<>
			<Hello />
			<AboutMe sectionTitleTag="h2" />
			<Services sectionTitleTag="h2" />
			<Articles sectionTitleTag="h2" />
			<Contact />
		</>
	);
};

export default Homepage;
