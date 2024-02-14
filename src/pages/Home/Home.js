/** @format */

import React, { useEffect } from "react";
import styled from "styled-components";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import Z1HeroComponent from "./Z1HeroComponent";
import ZSearch from "./Z2Search";
import Z3Vendors from "./Z3Vendors";
import Z4NewArrival from "./Z4NewArrival";
import Z5Birthday from "./Z5Birthday";
import Z6Fashion from "./Z6Fashion";
import ZHomeFooter from "./ZHomeFooter";

const Home = () => {
	useEffect(() => {
		ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENTID);
		ReactGA.send(window.location.pathname + window.location.search);

		// eslint-disable-next-line
	}, [window.location.pathname]);
	// >>>>>>>>   yusuf starting   <<<<<<<<<<<<
	return (
		<HomeWrapper>
			{/* helmet mlnash da3wa beh */}
			{/* prince el paraneece ah bashmohandez, anta sa7 */}
			<Helmet>
				<meta charSet='utf-8' />
				<title>JORI | ONLINE SHOP</title>
				<meta name='description' content='JORI store  Online Shop' />
				<link rel='icon' href='gq_frontend\src\GeneralImgs\favicon.ico' />
				<link rel='canonical' href='https://nextdayegy.com' />
			</Helmet>

			<div>
				<Z1HeroComponent />
			</div>

			<div>
				<ZSearch />
			</div>
			<div>
				<Z3Vendors />
			</div>

			<div>
				<Z4NewArrival />
			</div>

			<div>
				<Z5Birthday />
			</div>

			<div>
				<Z6Fashion />
			</div>

			<div>
				<ZHomeFooter />
			</div>
		</HomeWrapper>
	);
};

export default Home;

const HomeWrapper = styled.div`
	min-height: 880px;
	overflow-x: hidden;
`;
