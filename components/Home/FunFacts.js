import React from "react";
import { useTranslation } from "next-i18next";

import Link from "next/link";
const FunFacts = () => {

  const {t:translate} = useTranslation('Home')
  
  return (
      <div  id ="how_it_works" className="fun-facts-wrap-area">
        <div className="container">
        <div className="section-title with-underline-text">
            <h6 style={{color: "#FF4800"}}>
              <b>{translate("START WRITING IN 3 EASY STEPS")}</b>
            </h6>
            <h2>
              {translate("How does it works?")}
            </h2>
          </div>
                    <div className="row" >
                        <div className="col-lg-4 col-sm-6 col-md-6 ">
                            <div className="single-main-services-box "
                               
                            >
                                <div className="icon">
                                    <i className="fa fa-1"></i>
                                </div>
                                <h3>
                                    <Link href="/#">
                                        {translate("Select your copywriting template")}
                                    </Link>
                                </h3>
                                <p>
                                    {translate("Choose from an armful of AI tools to write paragraph product descriptions, social media ads, blog posts...")}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6 align-self-stretch">
                            <div className="single-main-services-box ">
                                <div className="icon">
                                    <i className="fa fa-2"></i>
                                </div>
                                <h3>
                                    <Link href="/#"> {translate("Fill in your article details")}</Link>
                                </h3>
                                <p>
                                    {translate("Fill in as much detail as possible about what you want to write about")}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-main-services-box"
                               
                            >
                                <div className="icon">
                                    <i className="fa fa-3"></i>
                                </div>
                                <h3>
                                    <Link href="/">{translate("Generate unique AI content in seconds")}</Link>
                                </h3>
                                <p>
                                    {translate("Our highly skilled AI understands your request and generates unique, human and professional content in seconds.")}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

      </div>

  );
};

export default FunFacts;
