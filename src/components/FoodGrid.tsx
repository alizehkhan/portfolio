/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

import { URL } from '../utils/constants'

export const FoodGrid = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [food, setFood] = useState({})

	useEffect(() => {
		const getFood = async () => {
			const res = await fetch(`${URL}Food`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
				},
			})
			const { records } = await res.json()

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const normalisedData = records.reduce((accumulator: any, food: any) => {
				accumulator[food.id] = { ...food.fields, id: food.id }
				return accumulator
			}, {})

			setFood(normalisedData)
			setIsLoading(false)
		}

		getFood()
	}, [])

	return (
		<div className="flex flex-col gap-4 mt-8">
			{!isLoading
				? Object.values(food).map((foodItem: any, index) => (
						<div
							className="flex flex-row gap-4 bg-white px-6 py-4 shadow-sm rounded-lg items-center"
							key={index}
						>
							<div className="flex w-[200px] shrink-0 flex-col items-center justify-between">
								<img
									src={foodItem.Photo?.[0].url}
									alt=""
									className="mx-auto h-[132px]"
								/>
								<h2 className="text-md text-center font-serif font-bold">
									{foodItem.Name}
								</h2>
							</div>
							<p>{foodItem.Notes}</p>
						</div>
					))
				: Array.from({ length: 3 }, (_, i) => (
						<div
							key={i}
							className="animate-pulse bg-neutral-300 w-full h-[140px] rounded-md"
						/>
					))}
		</div>
	)
}
