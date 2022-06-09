import React from "react";
import home1 from ".././img/home1.png";
//Styled Components
import styled from "styled-components";

const AboutSection = () => {
	return (
		<StyledAbout>
			<StyledDescription>
				<div className="title">
					<Hide>
						<h2>We work to make</h2>
					</Hide>
					<Hide>
						<h2>
							your <span>dreams</span> come
						</h2>
					</Hide>
					<Hide>
						<h2>true.</h2>
					</Hide>
				</div>
				<p>
					Contact us for any photography or videography ideas you may have. We
					can help you create a unique and memorable video that will be a part
					of your story.
				</p>
				<button>Contact Us</button>
			</StyledDescription>
			<StyledImage>
				<img src={home1} alt="A guy with a camera" />
			</StyledImage>
		</StyledAbout>
	);
};

//Styled Components
const StyledAbout = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: centers;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;

const StyledDescription = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
`;

const StyledImage = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

export default AboutSection;
