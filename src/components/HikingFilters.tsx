import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CategoryKebabCase } from '../utils/types';
import { getKebabCase } from '../utils/utils';
import { capitalisedFilters } from '../content/hikingGearFilters';
import { HikingGearContext } from '../utils/HikingGearContext';

const HikingFilters = () => {
  const { selectedFilter, setSelectedFilter } = useContext(HikingGearContext);

  return (
    <nav aria-label="Navigation for filtering hiking gear">
      <ul className="flex justify-center">
        <li>
          <Link
            to="/blog/hiking-gear"
            className={`filter-show-all text-lg no-underline filter ${
              !selectedFilter ? 'active' : ''
            }`}
            onClick={() => setSelectedFilter(selectedFilter)}
          >
            Show all
          </Link>
        </li>
        {capitalisedFilters.map((filter) => (
          <li key={filter}>
            <Link
              to={getKebabCase(filter)}
              className={`text-lg no-underline filter filter-${getKebabCase(
                filter
              )} ${selectedFilter === getKebabCase(filter) ? 'active' : ''}`}
              onClick={(event) => {
                if (capitalisedFilters.includes(event.currentTarget.innerText))
                  setSelectedFilter(
                    getKebabCase(
                      event.currentTarget.innerText
                    ) as CategoryKebabCase
                  );
              }}
            >
              {filter}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HikingFilters;
