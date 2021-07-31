import { forwardRef } from 'react';

const Anchor = forwardRef(
  ({ children, onClick, href, ...props }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref} {...props}>
        {children}
      </a>
    );
  },
);

Anchor.displayName = 'Anchor';

export default Anchor;