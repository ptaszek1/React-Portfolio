import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={`${styles.header} container w`}>
			<div className={styles["header__wrapper"]}>
				<h1 className={styles["header__home-title"]}>Mariusz Ptaszek</h1>
				<div className="header__wrapper-logo">
					<a href="<?=home_url(); ?>">
						<img
							src="http://mariuszptaszek.pl/wp-content/uploads/2021/03/ptaszek-logo.png"
							alt="Mariusz Ptaszek Logo"
						/>
					</a>
				</div>
				<div className={styles["header__wrapper-menu"]}>
					<nav className="n-menu-wrap n-desktop-menu-wrap">
						<ul id={styles["menu-main-menu"]}>
							<li className={styles["menu-item"]}>
								<a href="http://mariuszptaszek.pl/" aria-current="page">
									<span>Strona główna</span>
								</a>
							</li>
							<li className={styles["menu-item"]}>
								<a href="http://mariuszptaszek.pl/o-mnie/">
									<span>O mnie</span>
								</a>
							</li>
							<li className={styles["menu-item"]}>
								<a href="http://mariuszptaszek.pl/portfolio/">
									<span>Portfolio</span>
								</a>
							</li>
							<li className={styles["menu-item"]}>
								<a href="http://mariuszptaszek.pl/kontakt/">
									<span>Kontakt</span>
								</a>
							</li>
						</ul>
					</nav>
					<Button className="blue-btn">Pogadajmy</Button>
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
		</header>
	);
};

export default Header;
