import React from "react";
import styles from "./ServicesItem.module.scss";

interface ServicesItemProps {
	icon: JSX.Element;
	title: string;
	description: string;
}

const ServicesItem: React.FC<ServicesItemProps> = ({ icon, title, description }) => {
	return (
		<div className={styles["my-services__item"]}>
			<div className={styles["my-services__item-icon"]}>{icon}</div>
			<div className={styles["my-services__item-title"]}>{title}</div>
			<div className={styles["my-services__item-description"]}>{description}</div>
		</div>
	);
};

export default ServicesItem;
