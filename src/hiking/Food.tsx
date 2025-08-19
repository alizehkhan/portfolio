import { IconChevronRight } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

import { useHikingFood } from './queries'

export const Food = () => {
	const { data: food, isLoading } = useHikingFood()

	return (
		<div>
			<div className="mb-2 flex items-center gap-1 text-lg">
				<Link to="/hiking" className="hover:underline">
					Hiking
				</Link>
				<IconChevronRight size={18} />
				<Link to="." className="hover:underline">
					Food
				</Link>
			</div>
			<h1 className="font-serif text-4xl leading-tight font-bold text-neutral-700 md:text-7xl md:leading-tight">
				My trail food
			</h1>
			<div className="mt-6 block grid-cols-3 gap-4 space-y-4 md:grid md:space-y-0">
				{!isLoading
					? // eslint-disable-next-line @typescript-eslint/no-explicit-any
						Object.values(food).map((foodItem: any, index) => (
							<div
								className="rounded-lg border border-neutral-300 bg-white px-6 py-4"
								key={index}
							>
								<img
									src={foodItem.Photo?.[0].url}
									alt=""
									className="h-[132px]"
								/>
								<h2 className="my-2 font-serif text-lg font-bold">
									{foodItem.Name}
								</h2>
								<p>{foodItem.Notes}</p>
							</div>
						))
					: Array.from({ length: 3 }, (_, i) => (
							<div
								key={i}
								className="h-[140px] w-full animate-pulse rounded-md bg-neutral-300"
							/>
						))}
			</div>
		</div>
	)
}
