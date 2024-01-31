import React, { useEffect, useState, useCallback } from "react";

interface TypingTextProps {
	texts: string[];
	speed: number;
	delay: number;
	duration: number;
}

const TypingText: React.FC<TypingTextProps> = ({ texts, speed, delay, duration }) => {
	const [text, setText] = useState<string>(texts[0]);
	const [index, setIndex] = useState<number>(0);
	const chars = "ABCDE▒FGHIlmnopqr▒stuvwx▒yz0123▒456789!▒@#$%^&*()_+-=[]{}|;:,.<>?/▒";

	const animateText = useCallback(() => {
		const nextIndex = (index + 1) % texts.length;
		const nextText = texts[nextIndex];
		setText("▒".repeat(nextText.length));
		const intervalId = setInterval(
			() =>
				setText(
					[...Array(nextText.length)]
						.map(() => chars[(Math.random() * chars.length) | 0])
						.join("")
				),
			speed
		);
		setTimeout(() => {
			clearInterval(intervalId);
			setText(nextText);
			setIndex(nextIndex);
		}, duration);
	}, [index, speed, duration]);

	useEffect(() => {
		const timeoutId = setTimeout(animateText, delay + duration);
		return () => clearTimeout(timeoutId);
	}, [animateText, delay, duration]);

	return <span>{text}</span>;
};

export default TypingText;
