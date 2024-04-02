import { Helmet } from 'react-helmet-async'

export const About = () => {
	const TAGS = [
		'react',
		'typescript',
		'css',
		'accessibility',
		'design systems',
		'form ux',
		'hiking',
		'crossfit',
		'minimalism',
		'improv',
	]
	return (
		<>
			<Helmet>
				<title>Alizeh Khan | Design Engineer</title>
			</Helmet>
			<div className="container">
				<h1 className="font-serif mt-16 md:mt-24 text-6xl mb-6 md:text-9xl leading-normal lg:leading-snug">
					Hiya, I&apos;m Alizeh 🤙🏼
				</h1>
				<div className="md:my-12 my-8 flex flex-wrap text-xl md:text-4xl gap-2 md:gap-4 font-mono">
					{TAGS.map((tag, i) => (
						<span
							key={i}
							className="bg-grey-200 text-neutral-700 rounded-md p-1"
						>
							{tag}
						</span>
					))}
				</div>
				<p className="opacity-80 text-xl leading-normal lg:text-3xl lg:leading-snug">
					I strive to simplify and humanise the web.
				</p>

				{/* <Link
            to="https://calendly.com/alizeh/website-consultation"
            target="_blank"
            className="block w-fit rounded-md border-2 border-neutral-700 px-3 py-2 text-lg text-neutral-700 hover:bg-neutral-300"
            rel="noreferrer"
            >
            Get in touch
          </Link> */}
			</div>
		</>
	)
}
