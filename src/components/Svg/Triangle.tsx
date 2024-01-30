import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CircleProps {
	size: number;
	border: number;
	points: string;
}

const Circle: React.FC<CircleProps> = ({ size, border, points }) => {
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
					animate={{ pathLength: 1 }}
					transition={{ duration: 1 }}
				/>
			</motion.svg>
		</AnimatePresence>
	);
};

export default Circle;
