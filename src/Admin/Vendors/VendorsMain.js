import React, { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import VendorAccount from "./VendorAccount";
import VendorUpdate from "./VendorUpdate";

const VendorsMain = () => {
	const [AdminMenuStatus, setAdminMenuStatus] = useState(false);
	const [collapsed, setCollapsed] = useState(false);
	const [activeTab, setActiveTab] = useState("VendorAccount");

	useEffect(() => {
		if (window.innerWidth <= 1000) {
			setCollapsed(true);
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (window.location.search.includes("vendoraccount")) {
			setActiveTab("VendorAccount");
		} else if (window.location.search.includes("updatevendor")) {
			setActiveTab("UpdateVendor");
		} else {
			setActiveTab("VendorAccount");
		}
		// eslint-disable-next-line
	}, [activeTab]);

	return (
		<VendorsMainWrapper show={collapsed}>
			<div className='grid-container-main'>
				<div className='navcontent'>
					<AdminNavbar
						fromPage='Vendors'
						AdminMenuStatus={AdminMenuStatus}
						setAdminMenuStatus={setAdminMenuStatus}
						collapsed={collapsed}
						setCollapsed={setCollapsed}
					/>
				</div>

				<div className='otherContentWrapper'>
					<div className='container-wrapper'>
						<div
							className='mx-auto col-md-10 mx-auto'
							style={{ background: "#8a8a8a", padding: "1px" }}
						>
							<div className='my-2 tab-grid col-md-8 mx-auto'>
								<Tab
									isActive={activeTab === "VendorAccount"}
									onClick={() => {
										setActiveTab("VendorAccount");
									}}
								>
									<Link to='/admin/vendor-management?vendoraccound'>
										Create Vendor Account
									</Link>
								</Tab>
								<Tab
									isActive={activeTab === "UpdateVendor"}
									onClick={() => {
										setActiveTab("UpdateVendor");
									}}
								>
									<Link to='/admin/vendor-management?updatevendor'>
										Update Vendor Account
									</Link>
								</Tab>
							</div>
						</div>
						{activeTab === "VendorAccount" ? (
							<>
								<div className=''>
									<VendorAccount />
								</div>
							</>
						) : activeTab === "UpdateVendor" ? (
							<>
								<div>
									<VendorUpdate />
								</div>
							</>
						) : null}
					</div>
				</div>
			</div>
		</VendorsMainWrapper>
	);
};

export default VendorsMain;

const VendorsMainWrapper = styled.div`
	overflow-x: hidden;
	/* background: #ededed; */
	margin-top: 20px;
	min-height: 715px;

	.grid-container-main {
		display: grid;
		grid-template-columns: ${(props) => (props.show ? "5% 75%" : "17% 75%")};
	}

	.container-wrapper {
		border: 2px solid lightgrey;
		padding: 20px;
		border-radius: 20px;
		background: white;
		margin: 0px 10px;
	}

	.tab-grid {
		display: flex;
		justify-content: center; /* Aligns children (tabs) in the center */
		align-items: center; /* Centers children vertically */
		text-align: center;
	}

	@media (max-width: 1400px) {
		background: white;
	}
`;

const Tab = styled.div`
	cursor: pointer;
	margin: 0 3px; /* 3px margin between tabs */
	padding: 15px 5px; /* Adjust padding as needed */
	font-weight: ${(props) => (props.isActive ? "bold" : "bold")};
	background-color: ${(props) =>
		props.isActive
			? "transparent"
			: "#bbbbbb"}; /* Light grey for unselected tabs */
	box-shadow: ${(props) =>
		props.isActive ? "inset 5px 5px 5px rgba(0, 0, 0, 0.3)" : "none"};
	transition: all 0.3s ease; /* Smooth transition for changes */
	min-width: 25px; /* Minimum width of the tab */
	width: 100%; /* Full width within the container */
	text-align: center; /* Center the text inside the tab */
	/* Additional styling for tabs */
	z-index: 100;
	font-size: 1.2rem;

	a {
		color: ${(props) => (props.isActive ? "white" : "black")};
	}
`;
