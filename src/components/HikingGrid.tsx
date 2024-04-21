import { useContext, useEffect } from 'react'
import { redirect, useParams } from 'react-router-dom'

import { filters } from '../content/hikingGearFilters'
import { HikingGearContext } from '../utils/HikingGearContext'
import { CategoryKebabCase } from '../utils/types'
import { getFilteredHikingGear } from '../utils/utils'

import { HikingCard } from './HikingCard'

export const HikingGrid = () => {
	const { selectedFilter } = useParams()
	const { gearById, setSelectedFilter, isLoading } =
		useContext(HikingGearContext)

	useEffect(() => {
		if (!selectedFilter || filters.includes(selectedFilter)) {
			setSelectedFilter(selectedFilter as CategoryKebabCase)
		} else {
			redirect('/blog/hiking-gear')
		}
	}, [selectedFilter, setSelectedFilter])

	if (selectedFilter && !filters.includes(selectedFilter))
		redirect('/blog/hiking-gear')

	return (
		<div className="container mt-1 grid auto-rows-[232px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
			{!isLoading
				? getFilteredHikingGear(
						gearById,
						selectedFilter as CategoryKebabCase
					).map((gearItem, index) => (
						<HikingCard
							key={gearItem.id}
							filteredGearIndex={index}
							gearItem={gearItem}
							hikingGear={getFilteredHikingGear(
								gearById,
								selectedFilter as CategoryKebabCase
							)}
						/>
					))
				: Array.from({ length: 12 }, (_, i) => (
						<div
							key={i}
							className="animate-pulse w-full bg-neutral-300 rounded-md"
						/>
					))}
		</div>
	)
}
