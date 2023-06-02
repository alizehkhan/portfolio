import { To } from 'react-router-dom';

export type CategoryKebabCase =
  | 'on-the-trail'
  | 'sleep'
  | 'cook'
  | 'clothing'
  | 'personal-care'
  | 'valuables'
  | undefined;

export type GearById = Record<number, GearItem>;

export type GearItem = {
  Brand: string;
  Category: string;
  Name: string;
  Notes: string;
  Order: number;
  Photo: Array<Record<string, any>>;
  Price: number;
  Product: string;
  Weight: number;
  id: string;
};

export type Post = {
  title: string;
  description: string;
  link: To;
  image: string;
};

export type Project = {
  title: string;
  description: string;
  link: To;
  image: string;
};
