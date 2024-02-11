import React, { useRef } from "react";
import styled from "styled-components";

const Z2Search = () => {
	const searchInputRef = useRef(null);

	const focusSearchInput = () => {
		searchInputRef.current.focus();
	};

	return (
		<div className='container' style={{ marginBottom: "50px" }}>
			<Searchbar1 onClick={focusSearchInput}>
				<LogoContainer>
					<Logo
						loading='lazy'
						src='https://cdn.builder.io/api/v1/image/assets/TEMP/dd0803775105240f45b4c613f6145f8bc34a373b6996712b78d9f0ddb6306384?apiKey=cdf657c2c4874b31988402beb4ed56ad&'
					/>
					<SearchInput ref={searchInputRef} placeholder='Search' />
				</LogoContainer>
				<Iconsearch
					loading='lazy'
					src='https://cdn.builder.io/api/v1/image/assets/TEMP/740c27ac0f4f2c8c05b66d9a6fe5f984c5284a752be7078ae1c0c43f44ea39fc?apiKey=cdf657c2c4874b31988402beb4ed56ad&'
				/>
			</Searchbar1>
		</div>
	);
};

export default Z2Search;

const Searchbar1 = styled.div`
	border-radius: 14px;
	background-color: rgba(255, 255, 255, 1);
	border: 1px solid rgba(67, 91, 113, 1);
	display: flex;
	align-items: center; /* Ensure contents are vertically centered */
	margin-top: 17px;
	width: 100%;
	justify-content: space-between;
	font-size: 14px;
	color: #435b71;
	margin-left: 5px;
	margin-right: 5px;
	font-weight: 400;
	white-space: nowrap;
	padding: 14px 16px;
	cursor: text; /* Change cursor to text to indicate editable area */
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center; /* Ensure logo and input field are aligned */
`;

const Logo = styled.img`
	margin-right: 20px;
`;

const SearchInput = styled.input`
	border: none;
	outline: none;
	flex-grow: 1; /* Allows input to fill available space */
	font-size: 14px;
	color: #435b71;
	background-color: transparent; /* Make input transparent */
`;

const Iconsearch = styled.img`
	cursor: pointer; /* Suggests to users this is clickable */
`;
