/** @format */

import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga4";
// eslint-disable-next-line
import FeaturedProducts from "./FeaturedProducts";
// eslint-disable-next-line
import OurBrandsComp from "./OurBrandsComp";

// eslint-disable-next-line
import GenderNav from "../../Navbar/GenderNav";
import {Helmet} from "react-helmet";
// import TrendingCategories from "./TrendingCategories";

const Home = ({chosenLanguage}) => {
	// eslint-disable-next-line
	const [allProducts, setAllProducts] = useState([]);
	// eslint-disable-next-line
	const [allCategories, setAllCategories] = useState([]);
	// eslint-disable-next-line
	const [allSubcategories, setAllSubcategories] = useState([]);

	// eslint-disable-next-line
	const [allGenders, setAllGenders] = useState([]);

	

	

	const options = {
		autoConfig: true,
		debug: false,
	};

	useEffect(() => {
		ReactPixel.init(process.env.REACT_APP_FACEBOOK_PIXEL_ID, options);

		ReactPixel.pageView();

		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENTID);
		ReactGA.send(window.location.pathname + window.location.search);

		// eslint-disable-next-line
	}, [window.location.pathname]);
    // >>>>>>>>   yusuf starting   <<<<<<<<<<<<
	return (
		<HomeWrapper>
			{/* helmet mlnash da3wa beh */}
			<Helmet>  
				   <meta charSet='utf-8' />
				         <title>jori| ONLINE SHOP</title>
				         <meta name='description' content='jori store  Online Shop' />
				         <link rel='icon' href='gq_frontend\src\GeneralImgs\favicon.ico' />
				         <link rel='canonical' href='https://nextdayegy.com' />
			</Helmet>
			
			{/* 1st banner called  (Banner1) 
			"We hope that this banner is in the form of a carousel, and we aim to have the ability to add and modify it anytime in the dashboard." */}
			<div>
			       <Banner1>
                     <ImgB1 loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83afdf10ef0cd40bf6ab8de8cd0b9128c43285e4c020f1b37940eb3be2794abd?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83afdf10ef0cd40bf6ab8de8cd0b9128c43285e4c020f1b37940eb3be2794abd?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83afdf10ef0cd40bf6ab8de8cd0b9128c43285e4c020f1b37940eb3be2794abd?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83afdf10ef0cd40bf6ab8de8cd0b9128c43285e4c020f1b37940eb3be2794abd?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83afdf10ef0cd40bf6ab8de8cd0b9128c43285e4c020f1b37940eb3be2794abd?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83afdf10ef0cd40bf6ab8de8cd0b9128c43285e4c020f1b37940eb3be2794abd?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83afdf10ef0cd40bf6ab8de8cd0b9128c43285e4c020f1b37940eb3be2794abd?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83afdf10ef0cd40bf6ab8de8cd0b9128c43285e4c020f1b37940eb3be2794abd?apiKey=cdf657c2c4874b31988402beb4ed56ad&"/>
                     <ContentB1 />
            </Banner1> 
			</div>
			{/* section 1 called  (Searchbar1) 
			""This section is dedicated to searching across all our websites." */}

			<div>
			      <Searchbar1>
                  <LogoContainer>
                  <Logo loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0803775105240f45b4c613f6145f8bc34a373b6996712b78d9f0ddb6306384?apiKey=cdf657c2c4874b31988402beb4ed56ad&" />
                    <SearchText>Search</SearchText>
                    </LogoContainer>
                    <Iconsearch loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/740c27ac0f4f2c8c05b66d9a6fe5f984c5284a752be7078ae1c0c43f44ea39fc?apiKey=cdf657c2c4874b31988402beb4ed56ad&" />
           </Searchbar1>
			</div>
			<div>
    {/* <Section1 /> */}
			</div>
            {/* section 2 called  (Brands) 
			"""This section is dedicated to showcasing our exclusive brands."" */}
			<div>
			<Brands>
                             <ContentBrands>
                                     <Imagebrands loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/41b71416fd51d78459176b4320caa25e9691a450859c7647c0e7e00bf05dc802?apiKey=cdf657c2c4874b31988402beb4ed56ad&" />
                                     <Type>BUKISHA</Type>
                                     <Divider />
                             </ContentBrands>
                  <ContentBrands>
                           <Imagebrands loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e5c790cbc4a6055911b469df17792622b58d57f6aca2fa2b768dc06515c3bc?apiKey=cdf657c2c4874b31988402beb4ed56ad&" />
                           <Type>JORI</Type>
                  </ContentBrands>
           <ContentBrands>
            <Imagebrands loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f754c8ea8abf727661830d3b810df5c273e224fc2ad514c637fb687e62a91dfa?apiKey=cdf657c2c4874b31988402beb4ed56ad&" />
            <Type>WASEFA</Type>
            </ContentBrands>
       </Brands>
			</div>

            {/* section 3 called  (Newarrival) 
			
               " This section displays the latest products available at our store. (Assorted products, updated regularly)"   */}

		
          <div>
                  <Title>NEW ARRIVAL</Title> </div>
           <div>

                  <Newarrival>
        
                             <Product>
                             <ProductImage
                             loading="lazy"  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ce3c4060e140b7150a7ee59ade9646cc885bc13baabdd626fd0e3dd9fbb371eb?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3c4060e140b7150a7ee59ade9646cc885bc13baabdd626fd0e3dd9fbb371eb?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3c4060e140b7150a7ee59ade9646cc885bc13baabdd626fd0e3dd9fbb371eb?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3c4060e140b7150a7ee59ade9646cc885bc13baabdd626fd0e3dd9fbb371eb?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3c4060e140b7150a7ee59ade9646cc885bc13baabdd626fd0e3dd9fbb371eb?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3c4060e140b7150a7ee59ade9646cc885bc13baabdd626fd0e3dd9fbb371eb?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3c4060e140b7150a7ee59ade9646cc885bc13baabdd626fd0e3dd9fbb371eb?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3c4060e140b7150a7ee59ade9646cc885bc13baabdd626fd0e3dd9fbb371eb?apiKey=cdf657c2c4874b31988402beb4ed56ad&"alt="Product Image" />
          <ProductName>Smart watches</ProductName>
          <ProductPrice>From 110 KD</ProductPrice>
        </Product>
        <Product>
          <ProductImage
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53b60e223ee4798de4cedd2f7d8d97b212989c59e9660c23f25957f27d8cb074?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b60e223ee4798de4cedd2f7d8d97b212989c59e9660c23f25957f27d8cb074?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b60e223ee4798de4cedd2f7d8d97b212989c59e9660c23f25957f27d8cb074?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b60e223ee4798de4cedd2f7d8d97b212989c59e9660c23f25957f27d8cb074?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b60e223ee4798de4cedd2f7d8d97b212989c59e9660c23f25957f27d8cb074?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b60e223ee4798de4cedd2f7d8d97b212989c59e9660c23f25957f27d8cb074?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b60e223ee4798de4cedd2f7d8d97b212989c59e9660c23f25957f27d8cb074?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53b60e223ee4798de4cedd2f7d8d97b212989c59e9660c23f25957f27d8cb074?apiKey=cdf657c2c4874b31988402beb4ed56ad&"alt="Product Image"
          />
          <ProductName>Smart watches</ProductName>
          <ProductPrice>From 120 KD</ProductPrice>
        </Product>
        <Product>
          <ProductImage
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a21a1d07c84b4947eecdf7ec0c75c6d354c81f949c170d5d5c41a503280f0553?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a21a1d07c84b4947eecdf7ec0c75c6d354c81f949c170d5d5c41a503280f0553?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a21a1d07c84b4947eecdf7ec0c75c6d354c81f949c170d5d5c41a503280f0553?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a21a1d07c84b4947eecdf7ec0c75c6d354c81f949c170d5d5c41a503280f0553?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a21a1d07c84b4947eecdf7ec0c75c6d354c81f949c170d5d5c41a503280f0553?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a21a1d07c84b4947eecdf7ec0c75c6d354c81f949c170d5d5c41a503280f0553?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a21a1d07c84b4947eecdf7ec0c75c6d354c81f949c170d5d5c41a503280f0553?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a21a1d07c84b4947eecdf7ec0c75c6d354c81f949c170d5d5c41a503280f0553?apiKey=cdf657c2c4874b31988402beb4ed56ad&"alt="Product Image"
          />
          <ProductName>Smart watches</ProductName>
          <ProductPrice>From 190 KD </ProductPrice>
        </Product>
              </Newarrival>
    <Seemore>
        <SeemoreText>see more</SeemoreText>
        <Arrowseemore
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e82e6d578831e1139aee4340b110d904a43553f80e863dcbf9deaa3e134989b4?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
          alt="Source Image"
        />
      </Seemore>
        </div>
			



{/* 
			<>
				<GenderNav />
			</> */}

			{/* <HeroComponent /> */}

			{/* <GenderLinks allGenders={allGenders} /> */}

			{/* <TrendingCategories allCategories={allCategories} /> */}

			<div className='my-5'>
				<FeaturedProducts
					allProducts={allProducts}
					chosenLanguage={chosenLanguage}
				/>
			</div>
			<div>

    <Div>
      <Div2>Happy Birthday</Div2>
      <Div3>Make their day extra special with JORI!</Div3>
      <Div4>
        <Div5>
          <Div6>
            <Div7>
              <Div8>
                <Img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5c58bc38bc28093375347cbaad81c392775f45ebb669a69adc69cc4644d66e6f?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c58bc38bc28093375347cbaad81c392775f45ebb669a69adc69cc4644d66e6f?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c58bc38bc28093375347cbaad81c392775f45ebb669a69adc69cc4644d66e6f?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c58bc38bc28093375347cbaad81c392775f45ebb669a69adc69cc4644d66e6f?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c58bc38bc28093375347cbaad81c392775f45ebb669a69adc69cc4644d66e6f?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c58bc38bc28093375347cbaad81c392775f45ebb669a69adc69cc4644d66e6f?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c58bc38bc28093375347cbaad81c392775f45ebb669a69adc69cc4644d66e6f?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c58bc38bc28093375347cbaad81c392775f45ebb669a69adc69cc4644d66e6f?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
                <Div9>new</Div9>
              </Div8>
            </Div7>
            <Div10>White & Pink Birthday…</Div10>
            <Div11>KWD 20</Div11>
            <Div12>
              <Div13>Add to cart</Div13>
            </Div12>
          </Div6>
          <Div14>
            <Div15>
              <Img2
                loading="lazy"
                srcSet=", https://cdn.builder.io/api/v1/image/assets/TEMP/0f334c5dc3a108a266624616fa8bd5a5b22f1d44c79b1edac76fbd49a95343a0?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f334c5dc3a108a266624616fa8bd5a5b22f1d44c79b1edac76fbd49a95343a0?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f334c5dc3a108a266624616fa8bd5a5b22f1d44c79b1edac76fbd49a95343a0?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f334c5dc3a108a266624616fa8bd5a5b22f1d44c79b1edac76fbd49a95343a0?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f334c5dc3a108a266624616fa8bd5a5b22f1d44c79b1edac76fbd49a95343a0?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f334c5dc3a108a266624616fa8bd5a5b22f1d44c79b1edac76fbd49a95343a0?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f334c5dc3a108a266624616fa8bd5a5b22f1d44c79b1edac76fbd49a95343a0?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
            </Div15>
            <Div16>Shiny White Roses |…</Div16>
            <Div17>KWD 23</Div17>
            <Div18>
              <Div19>Add to cart</Div19>
            </Div18>
          </Div14>
        </Div5>
        <Div20>
          <Div21>
            <Div22>
              <Div23>
                
                <Div24>new</Div24>
              </Div23>
            </Div22>
            <Div25>Purple Birthday Cake</Div25>
            <Div26>KWD 20</Div26>
            <Div27>
              <Div28>Add to cart</Div28>
            </Div27>
          </Div21>
          <Div29>
            <Div30>
              <Div31>

                <Div32>new</Div32>
              </Div31>
            </Div30>
            <Div33>Flaming Orange | Bla…</Div33>
            <Div34>KWD 27</Div34>
            <Div35>
              <Div36>Add to cart</Div36>
            </Div35>
          </Div29>
        </Div20>
        <Div37>
          <Div38>
            <Div39>
              <Img5
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/04b61b052b89053488b6a4edfd1fca90e5646b9aace75c72eed2c48a3c07b483?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/04b61b052b89053488b6a4edfd1fca90e5646b9aace75c72eed2c48a3c07b483?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04b61b052b89053488b6a4edfd1fca90e5646b9aace75c72eed2c48a3c07b483?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/04b61b052b89053488b6a4edfd1fca90e5646b9aace75c72eed2c48a3c07b483?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/04b61b052b89053488b6a4edfd1fca90e5646b9aace75c72eed2c48a3c07b483?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04b61b052b89053488b6a4edfd1fca90e5646b9aace75c72eed2c48a3c07b483?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/04b61b052b89053488b6a4edfd1fca90e5646b9aace75c72eed2c48a3c07b483?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/04b61b052b89053488b6a4edfd1fca90e5646b9aace75c72eed2c48a3c07b483?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
            </Div39>
            <Div40>Purple Alstroemeria |…</Div40>
            <Div41>KWD 24</Div41>
            <Div42>
              <Div43>Add to cart</Div43>
            </Div42>
          </Div38>
          <Div44>
            <Div45>
              <Img6
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/136152590e127d3a00f396a18e799e72d934f6505953c4d7314b8dcb6f564fac?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/136152590e127d3a00f396a18e799e72d934f6505953c4d7314b8dcb6f564fac?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/136152590e127d3a00f396a18e799e72d934f6505953c4d7314b8dcb6f564fac?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/136152590e127d3a00f396a18e799e72d934f6505953c4d7314b8dcb6f564fac?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/136152590e127d3a00f396a18e799e72d934f6505953c4d7314b8dcb6f564fac?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/136152590e127d3a00f396a18e799e72d934f6505953c4d7314b8dcb6f564fac?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/136152590e127d3a00f396a18e799e72d934f6505953c4d7314b8dcb6f564fac?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/136152590e127d3a00f396a18e799e72d934f6505953c4d7314b8dcb6f564fac?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
            </Div45>
            <Div46>Mini Forest</Div46>
            <Div47>KWD 17</Div47>
            <Div48>
              <Div49>Add to cart</Div49>
            </Div48>
          </Div44>
        </Div37>
      </Div4>
      <Div50>
        <Div51>Choose Gifts Now</Div51>
        <Img7
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/111e8c5572ff51bc41607b00516c6fb211c1d37445b11454c3c8434a1428acb4?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
        />
      </Div50>
    </Div>


			</div>

			

      <div>


    <DOV>
      <DOV14>
        <DOV15>JORI</DOV15>
     
       
      </DOV14>

      <DOV33>
        <DOV34>
          <DOV35>JORI Acceories & Fashion item </DOV35>
       
        </DOV34>
        
       
        
      </DOV33>
      <DOV44>
        <DOV45>
          <Column>
                        <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>

          </Column>
          <Column>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>

          </Column>
          <Column>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>

          </Column>
          <Column>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>

          </Column>
        </DOV45>
      </DOV44>
      <DOV70>
        <DOV71>
          <div>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>
          </div>
          <Column>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>
          </Column>
          <Column>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>
          </Column>
          <Column>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>
          </Column>
        </DOV71>
      </DOV70>
      <DOV70>
        <DOV71>
          <div>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>
          </div>
          <Column>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>
          </Column>
          <Column>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>
          </Column>
          <Column>
          <SINGLEPRODUCT>
              <SINGLE1>
                <Img29
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f06415c364076b8e17fd0d3362832a50ef7c90ce01919221274d27dec65e0d7?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
                />
              </SINGLE1>
              <SINGLENAME>Bukisha watch</SINGLENAME>
              <Img30
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4579cdd3de3c4b1b6781b46cead3c336e201f178ffae7eaf935d129578b082a3?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
              />
              <SINGLEPRICE>
                <PRICEKD>25 KD </PRICEKD>
                <PRICEKD2>$42.00</PRICEKD2>
              </SINGLEPRICE>
            </SINGLEPRODUCT>
          </Column>
        </DOV71>
      </DOV70>
      <Img37
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
      />
      <DOV122>
        <DOV123>
          <DOV124>
            <Column>
              <DOV125>
                <DOV126>JORI</DOV126>
                <DOV127>
                  <DOV128>Enter Email Address</DOV128>
                  <DOV129>Sign Up</DOV129>
                </DOV127>
                <DOV130>Contact Info</DOV130>
                <DOV131>
                 KHAITAN BLOCK 10
                </DOV131>
              </DOV125>
            </Column>
            <Column>
              <DOV132>
                <DOV133>Catagories</DOV133>
                <DOV134>Laptops & Computers</DOV134>
                <DOV135>Cameras & Photography</DOV135>
                <DOV136>Smart Phones & Tablets</DOV136>
                <DOV137>Video Games & Consoles</DOV137>
                <DOV138>Waterproof Headphones</DOV138>
              </DOV132>
            </Column>
            <Column>
              <DOV139>
                <DOV140>Customer Care</DOV140>
                <DOV141>My Account</DOV141>
                <DOV142>Discount</DOV142>
                <DOV143>Returns</DOV143>
                <DOV144>Orders History</DOV144>
                <DOV145>Order Tracking</DOV145>
              </DOV139>
            </Column>
            <Column>
              <DOV146>
                <DOV147>Pages</DOV147>
                <DOV148>Blog</DOV148>
                <DOV149>Browse the Shop</DOV149>
                <DOV150>Category</DOV150>
                <DOV151>Pre-Built Pages</DOV151>
                <DOV152>Visual Composer Elements</DOV152>
             
              </DOV146>
            </Column>
          </DOV124>
        </DOV123>
      </DOV122>
      <DOV154>
        <Img38
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/72972483a9a563feb20edb4f5591a8c63c4f6805d3c8a83445cec5742384fe43?apiKey=cdf657c2c4874b31988402beb4ed56ad&"
        />
      </DOV154>
    </DOV>



      </div>
			
	
			
		</HomeWrapper>
		
		
	);
};

