import { Link } from 'react-router-dom'

export const Footer = () => (
	<footer className="container mx-auto block justify-between py-8 md:flex">
		<p className="font-serif text-2xl font-bold">🌳 Alizeh Khan</p>

		<div className="flex gap-4 text-lg">
			<Link to="https://linkedin.com/in/alizehkhan" className="block underline">
				LinkedIn
			</Link>
			<Link to="https://github.com/alizehkhan" className="block underline">
				Github
			</Link>
		</div>
	</footer>
)
