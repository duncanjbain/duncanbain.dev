import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteAuthor, siteDescription }) => (
  <header>
    <h1 className="pt-10 px-8 text-xl text-gray-800 font-medium">
      <Link to="/">{siteAuthor}</Link>
    </h1>
    <div className="px-8 pb-4">
      <p className="text-base text-gray-700 font-light">
        {siteDescription}
        <span className="px-4 text-gray-500">|</span>
        <Link to="/about" className="text-blue-700 hover:text-blue-500">
          About
        </Link>
      </p>
    </div>
    <hr className="my-4 mx-8" />
  </header>
);

export default Header;
