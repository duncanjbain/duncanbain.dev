import React from 'react';
import useSiteMetadata from '../hooks/UseSiteMetadata';
import Header from './Header';
import Footer from './Footer';
import './Fontawesome';

const Layout = ({ children }) => {
  const { description, author } = useSiteMetadata();
  return (
    <>
      <div className="container mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
        <Header siteDescription={description} siteAuthor={author} />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
