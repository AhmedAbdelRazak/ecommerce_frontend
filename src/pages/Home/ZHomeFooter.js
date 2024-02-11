import React from "react";
import styled from "styled-components";

const ZHomeFooter = () => {
	return (
		<ZHomeFooterWrapper>
			<div>
				<DOV>
					<Img37
						loading='lazy'
						srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&'
					/>
					<DOV122>
						<DOV123>
							<DOV124>
								<Column>
									<DOV125>
										<DOV126>JORI</DOV126>
										<DOV127>
											<DOV128>Enter Email Address</DOV128>
											<DOV129>Sign Up</DOV129>
										</DOV127>
										<DOV130>Contact Info</DOV130>
										<DOV131>KHAITAN BLOCK 10</DOV131>
									</DOV125>
								</Column>
								<Column>
									<DOV132>
										<DOV133>Catagories</DOV133>
										<DOV134>Laptops & Computers</DOV134>
										<DOV135>Cameras & Photography</DOV135>
										<DOV136>Smart Phones & Tablets</DOV136>
										<DOV137>Video Games & Consoles</DOV137>
										<DOV138>Waterproof Headphones</DOV138>
									</DOV132>
								</Column>
								<Column>
									<DOV139>
										<DOV140>Customer Care</DOV140>
										<DOV141>My Account</DOV141>
										<DOV142>Discount</DOV142>
										<DOV143>Returns</DOV143>
										<DOV144>Orders History</DOV144>
										<DOV145>Order Tracking</DOV145>
									</DOV139>
								</Column>
								<Column>
									<DOV146>
										<DOV147>Pages</DOV147>
										<DOV148>Blog</DOV148>
										<DOV149>Browse the Shop</DOV149>
										<DOV150>Category</DOV150>
										<DOV151>Pre-Built Pages</DOV151>
										<DOV152>Visual Composer Elements</DOV152>
									</DOV146>
								</Column>
							</DOV124>
						</DOV123>
					</DOV122>
					<DOV154>
						<Img38
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/72972483a9a563feb20edb4f5591a8c63c4f6805d3c8a83445cec5742384fe43?apiKey=cdf657c2c4874b31988402beb4ed56ad&'
						/>
					</DOV154>
				</DOV>
			</div>
		</ZHomeFooterWrapper>
	);
};

export default ZHomeFooter;

const ZHomeFooterWrapper = styled.div``;

const DOV = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	line-height: normal;
	width: 25%;
	margin-left: 0px;
	@media (max-width: 991px) {
		width: 100%;
	}
`;

const Img37 = styled.img`
	aspect-ratio: 10;
	object-fit: auto;
	object-position: center;
	width: 904px;
	margin-top: 85px;
	max-width: 100%;
	@media (max-width: 991px) {
		margin-top: 40px;
	}
