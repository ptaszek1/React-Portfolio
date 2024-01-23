import React from "react";
import styles from "./Contact.module.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactForm from "../../components/ContactForm/ContactForm";

interface ContactProps {
	sectionTitleTag?: keyof JSX.IntrinsicElements;
}

const Contact: React.FC<ContactProps> = ({ sectionTitleTag = "h1" }) => {
	const handleSubmit = (formData: unknown) => {
		// Implement your logic to send emails here
		console.log("Form submitted:", formData);
	};

	return (
		<div className={styles.contact}>
			<div className="container w">
				<SectionTitle title="Kontakt" alignment="left" tag={sectionTitleTag} />
				<div className="contact__info row">
					<div className="contact__info-form contact__wrapper col-md-6">
						<ContactForm onSubmit={handleSubmit} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
