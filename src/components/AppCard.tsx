import { Link } from 'react-router-dom'

export const AppCard = ({
	image,
	name,
	link,
}: {
	image: string
	name: string
	link?: string
}) => {
	return (
		<Link
			to={link ?? '#'}
			className="mt-3 -mb-2 flex w-fit items-center gap-3 rounded-md bg-white p-2 shadow-xs"
		>
			<img className="h-10 w-10 rounded-md object-cover" src={image} alt="" />
			<p className="text-md font-serif">{name}</p>
		</Link>
	)
}
