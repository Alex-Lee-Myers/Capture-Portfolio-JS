import React from "react";
import styled from "styled-components";
import { pageAnimation } from "../Animation";
import { motion } from "framer-motion/dist/framer-motion";

const ContactUs = () => {
	return (
		<ContactUsStyled
			exit="exit"
			initial="hidden"
			animate="show"
			variants={pageAnimation}
		>
			<h2>Contact Us</h2>
		</ContactUsStyled>
	);
};

const ContactUsStyled = styled(motion.div)`
	h2 {
		padding: 1rem 0rem;
		color: white;
	}
`;

export default ContactUs;
