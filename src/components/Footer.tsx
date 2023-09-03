import { Link } from 'react-router-dom'

import { SOCIAL_MEDIA } from '../content/socialMedia'

const Footer = () => {
  return (
    <footer className="container mx-auto my-6 flex justify-center gap-3 rounded-md px-5 py-8">
      {SOCIAL_MEDIA.map(({ link, name }, index) => (
        <Link
          to={link}
          target="_blank"
          rel="noreferrer"
          key={index}
          className="text-neutral-600 hover:text-neutral-800"
        >
          {name}
        </Link>
      ))}
    </footer>
  )
}
export default Footer
