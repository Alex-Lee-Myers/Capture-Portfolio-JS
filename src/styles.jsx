import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const StyledLayout = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
	@media (max-width: 1500px) {
		display: block;
		padding: 2rem 2rem;
		text-align: center;
	}
`;

export const StyledDescription = styled.div`
	flex: 1;
	z-index: 2;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
	@media (max-width: 1500px) {
		padding: 0;
		button {
			margin: 2rem 0rem 5rem 0rem;
		}
	}
`;

export const StyledImage = styled.div`
	flex: 1;
	z-index: 2;
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
		object-position: center;
	}
	@media (max-width: 1500px) {
		img {
			width: 100%;
		}
	}
`;

export const StyledHide = styled.div`
	overflow: hidden;
`;
