import Hello from "../../components/Hello/Hello";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import Articles from "../../components/Articles/Articles";
import Contact from "../../components/Contact/Contact";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";
import PageTitleSetter from "../../components/PageTitleSetter/PageTitleSetter";
import GeometryTopLeft from "../../components/Svg/GeometryTopLeft";

const Homepage: React.FC = () => {
	return (
		<MotionWrapper>
			<PageTitleSetter title="Mariusz Ptaszek - Frontend Developer" />
			<GeometryTopLeft />
			<Hello />
			<AboutMe sectionTitleTag="h2" />
			<Services sectionTitleTag="h2" />
			<Articles sectionTitleTag="h2" limit={3} showShapes={true} />
			<Contact />
		</MotionWrapper>
	);
};

export default Homepage;
