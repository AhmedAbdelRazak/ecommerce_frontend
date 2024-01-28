/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getParents } from "../apiAdmin";
import { isAuthenticated } from "../../auth/index";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import UpdateParentSingle from "./UpdateParentSingle";

const UpdateParent = () => {
	const [allParents, setAllParents] = useState([]);
	// eslint-disable-next-line
	const { user, token } = isAuthenticated();
	// eslint-disable-next-line
	const [loading, setLoading] = useState(true);
	const [clickedParent, setClickedParent] = useState("");

	const gettingAllParents = () => {
		setLoading(true);
		getParents(token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setAllParents(data);
				setLoading(false);
			}
		});
	};

	useEffect(() => {
		gettingAllParents();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<UpdateParentWrapper>
			<div className='contentWrapper' data-aos='fade-down'>
				<h3
					style={{ color: "#009ef7", fontWeight: "bold" }}
					className='mt-1 mb-3 text-center'
				>
					Update Parents
				</h3>

				<br />
				<ul className='list-group text-center'>
					<h3 className='text-center mt-5'>
						Total of {allParents && allParents.length} Added Parents
					</h3>
					<p className='mt-2 text-center'>
						Please Select Which Parent You Would Like To Update...
					</p>
					{allParents &&
						allParents.map((s, i) => (
							<Link
								to='/admin/parents?updateparents'
								key={i}
								onClick={() => {
									setClickedParent(s);
									setTimeout(() => {
										window.scrollTo({ top: 300, behavior: "smooth" });
									}, 500);
								}}
							>
								<div className='row text-center mx-auto'>
									<li
										className='list-group-item d-flex my-1 py-4 justify-content-between align-items-center col-md-9 mx-auto'
										style={{
											fontSize: "0.85rem",
											textTransform: "capitalize",
										}}
									>
										<strong>{s.parentName}</strong>
									</li>

									{!s.parentNameStatus && (
										<li
											className='list-group-item d-flex my-1 py-4 justify-content-between align-items-center  col-md-3 mx-auto'
											style={{
												fontSize: "0.7rem",
												color: "red",
												fontWeight: "bold",
											}}
										>
											<strong>Deactivated</strong>
										</li>
									)}
								</div>
							</Link>
						))}
				</ul>
			</div>
			{clickedParent ? (
				<UpdateParentSingle
					clickedParent={clickedParent}
					setClickedParent={setClickedParent}
				/>
			) : null}
		</UpdateParentWrapper>
	);
};

export default UpdateParent;

const UpdateParentWrapper = styled.div`
	overflow-x: hidden;
	/* background: #ededed; */

	.contentWrapper {
		margin-top: 20px;
		margin-bottom: 15px;
		border: 2px solid lightgrey;
		padding: 20px;
		border-radius: 20px;
	}

	@media (max-width: 1750px) {
		background: white;

		.grid-container {
			display: grid;
			grid-template-columns: 18% 82%;
			margin: auto;
			/* border: 1px solid red; */
			/* grid-auto-rows: minmax(60px, auto); */
		}
	}

	@media (max-width: 1400px) {
		background: white;

		.grid-container {
			display: grid;
			grid-template-columns: 12% 85%;
			margin: auto;
			/* border: 1px solid red; */
			/* grid-auto-rows: minmax(60px, auto); */
		}
	}
`;
