import { Helmet } from 'react-helmet-async'
import { Link, Route, Routes } from 'react-router-dom'

import { Food } from './Food'
import { GearList } from './GearList'

interface ArticleProps {
	title: string
	description: string
	image: string
	path: string
}

const Article = (props: ArticleProps) => {
	const { title, description, image, path } = props

	return (
		<article>
			<Link to={path} className="flex w-[580px] max-w-2xl items-center gap-4">
				<img className="h-20 w-32 shrink-0 object-contain" src={image} alt="" />
				<div>
					<p className="mt-4 font-serif text-2xl">{title}</p>
					<p className="mt-2 text-lg opacity-90">{description}</p>
				</div>
			</Link>
		</article>
	)
}

export const Hiking = () => {
	return (
		<>
			<Helmet>
				<title>Hiking | Alizeh Khan</title>
			</Helmet>

			<Routes>
				<Route
					path="/"
					element={
						<>
							<h1 className="mb-8 font-serif text-5xl leading-tight font-bold text-neutral-700 md:text-7xl md:leading-tight">
								Hiking
							</h1>
							<div className="space-y-6">
								<Article
									path="gear"
									title="My hiking gear"
									description="Guidance and list of my solo long-distance hiking gear which I religiously keep up to date."
									image="./illustrations/tent.svg"
								/>
								<Article
									path="food"
									title="My trail food"
									description="A breakdown of the food I tend to eat on trail and what I think about when resupplying on a long distance hike."
									image="./illustrations/food.svg"
								/>
							</div>
						</>
					}
				/>
				<Route path="/gear/*" element={<GearList />} />
				<Route path="/food" element={<Food />} />
			</Routes>
		</>
	)
}
