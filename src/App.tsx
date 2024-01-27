import React, { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import "./App.scss";
import StickySocials from "./components/Socials/StickySocials";
import socials from "./data/socials/Socials";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import SingleBlogPage from "./pages/SingleBlog/SingleBlog";

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
		{
			path: "/portfolio",
			element: <Portfolio />,
		},
		{
			path: "/kontakt",
			element: <Contact />,
		},
		{
			path: "/portfolio/:slug",
			element: <SingleBlogPage />,
		},
	]);

	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	if (!element) return null;

	return (
		<>
			<CustomCursor />
			<StickySocials socials={socials} />
			<Header />
			<AnimatePresence mode="wait" initial={false}>
				{React.cloneElement(element, {
					key: location.pathname,
					location: location,
				})}
			</AnimatePresence>
			<Footer />
		</>
	);
};

export default App;
