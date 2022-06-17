import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";

const Toggle = ({ children, title }) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<motion.div layout className="question" onClick={() => setIsOpen(!isOpen)}>
			<motion.h4 layout>{title}</motion.h4>
			{isOpen ? children : ""}
			<div className="faq-line"></div>
		</motion.div>
	);
};

export default Toggle;
