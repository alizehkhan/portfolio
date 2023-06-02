import { PROJECTS } from '../../content/projects';
import PostCard from '../../components/PostCard';

export default function List() {
  return (
    <div className="container">
      <h1 className="mb-6 font-serif text-5xl md:text-7xl">Projects</h1>
      {PROJECTS.map((project, index) => (
        <PostCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}
