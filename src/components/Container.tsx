import { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
	return <div className="max-w-[90ch] w-[90%] mx-auto">{children}</div>
}
