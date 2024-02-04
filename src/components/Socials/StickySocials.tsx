import React from "react";
import ReactDOM from "react-dom";
import styles from "./StickySocials.module.scss";
import SocialsItem from "./SocialsItems";

interface Social {
	id: number;
	name: string;
	link: string;
	icon: React.ReactNode;
}

interface StickySocialsProps {
	socials: Social[];
}

const StickySocials: React.FC<StickySocialsProps> = ({ socials }) => {
	const portalRoot = document.getElementById("socials");

	if (!portalRoot) {
		throw new Error("Portal root element not found");
	}

	return ReactDOM.createPortal(
		<div className={styles["sticky-socials"]}>
			{socials.map((social) => (
				<div className={styles["sticky-socials__item"]} key={social.id}>
					<SocialsItem link={social.link} name={social.name}>
						{social.icon}
					</SocialsItem>
					<div className={styles["sticky-socials__item-line"]}></div>
				</div>
			))}
		</div>,
		portalRoot
	);
};

export default StickySocials;
