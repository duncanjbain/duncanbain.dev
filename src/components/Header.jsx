import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({
  siteAuthor,
  siteDescription,
  twitterLink,
  githubLink,
  linkedinLink,
}) => (
  <header className="px-8 pt-10 flex flex-col md:flex-row md:items-end md:justify-start md:content-end">
    <h1 className="text-xl text-gray-800 font-medium flex flex-col">
      <Link to="/">{siteAuthor}</Link>
      <p className="text-base text-gray-700 font-light"> {siteDescription}</p>
    </h1>
    <nav>
      <ul className="flex">
        <li>
          <span className="px-4 text-gray-500 hidden md:block">|</span>
        </li>
        <li className="mr-4">
          <Link to="/about" className="text-blue-700 hover:text-blue-500">
            About
          </Link>
        </li>
        <li className="align-middle mr-4">
          <a href={twitterLink}>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
        <li className="align-middle mr-4">
          <a href={githubLink}>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
        <li className="align-middle mr-4" href={linkedinLink}>
          <a href={linkedinLink}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
