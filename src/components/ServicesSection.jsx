import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styled Component
import { StyledLayout, StyledDescription, StyledImage } from "../styles";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";

const ServicesSection = () => {
	const [element, view] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	const controls = useAnimation();

	if (view) {
		controls.start("show");
	} else {
		controls.start("hidden");
	}

	return (
		<StyledServices ref={element} variants>
			<StyledDescription>
				<h2>
					High <span>quality</span> services.
				</h2>

				<StyledCards>
					<StyledCard>
						<div className="icon">
							<img src={clock} alt="clock" />
							<h3>Effecient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</StyledCard>

					<StyledCard>
						<div className="icon">
							<img src={teamwork} alt="teamwork" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</StyledCard>

					<StyledCard>
						<div className="icon">
							<img src={diaphragm} alt="diaphragm" />
							<h3>Diaphragm</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</StyledCard>

					<StyledCard>
						<div className="icon">
							<img src={money} alt="money" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</StyledCard>
				</StyledCards>
			</StyledDescription>
			<StyledImage>
				<img src={home2} alt="home2" />
			</StyledImage>
		</StyledServices>
	);
};

const StyledServices = styled(StyledLayout)`
	min-height: 90vh;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;

	h2 {
		padding-bottom: 5rem;
	}

	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}

	@media (max-width: 1500px) {
		display: block;
		padding: 2rem 2rem;
	}
`;

const StyledCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1500px) {
		justify-content: center;
	}
`;

const StyledCard = styled.div`
	flex-basis: 15rem;
	.icon {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
			background: white;
			color: black;
			padding: 1rem;
		}
	}
	@media (max-width: 1500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export default ServicesSection;
