import React from "react";
import useSiteMetadata from "../hooks/UseSiteMetadata";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

import "./Fontawesome";

const Layout = ({ children }) => {
  const site = useSiteMetadata();
  return (
    <>
      <div className="container mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
        <Home />
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
