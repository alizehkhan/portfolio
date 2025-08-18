import { IconChevronRight, IconX } from '@tabler/icons-react'
import { Link, Route, Routes } from 'react-router-dom'

import { GearItem } from '../utils/types'
import { GearDetail } from './GearDetail'
import { useHikingGear } from './queries'

function groupByCategory(items: GearItem[]) {
	return items.reduce(
		(acc, item) => {
			if (!acc[item.Category]) {
				acc[item.Category] = []
			}
			acc[item.Category].push(item)
			return acc
		},
		{} as Record<string, GearItem[]>,
	)
}

export const GearList = () => {
	const { data: hikingGear, isLoading } = useHikingGear()

	function getTotalWeight(items: GearItem[]) {
		return items.reduce((total, item) => {
			if (item.Weight && item.Quantity) {
				return total + item.Weight * item.Quantity
			}
			return total
		}, 0)
	}

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="mb-2 flex items-center gap-2 text-lg">
								<Link to="/hiking" className="hover:underline">
									Hiking
								</Link>
								<IconChevronRight size={16} />
								<Link to="." className="hover:underline">
									Gear
								</Link>
							</div>
							<h1 className="font-serif text-4xl leading-tight font-bold text-neutral-700 md:text-7xl md:leading-tight">
								My hiking gear
							</h1>
							<div className="mt-6 space-y-6">
								<p className="flex items-center gap-2 font-serif">
									Base weight:
									<p className="text-2xl font-bold">
										{new Intl.NumberFormat('en-GB', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										}).format(
											getTotalWeight(Object.values(hikingGear ?? {})) / 1000,
										) + ' kg'}
									</p>
								</p>
								{!isLoading
									? Object.entries(
											groupByCategory(Object.values(hikingGear ?? {})),
										).map(([category, items]) => (
											<div
												key={category}
												className="rounded-lg border border-neutral-300 bg-white px-4 pt-4"
											>
												<h2 className="text-xl font-bold">{category}</h2>

												<div className="my-2 flex gap-1 text-neutral-700/80">
													Total weight:
													<p className="font-serif font-bold">
														{new Intl.NumberFormat('en-GB').format(
															getTotalWeight(items),
														)}
														g
													</p>
												</div>

												<div className="divide-grey-200 divide-y rounded-lg p-4">
													{items.map((gearItem) => (
														<Link
															key={gearItem.id}
															className="block w-full grid-cols-[100px_240px_1fr_auto_60px] items-center gap-4 py-1.5 md:grid"
															to={gearItem.id}
														>
															<div className="w-fit rounded bg-white px-2 py-1">
																<img
																	src={gearItem.Photo?.[0].url}
																	alt=""
																	className="h-12 w-16 object-contain"
																/>
															</div>

															<p className="flex items-center gap-2 text-lg font-bold">
																{gearItem.Name}
																{gearItem.Condition === 'New' && (
																	<p className="h-fit w-fit rounded-full bg-yellow-300 px-2 py-1 text-sm font-bold shadow-xs">
																		✨ New
																	</p>
																)}
															</p>
															<div>
																<p>{gearItem.Brand}</p>
																<p className="text-sm text-neutral-700/80">
																	{gearItem.Product}
																</p>
															</div>

															<p className="text-lg font-bold">
																{gearItem.Weight ? (
																	`${new Intl.NumberFormat('en-GB').format(
																		gearItem.Weight,
																	)} g`
																) : (
																	<p className="h-fit w-fit rounded-full bg-blue-300 px-2 py-1 text-sm font-bold shadow-xs">
																		👕 Worn
																	</p>
																)}
															</p>

															<p className="text-lg font-bold">
																{gearItem.Quantity > 1 && (
																	<div className="flex w-fit items-center rounded-full bg-neutral-100 px-2 py-1">
																		<IconX size={14} />
																		{gearItem.Quantity}
																	</div>
																)}
															</p>
														</Link>
													))}
												</div>
											</div>
										))
									: Array.from({ length: 4 }, (_, i) => (
											<div
												key={i}
												className="h-[400px] w-full animate-pulse rounded-md bg-neutral-300"
											/>
										))}
							</div>
						</>
					}
				/>
				<Route path="/:gearId" element={<GearDetail />} />
			</Routes>
		</div>
	)
}
