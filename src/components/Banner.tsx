import { IconBulb } from '@tabler/icons-react'
import { ReactNode } from 'react'

export const Banner = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex gap-3 text-base items-center bg-green-300 rounded-lg py-2 px-4 shadow-sm my-4">
			<IconBulb color="#2e6b34" size={20} className="shrink-0" />
			<p className="text-green-700">{children}</p>
		</div>
	)
}
