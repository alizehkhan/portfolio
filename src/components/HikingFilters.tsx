import { Link } from 'react-router-dom';

import { setSelectedFilter } from '../store/actions';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CategoryKebabCase } from '../types';
import { getKebabCase } from '../utils/utils';
import { capitalisedFilters } from '../content/hikingGearFilters';

const HikingFilters = () => {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector((state) => state.selectedFilter);

  return (
    <nav aria-label="Navigation for filtering hiking gear">
      <ul className="filters">
        <li>
          <Link
            to="/blog/hiking-gear"
            className={`filter-show-all filter ${
              !selectedFilter ? 'active' : ''
            }`}
            onClick={() => dispatch(setSelectedFilter(selectedFilter))}
          >
            Show all
          </Link>
        </li>
        {capitalisedFilters.map((filter) => (
          <li key={filter}>
            <Link
              to={getKebabCase(filter)}
              className={`filter filter-${getKebabCase(filter)} ${
                selectedFilter === getKebabCase(filter) ? 'active' : ''
              }`}
              onClick={(event) => {
                if (capitalisedFilters.includes(event.currentTarget.innerText))
                  dispatch(
                    setSelectedFilter(
                      getKebabCase(
                        event.currentTarget.innerText
                      ) as CategoryKebabCase
                    )
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
