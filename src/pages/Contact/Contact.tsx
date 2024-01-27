import React from "react";
import styles from "./Contact.module.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import Container from "../../components/Container/Container";
import MotionWrapper from "../../components/MotionWrapper/MotionWrapper";

interface ContactProps {
	sectionTitleTag?: keyof JSX.IntrinsicElements;
}

const Contact: React.FC<ContactProps> = ({ sectionTitleTag = "h1" }) => {
	const handleSubmit = (formData: unknown) => {
		// Implement your logic to send emails here
		console.log("Form submitted:", formData);
	};

	return (
		<MotionWrapper className={styles.contact}>
			<Container>
				<SectionTitle title="Kontakt" alignment="left" tag={sectionTitleTag} />
				<div className={styles["contact__info"]}>
					<div className={styles["contact__info-text"]}>
						<div className={styles["contact__info-text-btn"]}>
							Nie wstydź się
						</div>
						<div className={styles["contact__info-text-title"]}>
							Napisz do mnie
						</div>
						<div className={styles["contact__info-text-description"]}>
							Chcesz zrealizować projekt na podstawie pliku xd,figma,sketch
							lub masz jakiekolwiek inne pytanie ? zapraszam serdecznie do
							kontaktu.
						</div>
						<div className={styles["contact__info-text-subtitle"]}>Email</div>
						<a
							href="mailto:mariusz.ptaszek2@gmail.com"
							className={styles["contact__info-text-value"]}
						>
							mariusz.ptaszek2@gmail.com
						</a>
					</div>
					<div
						className={`${styles["contact__info-form"]} ${
							styles[`contact__wrapper`]
						}`}
					>
						<ContactForm onSubmit={handleSubmit} />
					</div>
				</div>
			</Container>
		</MotionWrapper>
	);
};

export default Contact;
