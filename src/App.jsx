import React from "react";
//* Global Style
import GlobalStyle from "./components/GlobalStyle";
//* Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
import Nav from "./components/Nav";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path="/" exact element={<AboutUs />} />
					<Route path="/aboutus" exact element={<AboutUs />} />
					<Route path="/work" exact element={<OurWork />} />
					<Route path="/work/:id" exact element={<MovieDetails />} />
					<Route path="/contactus" exact element={<ContactUs />} />
				</Routes>
			</AnimatePresence>
			<Outlet />
		</div>
	);
}

export default App;
