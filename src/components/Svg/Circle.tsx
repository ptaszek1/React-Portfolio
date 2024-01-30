import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CircleProps {
	size: number;
	border: number;
}

const Circle: React.FC<CircleProps> = ({ size, border }) => {
	return (
		<AnimatePresence>
			<motion.svg
				width={size + border}
				height={size + border}
				viewBox={`0 0 ${size + border} ${size + border}`}
			>
				<motion.circle
					cx={size / 2}
					cy={size / 2}
					r={size / 2 - border}
					stroke="#12152F"
					strokeWidth={border}
					fill="transparent"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{
						duration: 1,
					}}
				/>
			</motion.svg>
		</AnimatePresence>
	);
};

export default Circle;
