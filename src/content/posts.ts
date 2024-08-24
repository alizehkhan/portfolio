import { Label, Post } from '../utils/types'

export const POSTS: Post[] = [
	{
		title: 'My hiking gear',
		description:
			'Guidance and list of my solo long-distance hiking gear which I religiously keep up to date. Everything from tent to toilet paper.',
		link: '/blog/hiking-gear',
		image: './illustrations/tent.svg',
		labels: ['hiking'],
		date: new Date(2024, 5, 2),
	},
	{
		title: 'Trail food',
		description:
			'A breakdown of the food I tend to eat on trail and what I think about when resupplying on a long distance hike.',
		link: '/blog/trail-food',
		image: './illustrations/food.svg',
		labels: ['hiking'],
		date: new Date(2024, 2, 2),
	},
	{
		title: 'How I plan a hike',
		description:
			'Planning a long distance hike can appear intimidating but its a very structured process! Here is the checklist I follow when planning a hike.',
		link: '/blog/plan-hike',
		image: './illustrations/plan-hike.svg',
		labels: ['hiking'],
		date: new Date(2023, 6, 20),
	},
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
		title: 'My ruthlessly simple email setup',
		description:
			'If you are into high maintenance productivity systems like bullet journalling, look away! Here is my dead simple approach to managing emails.',
		image: './illustrations/email.svg',
		link: '/blog/email-setup',
		labels: ['minimalism'],
		date: new Date(2023, 1, 16),
	},
	{
		title: 'Minimalism helped me unlearn',
		description:
			'A lot of people think minimalism is focused on the number of things you own and picture it in its most extreme form. Lets debunk some myths.',
		image: './illustrations/minimalism.svg',
		link: '/blog/minimalism',
		labels: ['minimalism'],
		date: new Date(2023, 6, 24),
	},
	{
		title: 'My list of apps, extensions, configs etc.',
		description:
			"I enjoy reading other people's lists so I thought I'd share my own. I will try to keep this up to date.",
		image: './illustrations/uses.svg',
		link: '/blog/uses',
		labels: ['minimalism', 'frontend', 'design'],
		date: new Date(2023, 7, 31),
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

export const labels: Label[] = [
	'frontend',
	'design',
	'accessibility',
	'hiking',
	'minimalism',
]
