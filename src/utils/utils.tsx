import {
	differenceInMonths,
	format,
	formatDistanceToNow,
	isThisYear,
	isToday,
	isYesterday,
} from 'date-fns'

export const getKebabCase = (word: string) =>
	word.toLowerCase().replaceAll(' ', '-')

export function showDate(date: Date) {
	if (isToday(date)) return 'Today'
	if (isYesterday(date)) return 'Yesterday'

	if (differenceInMonths(new Date(), date) < 1) {
		return formatDistanceToNow(date, { addSuffix: true })
	}

	if (isThisYear(date)) {
		return format(date, 'MMM d')
	}

	return format(date, 'MMM d, yyyy')
}
