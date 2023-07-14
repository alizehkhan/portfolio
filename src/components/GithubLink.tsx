import { IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const GithubLink = ({ link }: { link: string }) => {
  return (
    <Link
      to={link}
      target="_blank"
      className="mt-4 flex w-fit items-center gap-2 rounded-md px-2 py-1 text-xl hover:bg-grey-200"
    >
      Github repository
      <IconArrowRight size={20} />
    </Link>
  );
};

export default GithubLink;
