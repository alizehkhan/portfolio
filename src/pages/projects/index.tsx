import { IconArrowRight, IconCode } from '@tabler/icons-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { PROJECTS } from '../../content/projects'

export const Projects = () => {
	return (
		<>
			<Helmet>
				<title>Projects | Alizeh Khan</title>
			</Helmet>

			<h1 className="md:text-7xl text-5xl font-serif mb-16 font-bold">
				Projects
			</h1>
			{PROJECTS.map((project, index) => (
				<div key={index} className="max-w-[900px]">
					<article className="flex md:flex-row flex-col p-4 gap-8 items-center">
						<Link to={project.live} target="_blank">
							<img className="max-w-[400px]" src={project.image} alt="" />
						</Link>
						<div className="flex-1">
							<h2 className="font-serif font-bold md:text-3xl text-2xl">
								{project.title}
							</h2>
							<p className="mb-3 mt-2 text-xl opacity-80">
								{project.description}
							</p>

							<div className="flex gap-2 ">
								<Link
									to={project.source}
									target="_blank"
									className="mt-4 flex w-fit items-center gap-2 hover:scale-105 shadow-sm hover:shadow-md rounded-md px-2 py-1 text-xl transition-all"
								>
									<IconCode size={20} />
									Source code
								</Link>
								<Link
									to={project.live}
									target="_blank"
									className="mt-4 flex w-fit items-center shadow-sm hover:shadow-md transition-all bg-green-300 text-green-700 gap-2 rounded-md px-2 py-1 text-xl hover:scale-105"
								>
									Live site
									<IconArrowRight size={20} color="#2e6b34" />
								</Link>
							</div>
						</div>
					</article>
					<hr className="w-full text-grey-300" />
				</div>
			))}
		</>
	)
}