export default Home;

// Banner1 style

const Banner1 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 1.69;
  margin-top: 17px;
  margin-left: 17px;
  margin-right: 17px;
  max-width: 100%;
  align-items: end;
  padding: 50px 49px 19px;
`;

const ImgB1 = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentB1 = styled.div`
  position: relative;
  border-radius: 23px;
  background-color: #fff;
  display: flex;
  margin-top: 126px;
  width: 15px;
  height: 5px;
  flex-direction: column;
`;



// Searchbar1 style 



const Searchbar1 = styled.div`
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(67, 91, 113, 1);
  display: flex;
  margin-top: 17px;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
  color: #435b71;
  margin-left: 17px;
  margin-right: 17px;
  font-weight: 400;
  white-space: nowrap;
  padding: 14px 16px;
`;

const LogoContainer = styled.div`
  align-self: start;
  display: flex;
`;

const Logo = styled.img`
margin-right: 20px;

`;

const SearchText = styled.div`
margin-right: 20px;

`;

const Iconsearch = styled.img`
margin-right: 19px
`;



// BRANDS STYLE 


const Brands = styled.div`
  display: flex;
  margin-top: 23px;
  width: 100%;

  align-items: start;
  justify-content: space-between;
 
  font-size: 14px;
  color: #435b71;
  font-weight: 500;
  white-space: nowrap;
  padding: 0 90px;
