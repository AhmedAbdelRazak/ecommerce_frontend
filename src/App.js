/** @format */

import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactGA from "react-ga4";
import ReactPixel from "react-facebook-pixel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./Footer";

//Store
import NavbarTop from "./Navbar/NavbarTop";
import NavbarBottom from "./Navbar/NavbarBottom";
import Home from "./pages/Home/Home";
import NavbarAds from "./Navbar/NavbarAds";

// import SingleProduct from "./pages/SingleProduct/SingleProduct";
import ShopPageMain from "./pages/ShopPage/ShopPageMain";
import Cart from "./Checkout/Cart";
// eslint-disable-next-line
import { isAuthenticated } from "./auth";
import CheckoutMain from "./Checkout/CheckoutForm/CheckoutMain";
import UserDashboard from "./pages/User/UserDashboard";
import PrivateRoute from "./auth/PrivateRoute";
import About from "./pages/About/About";
import AboutArabic from "./pages/About/AboutArabic";
import Contactus from "./pages/Contact/Contackus";
import ContactArabic from "./pages/Contact/ContactArabic";
import UserWishlist from "./pages/User/UserWishlist";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import RetExchPolicy from "./pages/RetExchPolicy";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./Admin/AdminMainDashboard/AdminDashboard";
import CategoriesMain from "./Admin/Categories/CategoriesMain";
import SubcategoryMain from "./Admin/Subcategory/SubcategoryMain";
import ParentMain from "./Admin/Parent/ParentMain";
import AttributesMain from "./Admin/Attributes/AttributesMain";
import ProductMain from "./Admin/Product/ProductMain";
import StoreSettingsMain from "./Admin/StoreSettings/StoreSettingsMain";

//Admin Management

const App = () => {
	// eslint-disable-next-line
	const [language, setLanguage] = useState("English");
	// eslint-disable-next-line
	const [allAdsCombined, setAllAdsCombined] = useState([]);

	useEffect(() => {
		ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENTID);
		ReactGA.send(window.location.pathname + window.location.search);

		setLanguage("English");

		// eslint-disable-next-line
	}, [window.location.pathname]);

	const languageToggle = () => {
		console.log(language);
		localStorage.setItem("lang", JSON.stringify(language));
		// window.location.reload(false);
	};

	useEffect(() => {
		languageToggle();
		// eslint-disable-next-line
	}, [language]);

	useEffect(() => {
		if (window.location.pathname.includes("/checkout")) {
			return;
		} else {
			localStorage.removeItem("PaidNow");
			localStorage.removeItem("storedData");
			localStorage.removeItem("chosenShippingOption");
			localStorage.removeItem("orderDataStored");
		}

		// eslint-disable-next-line
	}, []);

	const options = {
		autoConfig: true,
		debug: false,
	};

	useEffect(() => {
		ReactPixel.init(process.env.REACT_APP_FACEBOOK_PIXEL_ID, options);

		ReactPixel.pageView();

		// eslint-disable-next-line
	}, []);

	return (
		<BrowserRouter>
			<ToastContainer />
			{window.location.pathname.includes("admin") ? null : allAdsCombined &&
			  allAdsCombined.show_ad ? (
				<>
					<NavbarAds />
				</>
			) : null}
			{window.location.pathname.includes("admin") ? null : (
				<>
					<NavbarTop language={language} setLanguage={setLanguage} />

					<NavbarBottom chosenLanguage={language} />
				</>
			)}

			<Switch>
				<Route path='/signin' exact component={Login} />

				<Route
					path='/'
					exact
					component={() => <Home chosenLanguage={language} />}
				/>

				<Route path='/privacy-policy' exact component={PrivacyPolicy} />
				<Route path='/cookie-policy' exact component={CookiePolicy} />
				<Route path='/return-exchange-policy' exact component={RetExchPolicy} />
				<Route path='/user/wishlist' exact component={UserWishlist} />
				<Route path='/signup' exact component={Register} />
				<Route
					path='/our-products'
					exact
					component={() => <ShopPageMain chosenLanguage={language} />}
				/>
				<Route
					path='/cart'
					exact
					component={() => <Cart chosenLanguage={language} />}
				/>
				<Route path='/checkout' exact component={CheckoutMain} />
				{language === "Arabic" ? (
					<Route path='/contact' exact component={ContactArabic} />
				) : (
					<Route path='/contact' exact component={Contactus} />
				)}

				{language === "Arabic" ? (
					<Route path='/about' exact component={AboutArabic} />
				) : (
					<Route path='/about' exact component={About} />
				)}
				<PrivateRoute path='/user/dashboard' exact component={UserDashboard} />
				<AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
				<AdminRoute path='/admin/categories' exact component={CategoriesMain} />
				<AdminRoute path='/admin/parents' exact component={ParentMain} />
				<AdminRoute path='/admin/attributes' exact component={AttributesMain} />
				<AdminRoute path='/admin/products' exact component={ProductMain} />
				<AdminRoute
					path='/admin/store-management'
					exact
					component={() => <StoreSettingsMain />}
				/>
				<AdminRoute
					path='/admin/subcategories'
					exact
					component={SubcategoryMain}
				/>
			</Switch>

			{window.location.pathname.includes("admin") ? null : (
				<>
					<Footer />
				</>
			)}
		</BrowserRouter>
	);
};

export default App;
