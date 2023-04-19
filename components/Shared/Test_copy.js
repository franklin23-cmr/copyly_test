import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";


function Test_copy(props) {

  const [is_visible, setIsVisible] = useState(false);
  const { t } = useTranslation("common");

  const { locale, locales, push } = useRouter()
	console.log(locale)

	const handleClick = l => () => {
		push(`/`, undefined, { locale: l })
  }

  useEffect(() => {
    function toggleVisibility() {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    document.addEventListener("scroll", toggleVisibility);
    return () => document.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (

    <div className="scroll-lng">
      {is_visible && (
        // <div className="top-lng">
        //        <p>language</p> <i class="fa-solid fa-chevron-up"></i>
        // </div>
        <div class="dropup">
          <button class="dropbtn">{locale === 'fr' ? "Français" : "english"}</button>

          <div class="dropup-content">
            {/* <a href="#">francais</a>
            <a href="#">english</a> */}
            <Link href="/"  locale="fr">
              {t("french")}
            </Link>
            <Link href="/" locale="en">
              {t("english")}
            </Link>
          </div>
          </div>
      )}
    </div>
  );
}

export default Test_copy;

