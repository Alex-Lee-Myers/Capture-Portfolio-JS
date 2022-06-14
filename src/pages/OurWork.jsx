import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MovieState from "../MovieState";
//Animations
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { pageAnimation } from "../Animation";

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
					<h2>{movie.title}</h2>
					<div className="line"></div>
					<Link to={movie.url}>
						<img src={movie.mainImg} alt={movie.title} />
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
		background: #cccccc;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
		object-position: center;
	}
`;

export default OurWork;
