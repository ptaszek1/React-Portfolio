import React from "react";
import socials from "../../data/socials/Socials";
import SocialsItem from "../Socials/SocialsItems";
import styles from "./BurgerMenu.module.scss";
import Logo from "../Logo/Logo";
import logo from "../../assets/images/ptaszek-logo.png";
import MenuData from "../../data/Menu/MenuData";
import MenuItem from "../Menu/MenuItem";

type BurgerMenuProps = {
	openStatus: () => void;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ openStatus }) => (
	<div className={styles["burger-menu"]}>
		<div className={styles["burger-menu__top"]}>
			<div className={styles["burger-menu__top-logo"]}>
				<Logo src={logo} alt="" />
			</div>
			<div className={styles["burger-menu__top-close"]} onClick={openStatus}>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="times"
					className="svg-inline--fa fa-times fa-w-11"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 352 512"
				>
					<path
						fill="#ffffff"
						d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
					></path>
				</svg>
			</div>
		</div>
		<div className={styles["burger-menu__middle"]}>
			<ul>
				{MenuData.map((item) => (
					<MenuItem
						title={item.title}
						to={item.to}
						key={item.id}
						customClass="burger-item"
					/>
				))}
			</ul>
		</div>
		<div className={styles["burger-menu__bottom"]}>
			<div className={styles["burger-menu__bottom-socials"]}>
				{socials.map(
					(social: {
						id: number;
						link: string;
						icon: React.ReactNode;
						name: string;
					}) => (
						<div
							className={styles["burger-menu__bottom-socials-item"]}
							key={social.id}
						>
							<SocialsItem link={social.link}>{social.icon}</SocialsItem>
						</div>
					)
				)}
			</div>
			<div className={styles["burger-menu__bottom-copyrights"]}>
				© All Right Reserved By Mariusz Ptaszek
			</div>
		</div>
	</div>
);

export default BurgerMenu;
