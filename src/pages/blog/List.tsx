import { IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import Container from '../../components/Container'
import PostCard from '../../components/PostCard'
import { POSTS, labels } from '../../content/posts'
import { Label } from '../../utils/types'
import useNavigateSearch from '../../utils/useNavigateSearch'

const List = () => {
  const [selectedLabel, setSelectedLabel] = useState<Label | null>(null)
  const navigateSearch = useNavigateSearch()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const filteredPosts = selectedLabel
    ? POSTS.filter((post) => post.labels?.includes(selectedLabel))
    : POSTS

  const sortedPosts = filteredPosts.sort((a, b) => {
    const dateA = a.date || new Date(0)
    const dateB = b.date || new Date(0)

    return dateB.getTime() - dateA.getTime()
  })

  useEffect(() => {
    setSelectedLabel(searchParams.get('filter') as Label)
  }, [searchParams, setSelectedLabel])

  return (
    <Container>
      <nav>
        <ul className="my-4 flex flex-wrap items-center gap-3">
          {labels.map((label, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setSelectedLabel(searchParams.get('filter') as Label)
                  navigateSearch('/blog', { filter: label })
                }}
                className={`inline-block transition-all rounded-full px-3 py-1 text-lg ${
                  selectedLabel === label
                    ? 'bg-neutral-700 text-white'
                    : 'bg-grey-200 text-neutral-700 hover:scale-105 hover:shadow-md'
                }`}
              >
                {`#${label}`}
              </button>
            </li>
          ))}
          {selectedLabel && (
            <li>
              <button
                onClick={() => {
                  setSelectedLabel(null)
                  navigate('/blog')
                }}
                className="flex items-center gap-1 text-lg"
              >
                <IconX aria-hidden="true" size={20} />
                Clear filter
              </button>
            </li>
          )}
        </ul>
      </nav>
      {sortedPosts.map((post, index) => (
        <PostCard
          key={index}
          date={post.date}
          title={post.title}
          description={post.description}
          image={post.image}
          link={post.link}
          labels={post.labels}
        />
      ))}
    </Container>
  )
}

export default List
