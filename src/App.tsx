import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import "./App.scss";

const App: React.FC = () => {
	const element = useRoutes([
		{
			path: "/",
			element: <Homepage />,
		},
		{
			path: "/about",
			element: <About />,
		},
	]);

	const location = useLocation();

	if (!element) return null;

	return (
		<>
			<CustomCursor />
			<Header />
			<AnimatePresence mode="wait" initial={false}>
				{React.cloneElement(element, { key: location.pathname })}
			</AnimatePresence>
		</>
	);
};

export default App;
