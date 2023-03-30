import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Services = () => {
  const {t : translate} = useTranslation("Home")
  return (
    <>
      <div id="features" className="ai-services-area with-linear-gradient-color pt-100 pb-100">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
            {translate("We Offer Professional")}  <b>  {translate("Solutions")}</b>   {translate("With Artificial Intelligence")} 
            </h2>
            <p>
            {translate("")}
              Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut
              eget pellentesque nulla viverr.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon">
                  <img src="/images/home-six/services/icon1.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details"> {translate("Powered by AI")}</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                {translate("Read More")}
                  
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-two">
                  <img src="/images/home-six/services/icon2.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">{translate("Powerful settings")}</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                {translate("Read More")}
                  
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-three">
                  <img src="/images/home-six/services/icon3.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details"> {translate("SEO optimized for conversations")}</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                  {translate("Read More")}
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-four">
                  <img src="/images/home-six/services/icon4.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">{translate("Grammar check")}</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                  {translate("Read More")}
                  
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image-icon bg-five">
                  <img src="/images/home-six/services/icon5.png" alt="icon" />
                </div>
                <h3>
                  <Link href="/service-details">{translate("50 + Available tools")}</Link>
                </h3>
                <p>
                  {translate("")}
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusmod lorem
                  ipsum dolor sit am adipiscing elit sed do eiusmod.
                </p>
                <Link href="/service-details" className="read-btn">
                  {translate("Read More")}
                  
                </Link>
              </div>
            </div>

          </div>
        </div>
        <div className="ai-services-shape">
          <img src="/images/home-six/services/shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Services;
