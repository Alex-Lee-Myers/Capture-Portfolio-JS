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
	const titleAnim = {
		hidden: { y: 200 },
		show: {
			y: 0,
			transition: { duration: 0.75, ease: "easeOut" },
		},
	};

	const photoAnim = {
		hidden: { scale: 1.5, opacity: 0 },
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				ease: "easeOut",
				duration: 0.75,
			},
		},
	};

	const fade = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { ease: "easeOut", duration: 0.75 },
		},
	};

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
