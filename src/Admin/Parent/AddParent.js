/** @format */

// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { cloudinaryUpload1, createParent, getParents } from "../apiAdmin";
import { isAuthenticated } from "../../auth";
import Aos from "aos";
import "aos/dist/aos.css";
import ImageCard from "./ImageCard";

const AddParent = () => {
	const [parentName, setParentName] = useState("");
	const [parentName_Arabic, setParentName_Arabic] = useState("");
	// eslint-disable-next-line
	const [loading, setLoading] = useState("");
	// eslint-disable-next-line
	const [parentNameSlug, setParentNameSlug] = useState("");
	const [parentNameSlug_Arabic, setParentNameSlug_Arabic] = useState("");
	const [allParents, setAllParents] = useState([]);
	// eslint-disable-next-line
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [addThumbnail, setAddThumbnail] = useState([]);

	// destructure user and token from localstorage
	const { user, token } = isAuthenticated();

	const handleChange1 = (e) => {
		setError("");
		setParentName(e.target.value);
		setParentNameSlug(e.target.value.split(" ").join("-"));
	};

	const handleChange3 = (e) => {
		setError("");
		setParentName_Arabic(e.target.value);
		setParentNameSlug_Arabic(e.target.value.split(" ").join("-"));
	};

	const gettingAllCategories = () => {
		getParents(token).then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setError("");
				setAllParents(
					data.map(
						(parent) =>
							parent.parentName.toLowerCase().replace(/\s/g, "") &&
							parent.parentName
								.toLowerCase()
								.replace(/\s/g, "")
								.concat(parent.parentId)
					)
				);
			}
		});
	};

	useEffect(() => {
		gettingAllCategories();
		// eslint-disable-next-line
	}, [parentName, parentNameSlug]);

	let matchingParent =
		allParents &&
		allParents.indexOf(parentName.toLowerCase().replace(/\s/g, "")) !== -1;
	// console.log(matchingParent, "El Logic");

	const clickSubmit = (e) => {
		e.preventDefault();
		if (matchingParent) {
			return toast.error("This Parent was added before.");
		}

		if (addThumbnail.length === 0) {
			return toast.error("Please add a thumbnail for this Parent.");
		}

		if (!parentName) {
			return toast.error("Please add a Parent name before creating.");
		}

		setError("");
		setSuccess(false);
		// make request to api to create Parent
		createParent(user._id, token, {
			parentName,
			parentName_Arabic,
			parentNameSlug,
			parentNameSlug_Arabic,
			thumbnail: addThumbnail && addThumbnail.images,
		}).then((data) => {
			if (data.error) {
				setError(data.error);
				setTimeout(function () {
					window.location.reload(false);
				}, 1000);
			} else {
				toast.success("Parent was successfully Added.");
				setError("");
				setTimeout(function () {
					setParentName("");
					setParentName_Arabic("");
					setParentNameSlug("");
					setParentNameSlug_Arabic("");
				}, 2000);
				setTimeout(function () {
					window.location.reload(false);
				}, 2500);
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
				<ImageCard
					addThumbnail={addThumbnail}
					handleImageRemove={handleImageRemove}
					setAddThumbnail={setAddThumbnail}
					fileUploadAndResizeThumbNail={fileUploadAndResizeThumbNail}
				/>
			</>
		);
	};

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
				setTimeout(function () {
					window.location.reload(false);
				}, 1000);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				setTimeout(function () {
					window.location.reload(false);
				}, 1000);
			});
	};

	const newParentForm = () => (
		<form onSubmit={clickSubmit}>
			<div className='form-group'>
				<label
					className='text-muted'
					style={{ fontWeight: "bold", fontSize: "15px" }}
				>
					Parent Name
				</label>
				<input
					type='text'
					className='form-control'
					onChange={handleChange1}
					value={parentName}
					required
				/>
			</div>

			<div className='form-group'>
				<label
					className='text-muted'
					style={{ fontWeight: "bold", fontSize: "15px" }}
				>
					اسم الفرع الأعلى
				</label>
				<input
					type='text'
					className='form-control'
					onChange={handleChange3}
					value={parentName_Arabic}
					required
				/>
			</div>

			<button className='btn btn-outline-primary mb-3'>Add New Parent</button>
		</form>
	);

	// eslint-disable-next-line
	const showSuccess = () => {
		if (success) {
			return <h3 className='text-success'>{parentName} is created</h3>;
		}
	};

	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<AddParentWrapper>
			<div className=''>
				<div className='container' data-aos='fade-down'>
					<h3
						style={{ color: "#009ef7", fontWeight: "bold" }}
						className='mt-1 mb-3 text-center'
					>
						Add A New Parent
					</h3>
					<div className='row'>
						<div className='col-md-4 mx-auto'>
							<div className=''>{FileUploadThumbnail()}</div>
						</div>

						<div className='col-md-8 mx-auto my-auto'>{newParentForm()}</div>
					</div>
				</div>
			</div>
		</AddParentWrapper>
	);
};

export default AddParent;

const AddParentWrapper = styled.div`
	min-height: 600px;

	.container {
		margin-top: 20px;
		border: 2px solid lightgrey;
		padding: 20px;
		border-radius: 20px;
		background: white;
	}

	@media (max-width: 1750px) {
		background: white;
	}

	@media (max-width: 1400px) {
		background: white;
	}
`;
