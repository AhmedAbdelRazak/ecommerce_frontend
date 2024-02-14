import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPaginatedProducts } from "../../apiCore";

const Z6Fashion = () => {
	const [fashionProducts, setFashionProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [records] = useState(12); // Adjusted to display 3 products per "page"

	const gettingNewArrivalProducts = () => {
		getPaginatedProducts(page, records, "Fashion").then((data) => {
			if (data && data.error) {
				console.log("Error fetching new arrival products:", data.error);
			} else {
				// console.log(data.data, "Data.data");
				if (data && data.data) {
					setFashionProducts((prevProducts) => [...prevProducts, ...data.data]);
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
		<Z6FashionWrapper>
			{fashionProducts && fashionProducts.length === 0 ? null : (
				<div className='container'>
					<DOV14>
						<DOV15>JORI</DOV15>
					</DOV14>

					<DOV33>
						<DOV34>
							<DOV35>JORI Fashion </DOV35>
						</DOV34>
					</DOV33>
					<ProductsContainer>
						{fashionProducts &&
							fashionProducts.map((product, i) => {
								const truncatedDescription =
									product.description.length > 20
										? `${product.description.slice(0, 20)}...`
										: product.description;
								const productImage =
									product &&
									product.addVariables &&
									product.productAttributes &&
									product.productAttributes.productImages &&
									product.productAttributes.productImages[0]
										? product.productAttributes &&
											product.productAttributes.productImages[0].url
										: product.thumbnailImage[0] &&
											product.thumbnailImage[0].images &&
											product.thumbnailImage[0].images[0].url;
								const productPrice = product.addVariables
									? product.productAttributes &&
										product.productAttributes.priceAfterDiscount
									: product.priceAfterDiscount;

								return (
									<ProductWrapper key={i}>
										<ProductCard>
											<ProductImage
												loading='lazy'
												src={productImage}
												alt='Product Image'
											/>
										</ProductCard>
										<ProductName>{truncatedDescription}</ProductName>
										<ProductPrice>{`${productPrice} KD`}</ProductPrice>
									</ProductWrapper>
								);
							})}
					</ProductsContainer>
					<Seemore onClick={handlePageChange}>
						<SeemoreText>SEE MORE</SeemoreText>
						<Arrowseemore
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/e82e6d578831e1139aee4340b110d904a43553f80e863dcbf9deaa3e134989b4?apiKey=cdf657c2c4874b31988402beb4ed56ad&'
							alt='Source Image'
						/>
					</Seemore>
				</div>
			)}
		</Z6FashionWrapper>
	);
};

export default Z6Fashion;

const Z6FashionWrapper = styled.div`
	margin-bottom: 50px;
	width: 100%;
	background: var(--white, #fff);
`;

const ProductsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
	padding: 20px;
`;

const ProductWrapper = styled.div`
	width: calc(25% - 20px);
	text-align: center;
	margin-bottom: 20px;

	@media (max-width: 991px) {
		width: calc(50% - 20px);
	}
`;

const ProductCard = styled.div`
	background-color: #f6f7fb; // Adjust the background color as needed
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 250px; // Set a max-width for the image container
	min-width: 250px; // Set a max-width for the image container
	min-height: 300px; // Set a max-width for the image container
	max-height: 300px; // Set a max-width for the image container
	margin: auto; // Center the card within the ProductWrapper
`;

const ProductImage = styled.img`
	max-width: 100%;
	height: auto;
	object-fit: contain;
`;

const ProductName = styled.h2`
	color: var(--Text, #151875);
	margin-top: 10px;
	font-size: 15px;
	font-weight: bold;
	text-transform: capitalize;
`;

const ProductPrice = styled.p`
	color: #000;
	font-size: 13px;
`;

const Seemore = styled.div`
	display: flex;
	justify-content: center; // Center the see more button
	color: #07bc08;
	border-radius: 6px;
	background: var(--white, #fff) !important;
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

const DOV14 = styled.div`
	display: flex;
	margin-top: 19px;
	width: 1177px;
	max-width: 100%;
	justify-content: space-between;
	gap: 20px;
	padding: 0 20px;
	@media (max-width: 991px) {
		flex-wrap: wrap;
	}
`;

const DOV15 = styled.div`
	color: #0d0e43;
	align-self: start;
	flex-grow: 1;
	font:
		700 34px Josefin Sans,
		sans-serif;
`;

const DOV33 = styled.div`
	display: flex;
	margin-top: 124px;
	width: 1171px;
	max-width: 100%;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	padding: 0 20px;
	@media (max-width: 991px) {
		flex-wrap: wrap;
		margin-top: 40px;
	}
`;

const DOV34 = styled.div`
	align-self: stretch;
	display: flex;
	flex-grow: 1;
	flex-basis: 0%;
	flex-direction: column;
`;

const DOV35 = styled.div`
	color: var(--Text, #151875);
	white-space: nowrap;
	font:
		700 22px Josefin Sans,
		sans-serif;
	@media (max-width: 991px) {
		white-space: initial;
	}
`;
