import { Link } from 'react-router-dom'
import { IconBrandGithub } from '@tabler/icons-react'

import { PROJECTS } from '../../content/projects'

export default function List() {
  return (
    <div className="container mx-auto">
      {PROJECTS.map((project, index) => (
        <div key={index}>
          <article className="flex md:flex-row flex-col py-6 gap-4 items-center">
            <Link to={project.live} target="_blank" className="">
              <img className="max-w-lg" src={project.image} alt="" />
            </Link>
            <div>
              <p className="font-serif text-3xl md:text-4xl">{project.title}</p>
              <p className="my-4 text-lg opacity-80 md:text-xl">
                {project.description}
              </p>
              <div className="flex gap-1 flex-wrap">
                {project.topics.map((topic, i) => (
                  <code
                    key={i}
                    className=" rounded-md bg-grey-200 p-1 font-mono text-sm text-neutral-700"
                  >
                    {topic}
                  </code>
                ))}
              </div>
              <Link
                to={project.live}
                target="_blank"
                className="mt-4 flex w-fit items-center gap-2 rounded-md px-2 py-1 text-xl"
              >
                <IconBrandGithub size={20} />
                Source code
              </Link>
            </div>
          </article>
          <hr className="w-full text-grey-300" />
        </div>
      ))}
    </div>
  )
}
