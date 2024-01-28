/** @format */

// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { createCategory, cloudinaryUpload1, getCategories } from "../apiAdmin";
import { isAuthenticated } from "../../auth";
import Aos from "aos";
import "aos/dist/aos.css";
import ImageCard from "./ImageCard";

const AddCategory = () => {
	const [categoryName, setCategoryName] = useState("");
	const [categoryName_Arabic, setCategoryName_Arabic] = useState("");
	// eslint-disable-next-line
	const [loading, setLoading] = useState("");
	// eslint-disable-next-line
	const [categorySlug, setCategorySlug] = useState("");
	const [categorySlug_Arabic, setCategorySlug_Arabic] = useState("");
	const [allCategories, setAllCategories] = useState([]);
	// eslint-disable-next-line
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [addThumbnail, setAddThumbnail] = useState([]);

	// destructure user and token from localstorage
	const { user, token } = isAuthenticated();

	const handleChange1 = (e) => {
		setError("");
		setCategoryName(e.target.value);
		setCategorySlug(e.target.value.split(" ").join("-"));
	};

	const handleChange3 = (e) => {
		setError("");
		setCategoryName_Arabic(e.target.value);
		setCategorySlug_Arabic(e.target.value.split(" ").join("-"));
	};

	const gettingAllCategories = () => {
		getCategories(token).then((data) => {
			if (data.error) {
				setError(data.error);
			} else {
				setError("");
				setAllCategories(
					data.map(
						(category) =>
							category.categoryName.toLowerCase().replace(/\s/g, "") &&
							category.categoryName
								.toLowerCase()
								.replace(/\s/g, "")
								.concat(category.categoryId)
					)
				);
			}
		});
	};

	useEffect(() => {
		gettingAllCategories();
		// eslint-disable-next-line
	}, [categoryName, categorySlug]);

	let matchingCategory =
		allCategories.indexOf(categoryName.toLowerCase().replace(/\s/g, "")) !== -1;
	// console.log(matchingCategory, "El Logic");

	const clickSubmit = (e) => {
		e.preventDefault();
		if (matchingCategory) {
			return toast.error("This Category was added before.");
		}

		if (addThumbnail.length === 0) {
			return toast.error("Please add a thumbnail for this Category.");
		}

		if (!categoryName) {
			return toast.error("Please add a category name before creating.");
		}

		setError("");
		setSuccess(false);
		// make request to api to create Category
		createCategory(user._id, token, {
			categoryName,
			categoryName_Arabic,
			categorySlug,
			categorySlug_Arabic,
			thumbnail: addThumbnail && addThumbnail.images,
		}).then((data) => {
			if (data.error) {
				setError(data.error);
				setTimeout(function () {
					window.location.reload(false);
				}, 1000);
			} else {
				toast.success("Category was successfully Added.");
				setError("");
				setTimeout(function () {
					setCategoryName("");
					setCategoryName_Arabic("");
					setCategorySlug("");
					setCategorySlug_Arabic("");
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

	const newCategoryForm = () => (
		<form onSubmit={clickSubmit}>
			<div className='form-group'>
				<label
					className='text-muted'
					style={{ fontWeight: "bold", fontSize: "15px" }}
				>
					Category Name
				</label>
				<input
					type='text'
					className='form-control'
					onChange={handleChange1}
					value={categoryName}
					required
				/>
			</div>

			<div className='form-group'>
				<label
					className='text-muted'
					style={{ fontWeight: "bold", fontSize: "15px" }}
				>
					اسم الفئة{" "}
				</label>
				<input
					type='text'
					className='form-control'
					onChange={handleChange3}
					value={categoryName_Arabic}
					required
				/>
			</div>

			<button className='btn btn-outline-primary mb-3'>Add Category</button>
		</form>
	);

	// eslint-disable-next-line
	const showSuccess = () => {
		if (success) {
			return <h3 className='text-success'>{categoryName} is created</h3>;
		}
	};

	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<AddCategoryWrapper>
			<div className=''>
				<div className='container' data-aos='fade-down'>
					<h3
						style={{ color: "#009ef7", fontWeight: "bold" }}
						className='mt-1 mb-3 text-center'
					>
						Add A New Category
					</h3>
					<div className='row'>
						<div className='col-md-4 mx-auto'>
							<div className=''>{FileUploadThumbnail()}</div>
						</div>

						<div className='col-md-8 mx-auto my-auto'>{newCategoryForm()}</div>
					</div>
				</div>
			</div>
		</AddCategoryWrapper>
	);
};

export default AddCategory;

const AddCategoryWrapper = styled.div`
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
