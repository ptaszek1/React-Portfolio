import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import styles from "./CustomCursor.module.scss";

const CustomCursor: React.FC = () => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isClickableHover, setIsClickableHover] = useState(false);
	const [isMouseDown, setIsMouseDown] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const variants = {
		default: {
			x: cursorPosition.x - 10,
			y: cursorPosition.y - 10,
			scale: isMouseDown || isClickableHover ? 2 : 1,
			backgroundColor: isClickableHover
				? "rgba(107,132,255, 0.5)"
				: "rgba(255,255,255,0)",
			transition: { duration: 0.1 },
		},
		inner: {
			x: cursorPosition.x - 3,
			y: cursorPosition.y - 3,
			transition: { duration: 0 },
		},
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (!window.matchMedia("(hover: none)").matches && windowWidth > 768) {
			const handleMouseMove = (event: MouseEvent) => {
				setCursorPosition({ x: event.clientX, y: event.clientY });
				setIsClickableHover(
					Boolean(
						(event.target as HTMLElement).closest(
							"a, button, input, select, textarea"
						)
					)
				);
			};

			const handleMouseDown = () => setIsMouseDown(true);
			const handleMouseUp = () => setIsMouseDown(false);

			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mousedown", handleMouseDown);
			document.addEventListener("mouseup", handleMouseUp);

			return () => {
				document.removeEventListener("mousemove", handleMouseMove);
				document.removeEventListener("mousedown", handleMouseDown);
				document.removeEventListener("mouseup", handleMouseUp);
			};
		} else {
			document.body.classList.add("standard-cursor");
		}
	}, [windowWidth]);

	if (window.matchMedia("(hover: none)").matches || windowWidth <= 768) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className={styles.cursor}>
			<motion.div
				variants={variants}
				className={styles.circle}
				animate="default"
				style={{ mixBlendMode: "exclusion" }}
			/>
			<motion.div
				variants={variants}
				className={`${styles.dott} ${styles.inner}`}
				animate="inner"
			/>
		</div>,
		document.getElementById("cursor")!
	);
};

export default CustomCursor;
