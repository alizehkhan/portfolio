import PostCard from '../../components/PostCard';
import { POSTS } from '../../content/posts';

const List = () => {
  return (
    <div className="container">
      <h1 className="mb-6 font-serif text-5xl md:text-7xl">Blog</h1>
      {POSTS.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          description={post.description}
          image={post.image}
          link={post.link}
        />
      ))}
    </div>
  );
};

export default List;
