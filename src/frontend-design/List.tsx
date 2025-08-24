import { IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { PostCard } from '../components/PostCard'
import { Label } from '../utils/types'
import { useNavigateSearch } from '../utils/useNavigateSearch'
import { labels, POSTS } from './posts'

const List = () => {
	const [selectedLabel, setSelectedLabel] = useState<Label | null>(null)
	const navigateSearch = useNavigateSearch()
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	const filteredPosts = selectedLabel
		? POSTS.filter((post) => post.labels?.includes(selectedLabel))
		: POSTS

	const sortedPosts = filteredPosts.sort((a, b) => {
		const dateA = a.date || new Date(0)
		const dateB = b.date || new Date(0)

		return dateB.getTime() - dateA.getTime()
	})

	useEffect(() => {
		setSelectedLabel(searchParams.get('filter') as Label)
	}, [searchParams, setSelectedLabel])

	return (
		<>
			<h1 className="mb-16 font-serif text-5xl font-bold md:text-7xl">
				Frontend & Design
			</h1>
			<nav>
				<ul className="my-4 mb-8 flex flex-wrap items-center gap-3">
					{labels.map((label, index) => (
						<li key={index}>
							<button
								onClick={() => {
									setSelectedLabel(searchParams.get('filter') as Label)
									navigateSearch('/frontend-design', { filter: label })
								}}
								className={`inline-block rounded-full px-3 py-1 text-lg transition-all ${
									selectedLabel === label
										? 'bg-neutral-700 text-white'
										: 'bg-grey-200 text-neutral-700 hover:scale-105 hover:shadow-md'
								}`}
							>
								{`#${label}`}
							</button>
						</li>
					))}
					{selectedLabel && (
						<li>
							<button
								onClick={() => {
									setSelectedLabel(null)
									navigate('/frontend-design')
								}}
								className="flex items-center gap-1 text-lg"
							>
								<IconX aria-hidden="true" size={20} />
								Clear filter
							</button>
						</li>
					)}
				</ul>
			</nav>
			<div className="w-fit divide-y divide-neutral-300">
				{sortedPosts.map((post, index) => (
					<PostCard
						key={index}
						date={post.date}
						title={post.title}
						description={post.description}
						image={post.image}
						link={post.link}
						labels={post.labels}
					/>
				))}
			</div>
		</>
	)
}

export default List
