import React, { useEffect } from "react"
import MainBanner from "../components/Home/MainBanner";
import FunFacts from "../components/Home/FunFacts";
import Services from "../components/Home/Services";
import PricingPlan from "../components/Home/PricingPlan";
import Footer from "../components/Layouts/Footer";
import TopHeader from "../components/Home/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import AboutAI from "../components/Home/AboutAI";
import ComputerVisionAI from "../components/Home/ComputerVisionAI";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common', 'Home'])),
			// Will be passed to the page component as props
		},
	}
}
const Index = () => {
  useEffect(()=>{
    console.log(window.location.hostname);
  }, [])

  return (
    <>
    <TopHeader />
    <Navbar />
    <MainBanner />
     <FunFacts />
    <AboutAI/>
    <ComputerVisionAI/>
     <Services />
    <PricingPlan />
    <Footer />   
    </>
  );
};




export default Index;

