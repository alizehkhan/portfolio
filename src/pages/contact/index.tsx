import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact | Alizeh Khan</title>
			</Helmet>

			<div className="text-xl leading-normal max-w-[60ch]">
				<h1 className="md:text-7xl text-5xl font-serif mb-16 font-bold">
					Contact
				</h1>
				<p className="mt-5">
					Let's talk. You can reach me on{' '}
					<Link
						className="underline"
						to="https://www.linkedin.com/in/alizehedinburgh/"
					>
						LinkedIn
					</Link>
				</p>
				<p className="mt-5">
					If you are a scale up or startup based in Germany or the US in need of
					a Frontend Engineer that's specialised in design systems and
					accessibility, please reach out.
				</p>
				<p className="mt-5">
					If you are a Venture Capitalist interested in{' '}
					<Link className="underline" to="https://wanderntrails.com">
						Wandern
					</Link>
					, the first trail-centric booking platform for hikers, please reach
					out.
				</p>
				{/* <p className="mt-5">
					If you are a therapist, facilitator, coach in the conscious community,
					space in need of a killer website, please reach out. I like to take on
					freelance projects I feel passionate about when I have the capacity.
				</p> */}
			</div>
		</>
	)
}
