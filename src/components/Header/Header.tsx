import Button from "../Button/Button";
import styles from "./Header.module.scss";
import logo from "../../assets/images/ptaszek-logo.png";
import Logo from "../Logo/Logo";
import Nav from "../Menu/Nav";
import Container from "../Container/Container";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles["header__wrapper"]}>
					<h1 className={styles["header__home-title"]}>Mariusz Ptaszek</h1>
					<div className={styles["header__wrapper-logo"]}>
						<Logo src={logo} alt="" />
					</div>
					<div className={styles["header__wrapper-menu"]}>
						<Nav />
						<Button className="blue-btn" to="/contact">
							Pogadajmy
						</Button>
					</div>
					<div className={styles["header__wrapper-burger"]}>
						<svg
							aria-hidden="true"
							width="20"
							height="22.85"
							focusable="false"
							data-prefix="fas"
							data-icon="bars"
							className="svg-inline--fa fa-bars fa-w-14"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								fill="currentColor"
								d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
							></path>
						</svg>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
