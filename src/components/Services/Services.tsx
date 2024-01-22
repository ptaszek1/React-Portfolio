import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Services.module.scss";
import ServicesData from "../../data/Services/ServicesData";
import ServicesItem from "./ServicesItem";

const Services: React.FC = () => {
	return (
		<div className="container w">
			<section className={styles["my-services"]}>
				<SectionTitle title="Moje usługi" alignment="left" />
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
