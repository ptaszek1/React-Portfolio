import React from "react";
import Circle from "./Circle";
import Triangle from "./Triangle";
import styles from "./GeometryTopLeft.module.scss";

const GeometryTopLeft: React.FC = () => {
	return (
		<div className={styles["geometry-top-left"]}>
			<div className={styles["geometry-top-left-circle"]}>
				<Circle size={338} border={8} />
			</div>
			<div className={styles["geometry-top-left-triangle"]}>
				<Triangle size={167} border={5} points="83.5,0 167,145 0,145" />
			</div>
		</div>
	);
};

export default GeometryTopLeft;
