import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useMediaQuery } from 'react-responsive'
import { Route, Routes } from 'react-router-dom'

import { HikingFilters } from '../../components/HikingFilters'
import { HikingGrid } from '../../components/HikingGrid'
import { HikingMobileFilters } from '../../components/HikingMobileFilters'
import { HikingStats } from '../../components/HikingStats'
import { URL } from '../../utils/constants'
import { HikingGearContext } from '../../utils/HikingGearContext'
import { CategoryKebabCase } from '../../utils/types'

export const HikingGear = () => {
	const [gearById, setGearById] = useState({})
	const [openedIndex, setOpenedIndex] = useState<number>(0)
	const [selectedFilter, setSelectedFilter] = useState<
		CategoryKebabCase | undefined
	>(undefined)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getGear = async () => {
			const res = await fetch(
				`${URL}Gear?sort%5B0%5D%5Bfield%5D=Order&sort%5B0%5D%5Bdirection%5D=asc`,
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
					},
				}
			)
			const { records } = await res.json()

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const normalisedData = records.reduce((accumulator: any, gear: any) => {
				accumulator[gear.id] = { ...gear.fields, id: gear.id }
				return accumulator
			}, {})

			setGearById(normalisedData)
			setIsLoading(false)
		}

		getGear()
	}, [])

	const filterBarRef = useRef(null)
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 1000px)' })

	const handleScroll = () => {
		if (!filterBarRef.current) return

		const element = filterBarRef.current as HTMLElement

		element.style.boxShadow =
			element.getBoundingClientRect().top === 0
				? '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)'
				: 'none'
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<Helmet>
				<title>Hiking Gear | Alizeh Khan</title>
			</Helmet>
			<HikingGearContext.Provider
				value={{
					gearById,
					setGearById,
					selectedFilter,
					setSelectedFilter,
					openedIndex,
					setOpenedIndex,
					isLoading,
					setIsLoading,
				}}
			>
				<h1 className="font-serif text-5xl font-bold leading-tight text-neutral-700 md:text-7xl md:leading-tight">
					My Hiking Gear
				</h1>
				{!isTabletOrDesktop && <HikingMobileFilters />}

				<div className="sticky top-0 z-[1] bg-neutral-100" ref={filterBarRef}>
					<div className="flex justify-center py-8 md:justify-between">
						{isTabletOrDesktop && <HikingFilters />}
						<HikingStats />
					</div>
				</div>

				<Routes>
					<Route index element={<HikingGrid />} />
					<Route path=":selectedFilter" element={<HikingGrid />} />
				</Routes>
			</HikingGearContext.Provider>
		</>
	)
}
