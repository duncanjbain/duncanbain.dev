/* eslint-disable jsx-a11y/heading-has-content */
import Link from 'next/link';
import Anchor from './Anchor';

const MdxComponents = {
  a: ({href, children, ...props}) => {
      return (
      <Link {...props} passHref href={href}>
          <Anchor className="articleLink">
          {children}
          </Anchor>
      </Link>
      )
  },
};

export default MdxComponents;