`;

const DOV122 = styled.div`
	background-color: var(--bg-shade, #fcf4f2);
	align-self: stretch;
	display: flex;
	margin-top: 83px;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px 60px;
	@media (max-width: 991px) {
		max-width: 100%;
		margin-top: 40px;
		padding: 0 20px;
	}
`;

const DOV123 = styled.div`
	width: 1165px;
	max-width: 100%;
	margin: 44px 0 31px;
	@media (max-width: 991px) {
		margin-top: 40px;
	}
`;

const DOV124 = styled.div`
	gap: 20px;
	display: flex;
	@media (max-width: 991px) {
		flex-direction: column;
		align-items: stretch;
		gap: 0px;
	}
`;

const DOV125 = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 16px;
	@media (max-width: 991px) {
		margin-top: 40px;
	}
`;

const DOV126 = styled.div`
	color: #000;
	font:
		700 38px Josefin Sans,
		sans-serif;
`;

const DOV127 = styled.div`
	border-radius: 3px;
	background-color: var(--white, #fff);
	display: flex;
	margin-top: 40px;
	justify-content: space-between;
	gap: 20px;
	padding: 3px 22px;
	@media (max-width: 991px) {
		padding: 0 20px;
	}
`;

const DOV128 = styled.div`
	color: var(--sub-text-color, #8a8fb9);
	font-family: Lato, sans-serif;
	font-weight: 400;
	align-self: start;
	margin-top: 20px;
	flex-grow: 1;
	flex-basis: auto;
`;

const DOV129 = styled.div`
	font-family: Roboto, sans-serif;
	border-radius: 3px;
	background-color: var(--Accent, #fb2e86);
	justify-content: center;
	color: var(--bg-shade, #eeeffb);
	font-weight: 500;
	white-space: nowrap;
	padding: 12px 39px;
	@media (max-width: 991px) {
		white-space: initial;
		padding: 0 20px;
	}
`;

const DOV130 = styled.div`
	color: var(--sub-text-color, #8a8fb9);
	font-family: Lato, sans-serif;
	font-weight: 400;
	margin-top: 29px;
`;

const DOV131 = styled.div`
	color: var(--sub-text-color, #8a8fb9);
	font-family: Lato, sans-serif;
	font-weight: 400;
	margin-top: 17px;
	white-space: nowrap;
	@media (max-width: 991px) {
		white-space: initial;
	}
`;

const DOV132 = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 16px;
	color: var(--sub-text-color, #8a8fb9);
	font-weight: 400;
	white-space: nowrap;
	@media (max-width: 991px) {
		margin-top: 40px;
		white-space: initial;
	}
`;

const DOV133 = styled.div`
	color: #000;
	font:
		600 22px Josefin Sans,
		sans-serif;
`;

const DOV134 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 46px;
	@media (max-width: 991px) {
		margin-top: 40px;
		white-space: initial;
	}
`;

const DOV135 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 25px;
	@media (max-width: 991px) {
		white-space: initial;
	}
`;

const DOV136 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 25px;
	@media (max-width: 991px) {
		white-space: initial;
	}
`;

const DOV137 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 28px;
	@media (max-width: 991px) {
		white-space: initial;
	}
`;

const DOV138 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 28px;
	@media (max-width: 991px) {
		white-space: initial;
	}
`;

const DOV139 = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 16px;
	color: var(--sub-text-color, #8a8fb9);
	font-weight: 400;
	@media (max-width: 991px) {
		margin-top: 40px;
	}
`;

const DOV140 = styled.div`
	color: #000;
	white-space: nowrap;
	font:
		600 22px Josefin Sans,
		sans-serif;
	@media (max-width: 991px) {
		white-space: initial;
	}
`;

const DOV141 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 51px;
	@media (max-width: 991px) {
		margin-top: 40px;
	}
`;

const DOV142 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 25px;
`;

const DOV143 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 29px;
`;

const DOV144 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 28px;
`;

const DOV145 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 25px;
`;

const DOV146 = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	font-size: 16px;
	color: var(--sub-text-color, #8a8fb9);
	font-weight: 400;
	@media (max-width: 991px) {
		margin-top: 40px;
	}
`;

const DOV147 = styled.div`
	color: #000;
	font:
		600 22px Josefin Sans,
		sans-serif;
`;

const DOV148 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 47px;
	@media (max-width: 991px) {
		margin-top: 40px;
	}
`;

const DOV149 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 25px;
`;

const DOV150 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 25px;
`;

const DOV151 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 25px;
`;

const DOV152 = styled.div`
	font-family: Lato, sans-serif;
	margin-top: 25px;
	white-space: nowrap;
	@media (max-width: 991px) {
		white-space: initial;
	}
`;

const DOV154 = styled.div`
	background-color: #e7e4f8;
	align-self: stretch;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: end;
	padding: 17px 60px;
	@media (max-width: 991px) {
		max-width: 100%;
		padding: 0 20px;
	}
`;

const Img38 = styled.img`
	aspect-ratio: 4.17;
	object-fit: auto;
	object-position: center;
	width: 90px;
	margin-right: 523px;
	@media (max-width: 991px) {
		margin-right: 10px;
	}
`;
