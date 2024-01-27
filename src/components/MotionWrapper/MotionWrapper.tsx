import { motion } from "framer-motion";
import styles from "./MotionWrapper.module.scss"; // replace with your actual styles file path

interface MotionWrapperProps {
	children: React.ReactNode;
	className?: string; // optional className prop
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, className }) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default MotionWrapper;
