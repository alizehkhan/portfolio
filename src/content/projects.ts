import { Project } from '../utils/types'

export const PROJECTS: Project[] = [
  {
    title: 'Co-founder of Wandern',
    description:
      'MVP of a trail centric booking platform for hikers that will allow them to easily line up their accommodation for popular multi-day hikes in Europe.',
    source: 'https://github.com/wanderntrails/frontend',
    live: 'https://wanderntrails.com',
    image: './assets/wandern.png',
    topics: [
      'create-react-app',
      'django',
      'mapbox-gl',
      'netlify',
      'fly.io',
      'styled-components',
      'styled-system',
      'react-router',
      'react-markdown',
      'react-helmet-async',
      'airtable-api',
      'tailwind',
      'react-aria-components',
    ],
  },
  {
    title: 'My portfolio',
    description: 'A home for my projects, public learnings and resume.',
    source: 'https://github.com/alizehkhan/portfolio',
    live: 'https://alizehkhan.com',
    image: './assets/portfolio.png',
    topics: [
      'vite',
      'netlify',
      'tailwind',
      'mdx',
      'framer-motion',
      'prismjs',
      'react-router',
      'react-markdown',
      'react-modal',
      'airtable-api',
      'react-helmet-async',
      'husky',
      'date-fns',
    ],
  },
  {
    title: 'Sign up flow',
    description:
      'Sign up flow for a fictional product, Sp/itify, using mock service worker',
    source: 'https://github.com/alizehkhan/sign-up',
    live: 'https://signup-flow.netlify.app',
    image: './assets/splitify.png',
    topics: [
      'vite',
      'netlify',
      'cypress',
      'jest',
      'testing-library',
      'css-modules',
      'swiper',
      'react-router',
      'react-helmet',
      'mock-service-worker',
      'tabler-icons',
      'react-error-boundary',
      'github-workflow',
    ],
  },
  {
    title: 'Communication trainer',
    description:
      'A single page website offering in-person and online communication workshops for corporations.',
    source: 'https://github.com/alizehkhan/communication-trainer',
    live: 'https://haneenkhan@netlify.app',
    image: './assets/haneen.png',
    topics: ['vite', 'netlify', 'tailwind', 'react-player'],
  },
]
