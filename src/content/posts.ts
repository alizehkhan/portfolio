import { Post } from '../types';

export const POSTS: Post[] = [
  {
    title: 'My hiking gear',
    description:
      'An evergreen and interactive blog of my solo long-distance hiking gear.',
    link: '/blog/hiking-gear',
    image: './illustrations/tent.svg',
  },
  {
    title: "Beginner's frontend setup guide for MacOS",
    description:
      'A minimalist setup guide to understand the basic utilities and config files in frontend development so you can start to build your own dotfiles repository.',
    image: './illustrations/frontend-setup.svg',
    link: '/blog/frontend-setup',
  },
  {
    title: 'My ruthlessly simple email setup',
    description:
      'If you are into high maintenance productivity systems like bullet journaling, look away!',
    image: './illustrations/email.svg',
    link: '/blog/email-setup',
  },
];
