import { Helmet } from 'react-helmet-async'

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>Alizeh Khan | Design Engineer</title>
			</Helmet>

			<div className="text-2xl leading-normal">
				<h1 className="font-serif font-bold text-7xl mb-4 leading-normal lg:leading-snug">
					Hey 🤙🏼
				</h1>
				<p className="text-2xl max-w-[700px]">
					I'm Alizeh. I'm a Design Engineer nerdy about design systems,
					accessibility and form UX.
				</p>
				<img
					src="/assets/alizeh.jpeg"
					className="max-w-[700px] mt-8 object-cover mb-10 rounded-lg"
					alt="A selfie of Alizeh in her hiking gear in the Alps"
				/>
				<div className="max-w-[50ch]"></div>
			</div>
		</>
	)
}
