/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getParents, updateParent, cloudinaryUpload1 } from "../apiAdmin";
import { toast } from "react-toastify";
import { isAuthenticated } from "../../auth";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import Aos from "aos";
import "aos/dist/aos.css";

const UpdateParentSingle = ({ clickedParent, setClickedParent }) => {
	// eslint-disable-next-line
	const [allParents, setAllParents] = useState([]);
	const { user, token } = isAuthenticated();
	const [selectedParent, setSelectedParent] = useState([]);
	const [parentName, setParentName] = useState("");
	const [parentName_Arabic, setParentName_Arabic] = useState("");
	const [parentNameStatus, setParentNameStatus] = useState("1");
	const [loading, setLoading] = useState(true);
	const [parentNameSlug, setParentNameSlug] = useState("");
	const [parentNameSlug_Arabic, setParentNameSlug_Arabic] = useState("");
	// eslint-disable-next-line
	const [imageDeletedFlag1, setImageDeletedFlag1] = useState(false);
	const [addThumbnail, setAddThumbnail] = useState([]);

	const gettingAllParents = () => {
		setLoading(true);
		getParents(token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setAllParents(data);
				setSelectedParent(
					clickedParent._id &&
						clickedParent._id !== "undefined" &&
						data.filter((s) => s._id === clickedParent._id)
				);
				setParentName(
					clickedParent._id &&
						clickedParent._id !== "undefined" &&
						data.filter((s) => s._id === clickedParent._id)[0].parentName
				);
				setParentNameSlug(
					clickedParent._id &&
						clickedParent._id !== "undefined" &&
						data.filter((s) => s._id === clickedParent._id)[0].parentNameSlug
				);
				setParentName_Arabic(
					clickedParent._id &&
						clickedParent._id !== "undefined" &&
						data.filter((s) => s._id === clickedParent._id)[0].parentName_Arabic
				);
				setParentNameSlug_Arabic(
					clickedParent._id &&
						clickedParent._id !== "undefined" &&
						data.filter((s) => s._id === clickedParent._id)[0]
							.parentNameSlug_Arabic
				);

				setLoading(false);
			}
		});
	};

	useEffect(() => {
		gettingAllParents();
		// eslint-disable-next-line
	}, [clickedParent._id]);

	const handleChange1 = (e) => {
		setParentName(e.target.value);
		setParentNameSlug(e.target.value.split(" ").join("-"));
	};

	const handleChange2 = (e) => {
		setParentName_Arabic(e.target.value);
		setParentNameSlug_Arabic(e.target.value.split(" ").join("-"));
	};

	const handleChange5 = (e) => {
		setParentNameStatus(e.target.value);
	};

	const clickSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		if (parentNameSlug === "0") {
			if (
				window.confirm(
					"Are you sure you want to deactivate the selected Parent?"
				)
			) {
				updateParent(clickedParent._id, user._id, token, {
					parentName,
					parentName_Arabic,
					parentNameStatus,
					parentNameSlug,
					parentNameSlug_Arabic,
					thumbnail:
						addThumbnail && addThumbnail.images !== undefined
							? addThumbnail && addThumbnail.images
							: selectedParent &&
								selectedParent.length > 0 &&
								selectedParent[0].thumbnail,
				}).then((data) => {
					if (data.error) {
						console.log(data.error);
						setLoading(false);
						setTimeout(function () {
							window.location.reload(false);
						}, 2500);
					} else {
						toast.success("Parent was successfully Updated.");
						setTimeout(function () {
							setLoading(false);
						}, 2000);
						setTimeout(function () {
							window.location.reload(false);
						}, 2500);
					}
				});
			}
		} else {
			updateParent(clickedParent._id, user._id, token, {
				parentName,
				parentName_Arabic,
				parentNameStatus,
				parentNameSlug,
				parentNameSlug_Arabic,
				thumbnail:
					addThumbnail && addThumbnail.images !== undefined
						? addThumbnail && addThumbnail.images
						: selectedParent &&
							selectedParent.length > 0 &&
							selectedParent[0].thumbnail,
			}).then((data) => {
				if (data.error) {
					console.log(data.error);
					setLoading(false);
					setTimeout(function () {
						window.location.reload(false);
					}, 2500);
				} else {
					toast.success("Parent was successfully Updated.");
					setTimeout(function () {
						setLoading(false);
					}, 2000);
					setTimeout(function () {
						window.location.reload(false);
					}, 2500);
				}
			});
		}
	};

	const fileUploadAndResizeThumbNail = (e) => {
		// console.log(e.target.files);
		let files = e.target.files;
		let allUploadedFiles = addThumbnail;
		if (files) {
			for (let i = 0; i < files.length; i++) {
				Resizer.imageFileResizer(
					files[i],
					720,
					720,
					"JPEG",
					100,
					0,
					(uri) => {
						cloudinaryUpload1(user._id, token, { image: uri })
							.then((data) => {
								allUploadedFiles.push(data);

								setAddThumbnail({ ...addThumbnail, images: allUploadedFiles });
							})
							.catch((err) => {
								console.log("CLOUDINARY UPLOAD ERR", err);
							});
					},
					"base64"
				);
			}
		}
	};

	const FileUploadThumbnail = () => {
		return (
			<>
				<label
					className='btn btn-info btn-raised'
					style={{ cursor: "pointer", fontSize: "0.85rem" }}
				>
					Update Parent Thumbnail
					<input
						type='file'
						hidden
						accept='images/*'
						onChange={fileUploadAndResizeThumbNail}
					/>
				</label>
			</>
		);
	};
	// console.log(addThumbnail);

	const handleImageRemove = (public_id) => {
		setLoading(true);
		// console.log("remove image", public_id);
		axios
			.post(
				`${process.env.REACT_APP_API_URL}/admin/removeimage/${user._id}`,
				{ public_id },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				setLoading(false);
				// eslint-disable-next-line
				const { images } = addThumbnail;
				// let filteredImages = images.filter((item) => {
				// 	return item.public_id !== public_id;
				// });
				setAddThumbnail([]);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				setTimeout(function () {
					window.location.reload(false);
				}, 1000);
			});
	};

	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<UpdateParentSingleWrapper>
			{selectedParent && allParents && !loading ? (
				<div className='contentWrapper'>
					<div
						style={{
							fontWeight: "bold",
							fontSize: "1.1rem",
							textDecoration: "underline",
							cursor: "pointer",
						}}
						className='col-md-6 mx-auto my-3 mx-auto text-center'
						onClick={() => {
							setClickedParent("");
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
					>
						Back to parents list...
					</div>
					<form
						onSubmit={clickSubmit}
						className='col-md-5 mx-auto'
						// style={{ borderLeft: "1px solid brown" }}
					>
						<h3
							style={{
								color: "#009ef7",
								fontSize: "1.15rem",
								fontWeight: "bold",
							}}
							className='text-center mt-1'
						>
							The Selected Parent is "
							{selectedParent &&
								selectedParent[0] &&
								selectedParent[0].parentName}
							"
						</h3>
						<div className='m-3 col-8'>
							<div className='col-12'>
								{addThumbnail && addThumbnail.images !== undefined ? (
									<>
										{addThumbnail.images.map((image) => {
											return (
												<div className='m-3 col-6 '>
													<button
														type='button'
														className='close'
														onClick={() => {
															handleImageRemove(image.public_id);
															setAddThumbnail([]);
														}}
														style={{
															color: "white",
															background: "black",
															fontSize: "20px",
														}}
														aria-label='Close'
													>
														<span aria-hidden='true'>&times;</span>
													</button>
													<img
														src={image.url}
														alt='Img Not Found'
														style={{
															width: "90px",
															height: "90px",
															boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.2)",
														}}
														key={image.public_id}
													/>
												</div>
											);
										})}
									</>
								) : (
									<>
										{imageDeletedFlag1 ? null : (
											<div className='m-3 col-6 '>
												<button
													type='button'
													className='close'
													onClick={() => {
														handleImageRemove(
															selectedParent &&
																selectedParent.length > 0 &&
																selectedParent[0].thumbnail[0].public_id
														);
														setAddThumbnail([]);
														setImageDeletedFlag1(true);
													}}
													style={{
														color: "white",
														background: "black",
														fontSize: "20px",
													}}
													aria-label='Close'
												>
													<span aria-hidden='true'>&times;</span>
												</button>

												<img
													src={
														selectedParent &&
														selectedParent.length > 0 &&
														selectedParent[0].thumbnail[0].url
													}
													alt='Img Not Found'
													style={{
														width: "90px",
														height: "90px",
														boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.2)",
													}}
												/>
											</div>
										)}
									</>
								)}
							</div>
							{FileUploadThumbnail()}
						</div>
						<div className='form-group mt-5 '>
							<label className='text-muted'>Parent Name</label>
							<input
								type='text'
								className='form-control'
								onChange={handleChange1}
								value={parentName}
							/>
						</div>
						<div className='form-group '>
							<label className='text-muted'> اسم الفرع الأعلى</label>
							<input
								type='text'
								className='form-control'
								onChange={handleChange2}
								value={parentName_Arabic}
							/>
						</div>

						<div className='form-group'>
							<label className='text-muted'>Active Parent?</label>
							<select
								onChange={handleChange5}
								className='form-control'
								style={{ fontSize: "0.80rem" }}
							>
								<option>Please select / Required*</option>
								<option value='0'>Deactivate Parent</option>
								<option value='1'>Activate Parent</option>
							</select>
						</div>
						<button className='btn btn-outline-primary mb-3'>
							Update Parent
						</button>
					</form>
				</div>
			) : (
				<div className='mx-auto'>Loading</div>
			)}
		</UpdateParentSingleWrapper>
	);
};

export default UpdateParentSingle;

const UpdateParentSingleWrapper = styled.div`
	overflow-x: hidden;

	.contentWrapper {
		margin-top: 20px;
		margin-bottom: 50px;
		border: 2px solid lightgrey;
		padding: 20px;
		border-radius: 20px;
	}
`;
