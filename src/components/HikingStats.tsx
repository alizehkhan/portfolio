import { IconScale, IconTag } from '@tabler/icons-react';

import { useAppSelector } from '../store/hooks';
import { getFilterdHikingGear } from '../utils/utils';

const HikingStats = () => {
  const hikingGear = useAppSelector((state) => state.gearById);
  const selectedFilter = useAppSelector((state) => state.selectedFilter);
  const dataFetched = useAppSelector((state) => state.fetched);

  if (!dataFetched) return null;

  const filteredHikingGear = getFilterdHikingGear(hikingGear, selectedFilter);

  let totalPrice = 0;
  filteredHikingGear.forEach((gear) => {
    if (gear.Price) totalPrice += gear.Price;
  });

  let totalWeight = 0;
  filteredHikingGear.forEach((gear) => {
    if (gear.Weight) totalWeight += gear.Weight;
  });

  return (
    <div className="stats">
      <div aria-label="total price">
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
      <div aria-label="total weight">
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
