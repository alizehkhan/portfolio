import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';

import { components } from '../../components/MDXComponents';

import List from './List';
import Wandern from './wandern.mdx';
import Portfolio from './portfolio.mdx';
import Splitify from './splitify.mdx';
import Haneen from './haneen.mdx';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Alizeh Khan</title>
      </Helmet>
      <Routes>
        <Route index element={<List />} />
        <Route path="/wandern" element={<Wandern components={components} />} />
        <Route
          path="/portfolio"
          element={<Portfolio components={components} />}
        />
        <Route
          path="/splitify"
          element={<Splitify components={components} />}
        />
        <Route path="/haneen" element={<Haneen components={components} />} />
      </Routes>
    </>
  );
};

export default Projects;
