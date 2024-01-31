import Hello from "../../components/Hello/Hello";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import Articles from "../../components/Articles/Articles";
import Contact from "../../components/Contact/Contact";
import styles from "./Homepage.module.scss";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";
import Circle from "../../components/Svg/Circle";
import Triangle from "../../components/Svg/Triangle";
import PageTitleSetter from "../../components/PageTitleSetter/PageTitleSetter";

const Homepage: React.FC = () => {
	return (
		<MotionWrapper>
			<PageTitleSetter title="Mariusz Ptaszek - Frontend Developer" />
			<div className={styles["geometry-top-left"]}>
				<div className={styles["geometry-top-left-circle"]}>
					<Circle size={338} border={8} />
				</div>
				<div className={styles["geometry-top-left-triangle"]}>
					<Triangle size={167} border={5} points="83.5,0 167,145 0,145" />
				</div>
			</div>
			<Hello />
			<AboutMe sectionTitleTag="h2" />
			<Services sectionTitleTag="h2" />
			<Articles sectionTitleTag="h2" limit={3} showShapes={true} />
			<Contact />
		</MotionWrapper>
	);
};

export default Homepage;
