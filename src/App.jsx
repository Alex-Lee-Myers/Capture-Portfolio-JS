import React from "react";
//* Global Style
import GlobalStyle from "./components/GlobalStyle";
//* Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
import Nav from "./components/Nav";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Routes>
				<Route path="/" element={<AboutUs />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/work" element={<OurWork />} />
				<Route path="/work/:id" element={<MovieDetails />} />
				<Route path="/contactus" element={<ContactUs />} />
			</Routes>
			<Outlet />
		</div>
	);
}

export default App;
