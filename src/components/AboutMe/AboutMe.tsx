import React from "react";
import Description from "../Description/Description";
import styles from "./AboutMe.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import Skills from "../Skills/Skills";

interface AboutMeProps {
	sectionTitleTag?: keyof JSX.IntrinsicElements; // Allow any valid HTML tag for SectionTitle
}

const AboutMe: React.FC<AboutMeProps> = ({ sectionTitleTag = "div" }) => {
	return (
		<div className="container w">
			<section className={styles["about-me"]}>
				<SectionTitle title="O mnie" alignment="right" tag={sectionTitleTag} />
				<div className={`${styles["about-me__wrapper"]}`}>
					<div className={`${styles["about-me__wrapper-text"]}`}>
						<div className={styles["about-me__wrapper-text-hello"]}>
							Cześć!
						</div>
						<div className={styles["about-me__wrapper-text-name"]}>
							Jestem Mariusz, Front-end developer
						</div>
						<Description>
							Jestem programistą z 7-letnim doświadczeniem praktycznym,
							specjalizującym się w tworzeniu stron internetowych. Kładę
							ogromny nacisk na detale i zawsze dążę do realizacji
							powierzonych mi zadań na najwyższym poziomie. Poza pracą, moje
							zainteresowania obejmują poławianie bursztynów oraz
							poszukiwania skarbów przy użyciu wykrywacza metali, co pomaga
							mi zachować równowagę między życiem zawodowym a prywatnym.
						</Description>
						<div className={styles["about-me__wrapper-text-buttons"]}>
							<Button to="/kontakt" className="transparent-btn">
								Wyślij wiadomość
							</Button>
						</div>
					</div>
					<div className={`${styles["about-me__wrapper-skills"]}`}>
						<Skills />
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutMe;
