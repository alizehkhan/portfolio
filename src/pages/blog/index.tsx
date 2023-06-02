import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';

import { components } from '../../components/MDXComponents';

import EmailSetup from './email-setup.mdx';
import FrontendSetup from './frontend-setup.mdx';
import List from './List';
import HikingGear from './hiking-gear';

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
      </Routes>
    </>
  );
};

export default Blog;
