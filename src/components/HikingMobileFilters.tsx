import { IconFilter, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { capitalisedFilters } from '../content/hikingGearFilters';
import { HikingGearContext } from '../utils/HikingGearContext';
import { CategoryKebabCase } from '../utils/types';
import { getKebabCase } from '../utils/utils';

const HikingMobileFilters = () => {
  const { selectedFilter, setSelectedFilter } = useContext(HikingGearContext);
  const [showMobileFilters, setShowMobileFitlers] = useState(false);

  const container = {
    exit: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: 1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { x: 140 },
    show: { x: 0 },
    exit: { x: 140 },
  };

  return (
    <div className="fixed bottom-4 right-4 z-[2] flex flex-col-reverse items-end text-right">
      <button
        className="mt-3 cursor-pointer rounded-full bg-neutral-700 p-4 shadow-lg"
        aria-label={
          showMobileFilters ? 'Close filter options' : 'Filter hiking gear by'
        }
        title={
          showMobileFilters ? 'Close filter options' : 'Filter hiking gear by'
        }
        onClick={() => setShowMobileFitlers(!showMobileFilters)}
      >
        {showMobileFilters ? (
          <IconX color="white" size={32} stroke={1} aria-hidden="true" />
        ) : (
          <IconFilter color="white" size={32} stroke={1} aria-hidden="true" />
        )}
      </button>
      <AnimatePresence>
        {showMobileFilters && (
          <nav aria-label="Filter hiking gear by">
            <motion.ul
              className="flex flex-col gap-4"
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.li variants={item}>
                <Link
                  to="/blog/hiking-gear"
                  className={`filter-show-all mx-1 inline-block rounded-full bg-neutral-100 px-4 py-2 text-lg font-bold no-underline shadow-lg ${
                    !selectedFilter && 'active'
                  }`}
                  onClick={() => setSelectedFilter(undefined)}
                >
                  Show all
                </Link>
              </motion.li>
              {capitalisedFilters.map((filter) => (
                <motion.li key={filter} variants={item}>
                  <Link
                    to={getKebabCase(filter)}
                    className={`mx-1 inline-block rounded-full bg-neutral-100 px-4 py-2 text-lg font-bold no-underline shadow-lg filter-${getKebabCase(
                      filter
                    )} ${selectedFilter === getKebabCase(filter) && 'active'}`}
                    onClick={(event) => {
                      setSelectedFilter(
                        getKebabCase(
                          event.currentTarget.innerText
                        ) as CategoryKebabCase
                      );
                    }}
                  >
                    {filter}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HikingMobileFilters;
