import React, { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styled from "styled-components";

const AdminDashboard = () => {
	const [AdminMenuStatus, setAdminMenuStatus] = useState(false);
	const [collapsed, setCollapsed] = useState(false);
	useEffect(() => {
		if (window.innerWidth <= 1000) {
			setCollapsed(true);
		}
		// eslint-disable-next-line
	}, []);

	return (
		<AdminDashboardWrapper
			show={collapsed}
		>
			<div className='grid-container-main'>
				<div className='navcontent'>
					
						<AdminNavbar
							fromPage='AdminDashboard'
							AdminMenuStatus={AdminMenuStatus}
							setAdminMenuStatus={setAdminMenuStatus}
							collapsed={collapsed}
							setCollapsed={setCollapsed}
						/>
				</div>

				<div className='otherContentWrapper'>
					

					<div className='container-wrapper'>
						<div>Content As Described For AdminDashboard</div>
					</div>
				</div>
			</div>
		</AdminDashboardWrapper>
	);
};

export default AdminDashboard;

const AdminDashboardWrapper = styled.div`
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

	@media (max-width: 1400px) {
		background: white;
	}
`;
