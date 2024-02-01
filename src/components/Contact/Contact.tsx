import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../Container/Container";
import styles from "./Contact.module.scss";
import ContactSvg from "../Svg/ContactSvg";

const Contact: React.FC = () => {
	return (
		<section className={styles.contact}>
			<Container>
				<SectionTitle title="Napisz do mnie" />
				<div className={styles["contact__wrapper"]}>
					<div className={styles["contact__wrapper-form"]}>
						<ContactForm onSubmit={() => {}} />
					</div>
					<div className={styles["contact__wrapper-image"]}>
						<ContactSvg />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
