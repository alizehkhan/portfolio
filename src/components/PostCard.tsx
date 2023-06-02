import { Link } from 'react-router-dom';
import { Post } from '../types';

const PostCard = ({ link, image, title, description }: Post) => {
  return (
    <>
      <article>
        <Link
          to={link}
          className="flex min-h-[140px] max-w-3xl items-center p-4 hover:bg-grey-100"
        >
          <img
            className="mr-6 h-20 w-32 shrink-0 object-contain"
            src={image}
            alt=""
          />
          <div>
            <p className="font-serif text-2xl">{title}</p>
            <p className="mt-2 text-lg opacity-90">{description}</p>
          </div>
        </Link>
      </article>
      <hr className="max-w-3xl text-grey-300" />
    </>
  );
};

export default PostCard;
