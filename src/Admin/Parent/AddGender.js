/** @format */

// eslint-disable-next-line
import React, { useState, Fragment, useEffect } from "react";
import { isAuthenticated } from "../../auth/index";
import { createGender, getGenders, cloudinaryUpload1 } from "../apiAdmin";
import styled from "styled-components";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

const AddGender = () => {
	const [genderName, setGenderName] = useState("");
	const [genderName_Arabic, setGenderName_Arabic] = useState("");
	// eslint-disable-next-line
	const [loading, setLoading] = useState("");
	// eslint-disable-next-line
	const [genderNameSlug, setGenderNameSlug] = useState("");
	const [genderNameSlug_Arabic, setGenderNameSlug_Arabic] = useState("");
	const [allGenders, setAllGenders] = useState([]);
	// eslint-disable-next-line
	const [error, setError] = useState(false);
	// eslint-disable-next-line
	const [success, setSuccess] = useState(false);
	const [addThumbnail, setAddThumbnail] = useState([]);

	// destructure user and token from localstorage
	const { user, token } = isAuthenticated();

	const handleChange1 = (e) => {
		setError("");
		setGenderName(e.target.value);
		setGenderNameSlug(e.target.value.split(" ").join("-"));
	};

	const handleChange2 = (e) => {
		setError("");
		setGenderName_Arabic(e.target.value);
		setGenderNameSlug_Arabic(e.target.value.split(" ").join("-"));
	};

	const gettingAllGenders = () => {
		getGenders(token).then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setError("");
				setAllGenders(
					data.map((genderNames) =>
						genderNames.genderName.toLowerCase().replace(/\s/g, "")
					)
				);
			}
		});
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
					style={{
						cursor: "pointer",
						fontSize: "0.95rem",
						marginLeft: "100px",
					}}
				>
					Add a Gender Thumbnail
					<input
						type='file'
						hidden
						accept='images/*'
						onChange={fileUploadAndResizeThumbNail}
						required
					/>
				</label>
			</>
		);
	};

	const handleImageRemove = (public_id) => {
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
				const { images } = addThumbnail;
				let filteredImages = images.filter((item) => {
					return item.public_id !== public_id;
				});
				setAddThumbnail({ ...addThumbnail, images: filteredImages });
			})
			.catch((err) => {
				console.log(err);
				window.location.reload(false);
			});
	};

	useEffect(() => {
		gettingAllGenders();
		// eslint-disable-next-line
	}, [genderName, genderNameSlug, genderName_Arabic]);

	let matchingGenderName =
		allGenders.indexOf(genderName.toLowerCase().replace(/\s/g, "")) !== -1;
	// console.log(matchingGenderName, "El Logic");
	const clickSubmit = (e) => {
		e.preventDefault();
		if (matchingGenderName) {
			return toast.error("This Gender was added before.");
		}

		if (addThumbnail.length === 0) {
			return toast.error("Please add a thumbnail for the gender.");
		}

		setError("");
		setSuccess(false);
		// make request to api to create Category
		createGender(user._id, token, {
			genderName,
			genderNameSlug,
			genderName_Arabic,
			genderNameSlug_Arabic,
			thumbnail: addThumbnail && addThumbnail.images,
		}).then((data) => {
			if (data.error) {
				setError(data.error);
				setTimeout(function () {
					// window.location.reload(false);
				}, 1000);
			} else {
				toast.success("Gender was successfully Added.");
				setError("");
				setTimeout(function () {
					setGenderName("");
					setGenderName_Arabic("");
					setGenderNameSlug("");
					setGenderNameSlug_Arabic("");
					setAddThumbnail([]);
				}, 2000);
				setTimeout(function () {
					// window.location.reload(false);
				}, 2000);
			}
		});
	};

	const newGenderForm = () => (
		<form onSubmit={clickSubmit} className='col-md-10 mx-auto'>
			<div className='form-group'>
				<label className='' style={{ fontWeight: "bold", fontSize: "20px" }}>
					Gender Name
				</label>
				<input
					type='text'
					className='form-control'
					onChange={handleChange1}
					value={genderName}
					required
				/>
			</div>

			<div className='form-group'>
				<label className='' style={{ fontWeight: "bold", fontSize: "20px" }}>
					{" "}
					نوع الجنس
				</label>
				<input
					type='text'
					className='form-control'
					onChange={handleChange2}
					value={genderName_Arabic}
					placeholder='Gender Name In Arabic'
					required
				/>
			</div>

			<button className='btn btn-outline-primary mb-3'>Add Gender</button>
		</form>
	);

	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<AddGenderWrapper>
			<div className='overallWrapper'>
				<div className='container' data-aos='fade-down'>
					<h3
						style={{ color: "#009ef7", fontWeight: "bold" }}
						className='mt-1 mb-3 text-center'
					>
						Add A New Gender
					</h3>
					<div className='horizLine col-md-2 mx-auto mb-5'></div>
					<ToastContainer />
					<div className='m-3 col-4'>
						<div className='col-12'>
							{addThumbnail &&
								addThumbnail.images &&
								addThumbnail.images.map((image) => {
									return (
										<div className='m-3 col-6 '>
											<button
												type='button'
												className='close'
												onClick={() => {
													handleImageRemove(image.public_id);

													var array = addThumbnail.images.filter(function (s) {
														return s.public_id !== image.public_id;
													});

													setAddThumbnail({
														images: array,
													});
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
						</div>
						{FileUploadThumbnail()}
					</div>
					{newGenderForm()}
				</div>
			</div>
		</AddGenderWrapper>
	);
};

export default AddGender;

const AddGenderWrapper = styled.div`
	overflow-x: hidden;
	/* background: #ededed; */
	min-height: 600px;

	.container {
		margin-top: 20px;
		border: 2px solid lightgrey;
		padding: 20px;
		border-radius: 20px;
		background: white;
	}

	.horizLine {
		border-bottom: 2px #dddddd solid;
	}

	.overallWrapper {
		/* background: linear-gradient(to right, #fafafa, #858585); */
	}

	@media (max-width: 1750px) {
		background: white;

		.grid-container {
			display: grid;
			/* grid-template-columns: 18% 82%; */
			grid-template-columns: ${(props) => (props.show ? "7% 93%" : "18% 82%")};
			margin: auto;
			/* border: 1px solid red; */
			/* grid-auto-rows: minmax(60px, auto); */
		}
	}

	@media (max-width: 1400px) {
		background: white;

		.grid-container {
			display: grid;
			grid-template-columns: 12% 88%;
			margin: auto;
			/* border: 1px solid red; */
			/* grid-auto-rows: minmax(60px, auto); */
		}
	}
`;
