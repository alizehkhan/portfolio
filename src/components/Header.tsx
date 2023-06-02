import { IconExternalLink } from '@tabler/icons-react';
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink } from 'react-router-dom';

import MobileHeader from './MobileHeader';
import { LINKS } from '../content/links';

const Header = () => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 880px)' });

  return isTabletOrDesktop ? (
    <header className="desktop-header container">
      <Link to="/">
        <img src="/assets/avatar.jpg" alt="" />
      </Link>
      <nav>
        <ul>
          {LINKS.map((link) => (
            <NavLink to={link.to}>{link.name}</NavLink>
          ))}
          <li>
            <a href="/Alizeh Khan.pdf" className="download-cv" target="_blank">
              <IconExternalLink color="white" size={16} />
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  ) : (
    <MobileHeader />
  );
};

export default Header;
