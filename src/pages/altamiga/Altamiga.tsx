import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export const Altamiga = () => {
	return (
		<>
			<Helmet>
				<title>Altamiga | Alizeh Khan</title>
			</Helmet>

			<div className="max-w-[60ch] text-xl leading-normal">
				<h1 className="mb-6 font-serif text-5xl font-bold md:text-7xl">
					Altamiga
				</h1>
				<p className="font-serif text-2xl">
					Building the future of hut-to-hut hiking
				</p>

				<img src="/assets/altamiga.png" alt="" />

				<p className="mt-5">
					If you interested in supporting{' '}
					<Link className="underline" to="https://altamiga.com">
						Altamiga
					</Link>
					, the first trail-centric booking platform for hikers, please reach
					out on <strong>alizeh@altamiga.com</strong>
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
