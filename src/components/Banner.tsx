import { IconInfoCircle } from '@tabler/icons-react'
import { ReactNode } from 'react'

export const Banner = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex gap-4 items-center text-base bg-green-300 rounded-lg py-2 px-4 shadow-sm my-4">
			<IconInfoCircle color="#2e6b34" size={40} />
			<p className="text-green-700">{children}</p>
		</div>
	)
}
