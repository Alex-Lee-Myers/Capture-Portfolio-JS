import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MovieState from "../MovieState";
//Animations
import { motion } from "framer-motion/dist/framer-motion";
import {
	pageAnimation,
	fade,
	photoAnim,
	lineAnim,
	slider,
	sliderContainer,
} from "../Animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
	const [movies] = useState(MovieState);
	const [element, controls] = useScroll();

	return (
		<Work
			AnimatePresence
			exitBeforeEnter
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
			layout="position"
		>
			<motion.div className="sliderContainer" variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>
			{movies.map((movie) => (
				<Movie
				// ref={element}
				// variants={fade}
				// animate={controls}
				// initial="hidden"
				>
					<motion.h2 variants={fade}> {movie.title}</motion.h2>

					<motion.div className="line" variants={lineAnim}></motion.div>

					<Link to={movie.url}>
						<StyledHide>
							<motion.img
								variants={photoAnim}
								src={movie.mainImg}
								alt={movie.title}
							/>
						</StyledHide>
					</Link>
				</Movie>
			))}
		</Work>
	);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	h2 {
		padding: 1rem 0rem;
		color: white;
	}
`;

const Movie = styled(motion.div)`
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
		object-position: center;
	}
`;
const StyledHide = styled.div`
	overflow: hidden;
`;

const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #fffebf;
	z-index: 2;
`;
const Frame2 = styled(Frame1)`
	background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
	background: #8effa0;
`;

export default OurWork;
