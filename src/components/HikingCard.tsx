import { motion } from 'framer-motion'
import { useContext, useState } from 'react'
import ReactModal from 'react-modal'

import { HikingGearContext } from '../utils/HikingGearContext'
import { GearItem } from '../utils/types'
import { getKebabCase } from '../utils/utils'

import { HikingModal } from './HikingModal'

export const HikingCard = ({
	gearItem,
	filteredGearIndex,
	hikingGear,
}: {
	gearItem: GearItem
	filteredGearIndex: number
	hikingGear: GearItem[]
}) => {
	const { setOpenedIndex } = useContext(HikingGearContext)

	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
		setOpenedIndex(filteredGearIndex)
	}

	return (
		<>
			<motion.button
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="flex flex-col items-center justify-between rounded-lg bg-white px-2 hover:transition-all pb-4 pt-2 shadow-sm hover:scale-[1.02] hover:shadow-lg"
				onClick={openModal}
			>
				<div className="flex justify-between w-full">
					<p
						className={`rounded-full px-3 py-1 text-xs font-bold ${getKebabCase(
							gearItem.Category
						)}`}
					>
						{gearItem.Category}
					</p>
					{gearItem.Condition === 'New' && (
						<p className="font-bold px-3 py-1 text-xs shadow-sm bg-yellow-300 rounded-full">
							✨ NEW
						</p>
					)}
				</div>
				<img
					src={gearItem.Photo?.[0].url}
					alt=""
					className="mx-auto h-[132px]"
				/>
				<h2 className="text-md font-serif font-bold">{gearItem.Name}</h2>
			</motion.button>

			<ReactModal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				shouldCloseOnOverlayClick
				className="modal"
				overlayClassName="overlay"
			>
				<HikingModal hikingGear={hikingGear} setIsModalOpen={setIsModalOpen} />
			</ReactModal>
		</>
	)
}
