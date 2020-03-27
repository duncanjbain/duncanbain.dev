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
  <header className="m-8 pb-4 flex flex-col md:flex-row md:items-end md:justify-between md:content-end border-b pb-8">
    <Link to="/">
      <h1 className="text-xl text-gray-800 font-medium flex flex-col">
        {siteAuthor}
        <p className="text-base text-gray-700 font-light"> {siteDescription}</p>
      </h1>
    </Link>
    <nav>
      <ul className="flex mt-4 md:md-0">
        <li className="mr-2">
          <Link
            to="/about"
            className="text-blue-700 hover:text-blue-500 border-b-2 border-transparent p-2 hover:border-blue-400"
          >
            About
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/projects"
            className="text-blue-700 hover:text-blue-500 border-b-2 border-transparent p-2 hover:border-blue-400"
          >
            Projects
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/uses"
            className="text-blue-700 hover:text-blue-500 border-b-2 border-transparent p-2 hover:border-blue-400"
          >
            Uses
          </Link>
        </li>
        <li className="mr-2">
          <a
            href={twitterLink}
            aria-label="Twitter Profile"
            className="text-blue-700 hover:text-blue-500 border-b-2 border-transparent p-2 hover:border-blue-400"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
        <li className="mr-2">
          <a
            href={githubLink}
            aria-label="Github Profile"
            className="text-blue-700 hover:text-blue-500 border-b-2 border-transparent p-2 hover:border-blue-400"
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
        <li className="mr-2">
          <a
            href={linkedinLink}
            aria-label="LinkedIn Profile"
            className="text-blue-700 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
