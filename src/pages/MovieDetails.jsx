import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MovieState from "../MovieState";

const MovieDetails = () => {
	const url = useLocation();
	const [movie, setMovie] = useState(null);
	const [movies, setMovies] = useState(MovieState);

	//useEffect
	useEffect(() => {
		const currentMovie = movies.filter(
			(stateMovie) => stateMovie.url === url.pathname
		);
		setMovie(currentMovie[0]);
	}, [movies, url]);

	return (
		<>
			{movie && (
				<StyledDetails>
					<StyledHeadline>
						<h2>{movie.title}</h2>
						<img src={movie.mainImg} alt={movie.title} />
					</StyledHeadline>

					<StyledAwards>
						{movie.awards.map((award) => (
							<Award
								key={award.title}
								title={award.title}
								description={award.description}
							/>
						))}
					</StyledAwards>
					<StyledImageDisplay>
						<img src={movie.secondaryImg} alt={movie.title} />
					</StyledImageDisplay>
				</StyledDetails>
			)}
		</>
	);
};

const StyledDetails = styled.div`
	color: white;
`;

const StyledHeadline = styled.div`
	min-height: 80vh;
	padding-top: 23vh;
	position: relative;
	h2 {
		position: absolute;
		top: 5%;
		left: 50%;
		transform: translate(-50%, -10%);
	}
	img {
		width: 100%;
		height: 90vh;
		object-fit: cover;
		object-position: top;
	}
`;

const StyledAwards = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 1500px) {
		display: block;
		margin: 2rem 2rem;
	}
`;

const StyledAwardComponent = styled.div`
	padding: 5rem;
	h3 {
		font-size: 2rem;
	}
	.line {
		width: 100%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0rem;
	}
	p {
		padding: 2rem 0rem;
	}
`;

const StyledImageDisplay = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
`;

//Award Component
const Award = ({ title, description }) => {
	return (
		<StyledAwardComponent>
			<h3>{title}</h3>
			<div className="line"></div>
			<p>{description}</p>
		</StyledAwardComponent>
	);
};

export default MovieDetails;
