import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { About } from './pages/about'
import { Blog } from './pages/blog'
import { Projects } from './pages/projects'
import { ScrollToTop } from './utils/ScrollToTop'

import './stylesheets/index.css'

const App = () => {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<ScrollToTop />
				<Header />
				<main className="mb-16">
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/projects/*" element={<Projects />} />
						<Route path="/blog/*" element={<Blog />} />
					</Routes>
				</main>
			</BrowserRouter>
		</HelmetProvider>
	)
}

export default App
