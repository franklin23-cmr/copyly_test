import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">

            <div className="services-details-image mb-30 pl-120">
                <img
                  height={400}
                  width={400}
                  src="/images/Logos_copyly/transparent_copyly_logo_name.png"
                  alt="image"
                />

            </div>
            <div className="services-details-desc">
              <h3>Long-Form AI Content Writer</h3>
              <p>
              Turn a short description into a 1,000+ word article with our AI-powered content writer.
              Generate any article element such as titles, intros, outlines, content, or conclusions. 
              Write unlimited SEO-optimized and plagiarism-free content for your blog.
              </p>        
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
