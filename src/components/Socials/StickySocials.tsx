import React from "react";
import ReactDOM from "react-dom";
import styles from "./StickySocials.module.scss";
import SocialsItem from "./SocialsItems";

interface StickySocialsProps {
	socials: [];
}

const StickySocials: React.FC<StickySocialsProps> = ({ socials }) => {
	const portalRoot = document.getElementById("socials");

	if (!portalRoot) {
		throw new Error("Portal root element not found");
	}

	return ReactDOM.createPortal(
		<div className={styles["sticky-socials"]}>
			{socials.map(
				(social: {
					id: number;
					link: string;
					icon: React.ReactNode;
					name: string;
				}) => (
					<div className={styles["sticky-socials__item"]} key={social.id}>
						<SocialsItem link={social.link}>{social.icon}</SocialsItem>
						<div className={styles["sticky-socials__item-line"]}></div>
					</div>
				)
			)}
		</div>,
		portalRoot
	);
};

export default StickySocials;
