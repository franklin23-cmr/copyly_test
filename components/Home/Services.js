import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Services = () => {
 
  const {t:translate} = useTranslation('Home')

  return (
    <>
      <div id="features" className="ai-services-area with-linear-gradient-color pt-100 pb-100">
        <div className="container ">
          <div className="section-title with-underline-text">
            <h2>
            {translate("Write")}  <b>  {translate("better")}</b>   {translate("content 10x faster")}
            </h2>
            <p>
            {translate("Say ‘goodbye’ to the blank page. Generate high-converting copy for all your campaigns with just a few clicks. Leverage AI to write your content and copy in seconds")}
            </p>
          </div>

          <div className="row  justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="  single-services-card  align-self-stretch  ">
                <div className="image-icon">
                 <i className="fa fa-microchip fa-2xl" style={{color: "#ff4800"}}></i>
                </div>
                <h3>
                   {translate("Powered by AI")} 
                </h3>
                <p>
                  {translate("The GPT-4 AI language model is nothing like you've seen before natural, unique and creative")} 
                </p>
                 
              </div>
            </div>

            <div className="  col-lg-4 col-md-6 col-sm-6">
              <div className="  single-services-card align-self-stretch   ">
                <div className="image-icon bg-two">

                  <i className="fa fa-sliders fa-2xl" style={{color: "#ff4800"}}></i>
                </div>
                <h3>
                  {translate("Powerful settings")} 
                </h3>
                <p>
                   {translate("Adjust the creativity level or the tone of voice to generate the perfect copy for your business")}
                </p>


              </div>
            </div>

            <div className=" single-services-card col-lg-4 col-md-6 col-sm-6">
              <div className=" ">
                <div className="image-icon bg-three">
                  <i className="fa fa-globe fa-2xl" style={{color: "#ff4800"}}></i>
                </div>
                <h3>
                  {translate("SEO optimized for conversions")} 
                </h3>
                <p>
                  {translate("Trained for SEO, Copyly writes content that attracts search engines to your blog " +
                      "or website")} 
                </p>


              </div>
            </div>

            <div className=" align-self-stretch col-lg-4 col-md-6 col-sm-6">
              <div className=" single-services-card ">
                <div className="image-icon bg-four">

                  <i className=" fa fa-spell-check fa-2xl" style={{color: "#ff4800"}}></i>
                </div>
                <h3>
                   {translate("Grammar check")}
                </h3>
                <p>
                  {translate("Don't let bad grammar break your visitors' trust. Copyly checks and rewrites \n" +
                      "your content.")} 
                </p>


              </div>
            </div>

            <div className=" single-services-card align-self-stretch col-lg-4 col-md-6 col-sm-6">
              <div className="">
                <div className="image-icon bg-five">
                  <i className="fa fa-gear fa-2xl" style={{color: "#ff4800"}} ></i>
                </div>
                <h3>
                  {translate("50 + Available tools")}
                </h3>
                <p>
                  {translate("Generate any type of text or content in seconds with our creative writing tool.")} 

                </p>


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
