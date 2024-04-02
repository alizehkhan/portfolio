import { IconExternalLink } from '@tabler/icons-react'
import { useMediaQuery } from 'react-responsive'
import { Link, NavLink } from 'react-router-dom'

import { LINKS } from '../content/links'

import MobileHeader from './MobileHeader'

export const Header = () => {
	const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 880px)' })

	return isTabletOrDesktop ? (
		<header className="container my-8 flex items-center justify-between">
			<Link aria-label="Alizeh Khan" to="/">
				<img
					src="/assets/avatar.jpg"
					className="h-14 w-14 shrink-0 rounded-full border-[3px] border-solid border-white shadow-md object-contain"
					alt=""
				/>
			</Link>
			<nav>
				<ul className="flex items-center gap-6 text-lg">
					{LINKS.map((link, index) => (
						<li key={index}>
							<NavLink to={link.to}>{link.name}</NavLink>
						</li>
					))}
					<li>
						<a
							href="/Alizeh Khan.pdf"
							className="flex items-center justify-center gap-2 transition-all rounded-full hover:scale-105 hover:shadow-md bg-neutral-700 px-4 py-2 text-white no-underline hover:no-underline"
							target="_blank"
						>
							<IconExternalLink color="white" size={18} />
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</header>
	) : (
		<MobileHeader />
	)
}
