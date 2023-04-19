import React from "react";

import Link from "next/link";

import { useTranslation } from "next-i18next";

const MainBanner = () => {
  const { t: translate } = useTranslation('Home')
  return (
    <>

      <div className="ml-main-banner-area">

      {/* <div className="ml-main-banner-area with-linear-gradient-color"> */}


        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-content">
                <span className="sub-title">


                  {translate("Write Better and 10x faster With")} <b>{translate('AI')}</b>
                </span>
                <h1>
                  {translate('Create')} <span>{translate('Viral Content')}</span> {translate('Adcopy & Posts in 5 seconds')}
                </h1>
                <p>
                  {translate("Copyly allows you to generate the best texts, ads and posts in seconds")}
                </p>
    
                <div className="about-btn" style={{marginTop:"20px"}}>
                  <Link href="/" className="btn btn-primary ">
                    {translate("Start Writing for €0")}
                  </Link>
                  <p style={{ marginLeft: 10 , marginTop: 3}}>
                  {translate("No credit card required. No commitment")}
                </p>
                </div>
              </div>
            </div>

             <div className="col-lg-6 col-md-12">
              <div className="ml-main-banner-wrap-image">
               <img src="/images/home-eight/banner/main.png" alt="image" /> 


                 <div className="circle-shape"></div> 

                 {/* <div className="wrap-shape">
                  <img src="/images/home-seven/banner/shape3.png" alt="image" />
                </div>  */}

                <div className="wrap-text">
                  <i className="fa-solid fa-check"></i>
                  <span>{translate('SEO optimized contents')}</span>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="ai-main-banner-shape1">
          <img src="/images/home-seven/banner/shape1.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape2">
          <img src="/images/home-seven/banner/shape2.png" alt="image" />
        </div>
        <div className="ai-main-banner-shape3">
          <img src="/images/home-seven/banner/shape4.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
