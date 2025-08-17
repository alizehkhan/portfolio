import { IconChevronRight, IconScale } from '@tabler/icons-react'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'

import { getKebabCase } from '../utils/utils'
import { useHikingGear } from './queries'

export const GearDetail = () => {
	const { gearId } = useParams()
	const { data: hikingGear } = useHikingGear()
	const gearItem = hikingGear && gearId ? hikingGear[gearId] : null

	return (
		<>
			<div className="mb-2 flex items-center gap-2 text-lg">
				<Link to="/hiking" className="hover:underline">
					Hiking
				</Link>
				<IconChevronRight size={16} />
				<Link to="/hiking/gear" className="hover:underline">
					Gear
				</Link>
				<IconChevronRight size={16} />
				<Link to="." className="hover:underline">
					{gearItem?.Name}
				</Link>
			</div>
			<div className="mt-8 flex gap-4">
				<div className="mr-8 w-[300px] shrink-0">
					<div className="mb-4 rounded-lg border border-neutral-300 bg-white p-3 shadow-xs">
						<p
							className={`mr-auto inline-block w-fit rounded-full px-3 py-1 text-xs font-bold ${
								gearItem ? getKebabCase(gearItem.Category) : ''
							}`}
						>
							{gearItem?.Category}
						</p>
						<img
							src={gearItem?.Photo[0].url}
							alt=""
							className="mt-1 h-[190px] w-full object-contain"
						/>
						<p className="font-serif text-lg font-bold">{gearItem?.Brand}</p>
						<p className="mb-4">{gearItem?.Product}</p>
						<div className="flex items-center text-lg font-bold">
							{gearItem?.Weight && (
								<div
									aria-label="Total weight"
									title="Total weight"
									className="mr-6 flex items-center justify-between"
								>
									<IconScale
										size={20}
										color="#928b80"
										style={{ marginRight: '8px' }}
										aria-hidden="true"
									/>
									<p>{Math.round(gearItem.Weight)} g</p>
								</div>
							)}
						</div>
					</div>
				</div>
				<div>
					<h1 className="mb-4 flex items-center gap-2 font-serif text-3xl font-bold">
						{gearItem?.Name}
						{gearItem?.Condition === 'New' && (
							<span className="rounded-full bg-yellow-300 px-3 py-1 font-sans text-sm shadow-xs">
								✨NEW
							</span>
						)}
					</h1>
					<ReactMarkdown className="w-[70ch] text-lg [&_a]:underline [&_p]:mb-4">
						{gearItem?.Notes}
					</ReactMarkdown>
				</div>
			</div>
		</>
	)
}
