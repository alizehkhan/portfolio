import { format } from 'date-fns'

import { showDate } from '../utils/utils'

export const Date = ({ date }: { date: Date }) => {
	return (
		<p
			title={`${format(date, 'MMM d, yyyy')}`}
			className="my-2 text-md opacity-90"
		>
			{showDate(date)}
		</p>
	)
}
