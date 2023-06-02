import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/about';
import Blog from './pages/blog';
import Projects from './pages/projects';

import './stylesheets/index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/blog/*" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
