import Hello from "../../components/Hello/Hello";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import Articles from "../../components/Articles/Articles";
import Contact from "../../components/Contact/Contact";
import { motion } from "framer-motion";
import styles from "./Homepage.module.scss";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i: number) => {
		const delay = 1 + i * 0.5;
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: { delay, type: "spring", duration: 0.75, bounce: 0 },
				opacity: { delay, duration: 0.01 },
			},
		};
	},
};

const Homepage: React.FC = () => {
	return (
		<MotionWrapper>
			<div className={styles["geometry-top-left"]}>
				<motion.svg
					width="338"
					height="338"
					viewBox="0 0 337 337"
					initial="hidden"
					animate="visible"
				>
					<motion.circle
						cx="164"
						cy="164"
						r="164"
						stroke="#12152F"
						strokeWidth="8"
						fill="transparent"
						transform={`rotate(150 164 164)`}
						variants={draw}
						custom={1}
					/>
					<motion.polygon
						points="83.5,0 167,145 0,145"
						stroke="#12152F"
						strokeWidth="5"
						fill="transparent"
						variants={draw}
						custom={2}
					/>
				</motion.svg>
			</div>
			<Hello />
			<AboutMe sectionTitleTag="h2" />
			<Services sectionTitleTag="h2" />
			<Articles sectionTitleTag="h2" limit={3} />
			<Contact />
		</MotionWrapper>
	);
};

export default Homepage;
