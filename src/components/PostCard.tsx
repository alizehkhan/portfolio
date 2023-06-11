import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Post } from "../utils/types";

const PostCard = ({ link, image, title, description, labels }: Post) => {
  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 880px)" });

  return (
    <>
      <article>
        <Link
          to={link}
          className="flex min-h-[140px] max-w-3xl items-center p-4 hover:bg-grey-100"
        >
          {isTabletOrDesktop && (
            <img
              className="mr-6 h-20 w-32 shrink-0 object-contain"
              src={image}
              alt=""
            />
          )}
          <div>
            <p className="font-serif text-2xl">{title}</p>
            <p className="mt-2 text-lg opacity-90">{description}</p>
            {labels && (
              <div className="mt-1 flex gap-1">
                {labels.map((label) => (
                  <span className="inline-block rounded-full bg-grey-200 px-3 py-1 text-sm">
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      </article>
      <hr className="max-w-3xl text-grey-300" />
    </>
  );
};

export default PostCard;
