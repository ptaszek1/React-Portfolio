import React from "react";
import Circle from "./Circle";
import Triangle from "./Triangle";
import styles from "./GeometryBottomLeft.module.scss";
import { useInView } from "react-intersection-observer";

const GeometryBottomLeft: React.FC = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<div className={styles["geometry-bottom-left"]} ref={ref}>
			<div className={styles["geometry-bottom-left-circle"]}>
				<Circle size={245} border={8} inView={inView} />
			</div>
			<div className={styles["geometry-bottom-left-triangle"]}>
				<Triangle size={122} border={5} inView={inView} />
			</div>
		</div>
	);
};

export default GeometryBottomLeft;
