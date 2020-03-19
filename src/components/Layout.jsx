import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Header from './Header';

const Layout = ({ children }) => {
  const { description, author } = useSiteMetadata();
  return (
    <>
      <div className="container mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
        <Header siteDescription={description} siteAuthor={author} />
        {children}
      </div>
    </>
  );
};

export default Layout;
