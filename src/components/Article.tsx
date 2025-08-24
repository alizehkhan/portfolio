import { Link } from 'react-router-dom'

interface ArticleProps {
	title: string
	description: string
	image: string
	path: string
}

export const Article = (props: ArticleProps) => {
	const { title, description, image, path } = props

	return (
		<article>
			<Link
				to={path}
				className="flex max-w-2xl flex-col gap-8 py-5 md:flex-row md:items-center"
			>
				<img className="h-20 w-32 shrink-0 object-contain" src={image} alt="" />
				<div>
					<p className="mt-4 font-serif text-2xl">{title}</p>
					<p className="mt-2 text-lg opacity-90">{description}</p>
				</div>
			</Link>
		</article>
	)
}
