import {
  format,
  isToday,
  isThisYear,
  differenceInDays,
  differenceInWeeks,
} from 'date-fns';

import { CategoryKebabCase, GearById } from './types';

export const getKebabCase = (word: string) =>
  word.toLowerCase().replaceAll(' ', '-');

export const getFilteredHikingGear = (
  gearById: GearById,
  filterSelected?: CategoryKebabCase
) => {
  return filterSelected
    ? Object.values(gearById).filter(
        (gear) => getKebabCase(gear.Category) === filterSelected
      )
    : Object.values(gearById);
};

export const showDate = (date: any) => {
  if (isToday(date)) {
    return 'Today';
  }

  if (differenceInWeeks(new Date(), date) < 2) {
    return `${differenceInDays(new Date(), date)} days ago`;
  }

  if (differenceInWeeks(new Date(), date) < 4) {
    return `${differenceInWeeks(new Date(), date)} weeks ago`;
  }

  if (isThisYear(date)) {
    return format(date, 'MMM d');
  }

  return format(date, 'MMM d, yyyy');
};
