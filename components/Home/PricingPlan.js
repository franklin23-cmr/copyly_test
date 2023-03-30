import React from "react";
import { useTranslation } from "next-i18next";

const PricingPlan = () => {
  const {t:translate} = useTranslation("Home")
  return (
    <>
      <div id="pricing" className="ai-pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>
            {translate("Easy")}  <b> {translate("Pricing Plan")} </b> {translate("For Your Specific Needs And Solutions")}  
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut
              eget pellentesque nulla viverr.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="ai-pricing-card">
                <div className="pricing-header">
                  <h3>Basic</h3>
                  <p>For personal use</p>
                </div>
                <div className="price">
                  $250 <span>/month</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Drag & Drop Builder
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Lead Generation &
                    Sales
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Boot & Digital
                    Assistants
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Customer Service
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Up to 1000 Subscribers
                  </li>
                  <li>
                    <i className="fas fa-times"></i> Unlimited Broadcasts
                  </li>
                  <li>
                    <i className="fas fa-times"></i> Landing Pages & Web Widgets
                  </li>
                </ul>
                <div className="pricing-btn">
                  <a href="#" className="btn btn-primary">
                    Book A Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ai-pricing-card">
                <div className="pricing-header">
                  <h3>Premium</h3>
                  <p>For small business</p>
                </div>
                <div className="price">
                  $480 <span>/month</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Drag & Drop Builder
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Lead Generation &
                    Sales
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Boot & Digital
                    Assistants
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Customer Service
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Up to 1000 Subscribers
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Unlimited Broadcasts
                  </li>
                  <li>
                    <i className="fas fa-times"></i> Landing Pages & Web Widgets
                  </li>
                </ul>
                <div className="pricing-btn">
                  <a href="#" className="btn btn-primary">
                    Book A Demo
                  </a>
                </div>
                <div className="tag">POPULAR</div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="ai-pricing-card">
                <div className="pricing-header">
                  <h3>Business</h3>
                  <p>For companies & business</p>
                </div>
                <div className="price">
                  $1200 <span>/month</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-check"></i> Drag & Drop Builder
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Lead Generation &
                    Sales
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Boot & Digital
                    Assistants
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Customer Service
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Up to 1000 Subscribers
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Unlimited Broadcasts
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Landing Pages & Web
                    Widgets
                  </li>
                </ul>
                <div className="pricing-btn">
                  <a href="#" className="btn btn-primary">
                    Book A Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-pricing-shape-1">
          <img src="/images/home-six/pricing-shape.png" alt="image" />
        </div>
        <div className="ai-pricing-shape-2">
          <img src="/images/home-six/pricing-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
