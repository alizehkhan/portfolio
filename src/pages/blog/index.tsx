import { Helmet } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

import { components } from '../../components/MDXComponents'

import AutomatedTesting from './automated-testing.mdx'
import Checkbox from './checkbox.mdx'
import EmailSetup from './email-setup.mdx'
import Eslint from './eslint.mdx'
import Feedback from './feedback.mdx'
import FrontendSetup from './frontend-setup.mdx'
import { HikingGear } from './hiking-gear'
import List from './List'
import ManualTesting from './manual-testing.mdx'
import Minimalism from './minimalism.mdx'
import PlanHike from './plan-hike.mdx'
import TrailFood from './trail-food.mdx'
import Uses from './uses.mdx'

export const Blog = () => {
	return (
		<>
			<Helmet>
				<title>Blog | Alizeh Khan</title>
			</Helmet>
			<Routes>
				<Route index element={<List />} />
				<Route path="hiking-gear/*" element={<HikingGear />} />
				<Route
					path="email-setup/"
					element={<EmailSetup components={components} />}
				/>
				<Route
					path="frontend-setup/"
					element={<FrontendSetup components={components} />}
				/>
				<Route
					path="automated-accessibility-testing/"
					element={<AutomatedTesting components={components} />}
				/>
				<Route
					path="manual-accessibility-testing/"
					element={<ManualTesting components={components} />}
				/>
				<Route
					path="plan-hike/"
					element={<PlanHike components={components} />}
				/>
				<Route
					path="trail-food/"
					element={<TrailFood components={components} />}
				/>
				<Route
					path="minimalism/"
					element={<Minimalism components={components} />}
				/>
				<Route
					path="checkbox/"
					element={<Checkbox components={components} />}
				/>
				<Route
					path="design-system-feedback/"
					element={<Feedback components={components} />}
				/>
				<Route path="uses/" element={<Uses components={components} />} />
				<Route path="eslint/" element={<Eslint components={components} />} />
			</Routes>
		</>
	)
}
