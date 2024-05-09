import { useMediaQuery } from 'react-responsive'
import { Link, NavLink } from 'react-router-dom'

import { LINKS } from '../content/links'

import MobileHeader from './MobileHeader'

export const Header = () => {
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 880px)' })

	return isTabletOrDesktop ? (
		<header className="container my-8 flex items-center justify-between">
			<Link className="font-serif font-bold text-2xl hover:no-underline" to="/">
				Alizeh Khan
			</Link>
			<nav>
				<ul className="flex items-center gap-6 text-lg">
					{LINKS.map((link, index) => (
						<li key={index}>
							<NavLink to={link.to}>{link.name}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	) : (
		<MobileHeader />
	)
}
