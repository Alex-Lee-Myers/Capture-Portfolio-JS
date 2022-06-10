import React from "react";
//* Global Style
import GlobalStyle from "./components/GlobalStyle";
//* Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Routes>
				<Route path="/" exact element={<AboutUs />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/ourwork" exact element={<OurWork />} />
				<Route path="/contactus" exact element={<ContactUs />} />
			</Routes>
		</div>
	);
}

export default App;
