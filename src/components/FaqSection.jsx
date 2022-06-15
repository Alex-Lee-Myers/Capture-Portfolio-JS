import React from "react";
import styled from "styled-components";
import { StyledLayout } from "../styles";

const FaqSection = () => {
	const [faqToggle, setFaqToggle] = React.useState(false);

	return (
		<StyledFaq>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>
			<h4>How Do I Start?</h4>
			<div onClick={() => setFaqToggle(!faqToggle)} className="answer">
				{faqToggle ? (
					<div>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
							voluptatibus!
						</p>
					</div>
				) : (
					<div />
				)}
			</div>
			<div className="faq-line"></div>
			<h4>Daily Schedule</h4>
			<div className="answer">
				<p>Lorem ipsum dolor sit amet.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
					voluptatibus!
				</p>
			</div>
			<div className="faq-line"></div>
			<h4>Different Payment Methods</h4>
			<div className="answer">
				<p>Lorem ipsum dolor sit amet.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
					voluptatibus!
				</p>
			</div>
			<div className="faq-line"></div>
			<h4>What Products Do You Offer?</h4>
			<div className="answer">
				<p>Lorem ipsum dolor sit amet.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
					voluptatibus!
				</p>
			</div>
			<div className="faq-line"></div>
		</StyledFaq>
	);
};

const StyledFaq = styled(StyledLayout)`
	display: block;
	span {
		display: block;
	}

	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;

export default FaqSection;
