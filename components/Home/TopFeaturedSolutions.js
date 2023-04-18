import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const TopFeaturedSolutions = () => {
  const {t:translate} = useTranslation("Home")
  return (
    <>
      <div id='useCase' className="top-featured-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
              {translate("Our Top")} <b>{translate("Use Cases")}</b> {translate("Solutions Transforming Enterprises With AI")} 
            </h2>
            <p>
              {translate("Lorem ipsum dolor sit amet consectetur adipiscing elit. \n A ac, ut eget pellentesque nulla viverr. \n Lorem ipsum dolor sit amet consectetur adipiscing elit nulla \n faucibus pulvinar iaculis et eu arcu mauris euismod duis diam nunc ultrices blandit montes quis.")}
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <img src="/images/home-six/featured/icon1.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details"> {translate("Social Media & Ads")} </Link>
                </h3>
                <Link href="/service-details" className="learn-btn">
                  {translate("Social Media & Ads")} 
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <img src="/images/home-six/featured/icon2.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details"> {translate("Website SEO")}</Link>
                </h3>
                <p>
                  {translate("")}
                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla faucibus pulvinar 
                iaculis et eu arcu mauris euismod duis diam nunc ultrices blandit montes quis.
                </p>
                <Link href="/service-details" className="learn-btn">
                  
                  {translate("learn More")}
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <img src="/images/home-six/featured/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">{translate("eCormmerce copy")}</Link>
                </h3>
                <Link href="/service-details" className="learn-btn">
                  {translate(" Learn More")}
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="top-featured-card text-center">
                <div className="image-icon">
                  <img src="/images/home-six/featured/icon4.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">{translate("Blog content")}</Link>
                </h3>
                <Link href="/service-details" className="learn-btn">
                  {translate("Learn More")}
                  
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="top-featured-btn">
                <Link href="/contact" className="btn btn-primary">
                  {translate("Get Started Free")}
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeaturedSolutions;
