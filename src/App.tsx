import './stylesheets/index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hiking } from './hiking/Hiking'
import { Blog } from './pages/blog'
import { Contact } from './pages/contact'
import { Home } from './pages/home'
import { ScrollToTop } from './utils/ScrollToTop'

const queryClient = new QueryClient()

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<BrowserRouter>
					<ScrollToTop />
					<Header />
					<main className="container mx-auto my-16">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/blog/*" element={<Blog />} />
							<Route path="/hiking/*" element={<Hiking />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</main>
					<Footer />
					<Analytics />
				</BrowserRouter>
			</HelmetProvider>
		</QueryClientProvider>
	)
}

export default App
