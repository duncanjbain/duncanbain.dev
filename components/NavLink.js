// eslint-disable-next-line react/display-name
import Link from 'next/link';
import Anchor from './Anchor';

const NavLink = ({ children, href }) => {
  return (
    <li className="md:mr-2">
      <Link href={href} passHref>
        <Anchor className="text-xl md:text-2xl text-blue-500 hover:text-blue-400 border-b-4 border-transparent p-2 transition border-bottom hover:border-blue-400 0.3s ease color 0.3s ease">
          {children}
        </Anchor>
      </Link>
    </li>
  );
};

export default NavLink;
