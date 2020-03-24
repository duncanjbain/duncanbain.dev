import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer className="px-8 text-center">
    <hr className="my-4" />
    <p className="text-base text-gray-700 font-light">
      Made with{' '}
      <span role="img" aria-label="Sparkly heart emoji">
        💖
      </span>{' '}
      by{' '}
      <Link to="/" className="text-blue-700 hover:text-blue-500">
        Duncan Bain
      </Link>{' '}
      using{' '}
      <a
        href="https://gatsbyjs.org"
        className="text-blue-700 hover:text-blue-500"
      >
        Gatsby
      </a>
    </p>
  </footer>
);

export default Footer;
