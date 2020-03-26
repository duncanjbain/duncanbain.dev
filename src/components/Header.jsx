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
    <Link to="/">
      <h1 className="text-xl text-gray-800 font-medium flex flex-col">
        {siteAuthor}
        <p className="text-base text-gray-700 font-light"> {siteDescription}</p>
      </h1>
    </Link>
    <nav>
      <ul className="flex mt-4 md:md-0">
        <li>
          <span className="px-4 text-gray-500 hidden md:block">|</span>
        </li>
        <li className="mr-4">
          <Link to="/about" className="text-blue-700 hover:text-blue-500">
            About
          </Link>
        </li>
        <li className="align-middle mr-4">
          <a href={twitterLink} aria-label="Twitter Profile">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
        <li className="align-middle mr-4">
          <a href={githubLink} aria-label="Github Profile">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
        <li className="align-middle mr-4">
          <a href={linkedinLink} aria-label="LinkedIn Profile">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
