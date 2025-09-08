import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { FrontendDesign } from './frontend-design/FrontendDesign'
import { Hiking } from './hiking/Hiking'
import { Home } from './Home'
import { Footer } from './layout/Footer'
import { Minimalism } from './minimalism/Minimalism'
import { Thoughts } from './thoughts/Thoughts'
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
							<Route path="/frontend-design/*" element={<FrontendDesign />} />
							<Route path="/minimalism/*" element={<Minimalism />} />
							<Route path="/hiking/*" element={<Hiking />} />
							<Route path="/thoughts" element={<Thoughts />} />
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
