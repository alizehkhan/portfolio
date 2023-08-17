import { useState } from 'react';
import { IconX } from '@tabler/icons-react';

import PostCard from '../../components/PostCard';
import { POSTS, labels } from '../../content/posts';
import { Label } from '../../utils/types';

const List = () => {
  const [selectedLabel, setSelectedLabel] = useState<Label | null>(null);

  const filteredPosts = selectedLabel
    ? POSTS.filter((post) => post.labels?.includes(selectedLabel))
    : POSTS;

  return (
    <div className="container">
      <h1 className="mb-6 font-serif text-5xl md:text-7xl">Blog</h1>
      <nav>
        <ul className="mb-4 flex flex-wrap items-center gap-4">
          {labels.map((label, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedLabel(label)}
                className={`inline-block rounded-full px-3 py-1 text-lg ${
                  selectedLabel === label
                    ? 'bg-neutral-700 text-white'
                    : 'bg-grey-200 text-neutral-700 hover:bg-grey-300'
                }`}
              >
                {`#${label}`}
              </button>
            </li>
          ))}
          {selectedLabel && (
            <li>
              <button
                onClick={() => setSelectedLabel(null)}
                className="flex items-center gap-1 text-lg"
              >
                <IconX aria-hidden="true" size={20} />
                Clear filter
              </button>
            </li>
          )}
        </ul>
      </nav>
      {filteredPosts.map((post, index) => (
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
    </div>
  );
};

export default List;
