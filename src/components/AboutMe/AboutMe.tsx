import React from "react";
import Description from "../Description/Description";
import styles from "./AboutMe.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

const AboutMe: React.FC = () => {
	return (
		<div className="container w">
			<section className={styles["about-me"]}>
				<SectionTitle title="O mnie" alignment="right" />
				<div className="about-me__wrapper row">
					<div className="about-me__wrapper-text col-12 col-md-6">
						<div className={styles["about-me__wrapper-text-hello"]}>
							{" "}
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
					<div className="about-me__wrapper-skills col-12 col-md-6">
						<div className="about-me__wrapper-skills-item">
							<div
								className="about-me__wrapper-skills-item-top"
								style={{ maxWidth: "%" }}
							>
								<div className="about-me__wrapper-skills-item-top-name"></div>
								<div className="about-me__wrapper-skills-item-top-value"></div>
							</div>
							<div className="about-me__wrapper-skills-item-bar">
								<div
									className="about-me__wrapper-skills-item-bar-inside"
									style={{ maxWidth: "%" }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutMe;
