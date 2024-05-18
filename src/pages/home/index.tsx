import { Helmet } from 'react-helmet-async'

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>Alizeh Khan | Design Engineer</title>
			</Helmet>

			<div className="text-2xl">
				<h1 className="font-serif text-5xl font-bold md:text-7xl mb-6">
					Hey 🤙🏼
				</h1>
				<p className="text-2xl max-w-[700px] leading-normal">
					I'm Alizeh. I'm a Frontend Engineer and Designer. I build and advocate
					for web experiences that prioritise content, inclusivity and
					simplicity.
				</p>
				<img
					src="/assets/alizeh.jpg"
					className="mt-8 mb-10 max-w-[700px] w-full rounded-lg"
					alt="A selfie of Alizeh in her hiking gear in the Alps"
				/>
			</div>
		</>
	)
}
