import { Link } from 'react-router-dom';

import { SOCIAL_MEDIA } from '../content/socialMedia';

const Footer = () => {
  return (
    <footer className="container mx-auto mt-6 flex justify-center gap-3 px-5 py-8">
      {SOCIAL_MEDIA.map(({ Icon, link, name }, index) => (
        <Link
          to={link}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
          key={index}
        >
          <Icon size={24} stroke={1.5} color="#4e4d49" aria-hidden="true" />
        </Link>
      ))}
    </footer>
  );
};
export default Footer;
