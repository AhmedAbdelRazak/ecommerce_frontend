/** @format */

import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getHomes } from "../../Admin/apiAdmin";

const Z1HeroComponent = () => {
	const [homePage, setHomePage] = useState({});

	const gettingAllHomes = () => {
		getHomes().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setHomePage(data[data.length - 1]);
			}
		});
	};

	useEffect(() => {
		gettingAllHomes();
		localStorage.removeItem("Cleared");
		// eslint-disable-next-line
	}, []);

	const settingsHero = {
		dots: true,
		infinite: true,
		autoplay: true,
		arrows: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		adaptiveHeight: true,
	};

	return (
		<HeroComponentWrapper className='mx-auto text-center'>
			<Slider {...settingsHero}>
				{homePage && homePage.thumbnail && homePage.thumbnail[0] && (
					<Banner1>
						<ImgB1
							loading='lazy'
							srcSet={
								homePage &&
								homePage.thumbnail &&
								homePage.thumbnail[0] &&
								homePage.thumbnail[0].url
							}
						/>
						<ContentB1 />
					</Banner1>
				)}

				{homePage && homePage.thumbnail2 && homePage.thumbnail2[0] && (
					<Banner1>
						<ImgB1
							loading='lazy'
							srcSet={
								homePage &&
								homePage.thumbnail2 &&
								homePage.thumbnail2[0] &&
								homePage.thumbnail2[0].url
							}
						/>
						<ContentB1 />
					</Banner1>
				)}

				{homePage && homePage.thumbnail3 && homePage.thumbnail3[0] && (
					<Banner1>
						<ImgB1
							loading='lazy'
							srcSet={
								homePage &&
								homePage.thumbnail3 &&
								homePage.thumbnail3[0] &&
								homePage.thumbnail3[0].url
							}
						/>
						<ContentB1 />
					</Banner1>
				)}
			</Slider>
		</HeroComponentWrapper>
	);
};

export default Z1HeroComponent;

// Banner1 style

const Banner1 = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	position: relative;
	display: flex;
	aspect-ratio: 1.69;
	margin-top: 17px;
	margin-left: 17px;
	margin-right: 17px;
	max-width: 100%;
	align-items: end;
	padding: 50px 49px 19px;
`;

const ImgB1 = styled.img`
	position: absolute;
	inset: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;

const ContentB1 = styled.div`
	position: relative;
	border-radius: 23px;
	background-color: #fff;
	display: flex;
	margin-top: 126px;
	width: 15px;
	height: 5px;
	flex-direction: column;
`;

const HeroComponentWrapper = styled.div`
	text-align: center;
	background-image: linear-gradient(white, white);
	margin-bottom: 50px;

	.slick-arrow {
		/* background-color: black; */
	}

	.slick-next {
		position: absolute !important;
		right: 1.2%;
		color: white !important;
	}

	.slick-prev {
		position: absolute !important;
		left: 0.5%;
		z-index: 200;
	}

	.slick-prev:before,
	.slick-next:before {
		font-family: "slick";
		font-size: 25px;
		line-height: 1;
		opacity: 0.75;
		color: grey;
		/* background-color: black; */
		padding-top: 5px !important;
		padding-bottom: 2px !important;
		padding-right: 3px;
		padding-left: 3px;
		border-radius: 10px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.slick-dots li button:before {
		font-size: 15px;
		margin-top: 10px;
	}

	@media (max-width: 1000px) {
		.heroPicMain {
			height: 100%;
			width: 110vw;
			opacity: 1;
			align: center;
			/* border-radius: 5%; */
		}

		.heroPicMain img {
			width: 100%; /* width of container */
			height: 300px; /* height of container */
			object-fit: cover;
			/* border: 5px solid black; */
			margin-right: 500px;
			border-radius: 3%;
		}

		.slick-next {
			right: 5% !important;
		}

		.slick-prev {
			left: 2%;
		}

		.slick-dots li button:before {
			font-size: 10px;
		}

		.slick-prev:before,
		.slick-next:before {
			font-family: "slick";
			font-size: 20px;
			line-height: 1;
			opacity: 0.75;
			color: white;
			background-color: black;
			padding-top: 3px !important;
			padding-bottom: 2px !important;
			padding-right: 3px;
			padding-left: 3px;
			border-radius: 10px;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			display: none;
		}
	}
`;
