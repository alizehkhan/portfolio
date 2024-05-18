import { Helmet } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

import { components } from '../../components/MDXComponents'

import AutomatedTesting from './automated-testing.mdx'
import Checkbox from './checkbox.mdx'
import DeclutterUi from './declutter-ui.mdx'
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

const routes = [
	{ path: 'hiking-gear/*', component: HikingGear },
	{ path: 'email-setup/', component: EmailSetup },
	{ path: 'frontend-setup/', component: FrontendSetup },
	{ path: 'automated-accessibility-testing/', component: AutomatedTesting },
	{ path: 'manual-accessibility-testing/', component: ManualTesting },
	{ path: 'plan-hike/', component: PlanHike },
	{ path: 'trail-food/', component: TrailFood },
	{ path: 'minimalism/', component: Minimalism },
	{ path: 'checkbox/', component: Checkbox },
	{ path: 'design-system-feedback/', component: Feedback },
	{ path: 'declutter-ui/', component: DeclutterUi },
	{ path: 'uses/', component: Uses },
	{ path: 'eslint/', component: Eslint },
]

export const Blog = () => {
	return (
		<>
			<Helmet>
				<title>Blog | Alizeh Khan</title>
			</Helmet>
			<Routes>
				{routes.map(({ path, component: Component }) => (
					<Route
						key={path}
						path={path}
						element={<Component components={components} />}
					/>
				))}
				<Route index element={<List />} />
			</Routes>
		</>
	)
}
