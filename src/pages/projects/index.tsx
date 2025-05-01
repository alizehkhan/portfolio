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

			<h1 className="mb-14 font-serif text-5xl font-bold md:text-7xl">
				Projects
			</h1>
			{PROJECTS.map((project, index) => (
				<div key={index} className="max-w-[900px]">
					<article className="flex flex-col items-center gap-8 py-4 md:flex-row">
						<Link to={project.live} target="_blank">
							<img
								className="w-full max-w-[400px]"
								src={project.image}
								alt=""
							/>
						</Link>
						<div className="flex-1">
							<h2 className="font-serif text-2xl">{project.title}</h2>
							<p className="mt-2 mb-3 text-lg opacity-80">
								{project.description}
							</p>

							<div className="flex gap-2">
								{project.source && (
									<Link
										to={project.source}
										target="_blank"
										className="mt-4 flex w-fit items-center gap-2 rounded-md px-2 py-1 text-xl shadow-xs transition-all hover:scale-105 hover:shadow-md"
									>
										<IconCode size={20} />
										Source code
									</Link>
								)}
								<Link
									to={project.live}
									target="_blank"
									className="mt-4 flex w-fit items-center gap-2 rounded-md bg-green-300 px-2 py-1 text-xl text-green-700 shadow-xs transition-all hover:scale-105 hover:shadow-md"
								>
									Live site
									<IconArrowRight size={20} color="#2e6b34" />
								</Link>
							</div>
						</div>
					</article>
					<hr className="text-grey-300 w-full" />
				</div>
			))}
		</>
	)
}
