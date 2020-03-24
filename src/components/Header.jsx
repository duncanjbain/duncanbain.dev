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
  <header className="px-8">
    <h1 className="pt-10 text-xl text-gray-800 font-medium">
      <Link to="/">{siteAuthor}</Link>
    </h1>
    <div className="pb-4 flex">
      <p className="text-base text-gray-700 font-light"> {siteDescription}</p>
      <span className="px-4 text-gray-500">|</span>
      <p className="mr-4">
        <Link to="/about" className="text-blue-700 hover:text-blue-500">
          About
        </Link>
      </p>
      <a className="align-middle mr-4" href={twitterLink}>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a className="align-middle mr-4" href={githubLink}>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a className="align-middle mr-4" href={linkedinLink}>
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
    </div>
    <hr className="my-4" />
  </header>
);

export default Header;
