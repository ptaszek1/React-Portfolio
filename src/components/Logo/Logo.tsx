import React from "react";
import { NavLink } from "react-router-dom";

interface LogoProps {
	src: string;
	alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
	return (
		<NavLink to="/" aria-label="Strona główna - link">
			<img src={src} alt={alt} />
		</NavLink>
	);
};

export default Logo;
