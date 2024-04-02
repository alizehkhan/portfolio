import {
	IconArrowNarrowLeft,
	IconArrowNarrowRight,
	IconScale,
	IconTag,
	IconX,
} from '@tabler/icons-react'
import {
	Dispatch,
	SetStateAction,
	useCallback,
	useContext,
	useEffect,
} from 'react'
import ReactMarkdown from 'react-markdown'
import { useMediaQuery } from 'react-responsive'

import { HikingGearContext } from '../utils/HikingGearContext'
import { GearItem } from '../utils/types'
import { getKebabCase } from '../utils/utils'

export const HikingModal = ({
	hikingGear,
	setIsModalOpen,
}: {
	hikingGear: Array<GearItem>
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
}) => {
	const { openedIndex, setOpenedIndex } = useContext(HikingGearContext)

	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 720px)' })

	const lastItemIndex = hikingGear.length - 1
	const gear = hikingGear[openedIndex]

	const onLeftNavigation = useCallback(() => {
		if (openedIndex > 0) {
			setOpenedIndex(openedIndex => openedIndex - 1)
		}
	}, [openedIndex, setOpenedIndex])

	const onRightNavigation = useCallback(() => {
		if (openedIndex < lastItemIndex) {
			setOpenedIndex(openedIndex => openedIndex + 1)
		}
	}, [openedIndex, lastItemIndex, setOpenedIndex])

	useEffect(() => {
		const navigationListener = (event: KeyboardEvent) => {
			if (event.code === 'ArrowRight') {
				onRightNavigation()
			} else if (event.code === 'ArrowLeft') {
				onLeftNavigation()
			}
		}

		window.addEventListener('keydown', navigationListener)
		document.body.style.overflow = 'hidden'

		return () => {
			window.removeEventListener('keydown', navigationListener)
			document.body.style.overflow = 'visible'
		}
	}, [onRightNavigation, onLeftNavigation])

	return (
		<>
			{isTabletOrDesktop ? (
				!(openedIndex === 0) && (
					<button
						className="previous-button absolute -left-6 top-[calc(50%-24px)] rounded-full bg-neutral-700 p-3 shadow-lg"
						aria-label="Previous gear item"
						onClick={() => onLeftNavigation()}
					>
						<IconArrowNarrowLeft color="white" size={24} />
					</button>
				)
			) : (
				<button
					className="mb-3 ml-auto block rounded-full transition-all border-2 border-solid border-neutral-700 bg-transparent p-2 hover:bg-neutral-300"
					aria-label="Close modal"
					onClick={() => setIsModalOpen(false)}
				>
					<IconX color="#3f3f46" size={24} />
				</button>
			)}
			<div className="modal-left">
				<div className="mb-4 rounded-lg bg-white p-3 shadow-sm">
					<p
						className={`mr-auto inline-block w-fit rounded-full px-3 py-1 text-xs font-bold ${
							gear ? getKebabCase(gear.Category) : ''
						}`}
					>
						{gear.Category}
					</p>
					<img
						src={gear.Photo[0].url}
						alt=""
						className="mt-1 h-[190px] w-full object-contain"
					/>
				</div>
				<p className="font-serif text-lg font-bold">{gear.Brand}</p>
				<p className="mb-4">{gear.Product}</p>
				<div className="flex items-center text-lg font-bold">
					{gear.Price && (
						<div
							aria-label="Total price"
							title="Total price"
							className="mr-6 flex items-center justify-between"
						>
							<IconTag
								size={20}
								color="#928b80"
								style={{ marginRight: '8px' }}
								aria-hidden="true"
							/>
							<p>
								{gear.Price?.toLocaleString('en-UK', {
									style: 'currency',
									currency: 'EUR',
								}).slice(0, -3)}
							</p>
						</div>
					)}
					{gear.Weight && (
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
							<p>{Math.round(gear.Weight)} g</p>
						</div>
					)}
				</div>
			</div>
			<div className="modal-right">
				<h2 className="my-4 font-serif text-3xl font-bold">{gear.Name}</h2>
				<ReactMarkdown>{gear.Notes}</ReactMarkdown>
			</div>
			{isTabletOrDesktop && !(openedIndex === lastItemIndex) && (
				<button
					className="next-button absolute -right-6 top-[calc(50%-24px)] rounded-full bg-neutral-700 p-3 shadow-lg"
					aria-label="Next gear item"
					onClick={() => onRightNavigation()}
				>
					<IconArrowNarrowRight color="white" size={24} />
				</button>
			)}
		</>
	)
}
