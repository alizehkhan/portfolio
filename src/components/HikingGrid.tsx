import { useEffect } from 'react';
import { redirect, useParams } from 'react-router-dom';

import { setSelectedFilter } from '../store/actions';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CategoryKebabCase } from '../types';
import { getFilterdHikingGear } from '../utils/utils';
import HikingCard from './HikingCard';
import { filters } from '../content/hikingGearFilters';

const HikingGrid = () => {
  const { selectedFilter } = useParams();
  const hikingGear = useAppSelector((state) => state.gearById);
  const dataFetched = useAppSelector((state) => state.fetched);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!selectedFilter || filters.includes(selectedFilter)) {
      dispatch(setSelectedFilter(selectedFilter as CategoryKebabCase));
    } else {
      redirect('/blog/hiking-gear');
    }
  }, [dispatch, selectedFilter]);

  if (selectedFilter && !filters.includes(selectedFilter))
    redirect('/blog/hiking-gear');

  return (
    <div className="container grid">
      {dataFetched
        ? getFilterdHikingGear(
            hikingGear,
            selectedFilter as CategoryKebabCase
          ).map((gearItem, index) => (
            <HikingCard
              key={gearItem.id}
              filteredGearIndex={index}
              gearItem={gearItem}
              hikingGear={getFilterdHikingGear(
                hikingGear,
                selectedFilter as CategoryKebabCase
              )}
            />
          ))
        : Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="loading-state" />
          ))}
    </div>
  );
};

export default HikingGrid;
