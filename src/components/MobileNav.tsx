import { Dispatch, SetStateAction, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { LINKS } from '../content/links'

export const MobileNav = ({
	isMobileNavOpen,
	setIsMobileNavOpen,
}: {
	isMobileNavOpen: boolean
	setIsMobileNavOpen: Dispatch<SetStateAction<boolean>>
}) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'visible'
		}
	}, [])

	return (
		<nav>
			<ul
				hidden={!isMobileNavOpen}
				id="primary-menu"
				className="ml-8 flex flex-col items-start gap-6 text-2xl"
			>
				{LINKS.map((link, i) => (
					<li key={i}>
						<NavLink to={link.to} onClick={() => setIsMobileNavOpen(false)}>
							{link.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
