import React from "react";
import styles from "./Footer.module.scss";
import socials from "../../data/socials/Socials";
import SocialsItem from "../Socials/SocialsItems";
import Container from "../Container/Container";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles["footer__wrapper"]}>
					<div className={styles["footer__socials"]}>
						{socials.map(
							(social: {
								id: number;
								link: string;
								icon: React.ReactNode;
								name: string;
							}) => (
								<div
									className={styles["sticky-socials__item"]}
									key={social.id}
								>
									<SocialsItem link={social.link} name={social.name}>
										{social.icon}
									</SocialsItem>
									<div
										className={styles["sticky-socials__item-line"]}
									></div>
								</div>
							)
						)}
					</div>
					<div className={styles["footer__copyrights"]}>
						© All Right Reserved By Mariusz Ptaszek
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
