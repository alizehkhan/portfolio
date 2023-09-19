import { Helmet } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

import { components } from '../../components/MDXComponents'

import EmailSetup from './email-setup.mdx'
import FrontendSetup from './frontend-setup.mdx'
import List from './List'
import HikingGear from './hiking-gear'
import AutomatedTesting from './automated-testing.mdx'
import ManualTesting from './manual-testing.mdx'
import PlanHike from './plan-hike.mdx'
import TrailFood from './trail-food.mdx'
import Minimalism from './minimalism.mdx'
import Uses from './uses.mdx'
import Eslint from './eslint.mdx'

const Blog = () => {
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
        <Route path="uses/" element={<Uses components={components} />} />
        <Route path="eslint/" element={<Eslint components={components} />} />
      </Routes>
    </>
  )
}

export default Blog
