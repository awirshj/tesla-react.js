import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// key={i}
// 							bgImage={pr?.bgImage}
// 							leftBtnText={pr?.btnOption1}
// 							rightBtnText={pr?.btnOption2}
// 							desc={pr?.desc}
// 							title={pr?.name}
// 							footer={pr?.sectionFooter}

function Section({
	title,
	bgImage,
	desc,
	rightBtnText,
	leftBtnText,
	footer,
	price,
}) {
	return (
		<Wrap bgImage={bgImage}>
			<Fade bottom>
				<ItemText>
					<h1>{title}</h1>
					{price && <p>{price}</p>}
					<p>{desc}</p>
				</ItemText>
			</Fade>
			<Buttons>
				<Fade bottom>
					<BtnGroup>
						<LeftBtn>{leftBtnText}</LeftBtn>

						{rightBtnText && <RightBtn>{rightBtnText}</RightBtn>}
					</BtnGroup>
				</Fade>
				{!footer ? (
					<DownArrow src="images/down-arrow.svg"></DownArrow>
				) : (
					<FooterSec>{footer}</FooterSec>
				)}
			</Buttons>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	display: flex;
	background-position: center;
	width: 100vw;
	height: 100vh;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	background-image: ${(props) => `url("/images/${props.bgImage}")`};
	background-size: cover;
	background-repeat: no-repeat;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
	font-size: 20px;

	p {
		font-size: 17px;
		padding-bottom: 4px;
		opacity: 0.85;
	}
`;

const BtnGroup = styled.div`
	display: flex;
	padding-bottom: 30px;
	@media (width<=768px) {
		flex-direction: column;
		gap: 16px;
		padding-bottom: 20px;
	}
`;
const LeftBtn = styled.div`
	height: 40px;
	width: 360px;
	color: #fff;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	opacity: 0.85;
	font-size: 17px;
	letter-spacing: 0.5px;
	cursor: pointer;
	margin-right: 10px;
	background-color: #171a20cc;
	transition: all 0.3s;
	&:hover {
		background-color: #171a20;
		opacity: 0.9;
	}
`;
const RightBtn = styled(LeftBtn)`
	background-color: #fff;
	opacity: 0.65;
	color: black;
	font-weight: 400;

	&:hover {
		background-color: #fff;
	}
`;
const DownArrow = styled.img`
	height: 40px;
	margin-top: 4px;
	margin-bottom: 16px;
	animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const FooterSec = styled.div`
	line-height: 1.2;
	font-size: 15px;
	padding-bottom: 16px;
`;
