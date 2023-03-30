import React from "react";
import { useTranslation } from "next-i18next";
import ServiceDetailsContent from "./ServiceDetailsContent";

const FunFacts = () => {
  const {t:translate} = useTranslation('Home')
  return (
    <>
      <div  id ="how_it_works" className="fun-facts-wrap-area">
        <div className="container">
        <div className="section-title with-underline-text">
            <h5>
              <b>{translate("START WRITING IN 3 EASY STEPS")}</b>
            </h5>
            <h2>
              {translate("How does it works?")}
            </h2>
          </div>
          <div className="fun-facts-wrap-area-inner-box gradient-optional-color pt-100 pb-70">

            <div className="row justify-content-around">
              <div className="col-lg-3 col-3 col-sm-3 col-md-3">
                <div className="single-funfacts-card">
                  {/* etape 1 */}
                  <h4>
                      Select a writing tool <span className="sign-icon">+</span>
                  </h4>
                  <p>{translate("Choose from a wide array of AI tools to write social media ads, hero sections, blog posts...")}</p>
                </div>

              </div>

              <div className="col-lg-3 col-3 col-sm-3 col-md-3">
                <div className="single-funfacts-card">
                  <h4>
                  Fill in your product details <span className="sign-icon">+</span>
                  </h4>
                  <p>{translate('Generated revenue by AI solutions.')}</p>
                </div>
              </div>

              <div className="col-lg-3 col-3 col-sm-3 col-md-3">
                <div className="single-funfacts-card">
                  <h4>
                  Generate AI content <span className="sign-icon">+</span>
                  </h4>
                  <p>{translate('Feedback we get dolor sit consectetur adipiscin.')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ServiceDetailsContent/> */}
    </>
  );
};

export default FunFacts;
