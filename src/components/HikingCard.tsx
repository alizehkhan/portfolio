import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import ReactModal from 'react-modal';

import { GearItem } from '../utils/types.js';
import { getKebabCase } from '../utils/utils.js';
import { HikingGearContext } from '../utils/HikingGearContext.js';

import HikingModal from './HikingModal';

const HikingCard = ({
  gearItem,
  filteredGearIndex,
  hikingGear,
}: {
  gearItem: GearItem;
  filteredGearIndex: number;
  hikingGear: Array<GearItem>;
}) => {
  const { setOpenedIndex } = useContext(HikingGearContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setOpenedIndex(filteredGearIndex);
  };

  return (
    <>
      <motion.button
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-between rounded-lg bg-white px-2 pb-4 pt-2 shadow-sm hover:scale-[1.02] hover:shadow-lg"
        onClick={openModal}
      >
        <p
          className={`mr-auto inline-block w-fit rounded-full px-3 py-1 text-xs font-bold ${getKebabCase(
            gearItem.Category
          )}`}
        >
          {gearItem.Category}
        </p>
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
  );
};

export default HikingCard;
