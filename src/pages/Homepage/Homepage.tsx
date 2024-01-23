import React from "react";
import Hello from "../../components/Hello/Hello";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import Articles from "../../components/Articles/Articles";
import Contact from "../../components/Contact/Contact";
import Container from "../../components/Container/Container";

const Homepage: React.FC = () => {
	return (
		<>
			<Container>
				<Hello />
				<AboutMe sectionTitleTag="h2" />
				<Services sectionTitleTag="h2" />
				<Articles sectionTitleTag="h2" />
				<Contact />
			</Container>
		</>
	);
};

export default Homepage;
