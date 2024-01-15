import React from "react";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import "./App.scss";

const App: React.FC = () => {
	return (
		<>
			<CustomCursor />
			<Header />
			<Homepage />
		</>
	);
};

export default App;
