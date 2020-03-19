import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle, siteDescription }) => (
  <Link to="/">
    <h1>{siteTitle}</h1>
    <p>{siteDescription}</p>
  </Link>
);

export default Header;
