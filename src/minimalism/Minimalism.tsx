import { Helmet } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

import { Article } from '../components/Article'
import { components } from '../components/MDXComponents'
import Email from './email-setup.mdx'
import Unlearn from './minimalism.mdx'

export const Minimalism = () => {
	return (
		<>
			<Helmet>
				<title>Minimalism | Alizeh Khan</title>
			</Helmet>

			{/* 
				{
		title: 'My list of apps, extensions, configs etc.',
		description:
			"I enjoy reading other people's lists so I thought I'd share my own. I will try to keep this up to date.",
		image: './illustrations/uses.svg',
		link: '/blog/uses',
		labels: ['minimalism', 'frontend', 'design'],
		date: new Date(2023, 7, 31),
	}, */}

			<Routes>
				<Route
					path="/"
					element={
						<>
							<h1 className="mb-4 font-serif text-5xl leading-tight font-bold text-neutral-700 md:text-7xl md:leading-tight">
								Minimalism
							</h1>
							<div className="max-w-[580px] divide-y divide-neutral-300">
								<Article
									path="email"
									title="My ruthlessly simple email setup"
									description="If you are into high maintenance productivity systems like bullet journalling, look away! Here is my dead simple approach to managing emails."
									image="./illustrations/email.svg"
								/>
								<Article
									path="unlearn"
									title="Minimalism helped me unlearn"
									description="A lot of people think minimalism is focused on the number of things you own and picture it in its most extreme form. Lets debunk some myths."
									image="./illustrations/minimalism.svg"
								/>
							</div>
						</>
					}
				/>
				<Route path="/email" element={<Email components={components} />} />
				<Route path="/unlearn" element={<Unlearn components={components} />} />
			</Routes>
		</>
	)
}
