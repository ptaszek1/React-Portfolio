import React from "react";
import styles from "./Homepage.module.scss";
import Image from "../../components/Image/Image";

const Homepage: React.FC = () => {
	return (
		<>
			<section className="hello">
				<div className="hello__text">
					<div className="hello__text-circle"></div>
					<div className="hello__text-cat">Cześć</div>
					<div className="hello__text-title">
						<div className="hello__text-title-light">Jestem Mariusz</div>
						<div className="hello__text-title-bold">Front-end Developer</div>
					</div>
					<div className="hello__text-description">
						Zapraszam do zapoznania się z moim portfolio!
					</div>
					<div className="hello__text-buttons">
						<a href="/kontakt" className="blue-btn">
							Zatrudnij mnie
						</a>
						<a href="/portfolio" className="transparent-btn">
							Portfolio
						</a>
					</div>
					<div className="hello__text-line">
						<Image
							src="wp-content/themes/ptaszek/assets/images/left-bottom-line.png"
							alt="line"
						/>
					</div>
				</div>
				<div className="hello__image">
					<Image
						src="wp-content/themes/ptaszek/assets/images/dotts.png"
						alt="dotts"
					/>
				</div>
			</section>
		</>
	);
};

export default Homepage;
