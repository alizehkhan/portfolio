import { IconCode } from '@tabler/icons-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { PROJECTS } from '../../content/projects'

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Alizeh Khan</title>
      </Helmet>
      <div className="max-w-[1000px] mx-auto">
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <article className="flex md:flex-row flex-col p-6 gap-6 items-center">
              <Link to={project.live} target="_blank" className="">
                <img className="max-w-md" src={project.image} alt="" />
              </Link>
              <div>
                <p className="font-serif text-3xl">{project.title}</p>
                <p className="my-4 text-lg opacity-80">{project.description}</p>
                <div className="flex gap-1 flex-wrap">
                  {project.topics.map((topic, i) => (
                    <code
                      key={i}
                      className=" rounded-md bg-grey-200 p-1 font-mono text-xs text-neutral-700"
                    >
                      {topic}
                    </code>
                  ))}
                </div>
                <Link
                  to={project.source}
                  target="_blank"
                  className="mt-4 flex w-fit items-center gap-2 rounded-md px-2 py-1 text-xl"
                >
                  <IconCode size={20} />
                  Source code
                </Link>
              </div>
            </article>
            <hr className="w-full text-grey-300" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
