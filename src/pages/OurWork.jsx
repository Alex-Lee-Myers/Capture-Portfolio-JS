import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MovieState from "../MovieState";
//Animations
import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../Animation";

const OurWork = () => {
	const [movies] = useState(MovieState);
	return (
		<Work
			AnimatePresence
			exitBeforeEnter
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			{movies.map((movie) => (
				<Movie>
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

const Movie = styled.div`
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

export default OurWork;
