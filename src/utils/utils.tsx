import { CategoryKebabCase, GearById } from './types';

export const getKebabCase = (word: string) =>
  word.toLowerCase().replaceAll(' ', '-');

export const getFilterdHikingGear = (
  gearById: GearById,
  filterSelected?: CategoryKebabCase
) => {
  return filterSelected
    ? Object.values(gearById).filter(
        (gear) => getKebabCase(gear.Category) === filterSelected
      )
    : Object.values(gearById);
};
