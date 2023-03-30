import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";


// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
// import GoTop from "../components/Shared/GoTop";
// import Language from "../components/Shared/language";
// import Test from "../components/Shared/test";
import Test_copy from "../components/Shared/Test_copy";

import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title> copyly </title>
      </Head>
      <Component {...pageProps} />

      {/* Go Top Button */}
      
      {/* <GoTop scrollStepInPx="150" delayInMs="30.50" /> */}

      {/* {change language} */}
      {/* <Language scrollStepInPx="50" delayInMs="10.50" /> */}
      {/* <Test scrollStepInPx="50" delayInMs="10.50"  />  */}
      <Test_copy  scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

export default appWithTranslation(MyApp);
