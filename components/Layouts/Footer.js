import React, { Component } from "react";
import Link from "next/link";

import { useTranslation } from "next-i18next";

const Footer = () => {
  const {t:translate} = useTranslation("Home")


  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-wrap-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img width={60} height={60}  src="/images/Logos_copyly/transparent_copyly_logo.png" alt="image" />
                  </Link>
                  <p>
                   {translate("Automatically generate blog posts, website copy, landing pages and ad copy for your business in seconds. Use the power of Copyly, the most advanced AI writer, to increase your traffic and productivity")}

                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"

                data-aos-delay="300"
              >
                <h3>{translate("Use cases")}</h3>

                <ul className="quick-links-list">
                  <li>
                    {translate("Social Media & Ads")}
                  </li>
                  <li>
                    {translate("Website SEO")}
                  </li>
                  <li>
                    {translate("Ecommerce copy")}
                  </li>
                  <li>
                    {translate("Blog content")}

                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"

                data-aos-delay="200"
              >
                <h3>{translate("Quick Links")}</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/#pricing">{translate("Pricing")}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{translate("contact")}</Link>
                  </li>          

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >

              <h3>{translate("Contacts")}</h3>

                <ul className="footer-contact-list">                 
                  <li>
                    <span>Email:</span>
                    hello@copyly.io
                  </li>
                                 
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>

                  Copyright &copy;{currentYear} Copyly. {translate("All Rights Reserved")}{" "}               

                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">{translate("Privacy Policy")}</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">{translate("Terms & Conditions")}</Link>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="footer-wrap-shape-1">
          <img src="/images/home-six/footer/shape-1.png" alt="image" />
        </div>
        <div className="footer-wrap-shape-2">
          <img src="/images/home-six/footer/shape-2.png" alt="image" />
        </div>
        <div className="footer-wrap-shape-3">
          <img src="/images/home-six/footer/shape-3.png" alt="image" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
