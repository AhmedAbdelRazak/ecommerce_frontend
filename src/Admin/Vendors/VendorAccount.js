/** @format */
// eslint-disable-next-line
import React, { useState } from "react";
import styled from "styled-components";
import { signup, isAuthenticated } from "../../auth";
import { ToastContainer, toast } from "react-toastify";
import ImageCard from "./ImageCard";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import ImageCardBanner from "./ImageCardBanner.";
import { cloudinaryUpload1 } from "../apiAdmin";

const VendorAccount = () => {
	// eslint-disable-next-line
	const [loading2, setLoading2] = useState([]);
	const [addThumbnail2, setAddThumbnail2] = useState([]);
	const [banner, setBanner] = useState([]);
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
		error: "",
		vendorAddress: "",
		vendorCountry: "",
		success: false,
		misMatch: false,
		loading: false,
	});

	const {
		name,
		email,
		password,
		password2,
		success,
		misMatch,
		loading,
		vendorAddress,
		vendorCountry,
	} = values;

	const { token } = isAuthenticated();

	console.log(success);

	// eslint-disable-next-line
	const { user } = isAuthenticated();
	const handleChange = (name) => (event) => {
		setValues({
			...values,
			error: false,
			misMatch: false,
			[name]: event.target.value,
		});
	};

	console.log(loading);

	const clickSubmit = (event) => {
		event.preventDefault();
		if (!name) {
			return toast.error("Vendor Name is Required");
		}

		if (!email) {
			return toast.error("Vendor Email Or Phone Is Required");
		}
		if (!password) {
			return toast.error("Password Is Required");
		}

		if (password !== password2) {
			setValues({
				...values,
				success: false,
				misMatch: true,
			});
			return <React.Fragment>{toast.error(MisMatchError)}</React.Fragment>;
		} else {
			setValues({ ...values, error: false, misMatch: false });
			signup({
				name,
				email,
				password,
				password2,
				misMatch,
				role: 4000,
				roleDescription: "Vendor",
				vendorName: name,
				vendorPhone: email,
				vendorCountry: vendorCountry,
				vendorAddress: vendorAddress,
				thumbnail: addThumbnail2,
				banner: banner,
			}).then((data) => {
				console.log(data);
				if (data.error || data.misMatch) {
					setValues({ ...values, error: data.error, success: false });
					toast.error(data.error);
				} else {
					toast.success("Vendor was successfully created");
					setTimeout(function () {
						window.location.reload(false);
					}, 1500);
				}
			});
		}
	};

	const fileUploadAndResizeThumbNail = (e) => {
		// console.log(e.target.files);
		let files = e.target.files;
		let allUploadedFiles = addThumbnail2;
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

								setAddThumbnail2({
									...addThumbnail2,
									images: allUploadedFiles,
								});
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
				<ImageCard
					addThumbnail={addThumbnail2}
					handleImageRemove={handleImageRemove}
					setAddThumbnail={setAddThumbnail2}
					fileUploadAndResizeThumbNail={fileUploadAndResizeThumbNail}
				/>
			</>
		);
	};

	const fileUploadAndResizeThumbNail2 = (e) => {
		// console.log(e.target.files);
		let files = e.target.files;
		let allUploadedFiles = banner;
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

								setBanner({ ...banner, images: allUploadedFiles });
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

	const FileUploadBanner = () => {
		return (
			<>
				<ImageCardBanner
					addThumbnail={banner}
					handleImageRemove={handleImageRemove2}
					setAddThumbnail={setBanner}
					fileUploadAndResizeThumbNail={fileUploadAndResizeThumbNail2}
				/>
			</>
		);
	};

	const handleImageRemove = (public_id) => {
		setLoading2(true);
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
				setLoading2(false);
				// eslint-disable-next-line
				const { images } = addThumbnail;
				// let filteredImages = images.filter((item) => {
				// 	return item.public_id !== public_id;
				// });
				setAddThumbnail2([]);
			})
			.catch((err) => {
				console.log(err);
				setLoading2(false);
				setTimeout(function () {
					window.location.reload(false);
				}, 1000);
			});
	};

	const handleImageRemove2 = (public_id) => {
		setLoading2(true);
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
				setLoading2(false);
				// eslint-disable-next-line
				const { images } = addThumbnail;
				// let filteredImages = images.filter((item) => {
				// 	return item.public_id !== public_id;
				// });
				setBanner([]);
			})
			.catch((err) => {
				console.log(err);
				setLoading2(false);
				setTimeout(function () {
					window.location.reload(false);
				}, 1000);
			});
	};

	const signUpForm = () => (
		<FormSignup>
			<div className='container-fluid mx-auto'>
				<div className='col-lg-10  mx-auto '>
					<div
						className='form-container text-center p-4'
						style={{
							// border: "solid 3px grey",
							background: "white",
							borderRadius: "10px",
							// boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
						}}
					>
						<h1 className='mb-3'>
							Vendor <span className='text-primary'>Register</span>
						</h1>
						{/* <Google informParent={informParent} /> */}
						<form onSubmit={clickSubmit}>
							<div className='row'>
								<div className='col-md-6'>
									<div className=''>{FileUploadThumbnail()}</div>
								</div>

								<div className='col-md-6'>
									<div className=''>{FileUploadBanner()}</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group ' style={{ marginTop: "25px" }}>
										<label htmlFor='name' style={{ fontWeight: "bold" }}>
											Vendor Name
										</label>
										<input
											className='w-75 mx-auto'
											type='text'
											name='name'
											value={name}
											onChange={handleChange("name")}
										/>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group ' style={{ marginTop: "25px" }}>
										<label htmlFor='email' style={{ fontWeight: "bold" }}>
											Phone/ Email
										</label>
										<input
											className='w-75 mx-auto'
											type='text'
											name='email'
											value={email}
											onChange={handleChange("email")}
										/>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group ' style={{ marginTop: "25px" }}>
										<label htmlFor='country' style={{ fontWeight: "bold" }}>
											Vendor Country
										</label>
										<input
											className='w-75 mx-auto'
											type='text'
											name='vendorCountry'
											value={vendorCountry}
											onChange={handleChange("vendorCountry")}
										/>
									</div>
								</div>

								<div className='col-md-6'>
									<div className='form-group ' style={{ marginTop: "25px" }}>
										<label htmlFor='address' style={{ fontWeight: "bold" }}>
											Vendor Address
										</label>
										<input
											className='w-75 mx-auto'
											type='text'
											name='vendorAddress'
											value={vendorAddress}
											onChange={handleChange("vendorAddress")}
										/>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group ' style={{ marginTop: "25px" }}>
										<label htmlFor='password' style={{ fontWeight: "bold" }}>
											Password
										</label>
										<input
											className='w-75 mx-auto'
											type='password'
											name='password'
											value={password}
											onChange={handleChange("password")}
										/>
									</div>
								</div>

								<div className='col-md-6'>
									<div className='form-group ' style={{ marginTop: "25px" }}>
										<label htmlFor='password2' style={{ fontWeight: "bold" }}>
											Confirm Password
										</label>
										<input
											className='w-75 mx-auto'
											type='password'
											name='password2'
											value={password2}
											onChange={handleChange("password2")}
										/>
									</div>
								</div>
							</div>

							<input
								type='submit'
								value='Register'
								className='btn btn-primary w-75 btn-block mx-auto'
								//onClick={sendEmail}
							/>
						</form>
						<hr />
					</div>
				</div>
			</div>
		</FormSignup>
	);

	const MisMatchError = "Passwords Don't Match, Please Try Again!!";

	return (
		<WholeSignup>
			<ToastContainer />

			{signUpForm()}
		</WholeSignup>
	);
};

