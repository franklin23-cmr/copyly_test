import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const { t: translate } = useTranslation('Home')
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <div id="navbar" className="navbar-area navbar-area-with-position-relative">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">

                <img
                  src="/images/Logos_copyly/new_transparent_copyly_vert_logo_name.png"
                  alt="logo"
                />

              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/#how_it_works"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      {translate("how it works")}
                    </Link>

                  </li>

                  <li className="nav-item">
                    <Link
                      href="/#use_cases"
                      className={`nav-link ${
                        currentPath == "/#use_cases" && "active"
                      }`}
                    >
                      {translate("use cases")}
                    </Link>
                  
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/#features"
                      className={`nav-link ${
                        currentPath == "/#features" && "active"
                      }`}
                    >                      
                      {translate("Features")}
                    </Link>                   
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/#pricing"
                      className={`nav-link ${
                        currentPath == "/#pricing" && "active"
                      }`}
                    >                     
                      {translate("Pricing")} 
                    </Link>

                  
                  </li>
                </ul>

                {/* <div className="ai-about-content-btn">
                    <li className="about-btn">
                      <Link href="/about-two" className="btn btn-primary">
                        Learn More
                      </Link>
                    </li>
                 </div> */}

                {/* others-options */}
                
                <div className="ai-about-content-btn">

                    <div className="about-btn">
                      <Link href="http://localhost:3000/" className="btn btn-primary" >
                        Login
                      </Link>
                    </div>
                </div>
                  <Link href="http://localhost:3000/signup/try-it-free." className="btn btn-primary">    
                      {translate("Get started- it's free")}
                    </Link>
              </div>
              

            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

    </>
  );
};

export default Navbar;
