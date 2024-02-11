import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPaginatedProducts } from "../../apiCore";

const Z5Birthday = () => {
	const [birthdayProducts, setBirthdayProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [records] = useState(8); // Adjusted to display 3 products per "page"

	const gettingNewArrivalProducts = () => {
		getPaginatedProducts(page, records, "birthday").then((data) => {
			if (data && data.error) {
				console.log("Error fetching new arrival products:", data.error);
			} else {
				if (data && data.data) {
					setBirthdayProducts((prevProducts) => [
						...prevProducts,
						...data.data,
					]);
				}
			}
		});
	};

	useEffect(() => {
		gettingNewArrivalProducts();
		// eslint-disable-next-line
	}, [page]);

	const handlePageChange = () => {
		setPage(page + 1);
	};

	return (
		<Z5BirthdayWrapper>
			{birthdayProducts && birthdayProducts.length === 0 ? null : (
				<div className='container'>
					<Div>
						<Div2>Happy Birthday</Div2>
						<Div3>Make their day extra special with JORI!</Div3>
						<Div4>
							<Div5>
								{birthdayProducts &&
									birthdayProducts.map((product, i) => {
										// Truncate the description to a maximum of 15 characters
										const truncatedDescription =
											product.description.length > 20
												? `${product.description.slice(0, 20)}...`
												: product.description;

										return (
											<Div6 key={i}>
												<Div7>
													<Div8>
														<Img
															loading='lazy'
															srcSet={
																product.addVariables &&
																product.productAttributes.productImages
																	? product.productAttributes.productImages[0]
																			.url
																	: product.thumbnailImage[0].images[0].url
															}
														/>
														<Div9>new</Div9>
													</Div8>
												</Div7>
												<Div10>{truncatedDescription}</Div10>
												<Div11>
													KWD{" "}
													{product.addVariables
														? product.productAttributes.priceAfterDiscount
														: product.priceAfterDiscount}{" "}
												</Div11>
												<Div12>
													<Div13>Add to cart</Div13>
												</Div12>
											</Div6>
										);
									})}
							</Div5>
						</Div4>
						<Div50>
							<Div51>Choose Gifts Now</Div51>
							<Img7
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/111e8c5572ff51bc41607b00516c6fb211c1d37445b11454c3c8434a1428acb4?apiKey=cdf657c2c4874b31988402beb4ed56ad&'
							/>
						</Div50>
						<Seemore onClick={handlePageChange}>
							<SeemoreText>SEE MORE</SeemoreText>
							<Arrowseemore
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/e82e6d578831e1139aee4340b110d904a43553f80e863dcbf9deaa3e134989b4?apiKey=cdf657c2c4874b31988402beb4ed56ad&'
								alt='Source Image'
							/>
						</Seemore>
					</Div>
				</div>
			)}
		</Z5BirthdayWrapper>
	);
};

export default Z5Birthday;

const Z5BirthdayWrapper = styled.div`
	margin-bottom: 50px;
`;

const Div = styled.div`
	background-color: var(--floward-com-linen, #fcf4f2);
	display: flex;
	max-width: flex;
	width: 100%;
	flex-direction: column;
	margin: 0 auto;
	padding: 16px 16px 32px;
`;

const Div2 = styled.div`
	color: var(--floward-com-black, #000);
	align-self: start;
	white-space: nowrap;
	font:
		700 19px/147% Inter,
		sans-serif;
`;

const Div3 = styled.div`
	color: var(--floward-com-black, #000);
	align-self: start;
	margin-top: 10px;
	white-space: nowrap;
	font:
		400 12px/158% Inter,
		sans-serif;
`;

const Div4 = styled.div`
	display: flex;
	margin-top: 16px;
	flex-direction: column;
	padding: 0 8px 40px;
`;

const Div5 = styled.div`
	display: flex;
	flex-wrap: wrap; // Allow items to wrap to the next line
	gap: 15px; // Set the gap between items
	justify-content: center; // Center the items in the container
	padding: 0; // Remove padding or set it as needed
	margin: 0 -5px; // Adjusting the margin to compensate for the gap on the outer sides
`;

const Div6 = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(50% - 5px); // Half of the container width minus half of the gap
	margin: 0 5px; // Add this margin to each product for spacing
	box-sizing: border-box; // Include padding and border in the width
	text-align: center;
	max-width: 400px;

	@media (max-width: 900px) {
		max-width: 150px;
	}
	// Adjust max-width to control the maximum width of the product card
`;

const Div7 = styled.div`
	align-items: center;
	background-color: var(--floward-com-athens-gray, #e9ecef);
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Div8 = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 171px;
	overflow: hidden;
	position: relative;
	display: flex;
	aspect-ratio: 0.91;
	width: 155px;
	align-items: end;
	padding: 8px 0 50px 60px;
`;

const Img = styled.img`
	position: absolute;
	inset: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;

const Div9 = styled.div`
	position: relative;
	color: var(--floward-com-nero, #fff);
	text-align: center;
	justify-content: center;
	background-color: var(--floward-com-pistachio, #84c502);
	margin-bottom: 58px;
	aspect-ratio: 1.5;
	padding: 4px 8px;
	font:
		400 13px/149% Inter,
		sans-serif;
`;

const Div10 = styled.div`
	color: var(--floward-com-black, #000);
	text-transform: capitalize;
	margin-top: 4px;
	white-space: nowrap;
	font:
		500 15px/157% Inter,
		sans-serif;
`;

const Div11 = styled.div`
	color: var(--floward-com-black, #000);
	margin-top: 4px;
	font:
		700 15px/161% Inter,
		sans-serif;
`;

const Div12 = styled.div`
	background-color: var(--floward-com-nero, #fff);
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Div13 = styled.div`
	color: var(--floward-com-orient, #006782);
	text-align: center;
	white-space: nowrap;
	justify-content: center;
	border: 1px solid var(--floward-com-orient, #006782);
	padding: 10px 41px;
	font:
		400 14px/146% Inter,
		sans-serif;
`;

const Div50 = styled.div`
	align-self: center;
	border-radius: 4px;
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
	background-color: var(--floward-com-nero, #fff);
	display: flex;
	width: 326px;
	max-width: 100%;
	justify-content: space-between;
	gap: 20px;
	padding: 8px 16px 8px 80px;
`;

const Div51 = styled.div`
	color: var(--floward-com-black, #000);
	text-align: center;
	flex-grow: 1;
	flex-basis: auto;
	font:
		700 15px/161% Inter,
		sans-serif;
`;

const Img7 = styled.img`
	aspect-ratio: 1;
	object-fit: contain;
	object-position: center;
	width: 24px;
`;

const Seemore = styled.div`
	display: flex;
	justify-content: center; // Center the see more button
	color: #07bc08;
	border-radius: 6px;
	background-color: var(--white, #fff);
	margin: 20px 0; // Add some margin above and below the see more button
	gap: 6px;
	padding: 9px 20px;
	cursor: pointer;
`;

const SeemoreText = styled.div`
	color: #07bc08;

	font-feature-settings:
		"clig" off,
		"liga" off;
	align-self: start;
	flex-grow: 1;
	white-space: nowrap;
	font-weight: 500;
	font-size: 16px;
	font-family: Inter, sans-serif;
`;

const Arrowseemore = styled.img`
	aspect-ratio: 1;
	color: #07bc08;
	object-fit: contain;
	object-position: center;
	width: 22px;
`;
