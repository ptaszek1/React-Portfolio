import Button from "../Button/Button";
import styles from "./Header.module.scss";
import logo from "../../assets/images/ptaszek-logo.png";
import Logo from "../Logo/Logo";
import Nav from "../Menu/Nav";
import Container from "../Container/Container";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";
import BurgerIcon from "../Svg/Burger";

const Header: React.FC = () => {
	const [openBurger, openBurgerHandler] = useState(false);

	const burgerToggle = () => {
		openBurgerHandler(!openBurger);
	};

	const closeBurger = () => {
		openBurgerHandler(false);
	};

	return (
		<>
			<header className={styles.header}>
				<Container>
					<div className={styles["header__wrapper"]}>
						<h1 className={styles["header__home-title"]}>Mariusz Ptaszek</h1>
						<div className={styles["header__wrapper-logo"]}>
							<Logo src={logo} alt="" />
						</div>
						<div className={styles["header__wrapper-menu"]}>
							<Nav />
							<Button className="blue-btn" to="/kontakt">
								Pogadajmy
							</Button>
						</div>
						<div
							className={styles["header__wrapper-burger"]}
							onClick={burgerToggle}
						>
							<BurgerIcon />
						</div>
					</div>
				</Container>
			</header>
			<BurgerMenu openStatus={closeBurger} isOpen={openBurger} />
		</>
	);
};

export default Header;
