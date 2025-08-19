import { Helmet } from 'react-helmet-async'

export const Altamiga = () => {
	return (
		<>
			<Helmet>
				<title>Altamiga | Alizeh Khan</title>
			</Helmet>

			<div className="max-w-[60ch] text-xl leading-normal">
				<h1 className="mb-4 font-serif text-5xl font-bold md:text-7xl">
					Altamiga
				</h1>

				<p className="text-neutral-700/80">
					Building the future of hut-to-hut hiking
				</p>

				<h2 className="mt-12 text-2xl font-bold md:text-4xl">
					The first booking platform for mountain huts
				</h2>
				<p className="mt-4">
					Hikers can pick a popular multi-day hike in Europe and book all the
					mountain huts for their trip in one place.
				</p>
				<img src="/assets/altamiga.png" alt="" />

				<h2 className="mt-12 text-2xl font-bold md:text-4xl">
					A property management system designed for mountain huts
				</h2>
				<p className="mt-6">
					Mountain huts use our tailored booking management tool to help them
					easily manage rooms, rates, guest operations, and join their
					hut-to-hut booking network.
				</p>
				<hr className="my-8 border-t border-neutral-300" />
				<p className="mt-4 text-base">
					We’d love to connect with investors who share our passion for travel
					and hospitality. If that’s you, feel free to reach out:{' '}
					<strong>alizeh@altamiga.com</strong>. We're really excited about
					changing the future of hut-to-hut hiking.
				</p>

				{/* <p className="mt-5">
					If you are a scale up or startup based in Germany or the US in need of
					a Frontend Engineer that's specialised in design systems and
					accessibility, please reach out.
				</p> */}

				{/* <p className="mt-5">
					If you are a therapist, facilitator, coach in the conscious community,
					space in need of a killer website, please reach out. I like to take on
					freelance projects I feel passionate about when I have the capacity.
				</p> */}
			</div>
		</>
	)
}
