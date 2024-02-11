import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPaginatedProducts } from "../../apiCore";

const Z4NewArrival = () => {
	const [newArrivalProducts, setNewArrivalProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [records] = useState(3); // Adjusted to display 3 products per "page"

	const gettingNewArrivalProducts = () => {
		getPaginatedProducts(page, records, "newarrival").then((data) => {
			if (data && data.error) {
				console.log("Error fetching new arrival products:", data.error);
			} else {
				if (data && data.data) {
					setNewArrivalProducts((prevProducts) => [
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
		<Z4NewArrivalWrapper>
			{newArrivalProducts && newArrivalProducts.length === 0 ? null : (
				<div className='container' style={{ textTransform: "capitalize" }}>
					<Title>NEW ARRIVAL</Title>
					<Newarrival>
						{newArrivalProducts.map((product, index) => (
							<Product key={index}>
								{/* Dynamically choose image source based on product type */}
								<ProductImage
									loading='lazy'
									src={
										product.addVariables &&
										product.productAttributes.productImages
											? product.productAttributes.productImages[0].url
											: product.thumbnailImage[0].images[0].url
									}
									alt='Product Image'
								/>
								<ProductName>{product.productName}</ProductName>
								{/* Dynamically choose price based on product type */}
								<ProductPrice>
									From{" "}
									{product.addVariables
										? product.productAttributes.priceAfterDiscount
										: product.priceAfterDiscount}{" "}
									KD
								</ProductPrice>
							</Product>
						))}
					</Newarrival>
					<Seemore onClick={handlePageChange}>
						<SeemoreText>see more</SeemoreText>
						<Arrowseemore
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/e82e6d578831e1139aee4340b110d904a43553f80e863dcbf9deaa3e134989b4?apiKey=cdf657c2c4874b31988402beb4ed56ad&'
							alt='Source Image'
						/>
					</Seemore>
				</div>
			)}
		</Z4NewArrivalWrapper>
	);
};

export default Z4NewArrival;

const Z4NewArrivalWrapper = styled.div`
	margin-bottom: 50px;
`;

// new arryval style

const Newarrival = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center; // Center the products container
	gap: 5px; // Adjust the gap between products if needed
	margin-top: 18px;
	padding: 0; // Remove padding here if you want the outer margins to control the spacing
`;

const Product = styled.div`
	border: 1px solid var(--gray-300, #dee2e7);
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center; // Center items vertically
	text-align: center;
	padding: 5px 17px 14px;
	flex: 0 1 calc(33.333% - 6px); // Subtract margins from the flex-basis calculation
	box-sizing: border-box; // Include border and padding in the element's total width
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

const Title = styled.div`
	color: var(--base-color-dark, #1c1c1c);
	font-feature-settings:
		"clig" off,
		"liga" off;
	margin-left: 17px;
	margin-top: 16px;
	white-space: nowrap;
	font-weight: 600;
	font-size: 18px;
	font-family: Inter, sans-serif;
`;

// const Product = styled.div`
// 	border: 1px solid var(--gray-300, #dee2e7);
// 	background-color: #fff;
// 	display: flex;
// 	flex-grow: 1;
// 	flex-basis: 0%;
// 	flex-direction: column;
// 	white-space: nowrap;
// 	padding: 9px 21px 18px;
// `;

const ProductImage = styled.img`
	aspect-ratio: 1;
	object-fit: contain;
	object-position: center;
	width: 98px;
	justify-content: center;
	align-items: center;
	align-self: center;
`;

const ProductName = styled.div`
	color: var(--dark, #1c1c1c);
	font-feature-settings:
		"clig" off,
		"liga" off;
	font-family: Inter, sans-serif;
	margin-top: 7px;
`;

const ProductPrice = styled.div`
	color: var(--gray-500, #8b96a5);
	font-feature-settings:
		"clig" off,
		"liga" off;
	font-family: Inter, sans-serif;
	margin-top: 10px;
`;
