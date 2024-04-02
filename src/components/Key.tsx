import { ReactNode } from 'react'

export const Key = ({ children }: { children: ReactNode }) => {
	return (
		<span className="inline-block rounded-md bg-white px-2 font-mono text-lg text-neutral-700 shadow-key">
			{children}
		</span>
	)
}
