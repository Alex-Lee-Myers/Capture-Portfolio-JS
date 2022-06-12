import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animations
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { pageAnimation } from "../Animation";

const AboutUs = () => {
	return (
		<motion.div
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
		</motion.div>
	);
};

export default AboutUs;
