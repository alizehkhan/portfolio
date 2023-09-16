import {
  format,
  isToday,
  isYesterday,
  isThisYear,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
} from 'date-fns'

import { CategoryKebabCase, GearById } from './types'

export const getKebabCase = (word: string) =>
  word.toLowerCase().replaceAll(' ', '-')

export const getFilteredHikingGear = (
  gearById: GearById,
  filterSelected?: CategoryKebabCase
) => {
  return filterSelected
    ? Object.values(gearById).filter(
        (gear) => getKebabCase(gear.Category) === filterSelected
      )
    : Object.values(gearById)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const showDate = (date: any) => {
  if (isToday(date)) {
    return 'Today'
  }

  if (isYesterday(date)) {
    return 'Yesterday'
  }

  if (differenceInWeeks(new Date(), date) < 2) {
    return `${differenceInDays(new Date(), date)} days ago`
  }

  if (differenceInMonths(new Date(), date) < 1) {
    return `${differenceInWeeks(new Date(), date)} weeks ago`
  }

  if (differenceInMonths(new Date(), date) < 2) {
    return 'A month ago'
  }

  if (differenceInMonths(new Date(), date) < 4) {
    return `${differenceInMonths(new Date(), date)} months ago`
  }

  if (isThisYear(date)) {
    return format(date, 'MMM d')
  }

  return format(date, 'MMM d, yyyy')
}
