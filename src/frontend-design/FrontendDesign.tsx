import { Helmet } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

import { components } from '../components/MDXComponents'
import ApiDesign from './api-design.mdx'
import AutomatedTesting from './automated-testing.mdx'
import Checkbox from './checkbox.mdx'
import DeclutterUi from './declutter-ui.mdx'
import Eslint from './eslint.mdx'
import Feedback from './feedback.mdx'
import FrontendSetup from './frontend-setup.mdx'
import List from './List'
import ManualTesting from './manual-testing.mdx'
import Tooltips from './tooltips.mdx'

const routes = [
	{ path: 'frontend-setup/', component: FrontendSetup },
	{ path: 'automated-accessibility-testing/', component: AutomatedTesting },
	{ path: 'manual-accessibility-testing/', component: ManualTesting },
	{ path: 'checkbox/', component: Checkbox },
	{ path: 'design-system-feedback/', component: Feedback },
	{ path: 'declutter-ui/', component: DeclutterUi },
	{ path: 'linting-formatting/', component: Eslint },
	{ path: 'tooltips/', component: Tooltips },
	{ path: 'api-design/', component: ApiDesign },
]

export const FrontendDesign = () => {
	return (
		<>
			<Helmet>
				<title>Frontend & Design | Alizeh Khan</title>
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
