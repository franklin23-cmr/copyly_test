import React from "react";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const ComputerVisionAI = () => {
  const { t: translate } = useTranslation('Home')
  return ( 
        <div id="use_cases" className="computer-vision-ai-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="computer-vision-ai-content">
                  <h3>
                    {translate("What ")}<span> {translate("Amazing content")}  </span>
                    {translate("will you create with Copyly?")}
                  </h3>
                  <p>
                    {translate("We've trained our AI with the knowledge of top content writers and conversion experts. So you can be sure that the content produced will live up to your expectations. Copyly writes content for your website or social media posts and you select the best content.")}
                  </p>

                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6">
                      <div className="vision-ai-inner-card">
                        <div className="content">
                          <div className="image-icon">
                            <i className="fa fa-rectangle-ad" style={{color: "#ff4800"}}> </i>
                          </div>
                          <h4>{translate("Social Media & Ads")}</h4>
                        </div>

                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="vision-ai-inner-card">
                        <div className="content">
                          <div className="image-icon">
                            <i className=" fa fa-globe"  style={{color: "#ff4800"}}></i>
                          </div>
                          <h4>{translate("Website SEO")}</h4>
                        </div>

                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="vision-ai-inner-card">
                        <div className="content">
                          <div className="image-icon">
                            <i className=" fa fa-cart-shopping"  style={{color: "#ff4800"}}></i>
                          </div>
                          <h4>{translate("Ecommerce copy")}</h4>
                        </div>

                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="vision-ai-inner-card">
                        <div className="content">
                          <div className="image-icon">
                            <i className=" fa fa-message"  style={{color: "#ff4800"}}></i>
                          </div>
                          <h4>{translate("Blog content")}</h4>
                        </div>

                      </div>
                    </div>


                  </div>
                  <div className="computer-vision-ai-btn">
                    <Link href="#" className="btn btn-primary">
                      {translate("Start Writing for €0")}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="computer-vision-ai-image">
                  <img
                      src="/images/home-six/computer-vision/computer-vision-ai.png"
                      alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  
  );
};

export default ComputerVisionAI;
