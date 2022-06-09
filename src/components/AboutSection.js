import React from "react";
import home1 from ".././img/home1.png";
//Styled Components
// import styled from "styled-components";
import {
	StyledLayout,
	StyledDescription,
	StyledImage,
	StyledHide,
} from "../styles";

const AboutSection = () => {
	return (
		<StyledLayout>
			<StyledDescription>
				<div className="title">
					<StyledHide>
						<h2>We work to make</h2>
					</StyledHide>
					<StyledHide>
						<h2>
							your <span>dreams</span> come
						</h2>
					</StyledHide>
					<StyledHide>
						<h2>true.</h2>
					</StyledHide>
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
		</StyledLayout>
	);
};

export default AboutSection;
