import { Dispatch, SetStateAction, createContext } from 'react'

import { CategoryKebabCase } from './types'

type HikingGear = {
  gearById: object
  setGearById: Dispatch<SetStateAction<object>>
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
