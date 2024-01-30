import React from "react";
import styles from "./Hello.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../../components/Image/Image";
import Button from "../../components/Button/Button";
import Description from "../../components/Description/Description";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import leftBottomLine from "../../assets/images/left-bottom-line.png";
import dottsImage from "../../assets/images/dotts.png";
import Container from "../Container/Container";
import Circle from "../Svg/Circle";

const Hello: React.FC = () => {
	return (
		<Container>
			<section className={`${styles.hello}`}>
				<div className={styles["hello__text"]}>
					<div className={styles["hello__text-circle"]}>
						<Circle size={153} border={5} />
					</div>
					<AnimatePresence>
						<motion.div
							animate={{ x: 0, opacity: 1 }}
							initial={{ x: -100, opacity: 0 }}
							transition={{
								duration: 0.15,
							}}
						>
							<CategoryTitle>Cześć</CategoryTitle>
						</motion.div>
					</AnimatePresence>
					<AnimatePresence>
						<motion.div
							className={styles["hello__text-title"]}
							animate={{ x: 0, opacity: 1 }}
							initial={{ x: -100, opacity: 0 }}
							transition={{
								duration: 0.15,
								delay: 0.1,
							}}
						>
							<div className={styles["hello__text-title-light"]}>
								Jestem Mariusz
							</div>
							<div className={styles["hello__text-title-bold"]}>
								Front-end Developer
							</div>
						</motion.div>
					</AnimatePresence>
					<AnimatePresence>
						<motion.div
							animate={{ x: 0, opacity: 1 }}
							initial={{ x: -100, opacity: 0 }}
							transition={{
								duration: 0.15,
								delay: 0.2,
							}}
						>
							<Description>
								Zapraszam do zapoznania się z moim portfolio!
							</Description>
						</motion.div>
					</AnimatePresence>
					<div className={styles["hello__text-buttons"]}>
						<Button to="/kontakt" className="blue-btn">
							Zatrudnij mnie
						</Button>
						<Button to="/portfolio" className="transparent-btn">
							Portfolio
						</Button>
					</div>
					<div className={styles["hello__text-line"]}>
						<Image src={leftBottomLine} alt="line" />
					</div>
				</div>
				<div className={styles["hello__image"]}>
					<AnimatePresence>
						<motion.img
							src={dottsImage}
							alt="dotts"
							initial={{ width: 0, transform: "translateX(132px)" }}
							animate={{ width: "100%", transform: "translateX(0)" }}
							transition={{ duration: 0.5 }} // adjust duration as needed
						/>
					</AnimatePresence>
				</div>
			</section>
		</Container>
	);
};

export default Hello;
