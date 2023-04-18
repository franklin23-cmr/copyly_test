import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const TopHeader = () => {
  
  const { t: translate } = useTranslation('Home')
  
  return (
    <>
      <div className="topbar-wrap-area">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">

            <div className="col-lg-6 col-md-12">
              <div className="topbar-content text-center">
                <span  className="text-center">
                {translate("Welcome to Copyly.The best AI Copywriter & AI content generator.Need help?")}{" "}
                  <Link href="/contact"> {translate('Contact Us ')} </Link>
                </span>

              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};



export default TopHeader;
