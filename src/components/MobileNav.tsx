import { Dispatch, SetStateAction, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { LINKS } from '../content/links';

const MobileNav = ({
  isMobileNavOpen,
  setIsMobileNavOpen,
}: {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <nav>
      <ul hidden={!isMobileNavOpen} id="primary-menu">
        {LINKS.map((link) => (
          <li>
            <NavLink to={link.to} onClick={() => setIsMobileNavOpen(false)}>
              {link.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            to="/Alizeh Khan.pdf"
            target="_blank"
            onClick={() => setIsMobileNavOpen(false)}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
