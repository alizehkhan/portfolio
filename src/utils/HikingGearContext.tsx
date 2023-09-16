import { Dispatch, SetStateAction, createContext } from 'react'

import { CategoryKebabCase, GearItem } from './types'

type HikingGear = {
  gearById: Record<number, GearItem>
  setGearById: Dispatch<SetStateAction<Record<number, GearItem>>>
  selectedFilter: CategoryKebabCase | undefined
  setSelectedFilter: Dispatch<SetStateAction<CategoryKebabCase | undefined>>
  openedIndex: number
  setOpenedIndex: Dispatch<SetStateAction<number>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const HikingGearContext = createContext<HikingGear>({
  gearById: {},
  setGearById: () => {},
  selectedFilter: undefined,
  setSelectedFilter: () => {},
  openedIndex: 0,
  setOpenedIndex: () => {},
  isLoading: true,
  setIsLoading: () => {},
})
