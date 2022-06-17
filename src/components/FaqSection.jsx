import React from "react";
import styled from "styled-components";
import { StyledLayout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion/dist/framer-motion";

const FaqSection = () => {
	return (
		<StyledFaq>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>

			<AnimateSharedLayout>
				<Toggle title="How Do I start?">
					<div className="answer">
						<div>
							<p>Lorem ipsum dolor sit amet.</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
								voluptatibus!
							</p>
						</div>
					</div>
				</Toggle>
			</AnimateSharedLayout>

			<AnimateSharedLayout>
				<Toggle title="Daily Schedule">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
							voluptatibus!
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>

			<AnimateSharedLayout>
				<Toggle title="Different Payment Methods">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
							voluptatibus!
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>

			<AnimateSharedLayout>
				<Toggle title="What Products Do You Offer?">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
							voluptatibus!
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
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
