import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import socials from "../../data/socials/Socials";
import SocialsItem from "../Socials/SocialsItems";
import styles from "./BurgerMenu.module.scss";
import Logo from "../Logo/Logo";
import logo from "/images/ptaszek-logo.png";
import MenuData from "../../data/Menu/MenuData";
import MenuItem from "../Menu/MenuItem";
import CloseIcon from "../Svg/CloseIcon";

type BurgerMenuProps = {
	openStatus: () => void;
	isOpen: boolean;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ openStatus, isOpen }) => (
	<AnimatePresence>
		{isOpen && (
			<motion.div
				className={styles["burger-menu"]}
				initial={{ y: "-100%" }}
				animate={{ y: "0%" }}
				exit={{ y: "-100%" }}
				transition={{ duration: 0.2 }}
			>
				<div className={styles["burger-menu__top"]}>
					<div className={styles["burger-menu__top-logo"]}>
						<Logo src={logo} alt="" />
					</div>
					<div
						className={styles["burger-menu__top-close"]}
						onClick={openStatus}
					>
						<CloseIcon />
					</div>
				</div>
				<div className={styles["burger-menu__middle"]}>
					<ul>
						{MenuData.map((item, index) => (
							<MenuItem
								key={item.id}
								title={item.title}
								to={item.to}
								customClass="burger-item"
								isMotion={true}
								initial={{ opacity: 0, y: "-50px" }}
								animate={{ opacity: 1, y: "0px" }}
								transition={{ delay: index * 0.15 }}
								onClick={openStatus}
							/>
						))}
					</ul>
				</div>
				<motion.div
					className={styles["burger-menu__bottom"]}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
				>
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
									<SocialsItem link={social.link}>
										{social.icon}
									</SocialsItem>
								</div>
							)
						)}
					</div>
					<div className={styles["burger-menu__bottom-copyrights"]}>
						© All Right Reserved By Mariusz Ptaszek
					</div>
				</motion.div>
			</motion.div>
		)}
	</AnimatePresence>
);

export default BurgerMenu;
