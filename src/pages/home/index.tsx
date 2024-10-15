import { Helmet } from "react-helmet-async"

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>Alizeh Khan | Design Engineer</title>
			</Helmet>

			<div className="max-w-[640px] text-2xl">
				<h1 className="mb-6 font-serif text-5xl font-bold leading-tight">
					👋🏼 I'm Alizeh, a Frontend Engineer and Designer.
				</h1>
				<div className="max-w-[600px]">
					<p className="mb-6 text-2xl">
						I build and advocate for web experiences that prioritise content,
						inclusivity and simplicity.
					</p>
					<p className="inline">
						Nerdy about design systems, accessibility and form UX. Code in{" "}
					</p>
					<div className="inline-flex gap-1">
						{["react", "typescript", "css", "html"].map((tag) => (
							<span
								key={tag}
								className="w-fit rounded border-2 border-neutral-300 bg-white px-1 font-mono text-lg text-red-700"
							>
								{tag}
							</span>
						))}
					</div>
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
