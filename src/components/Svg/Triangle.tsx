import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CircleProps {
	size: number;
	border: number;
	inView?: boolean;
}

const calculateTrianglePoints = (size: number, border: number): string => {
	const height = (Math.sqrt(3) / 2) * size;

	const x1 = size / 2;
	const y1 = border;

	const x2 = size + border;
	const y2 = height + border;

	const x3 = border;
	const y3 = height + border;

	return `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
};

const Circle: React.FC<CircleProps> = ({ size, border, inView = true }) => {
	const points = calculateTrianglePoints(size, border);

	return (
		<AnimatePresence>
			<motion.svg
				width={size + border}
				height={size + border}
				viewBox={`0 0 ${size + border} ${size + border}`}
			>
				<motion.polygon
					points={points}
					stroke="#12152F"
					strokeWidth={border}
					fill="transparent"
					initial={{ pathLength: 0 }}
					animate={inView ? { pathLength: 1 } : {}}
					transition={{ duration: 1 }}
				/>
			</motion.svg>
		</AnimatePresence>
	);
};

export default Circle;
