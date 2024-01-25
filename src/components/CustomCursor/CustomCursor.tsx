import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import styles from "./CustomCursor.module.scss";

interface CustomCursorProps {}

const CustomCursor: React.FC<CustomCursorProps> = () => {
	const [cursorVariant, setCursorVariant] = useState<"default" | "inner">("default");
	const [cursorVariantInner] = useState<"default" | "inner">("inner");
	const [isMouseDown, setIsMouseDown] = useState(false);
	const [isClickableHover, setIsClickableHover] = useState(false);

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setCursorPosition({ x: event.clientX, y: event.clientY });

			const isClickable = checkIsClickable(event);
			setIsClickableHover(isClickable);
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		const handleMouseDown = () => {
			setIsMouseDown(true);
			setCursorVariant("default");
		};

		const handleMouseUp = () => {
			setIsMouseDown(false);
			setCursorVariant("default");
		};

		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);

	useEffect(() => {
		if (isMouseDown) {
			const timeoutId = setTimeout(() => {
				setCursorVariant("default");
			}, 100); // Adjust the duration as needed

			return () => clearTimeout(timeoutId);
		}
	}, [isMouseDown]);

	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	const variants: Record<string, object> = {
		default: {
			opacity: 1,
			backgroundColor: isClickableHover
				? "rgba(255, 255, 255, 0.2)"
				: "rgba(255,255,255,0)",
			x: cursorPosition.x - 10,
			y: cursorPosition.y - 10,
			scale: isMouseDown || isClickableHover ? 2 : 1, // Scale up on mouse down
			transition: {
				duration: 0.1, // Adjust the duration to make the transition faster
			},
			mixBlendMode: "exclusion",
		},
		inner: {
			opacity: 1,
			x: cursorPosition.x - 3,
			y: cursorPosition.y - 3,
			transition: {
				duration: 0, // Adjust the duration to make the transition faster
			},
		},
	};

	const checkIsClickable = (event: MouseEvent): boolean => {
		const target = event.target as HTMLElement;
		const clickableElements = ["a", "button", "input", "select", "textarea"];

		return clickableElements.some((selector) => target.matches(selector));
	};

	return ReactDOM.createPortal(
		<>
			<div className={styles.cursor} ref={ref}>
				<motion.div
					variants={variants}
					className={styles.circle}
					animate={cursorVariant}
				></motion.div>
				<motion.div
					variants={variants}
					className={`${styles.dott} ${styles.inner}`}
					animate={cursorVariantInner}
				></motion.div>
			</div>
		</>,
		document.getElementById("cursor")!
	);
};

export default CustomCursor;
