/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      'neutral-100': '#f4f2ed',
      'neutral-300': '#dcd6cb',
      'neutral-500': '#928b80',
      'neutral-700': '#4e4d49',
      'grey-100': '#ECEAE5',
      'grey-200': '#E4E3DE',
      'grey-300': '#D6D5D0',
      'yellow-300': '#fdf6e2',
      'yellow-700': '#854714',
      'red-300': '#fcefe8',
      'red-700': '#811823',
      'blue-300': '#e2f4fe',
      'blue-700': '#1b437e',
      'green-300': '#ecf9e6',
      'green-700': '#2e6b34',
    },
    extend: {},
  },
  plugins: [],
};
