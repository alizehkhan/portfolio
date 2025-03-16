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
		<div className="mt-8 flex flex-col gap-4">
			{!isLoading
				? Object.values(food).map((foodItem: any, index) => (
						<div
							className="flex flex-row items-center gap-4 rounded-lg bg-white px-6 py-4 shadow-xs"
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
							className="h-[140px] w-full animate-pulse rounded-md bg-neutral-300"
						/>
					))}
		</div>
	)
}
