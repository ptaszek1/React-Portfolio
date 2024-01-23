import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Services.module.scss";
import ServicesData from "../../data/Services/ServicesData";
import ServicesItem from "./ServicesItem";

interface ServicesProps {
	sectionTitleTag?: keyof JSX.IntrinsicElements; // Allow any valid HTML tag for SectionTitle
}

const Services: React.FC<ServicesProps> = ({ sectionTitleTag = "div" }) => {
	return (
		<div className="container w">
			<section className={styles["my-services"]}>
				<SectionTitle
					title="Moje usługi"
					alignment="left"
					tag={sectionTitleTag}
				/>
				<div className={styles["my-services__row"]}>
					{ServicesData.map((skill) => (
						<div className={styles["my-services__col"]} key={skill.id}>
							<ServicesItem {...skill} />
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Services;
