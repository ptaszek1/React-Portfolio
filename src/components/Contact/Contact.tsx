import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../Container/Container";

interface ContactProps {
	imagePath: string;
}

const Contact: React.FC<ContactProps> = ({ imagePath }) => {
	return (
		<section className="contact">
			<Container>
				<div className="contact__many">
					<img src={imagePath} alt="Many image" />
				</div>
				<SectionTitle title="Napisz do mnie" />
				<div className="contact__wrapper row">
					<div className="contact__wrapper-form col-12 col-md-6 col-lg-7 order-2 order-md-1">
						<ContactForm onSubmit={() => {}} />
					</div>
					<div className="contact__wrapper-image col-12 col-md-6 col-lg-5 order-1 order-md-2">
						{/* Your SVG image */}
						<svg
							id="Contact_Image"
							data-name="Contact Image"
							xmlns="http://www.w3.org/2000/svg"
							width="464.205"
							height="279.539"
							viewBox="0 0 464.205 279.539"
						>
							{/* ... (Your SVG path data) */}
						</svg>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
