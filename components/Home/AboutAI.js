import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next"


const AboutAI = () => {

      const {t:translate} = useTranslation('Home')

    return (
        <>
            <div className="ai-about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="ai-about-image">
                                <img src="/images/home-six/about.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="ai-about-content">
                                <h3>
                                    {translate("Get content like the")} <span> {translate("best copywriters")} </span>
                                </h3>
                                <p>
                                    {translate("Generate any part of an article such as")}
                                </p>

                                <ul className="about-list">
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        {translate("Catchy headlines")}
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        {translate("Clickable intros")}
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        {translate("Eye-catching content ")}
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        {translate("Conclusions ")}
                                    </li>
                                    <p>
                                        {translate("Write unlimited SEO optimized and plagiarism free content for your blog or website. ")}
                                    </p>
                                </ul>
                                <div className="about-btn">
                                    <Link href="" className="btn btn-primary">
                                        Start Writing for €0
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default AboutAI;
