import { IconBulb } from '@tabler/icons-react'
import { ReactNode } from 'react'

export const Banner = ({ children }: { children: ReactNode }) => {
	return (
		<div className="my-4 flex items-center gap-3 rounded-lg bg-green-300 px-4 py-2 text-base shadow-xs">
			<IconBulb color="#2e6b34" size={20} className="shrink-0" />
			<p className="text-green-700">{children}</p>
		</div>
	)
}
