import React from "react";
import styles from "./Description.module.scss";

interface DescriptionProps {
	children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
	return <p className={styles.description}>{children}</p>;
};

export default Description;
