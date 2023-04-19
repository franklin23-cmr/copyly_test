

import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";


const PricingPlan = () => {

  const {t:translate} = useTranslation('Home')

 const  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className +=
      " animate__fadeInUp animate__animated";
    evt.currentTarget.className += "current";
  };


  return (
    <>
      <div id="pricing" className="ai-pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-underline-text">
            <h2>

            {translate("Start writing ")} <b> {translate("10x faster")} </b>{translate(" with AI")}
            </h2>
            <p>
              {translate("Simple and affordable pricing. Boost your business with a powerful, reliable and complete tool adapted to the creation of unique content")}
            </p>
          </div>
          <div className="tab pricing-tab pricing-bg-color">
                <div className="plans-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><g fill="none" stroke="#ff4800" stroke-linecap="round" stroke-linejoin="round"><path d="m2.5 10.5l3 3l3-3"/><path d="M11.5.5h-2a4 4 0 0 0-4 4v9"/></g></svg>
                    <div className="plans_tbn_ajust">
                      <p>{translate("4 months free")}</p>
                      <div className="ai-about-content-btn">

                </div>
                    </div>
                </div>
              <ul className="tabs">
                <li
                  className="current"
                  onClick={(e) => openTabSection(e, "tab1")}>
                  {translate("Monthly Plan")}
                </li> 
                <li onClick={(e) => openTabSection(e, "tab2")}>
                 {translate("Yearly Plan")} 
                </li>
              </ul>           
              <div className="tab-content">
                <div id="tab1" className="tabs-item">
                  <div className="row">
                    
                     {/* Free plan monthly*/}

                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing-box">

                        <div className="pricing-header">
                        <h3>{translate("Free")}</h3>
                           <p>
                           {translate("No credit card required. No commitment")}
                           </p>
                        </div>

                        <div className="price">
                        {translate("€0")} <span>/mo</span>
                        </div>

                        <div className="buy-btn">
                           <Link href="/contact" className="btn btn-primary">
                           {translate("Get started For €0")}
                           </Link>
                         </div>
                        <ul className="pricing-features">
                           <li>
                             <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i> 3000 {translate("words")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i>1 {translate("user seat")}
                           </li>
                           <li>
                            <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i>  1 {translate("project")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i> {translate("all copywriting tools")}
                           </li>
                           <li>
                             <i className="fas fa-times" style={{color: "#E8346F"}}></i> 25+ {translate("languages")}
                           </li>
                           <li>
                           <i className="fas fa-times"  style={{color: "#E8346F"}}></i> {translate("Plagiarism checker")}
                           </li>
                           <li>
                             <i className="fas fa-times"  style={{color: "#E8346F"}}></i> {translate("Grammar checker")}
                           </li>
                           <li>
                             <i className="fas fa-times"  style={{color: "#E8346F"}}></i>{translate("SEO Mode")}
                           </li>
                        </ul>
                        <br/>    
                        <br/>
                        <br/>    
                          
                      </div>
                    </div>

                    {/* Premium Plan monthly */}
            <div className="col-lg-4 col-md-6">
                <div className="single-pricing-box active">

                    <div className="pricing-header">
                      <h3>{translate("Premium")}</h3>
                      <p>{translate("No commitment")} <br /> </p>
                   </div>                   
                         <div className="price">
                           {translate("€45")} <span>/mo</span> 
                         </div>

                        <div className="buy-btn">
                           <Link href="#" className="btn btn-primary">
                           {translate("Start free trial")}
                           </Link>
                         </div>

                <ul className="pricing-features">
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("Unlimited words")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                      5 {translate("user seats")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("Unlimited projects")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("All copywriting tools")}
                    </li>
                    
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                      25+  {translate("languages")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i> 
                    {translate("Plagiarism checker")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("Grammar checker")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("SEO Mode")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("Priority email support")}
                    </li>                
                </ul>
                <br/>    
                <br/>                       
                    <div className="tag">{translate("POPULAR")}</div>                   
                </div>                            
            </div>

                           {/*Businness Plan monthly  */}
                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                      <div className="single-pricing-box">
                     <div className="pricing-header">
                           <h3>Business</h3>
                           <p>
                             {translate("No commitment")} <br /> 
                           </p>
                         </div>

                        <div className="price">
                           {translate("€99")} <span>/mo</span> 
                         </div>

                         <div className="buy-btn">
                           <Link href="/contact" className="btn btn-primary">
                             {translate("Start free trial")}
                           </Link>
                         </div>

                         <ul className="pricing-features">
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                              {translate("Unlimited words")}
                          </li>
                           <li>
                             <i className="fa-solid fa-check" 
                             style={{color: "#03B5A9"}}
                             ></i> 
                              25 {translate("user seats")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("Unlimited projects")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("All copywriting tools")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                              25+ {translate("languages")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                           {translate("Plagiarism checker")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check" 
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("Grammar checker")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("SEO Mode")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("Priority email support")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("API Access")}
                           </li>
                         </ul>

                      </div>
                    </div>
                   </div>
                </div>
                <div id="tab2" className="tabs-item">
                  <div className="row">
                    
                    <div className="col-lg-4 col-md-6">



                      {/* Free plan yearly */}
                       <div className="single-pricing-box">
                        <div className="pricing-header">
                        <h3>{translate("Free")}</h3>
                           <p>
                           {translate("No credit card required. No commitment")}             
                           </p>
                        </div>

                        <div className="price">
                        {translate("€0")} <span>/mo</span>
                        </div>

                        <div className="buy-btn">
                           <Link href="/" className="btn btn-primary">
                           {translate(" Get started For €0")}
                           </Link>
                         </div>

                       <ul className="pricing-features">
                           <li>
                             <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i>3000 {translate("words")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i> 1  {translate("user seat")}
                           </li>
                           <li>
                            <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i> 1 {translate("project")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i> {translate("all copywriting tools")}
                           </li>
                           <li>
                             <i className="fas fa-times" style={{color: "#E8346F"}}></i>25+  {translate("languages")}
                           </li>
                           <li>
                           <i className="fas fa-times"  style={{color: "#E8346F"}}></i> {translate("Plagiarism checker")}
                           </li>
                           <li>
                             <i className="fas fa-times"  style={{color: "#E8346F"}}></i> {translate("Grammar checker")}
                           </li>
                           <li>
                             <i className="fas fa-times"  style={{color: "#E8346F"}}></i>{translate("SEO Mode")}
                           </li>
                        </ul>
                        <br/>    
                        <br/>
                        <br/>    
                          
                      </div>
                    </div>
                  
                  {/* Premium plan yearly */}
                    <div className="col-lg-4 col-md-6">
                <div className="single-pricing-box active">
                    <div className="pricing-header">                
                      <h3>{translate("Premium")}</h3>
                      <p>{translate("No commitment")} <br /> </p>
                    </div>
                    
                         <div className="price">
                           {translate("€29")} <span>/mo</span> 
                         </div>
                         
                        <div className="buy-btn">
                           <Link href="#" className="btn btn-primary">
                           {translate(" Start free trial")}
                           </Link>
                         </div>
                         <ul className="pricing-features">
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("Unlimited words")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                      5  {translate("user seats")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                      {translate("Unlimited projects")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("All copywriting tools")}
                    </li>
                    
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                      25+ {translate("languages ")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check" style={{color: "#03B5A9"}}></i> 
                    {translate("Plagiarism checker")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("Grammar checker")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("SEO Mode")}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"  style={{color: "#03B5A9"}}></i> 
                    {translate("Priority email support")}
                    </li>                
                </ul>
                <br/>    
                <br/> 
                    <div className="tag">{translate("POPULAR")}</div>                   
                </div>            
            </div>


              {/* Businness Plan yearly */}
                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div className="single-pricing-box">
                     <div className="pricing-header">
                           <h3>{translate("Business")}</h3>
                           <p>
                             {translate("No commitment")} 
                           </p>
                         </div>

                        <div className="price">
                        €65 <span>/mo</span> 
                         </div>

                         <div className="buy-btn">
                           <Link href="/contact" className="btn btn-primary">
                             {translate("Start free trial")}
                           </Link>
                         </div>

                          <ul className="pricing-features">
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                              {translate("Unlimited words")}
                          </li>
                           <li>
                             <i className="fa-solid fa-check" 
                             style={{color: "#03B5A9"}}
                             ></i> 
                              25  {translate("user seats")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("Unlimited projects")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("All copywriting tools")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                             25+ {translate("languages")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                           {translate("Plagiarism checker")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check" 
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("Grammar checker")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("SEO Mode")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("Priority email support")}
                           </li>
                           <li>
                             <i className="fa-solid fa-check"
                             style={{color: "#03B5A9"}}
                             ></i> 
                            {translate("API Access")}
                           </li>
                         </ul>
 
                      </div>
                    </div>
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
