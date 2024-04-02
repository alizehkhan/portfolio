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
			<div className="max-w-[1000px] w-[90%] mx-auto">
				{PROJECTS.map((project, index) => (
					<div key={index}>
						<article className="flex md:flex-row flex-col p-4 gap-6 items-center">
							<Link to={project.live} target="_blank" className="flex-[1]">
								<img className="max-w-full" src={project.image} alt="" />
							</Link>
							<div className="flex-1">
								<p className="font-serif text-2xl">{project.title}</p>
								<p className="mb-3 mt-2 text-lg opacity-80">
									{project.description}
								</p>
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
			</div>
		</>
	)
}
