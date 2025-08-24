import { Label, Post } from '../utils/types'

export const POSTS: Post[] = [
	{
		title: "Beginner's frontend setup guide for MacOS",
		description:
			'Learn about the basic tools and config files to set up your device for frontend development and how to build your own dotfiles repository.',
		image: './illustrations/frontend-setup.svg',
		link: '/blog/frontend-setup',
		labels: ['frontend'],
		date: new Date(2023, 0, 5),
	},
	{
		title: 'Automated accessibility testing',
		description:
			'How I leverage tooling and automated tests in my workflow to help build accessible experiences efficiently.',
		image: './illustrations/automated.svg',
		link: '/blog/automated-accessibility-testing',
		labels: ['frontend', 'accessibility'],
		date: new Date(2023, 5, 11),
	},
	{
		title: 'Manual accessibility testing',
		description:
			'Manual checks I do using the keyboard, screen reader and accessibility tree to test my website for accessibility.',
		image: './illustrations/manual.svg',
		link: '/blog/manual-accessibility-testing',
		labels: ['frontend', 'accessibility'],
		date: new Date(2023, 8, 3),
	},
	{
		title: 'My linting and formatting config',
		description:
			"There isn't much customisation when it comes to my ESLint and Prettier config. I try to stick to the recommended standard for an accessible TypeScript React app.",
		image: './illustrations/eslint.svg',
		link: '/blog/linting-formatting',
		labels: ['frontend'],
		date: new Date(2023, 8, 16),
	},
	{
		title: 'Accessible Checkbox',
		description:
			'A step by step guide to building an accessible React checkbox and checkbox group component that follows best practice component API design.',
		image: './illustrations/checkbox.svg',
		link: '/blog/checkbox',
		labels: ['frontend', 'accessibility'],
		date: new Date(2024, 4, 1),
	},
	{
		title: 'How to get instant feedback on your design system',
		description:
			'Free, unfiltered, instant, quantitative and qualitative feedback without surveys or workshops...',
		image: './illustrations/feedback.svg',
		link: '/blog/design-system-feedback',
		labels: ['frontend', 'design'],
		date: new Date(2024, 4, 8),
	},
	{
		title: '“It clutters up the UI”',
		description:
			'What happens when designers are focused on reducing “clutter” and making things look “minimalist”?',
		image: './illustrations/designer.svg',
		link: '/blog/declutter-ui',
		labels: ['design'],
		date: new Date(2024, 4, 18),
	},
]

export const labels: Label[] = ['frontend', 'design', 'accessibility']
