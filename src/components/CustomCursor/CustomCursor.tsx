import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { useMouse } from "react-use";
import styles from "./CustomCursor.module.scss";

interface CustomCursorProps {}

const CustomCursor: React.FC<CustomCursorProps> = () => {
	const [cursorText, setCursorText] = useState<string>("");
	const [cursorVariant, setCursorVariant] = useState<"default" | "project" | "inner">(
		"default"
	);
	const [cursorVariantInner] = useState<"default" | "project" | "inner">("inner");
	const [isMouseDown, setIsMouseDown] = useState(false);

	const ref = useRef<HTMLDivElement>(null);
	const { docX, docY } = useMouse(ref);

	useEffect(() => {
		if (docX !== undefined && docY !== undefined) {
			setCursorPosition({ x: docX, y: docY });
		}
	}, [docX, docY]);

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
			backgroundColor: "transparent",
			x: cursorPosition.x - 10,
			y: cursorPosition.y - 10,
			scale: isMouseDown ? 2 : 1, // Scale up on mouse down
			transition: {
				duration: 0.1, // Adjust the duration to make the transition faster
			},
		},
		inner: {
			opacity: 1,
			x: cursorPosition.x - 3,
			y: cursorPosition.y - 3,
			transition: {
				duration: 0, // Adjust the duration to make the transition faster
			},
		},
		project: {
			opacity: 1,
			backgroundColor: "#fff",
			color: "#000",
			height: 80,
			width: 80,
			fontSize: "18px",
			x: cursorPosition.x - 22, // Adjusted for better visual alignment
			y: cursorPosition.y - 22, // Adjusted for better visual alignment
		},
	};

	const projectEnter = () => {
		setCursorText("View");
		setCursorVariant("project");
	};

	const projectLeave = () => {
		setCursorText("");
		setCursorVariant("default");
	};

	return ReactDOM.createPortal(
		<>
			<div className={styles.cursor} ref={ref}>
				<motion.div
					variants={variants}
					className={styles.circle}
					animate={cursorVariant}
				>
					<span className={styles.cursorText}>{cursorText}</span>
				</motion.div>
				<motion.div
					variants={variants}
					className={`${styles.dott} ${styles.inner}`}
					animate={cursorVariantInner}
				></motion.div>
				<div
					className="project"
					onMouseEnter={projectEnter}
					onMouseLeave={projectLeave}
				>
					<span className={styles.projectName}>Discord Onboarding</span>
				</div>
			</div>
		</>,
		document.getElementById("cursor")!
	);
};

export default CustomCursor;
