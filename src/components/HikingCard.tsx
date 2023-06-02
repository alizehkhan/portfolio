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
        className="card"
        onClick={openModal}
      >
        <p className={`card-category ${getKebabCase(gearItem.Category)}`}>
          {gearItem.Category}
        </p>
        <img src={gearItem.Photo[0].url} alt={gearItem.Name} />
        <h2 className="card-name">{gearItem.Name}</h2>
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