`;

const ContentBrands = styled.div`
  display: flex;
  flex-direction: column;
  color: #0d986a;
  font-weight: 600;
`;

const Imagebrands = styled.img`
  aspect-ratio: 0.68;
  object-fit: auto;
  object-position: center;
  width: 24px;
  align-self: center;
`;

const Type = styled.div`
  justify-content: center;
  font-family: Poppins, sans-serif;
  margin-top: 10px;
`;

const Divider = styled.div`
  background-color: rgba(13, 152, 106, 1);
  display: flex;
  margin-top: 9px;
  height: 2px;
  flex-direction: column;
`;


// new arryval style


const Newarrival = styled.div`

   align-self: stretch;
  display: flex;
  margin-top: 18px;
  justify-content: space-between;
  gap: 0px;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  padding: 0 20px;

`;



const Seemore = styled.div`
  justify-content: flex-end;
  color:#07BC08;
  border-radius: 6px;
  background-color: var(--white, #fff);
  display: flex;
  margin-top: 8px;
  gap: 6px;
  padding: 9px 222px;
  
`;


const SeemoreText = styled.div`
  color:#07BC08;

  font-feature-settings: 'clig' off, 'liga' off;
  align-self: start;
  flex-grow: 1;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  font-family: Inter, sans-serif;
`;


const Arrowseemore = styled.img`
  aspect-ratio: 1;
  color:#07BC08;
  object-fit: contain;
  object-position: center;
  width: 22px;
`;







const HomeWrapper = styled.div`
	min-height: 880px;
	overflow-x: hidden;
	/* background-color: white; */
`;






const Title = styled.div`
  color: var(--base-color-dark, #1c1c1c);
  font-feature-settings: 'clig' off, 'liga' off;
  margin-left: 17px;
  margin-top: 16px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 18px;
  font-family: Inter, sans-serif;
`;

const Product = styled.div`
  border: 1px solid var(--gray-300, #dee2e7);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  white-space: nowrap;
  padding: 9px 21px 18px;
`;

const ProductImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 98px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const ProductName = styled.div`
  color: var(--dark, #1c1c1c);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter, sans-serif;
  margin-top: 7px;
`;

const ProductPrice = styled.div`
  color: var(--gray-500, #8b96a5);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter, sans-serif;
  margin-top: 10px;
`;





const Div = styled.div`
  background-color: var(--floward-com-linen, #fcf4f2);
  display: flex;
  max-width: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px 16px 32px;
`;

const Div2 = styled.div`
  color: var(--floward-com-black, #000);
  align-self: start;
  white-space: nowrap;
  font: 700 19px/147% Inter, sans-serif;
`;

const Div3 = styled.div`
  color: var(--floward-com-black, #000);
  align-self: start;
  margin-top: 10px;
  white-space: nowrap;
  font: 400 12px/158% Inter, sans-serif;
`;

const Div4 = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  padding: 0 8px 40px;
`;

const Div5 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Div6 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div7 = styled.div`
  align-items: center;
  background-color: var(--floward-com-athens-gray, #e9ecef);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div8 = styled.div`
  disply: flex;
  flex-direction: column;
  max-width: 171px;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.91;
  width: 155px;
  align-items: end;
  padding: 8px 0 50px 60px;
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div9 = styled.div`
  position: relative;
  color: var(--floward-com-nero, #fff);
  text-align: center;
  justify-content: center;
  background-color: var(--floward-com-pistachio, #84c502);
  margin-bottom: 58px;
  aspect-ratio: 1.5;
  padding: 4px 8px;
  font: 400 13px/149% Inter, sans-serif;
`;

const Div10 = styled.div`
  color: var(--floward-com-black, #000);
  text-transform: capitalize;
  margin-top: 4px;
  white-space: nowrap;
  font: 500 15px/157% Inter, sans-serif;
`;

const Div11 = styled.div`
  color: var(--floward-com-black, #000);
  margin-top: 4px;
  font: 700 15px/161% Inter, sans-serif;
`;

const Div12 = styled.div`
  background-color: var(--floward-com-nero, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div13 = styled.div`
  color: var(--floward-com-orient, #006782);
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border: 1px solid var(--floward-com-orient, #006782);
  padding: 10px 41px;
  font: 400 14px/146% Inter, sans-serif;
`;

const Div14 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div15 = styled.div`
  align-items: center;
  background-color: var(--floward-com-athens-gray, #e9ecef);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img2 = styled.img`
  aspect-ratio: 0.91;
  object-fit: contain;
  object-position: center;
  width: 155px;
  max-width: 171px;
`;

const Div16 = styled.div`
  color: var(--floward-com-black, #000);
  text-transform: capitalize;
  margin-top: 4px;
  white-space: nowrap;
  font: 500 15px/164% Inter, sans-serif;
`;

const Div17 = styled.div`
  color: var(--floward-com-black, #000);
  margin-top: 4px;
  font: 700 15px/164% Inter, sans-serif;
`;

const Div18 = styled.div`
  background-color: var(--floward-com-nero, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div19 = styled.div`
  color: var(--floward-com-orient, #006782);
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border: 1px solid var(--floward-com-orient, #006782);
  padding: 10px 41px;
  font: 400 14px/146% Inter, sans-serif;
`;

const Div20 = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  gap: 20px;
`;

const Div21 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div22 = styled.div`
  align-items: center;
  background-color: var(--floward-com-athens-gray, #e9ecef);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div23 = styled.div`
  disply: flex;
  flex-direction: column;
  max-width: 171px;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.91;
  width: 155px;
  align-items: end;
  padding: 8px 0 50px 60px;
`;

const Div24 = styled.div`
  position: relative;
  color: var(--floward-com-nero, #fff);
  text-align: center;
  justify-content: center;
  background-color: var(--floward-com-pistachio, #84c502);
  margin-bottom: 58px;
  aspect-ratio: 1.5;
  padding: 4px 8px;
  font: 400 13px/149% Inter, sans-serif;
`;

const Div25 = styled.div`
  color: var(--floward-com-black, #000);
  text-transform: capitalize;
  margin-top: 4px;
  white-space: nowrap;
  font: 500 15px/156% Inter, sans-serif;
`;

const Div26 = styled.div`
  color: var(--floward-com-black, #000);
  margin-top: 4px;
  font: 700 15px/161% Inter, sans-serif;
`;

const Div27 = styled.div`
  background-color: var(--floward-com-nero, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div28 = styled.div`
  color: var(--floward-com-orient, #006782);
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border: 1px solid var(--floward-com-orient, #006782);
  padding: 10px 41px;
  font: 400 14px/146% Inter, sans-serif;
`;

const Div29 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div30 = styled.div`
  align-items: center;
  background-color: var(--floward-com-athens-gray, #e9ecef);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div31 = styled.div`
  disply: flex;
  flex-direction: column;
  max-width: 171px;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.91;
  width: 155px;
  align-items: end;
  padding: 8px 0 50px 60px;
`;

const Div32 = styled.div`
  position: relative;
  color: var(--floward-com-nero, #fff);
  text-align: center;
  justify-content: center;
  background-color: var(--floward-com-pistachio, #84c502);
  margin-bottom: 58px;
  aspect-ratio: 1.5;
  padding: 4px 8px;
  font: 400 13px/149% Inter, sans-serif;
`;

const Div33 = styled.div`
  color: var(--floward-com-black, #000);
  text-transform: capitalize;
  margin-top: 4px;
  white-space: nowrap;
  font: 500 15px/164% Inter, sans-serif;
`;

const Div34 = styled.div`
  color: var(--floward-com-black, #000);
  margin-top: 4px;
  font: 700 15px/164% Inter, sans-serif;
`;

const Div35 = styled.div`
  background-color: var(--floward-com-nero, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div36 = styled.div`
  color: var(--floward-com-orient, #006782);
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border: 1px solid var(--floward-com-orient, #006782);
  padding: 10px 41px;
  font: 400 14px/146% Inter, sans-serif;
`;

const Div37 = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  gap: 20px;
`;

const Div38 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div39 = styled.div`
  align-items: center;
  background-color: var(--floward-com-athens-gray, #e9ecef);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img5 = styled.img`
  aspect-ratio: 0.91;
  object-fit: contain;
  object-position: center;
  width: 155px;
  max-width: 171px;
`;

const Div40 = styled.div`
  color: var(--floward-com-black, #000);
  text-transform: capitalize;
  margin-top: 4px;
  white-space: nowrap;
  font: 500 15px/164% Inter, sans-serif;
`;

const Div41 = styled.div`
  color: var(--floward-com-black, #000);
  margin-top: 4px;
  font: 700 15px/163% Inter, sans-serif;
`;

const Div42 = styled.div`
  background-color: var(--floward-com-nero, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div43 = styled.div`
  color: var(--floward-com-orient, #006782);
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border: 1px solid var(--floward-com-orient, #006782);
  padding: 10px 41px;
  font: 400 14px/146% Inter, sans-serif;
`;

const Div44 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div45 = styled.div`
  align-items: center;
  background-color: var(--floward-com-athens-gray, #e9ecef);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img6 = styled.img`
  aspect-ratio: 0.91;
  object-fit: contain;
  object-position: center;
  width: 155px;
  max-width: 171px;
`;

const Div46 = styled.div`
  color: var(--floward-com-black, #000);
  text-transform: capitalize;
  margin-top: 4px;
  font: 500 15px/163% Inter, sans-serif;
`;

const Div47 = styled.div`
  color: var(--floward-com-black, #000);
  margin-top: 4px;
  font: 700 15px/164% Inter, sans-serif;
`;

const Div48 = styled.div`
  background-color: var(--floward-com-nero, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div49 = styled.div`
  color: var(--floward-com-orient, #006782);
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border: 1px solid var(--floward-com-orient, #006782);
  padding: 10px 41px;
  font: 400 14px/146% Inter, sans-serif;
`;

const Div50 = styled.div`
  align-self: center;
  border-radius: 4px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  background-color: var(--floward-com-nero, #fff);
  display: flex;
  width: 326px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 8px 16px 8px 80px;
`;

const Div51 = styled.div`
  color: var(--floward-com-black, #000);
  text-align: center;
  flex-grow: 1;
  flex-basis: auto;
  font: 700 15px/161% Inter, sans-serif;
`;

const Img7 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;









const DOV = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;



const DOV14 = styled.div`
  display: flex;
  margin-top: 19px;
  width: 1177px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const DOV15 = styled.div`
  color: #0d0e43;
  align-self: start;
  flex-grow: 1;
  font: 700 34px Josefin Sans, sans-serif;
`;


const DOV33 = styled.div`
  display: flex;
  margin-top: 124px;
  width: 1171px;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const DOV34 = styled.div`
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const DOV35 = styled.div`
  color: var(--Text, #151875);
  white-space: nowrap;
  font: 700 22px Josefin Sans, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;






const DOV44 = styled.div`
  margin-top: 144px;
  width: 1239px;
  max-width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DOV45 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;





const DOV70 = styled.div`
  margin-top: 83px;
  width: 1239px;
  max-width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DOV71 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;



const SINGLEPRODUCT = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SINGLE1 = styled.div`
  background-color: #f6f7fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  padding: 0 50px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Img29 = styled.img`
  aspect-ratio: 1.12;
  object-fit: auto;
  object-position: center;
  width: 170px;
  margin: 24px 0 5px;
`;

const SINGLENAME = styled.div`
  color: var(--Text, #151875);
  text-align: center;
  margin-top: 18px;
  white-space: nowrap;
  font: 700 18px Josefin Sans, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img30 = styled.img`
  aspect-ratio: 4.17;
  object-fit: auto;
  object-position: center;
  width: 42px;
  align-self: center;
  margin-top: 8px;
`;

const SINGLEPRICE = styled.div`
  align-self: center;
  display: flex;
  margin-top: 15px;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

const PRICEKD = styled.div`
  color: var(--Text, #151875);
  font-family: Josefin Sans, sans-serif;
`;

const PRICEKD2 = styled.div`
  color: var(--Accent, #fb2e86);
  font-family: Josefin Sans, sans-serif;
  text-decoration-line: strikethrough;
`;



const Img37 = styled.img`
  aspect-ratio: 10;
  object-fit: auto;
  object-position: center;
  width: 904px;
  margin-top: 85px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DOV122 = styled.div`
  background-color: var(--bg-shade, #fcf4f2);
  align-self: stretch;
  display: flex;
  margin-top: 83px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const DOV123 = styled.div`
  width: 1165px;
  max-width: 100%;
  margin: 44px 0 31px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DOV124 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;


const DOV125 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DOV126 = styled.div`
  color: #000;
  font: 700 38px Josefin Sans, sans-serif;
`;

const DOV127 = styled.div`
  border-radius: 3px;
  background-color: var(--white, #fff);
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  gap: 20px;
  padding: 3px 22px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const DOV128 = styled.div`
  color: var(--sub-text-color, #8a8fb9);
  font-family: Lato, sans-serif;
  font-weight: 400;
  align-self: start;
  margin-top: 20px;
  flex-grow: 1;
  flex-basis: auto;
`;

const DOV129 = styled.div`
  font-family: Roboto, sans-serif;
  border-radius: 3px;
  background-color: var(--Accent, #fb2e86);
  justify-content: center;
  color: var(--bg-shade, #eeeffb);
  font-weight: 500;
  white-space: nowrap;
  padding: 12px 39px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const DOV130 = styled.div`
  color: var(--sub-text-color, #8a8fb9);
  font-family: Lato, sans-serif;
  font-weight: 400;
  margin-top: 29px;
`;

const DOV131 = styled.div`
  color: var(--sub-text-color, #8a8fb9);
  font-family: Lato, sans-serif;
  font-weight: 400;
  margin-top: 17px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;


const DOV132 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--sub-text-color, #8a8fb9);
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const DOV133 = styled.div`
  color: #000;
  font: 600 22px Josefin Sans, sans-serif;
`;

const DOV134 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 46px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const DOV135 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 25px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const DOV136 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 25px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const DOV137 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 28px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const DOV138 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 28px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;


const DOV139 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--sub-text-color, #8a8fb9);
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DOV140 = styled.div`
  color: #000;
  white-space: nowrap;
  font: 600 22px Josefin Sans, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const DOV141 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 51px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DOV142 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 25px;
`;

const DOV143 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 29px;
`;

const DOV144 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 28px;
`;

const DOV145 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 25px;
`;


const DOV146 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 16px;
  color: var(--sub-text-color, #8a8fb9);
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DOV147 = styled.div`
  color: #000;
  font: 600 22px Josefin Sans, sans-serif;
`;

const DOV148 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 47px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DOV149 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 25px;
`;

const DOV150 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 25px;
`;

const DOV151 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 25px;
`;

const DOV152 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 25px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;


const DOV154 = styled.div`
  background-color: #e7e4f8;
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 17px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Img38 = styled.img`
  aspect-ratio: 4.17;
  object-fit: auto;
  object-position: center;
  width: 80px;
  margin-right: 523px;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;