export default VendorAccount;

const FormSignup = styled.div`
	margin-top: 1.5%;
	margin-bottom: 95px;

	input[type="text"],
	input[type="email"],
	input[type="password"],
	input[type="date"],
	select,
	textarea {
		display: block;
		padding: 0.5rem;
		font-size: 1rem;
		border: 1px solid #ccc;
	}
	input[type="text"]:focus,
	input[type="email"]:focus,
	input[type="password"]:focus,
	input[type="date"]:focus,
	select:focus,
	textarea:focus,
	label:focus {
		outline: none;
		border: 1px solid var(--primaryColor);

		box-shadow: 2px 5px 1px 0px rgba(0, 0, 0, 0.3);
		transition: 0.3s;
		font-weight: bold;
	}

	.form-container {
		margin-left: 50px;
		margin-right: 50px;
	}

	@media (max-width: 900px) {
		.form-container {
			margin-left: 10px;
			margin-right: 10px;
		}

		h1 {
			font-size: 1.5rem;
		}
		h1 > span {
			font-size: 1.5rem;
		}
		.loginFont {
			font-size: 13px;
		}

		input {
			width: 100% !important;
		}
	}
`;

const WholeSignup = styled.div`
	padding-bottom: 15px;

	form {
		border: 1px lightgrey solid;
		padding: 10px;
	}

	.infiniteAppsLogo {
		width: 159px;
		height: 79px;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-left: 0px;
		/* border-radius: 15px; */
	}

	@media (max-width: 1000px) {
		.infiniteAppsLogo {
			width: 48px;
			height: 48px;
		}
	}
`;
