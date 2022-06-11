import React from "react";
import home1 from ".././img/home1.png";
//Framer Motion
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
//Styled Components imported
import {
	StyledLayout,
	StyledDescription,
	StyledImage,
	StyledHide,
} from "../styles";

const AboutSection = () => {
	// Framer Variants
	const titleAnimation = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { duration: 2 } },
	};

	return (
		<StyledLayout>
			<StyledDescription>
				<div className="title">
					<StyledHide>
						<motion.h2
							variants={titleAnimation}
							initial="hidden"
							animate="show"
						>
							We work to make
						</motion.h2>
					</StyledHide>
					<StyledHide>
						<h2>
							your <span>dreams</span>
						</h2>
					</StyledHide>
					<StyledHide>
						<h2>come true.</h2>
					</StyledHide>
				</div>
				<p>
					Contact us for any photography or videography ideas you may have. We
					can help you create a unique and memorable video that will be a part
					of your story.
				</p>
				<button>Contact Us</button>
			</StyledDescription>
			<StyledImage>
				<img src={home1} alt="A guy with a camera" />
			</StyledImage>
		</StyledLayout>
	);
};

export default AboutSection;
