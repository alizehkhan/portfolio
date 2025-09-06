import { Label, Post } from '../utils/types'

export const POSTS: Post[] = [
	{
		title: 'Component API design principles',
		description:
			'Component APIs are the interface between the design system and its consumers. A well-designed API should be intuitive, predictable, and flexible.',
		image: './illustrations/api.svg',
		link: '/frontend-design/api-design',
		labels: ['frontend', 'design-systems'],
		date: new Date(2025, 7, 30),
	},
	{
		title: 'What is a tooltip and how to use it accessibly',
		description:
			'Tooltips, popovers, modals, dialogs... What is the semantic difference in all these pop up thingies. Lets start with the tooltip.',
		image: './illustrations/tooltip.svg',
		link: '/frontend-design/tooltips',
		labels: ['frontend', 'accessibility'],
		date: new Date(2025, 6, 30),
	},
	{
		title: "Beginner's frontend setup guide for MacOS",
		description:
			'Learn about the basic tools and config files to set up your device for frontend development and how to build your own dotfiles repository.',
		image: './illustrations/frontend-setup.svg',
		link: '/frontend-design/frontend-setup',
		labels: ['frontend'],
		date: new Date(2023, 0, 5),
	},
	{
		title: 'Automated accessibility testing',
		description:
			'How I leverage tooling and automated tests in my workflow to help build accessible experiences efficiently.',
		image: './illustrations/automated.svg',
		link: '/frontend-design/automated-accessibility-testing',
		labels: ['frontend', 'accessibility'],
		date: new Date(2023, 5, 11),
	},
	{
		title: 'Manual accessibility testing',
		description:
			'Manual checks I do using the keyboard, screen reader and accessibility tree to test my website for accessibility.',
		image: './illustrations/manual.svg',
		link: '/frontend-design/manual-accessibility-testing',
		labels: ['frontend', 'accessibility'],
		date: new Date(2023, 8, 3),
	},
	{
		title: 'My linting and formatting config',
		description:
			"There isn't much customisation when it comes to my ESLint and Prettier config. I try to stick to the recommended standard for an accessible TypeScript React app.",
		image: './illustrations/eslint.svg',
		link: '/frontend-design/linting-formatting',
		labels: ['frontend'],
		date: new Date(2023, 8, 16),
	},
	{
		title: 'Accessible Checkbox',
		description:
			'A step by step guide to building an accessible React checkbox and checkbox group component that follows best practice component API design.',
		image: './illustrations/checkbox.svg',
		link: '/frontend-design/checkbox',
		labels: ['frontend', 'accessibility'],
		date: new Date(2024, 4, 1),
	},
	{
		title: 'How to get instant feedback on your design system',
		description:
			'Free, unfiltered, instant, quantitative and qualitative feedback without surveys or workshops...',
		image: './illustrations/feedback.svg',
		link: '/frontend-design/design-system-feedback',
		labels: ['frontend', 'design', 'design-systems'],
		date: new Date(2024, 4, 8),
	},
	{
		title: '“It clutters up the UI”',
		description:
			'What happens when designers are focused on reducing “clutter” and making things look “minimalist”?',
		image: './illustrations/designer.svg',
		link: '/frontend-design/declutter-ui',
		labels: ['design'],
		date: new Date(2024, 4, 18),
	},
]

export const labels: Label[] = [
	'frontend',
	'design',
	'accessibility',
	'design-systems',
]
