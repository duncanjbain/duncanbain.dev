import React from "react";
import useSiteMetadata from "../hooks/UseSiteMetadata";
import Header from "./Header";
import Footer from "./Footer";

import "./Fontawesome";

const Layout = ({ children }) => {
  const site = useSiteMetadata();
  return (
    <>
      <div className="container mx-auto md:w-1/2">
        <Header
          siteDescription={site.siteMetadata.description}
          siteAuthor={site.siteMetadata.author}
          twitterLink={site.siteMetadata.twitterUrl}
          githubLink={site.siteMetadata.githubUrl}
          linkedinLink={site.siteMetadata.linkedinUrl}
        />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
