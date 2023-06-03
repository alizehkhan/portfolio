import { IconScale, IconTag } from '@tabler/icons-react';
import { useContext } from 'react';

import { getFilterdHikingGear } from '../utils/utils';
import { HikingGearContext } from '../utils/HikingGearContext';

const HikingStats = () => {
  const { gearById, selectedFilter } = useContext(HikingGearContext);

  const filteredHikingGear = getFilterdHikingGear(gearById, selectedFilter);

  let totalPrice = 0;
  filteredHikingGear.forEach((gear) => {
    if (gear.Price) totalPrice += gear.Price;
  });

  let totalWeight = 0;
  filteredHikingGear.forEach((gear) => {
    if (gear.Weight) totalWeight += gear.Weight;
  });

  return (
    <div className="flex items-center text-lg font-bold">
      <div
        aria-label="total price"
        className="mr-6 flex items-center justify-between"
      >
        <IconTag
          size={20}
          color="#928b80"
          style={{ marginRight: '8px' }}
          aria-hidden="true"
        />
        <p>
          {totalPrice
            .toLocaleString('en-GB', {
              style: 'currency',
              currency: 'EUR',
            })
            .slice(0, -3)}
        </p>
      </div>
      <div
        aria-label="total weight"
        className="flex items-center justify-between"
      >
        <IconScale
          size={20}
          color="#928b80"
          style={{ marginRight: '8px' }}
          aria-hidden="true"
        />
        <p>{Math.round(totalWeight / 10) / 100} kg</p>
      </div>
    </div>
  );
};

export default HikingStats;
