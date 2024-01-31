import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSVG: React.FC = () => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
	});

	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			width="386.773"
			height="205.941"
			viewBox="0 0 386.773 205.941"
			initial={{ opacity: 0, y: "-50px" }}
			animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : "-50px" }}
			transition={{ delay: 1 }}
			ref={ref}
		>
			<g id="Shap" transform="translate(-352.843 -2699.454)">
				<g
					id="Polygon_4"
					data-name="Polygon 4"
					transform="matrix(0.974, -0.225, 0.225, 0.974, 352.843, 2823.841)"
					fill="none"
				>
					<path d="M19,0,38,33H0Z" stroke="none" />
					<path
						d="M 19 6.012453079223633 L 5.188987731933594 30 L 32.81101226806641 30 L 19 6.012453079223633 M 19 0 L 38 33 L 0 33 L 19 0 Z"
						stroke="none"
						fill="#12152f"
					/>
				</g>
				<g
					id="Ellipse_25"
					data-name="Ellipse 25"
					transform="translate(470.675 2888.425) rotate(-45)"
					fill="none"
					stroke="#12152f"
					strokeWidth="3"
				>
					<circle cx="12" cy="12" r="12" stroke="none" />
					<circle cx="12" cy="12" r="10.5" fill="none" />
				</g>
				<g
					id="Ellipse_26"
					data-name="Ellipse 26"
					transform="translate(705.675 2716.425) rotate(-45)"
					fill="none"
					stroke="#12152f"
					strokeWidth="3"
				>
					<circle cx="12" cy="12" r="12" stroke="none" />
					<circle cx="12" cy="12" r="10.5" fill="none" />
				</g>
				<path
					id="Path_101"
					data-name="Path 101"
					d="M428.467,2774.9s42.006-39.2,79.811-12.165,67.209-16.22,67.209-16.22"
					transform="translate(88.209 40)"
					fill="none"
					stroke="#12152f"
					strokeWidth="4"
				/>
			</g>
		</motion.svg>
	);
};

export default AnimatedSVG;
