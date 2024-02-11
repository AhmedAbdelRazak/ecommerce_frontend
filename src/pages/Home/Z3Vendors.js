import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getVendors } from "../../Admin/apiAdmin";

const Z3Vendors = () => {
	const [allVendors, setAllVendors] = useState([]);

	const gettingAllVendors = () => {
		getVendors().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				if (data && data.length > 0) {
					setAllVendors(data);
				}
			}
		});
	};

	useEffect(() => {
		gettingAllVendors();
		localStorage.removeItem("Cleared");
		// eslint-disable-next-line
	}, []);

	return (
		<Z3VendorsWrapper>
			{allVendors && allVendors.length === 0 ? null : (
				<div className='container' style={{ textTransform: "capitalize" }}>
					<Brands>
						{allVendors &&
							allVendors.map((v, i) => {
								return (
									<ContentBrands key={i}>
										<Imagebrands
											loading='lazy'
											src={
												v.thumbnail &&
												v.thumbnail[0] &&
												v.thumbnail[0].images &&
												v.thumbnail[0].images[0].url
											}
										/>
										<Type>{v.vendorName}</Type>
										{/* <Divider /> */}
									</ContentBrands>
								);
							})}
					</Brands>
				</div>
			)}
		</Z3VendorsWrapper>
	);
};

export default Z3Vendors;

const Z3VendorsWrapper = styled.div`
	margin-bottom: 50px;
`;

// BRANDS STYLE

const Brands = styled.div`
	display: flex;
	margin-top: 23px;
	width: 100%;

	align-items: start;
	justify-content: space-between;

	font-size: 14px;
	color: #435b71;
	font-weight: 500;
	white-space: nowrap;
	padding: 0 90px;
`;

const ContentBrands = styled.div`
	display: flex;
	flex-direction: column;
	color: #0d986a;
	font-weight: 600;

	:hover {
		cursor: pointer;
	}
`;

const Imagebrands = styled.img`
	aspect-ratio: 0.68;
	object-fit: auto;
	object-position: center;
	width: 100%;
	height: 63px;
	align-self: center;
	object-fit: cover;
`;

const Type = styled.div`
	justify-content: center;
	font-family: Poppins, sans-serif;
	margin-top: 10px;
	font-size: 15px;
	text-align: center;
`;

// const Divider = styled.div`
// 	background-color: rgba(13, 152, 106, 1);
// 	display: flex;
// 	margin-top: 9px;
// 	height: 2px;
// 	flex-direction: column;
// `;
