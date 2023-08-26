import { Link } from 'react-router-dom';

import { PROJECTS } from '../../content/projects';
import Container from '../../components/Container';

export default function List() {
  return (
    <Container>
      {PROJECTS.map((project, index) => (
        <div key={index}>
          <article>
            <Link
              to={project.link}
              className="flex min-h-[140px] max-w-3xl flex-col p-4 pt-8 hover:bg-grey-100"
            >
              <div>
                <p className="font-serif text-3xl font-bold md:text-4xl">
                  {project.title}
                </p>
                <p className="my-4 text-lg opacity-90 md:text-xl">
                  {project.description}
                </p>
              </div>
              <img
                className="mr-6 w-full object-contain"
                src={project.image}
                alt=""
              />
            </Link>
          </article>
          <hr className="max-w-3xl text-grey-300" />
        </div>
      ))}
    </Container>
  );
}
