import React from "react";
import ContactNavbar from "../components/Layouts/ContactNavbar";

import PageBanner from "../components/Common/PageBanner";

import ContactFormContent from "../components/Contact/ContactFormContent";

import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import {serverSideTranslations } from 'next-i18next/serverSideTranslations'


const Contact = () => {
  
  return (
    <>
       <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg3"
      /> 
     

      <ContactFormContent />

      <Footer />
    </>
  );
};

export default Contact;


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'Home',
      ])),
      // Will be passed to the page component as props
    },
  }
}
