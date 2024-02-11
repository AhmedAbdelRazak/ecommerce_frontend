/** @format */

import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<Wrapper>
			<MenuWrapper>
				<MenuItem>About</MenuItem>
				<MenuItem>Contact</MenuItem>
				<MenuItem>Blog</MenuItem>
			</MenuWrapper>

			<ContactInfo>
				support@jori.com <br />
				(+965) 60328204 <br />
				09:00 - 21:00 - Everyday
			</ContactInfo>

			<Image
				loading='lazy'
				src='https://cdn.builder.io/api/v1/image/assets/TEMP/86ecccb2d8ca05a9530882de2f3aca37eb788e4c92d3bfb3274eac36bbc892d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&'
			/>

			<Copyright>Copyright© infiniteapps All Rights Reserved.</Copyright>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #fff;
	display: flex;
	width: 100%; /* Ensure it takes the full width */
	max-width: 100%; /* Adjust or remove this line if you want it to always take 100% of the viewport width */
	flex-direction: column;
	font-size: 16px;
	color: #888;
	font-weight: 400;
	text-align: center;
	padding: 29px 75px;
	box-sizing: border-box; /* Ensure padding is included in the width */
`;

const MenuWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	color: #000;
	white-space: nowrap;
`;

const MenuItem = styled.div`
	font-feature-settings:
		"clig" off,
		"liga" off;
	font-family:
		SF Pro Display,
		sans-serif;
	line-height: 150%;
`;

const ContactInfo = styled.div`
	font-feature-settings:
		"clig" off,
		"liga" off;
	font-family:
		SF Pro Display,
		sans-serif;
	line-height: 30px;
	margin-top: 43px;
`;

const Image = styled.img`
	aspect-ratio: 5.56;
	object-fit: contain;
	object-position: center;
	width: 132px;
	align-self: center;
	margin-top: 36px;
	max-width: 100%;
`;

const Copyright = styled.div`
	font-feature-settings:
		"clig" off,
		"liga" off;
	margin-top: 32px;
	white-space: nowrap;
	font:
		12px SF Pro Display,
		sans-serif;
`;

export default Footer;
