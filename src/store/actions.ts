import { CategoryKebabCase } from '../types'

import {
  DECREMENT_OPENED_INDEX,
  INCREMENT_OPENED_INDEX,
  SET_HIKING_GEAR,
  SET_OPENED_INDEX,
  SET_SELECTED_FILTER,
} from './constants'

export const setSelectedFilter = (selectedFilter: CategoryKebabCase) => ({
  type: SET_SELECTED_FILTER,
  payload: selectedFilter,
})

export const setHikingGear = (data: Record<number, any>) => ({
  type: SET_HIKING_GEAR,
  payload: data,
})

export const incrementOpenedIndex = (index: number) => ({
  type: INCREMENT_OPENED_INDEX,
  payload: index,
})

export const decrementOpenedIndex = (index: number) => ({
  type: DECREMENT_OPENED_INDEX,
  payload: index,
})

export const setOpenedIndex = (index: number) => ({
  type: SET_OPENED_INDEX,
  payload: index,
})
