import { Post } from '../utils/types';

export const POSTS: Post[] = [
  {
    title: 'My hiking gear',
    description:
      'An evergreen and filterable blog of my solo long-distance hiking gear.',
    link: '/blog/hiking-gear',
    image: './illustrations/tent.svg',
    labels: ['#hiking'],
  },
  {
    title: 'How I plan a hike',
    description:
      'Planning a long distance hike can appear intimidating but its a very structured process! Here is the checklist I follow when planning a hike.',
    link: '/blog/plan-hike',
    image: './illustrations/plan-hike.svg',
    labels: ['#hiking'],
  },
  {
    title: "Beginner's frontend setup guide for MacOS",
    description:
      'Learn about the basic tools and config files to set up your device for frontend development and how to build your own dotfiles repository.',
    image: './illustrations/frontend-setup.svg',
    link: '/blog/frontend-setup',
    labels: ['#frontend'],
  },
  {
    title: 'My ruthlessly simple email setup',
    description:
      'If you are into high maintenance productivity systems like bullet journalling, look away! Here is my dead simple approach to managing emails.',
    image: './illustrations/email.svg',
    link: '/blog/email-setup',
    labels: ['#minimalism'],
  },
  {
    title: 'Minimalism taught me to unlearn',
    description:
      'A lot of people think minimalism is focused on the number of things you own and picture it in its most extreme form. Lets debunk some myths.',
    image: './illustrations/minimalism.svg',
    link: '/blog/minimalism',
    labels: ['#minimalism'],
  },
  {
    title: 'Automated accessibility testing',
    description:
      'How I leverage tooling and automated tests in my workflow to help build accessible experiences efficiently.',
    image: './illustrations/automated.svg',
    link: '/blog/automated-accessibility-testing',
    labels: ['#frontend', '#accessibility'],
  },
  {
    title: 'Manual accessibility testing',
    description:
      'Manual checks I do using the keyboard and screen reader to test my website for accessibility.',
    image: './illustrations/manual.svg',
    link: '/blog/manual-accessibility-testing',
    labels: ['#frontend', '#accessibility'],
  },
];
