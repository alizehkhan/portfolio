import { format } from 'date-fns'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import { Post } from '../utils/types'
import { showDate } from '../utils/utils'

const PostCard = ({ link, image, title, description, labels, date }: Post) => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 880px)' })

  return (
    <>
      <article>
        <Link
          to={link}
          className="flex min-h-[140px] max-w-3xl items-center transition-all p-4 hover:bg-grey-100"
        >
          {isTabletOrDesktop && (
            <img
              className="mr-6 h-20 w-32 shrink-0 object-contain"
              src={image}
              alt=""
            />
          )}
          <div>
            {date && (
              <p
                title={`${format(date, 'MMM d, yyyy')}`}
                className="mb-2 text-sm opacity-90"
              >
                {showDate(date)}
              </p>
            )}
            <p className="font-serif text-2xl">{title}</p>
            <p className="mt-2 text-lg opacity-90">{description}</p>
            {labels && (
              <div className="mt-2 flex gap-1">
                {labels.map((label, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full bg-grey-200 px-3 py-1 text-sm"
                  >
                    {`#${label}`}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      </article>
      <hr className="max-w-3xl text-grey-300" />
    </>
  )
}

export default PostCard
