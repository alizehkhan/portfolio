import { Dispatch, SetStateAction, createContext } from 'react';

import { CategoryKebabCase } from './types';

type HikingGear = {
  gearById: {};
  setGearById: Dispatch<SetStateAction<{}>>;
  selectedFilter: CategoryKebabCase | undefined;
  setSelectedFilter: Dispatch<SetStateAction<CategoryKebabCase | undefined>>;
  openedIndex: number;
  setOpenedIndex: Dispatch<SetStateAction<number>>;
};

export const HikingGearContext = createContext<HikingGear>({
  gearById: {},
  setGearById: () => {},
  selectedFilter: undefined,
  setSelectedFilter: () => {},
  openedIndex: 0,
  setOpenedIndex: () => {},
});
