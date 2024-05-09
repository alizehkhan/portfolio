import { Helmet } from 'react-helmet-async'

export const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact | Alizeh Khan</title>
			</Helmet>

			<h1 className="md:text-7xl text-5xl font-serif mb-16 font-bold">
				Contact
			</h1>
			<div className="text-xl leading-normal max-w-[60ch]"></div>
		</>
	)
}
