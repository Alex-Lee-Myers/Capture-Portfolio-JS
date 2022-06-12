import React from "react";
import home1 from ".././img/home1.png";
//Framer Motion
import { motion } from "framer-motion/dist/framer-motion";
//Styled Components imported
import {
	StyledLayout,
	StyledDescription,
	StyledImage,
	StyledHide,
} from "../styles";
import { titleAnim, fade, photoAnim } from "../Animation";
import Wave from "./Wave";

const AboutSection = () => {
	return (
		<StyledLayout>
			<StyledDescription>
				<motion.div>
					<StyledHide>
						<motion.h2 variants={titleAnim} initial="hidden" animate="show">
							We work to make
						</motion.h2>
					</StyledHide>
					<StyledHide>
						<motion.h2 variants={titleAnim}>
							your <span>dreams</span>
						</motion.h2>
					</StyledHide>
					<StyledHide>
						<motion.h2 variants={titleAnim}>come true.</motion.h2>
					</StyledHide>
				</motion.div>
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas you may have. We
					can help you create a unique and memorable video that will be a part
					of your story.
				</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</StyledDescription>
			<StyledImage>
				<motion.img
					variants={photoAnim}
					src={home1}
					alt="A guy with a camera"
				/>
			</StyledImage>
		</StyledLayout>
	);
};
// <Wave></Wave>;
export default AboutSection;
