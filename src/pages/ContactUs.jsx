import React from "react";
import styled from "styled-components";
import { pageAnimation, titleAnim } from "../Animation";
import { motion } from "framer-motion/dist/framer-motion";

const ContactUs = () => {
	return (
		<ContactUsStyled
			exit="exit"
			initial="hidden"
			animate="show"
			variants={pageAnimation}
			style={{ background: "#fff" }}
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
				</Hide>
			</Title>

			<div>
				<Social variants={titleAnim}>
					<Circle />
					<h2> Send us a Message</h2>
				</Social>

				<Social variants={titleAnim}>
					<Circle />
					<h2> Send us a Message</h2>
				</Social>

				<Social variants={titleAnim}>
					<Circle />
					<h2> Send us a Message</h2>
				</Social>
			</div>
		</ContactUsStyled>
	);
};

const ContactUsStyled = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
	@media (max-width: 1500px) {
		padding: 2rem;
		font-size: 1rem;
	}
`;
const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
	@media (max-width: 1500px) {
		margin-top: 5rem;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;
const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #353535;
`;
const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
`;

export default ContactUs;
