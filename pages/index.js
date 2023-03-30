import React, { useEffect } from "react"
import MainBanner from "../components/Home/MainBanner";
import FunFacts from "../components/Home/FunFacts";
import Services from "../components/Home/Services";
import PricingPlan from "../components/Home/PricingPlan";
import Footer from "../components/Layouts/Footer";
import TopHeader from "../components/Home/TopHeader";
import Navbar from "../components/Layouts/Navbar";
import TopFeaturedSolutions from "../components/Home/TopFeaturedSolutions";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ServiceDetailsContent from "../components/Home/ServiceDetailsContent";

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

    <TopFeaturedSolutions />
    <Services />

    <PricingPlan />
    <Footer />

    </>
  );
};

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common', 'Home'])),
			// Will be passed to the page component as props
		},
	}
}

export default Index;

