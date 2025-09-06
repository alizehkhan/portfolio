import { Helmet } from 'react-helmet-async'

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>Alizeh Khan | Design Engineer</title>
			</Helmet>

			<div className="max-w-[640px] text-2xl">
				<h1 className="mb-6 font-serif text-2xl leading-tight font-bold md:text-4xl">
					👋🏼 I'm Alizeh
				</h1>
				<div className="max-w-[600px]">
					<p className="mb-6 text-2xl">
						I build and advocate for web experiences that prioritise content,
						inclusivity and simplicity. I specialise in design systems,
						accessibility and form UX.
					</p>
					<p className="mb-6 text-2xl">
						I am the co-founder of{' '}
						<a
							className="font-serif font-bold hover:underline"
							href="https://www.altamiga.com/hut"
						>
							Altamiga
						</a>
					</p>
				</div>

				<img
					src="/assets/alizeh.jpg"
					className="my-8 w-full rounded-lg"
					alt="A selfie of Alizeh in her hiking gear in the Alps"
				/>
			</div>
		</>
	)
}
