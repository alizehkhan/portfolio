import './stylesheets/index.css'

import { Analytics } from '@vercel/analytics/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Blog } from './pages/blog'
import { Contact } from './pages/contact'
import { Home } from './pages/home'
import { Projects } from './pages/projects'
import { ScrollToTop } from './utils/ScrollToTop'

const App = () => {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<ScrollToTop />
				<Header />
				<main className="container mx-auto my-16">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/blog/*" element={<Blog />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				<Footer />
				<Analytics />
			</BrowserRouter>
		</HelmetProvider>
	)
}

export default App
