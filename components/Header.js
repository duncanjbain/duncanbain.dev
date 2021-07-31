import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import NavLink from './NavLink';

const Header = () => {
  return (
    <header className="m-8 pb-4 border-b-2">
      <h1 className="text-4xl text-gray-800 font-bold ml-2">
        <Link href="/">Duncan Bain</Link>
      </h1>
      <nav className="my-2">
        <ul className="flex mt-4 md:mt-0">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/uses">Uses</NavLink>
          <NavLink href="https://twitter.com/duncanbain">
            <FontAwesomeIcon icon={faTwitter} />
          </NavLink>
          <NavLink href="https://github.com/duncanjbain">
            <FontAwesomeIcon icon={faGithub} />
          </NavLink>
          <NavLink href="https://www.linkedin.com/in/duncanjbain/">
            <FontAwesomeIcon icon={faLinkedin} />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
