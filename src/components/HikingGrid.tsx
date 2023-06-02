import { useContext, useEffect } from 'react';
import { redirect, useParams } from 'react-router-dom';

import { CategoryKebabCase } from '../utils/types';
import { getFilterdHikingGear } from '../utils/utils';
import { filters } from '../content/hikingGearFilters';
import { HikingGearContext } from '../utils/HikingGearContext';

import HikingCard from './HikingCard';

const HikingGrid = () => {
  const { selectedFilter } = useParams();
  const { gearById, setSelectedFilter } = useContext(HikingGearContext);

  useEffect(() => {
    if (!selectedFilter || filters.includes(selectedFilter)) {
      setSelectedFilter(selectedFilter as CategoryKebabCase);
    } else {
      redirect('/blog/hiking-gear');
    }
  }, [selectedFilter, setSelectedFilter]);

  if (selectedFilter && !filters.includes(selectedFilter))
    redirect('/blog/hiking-gear');

  return (
    <div className="container grid">
      {getFilterdHikingGear(gearById, selectedFilter as CategoryKebabCase).map(
        (gearItem, index) => (
          <HikingCard
            key={gearItem.id}
            filteredGearIndex={index}
            gearItem={gearItem}
            hikingGear={getFilterdHikingGear(
              gearById,
              selectedFilter as CategoryKebabCase
            )}
          />
        )
      )}
    </div>
  );
};

export default HikingGrid;
