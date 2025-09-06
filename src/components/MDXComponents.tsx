import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import { Code } from './Code'

export const components = {
	h1: ({ children }: { children?: ReactNode }) => (
		<h1 className="mb-10 max-w-[850px] font-serif text-5xl leading-[1.2] font-bold text-neutral-700 md:text-7xl md:leading-[1.2]">
			{children}
		</h1>
	),
	h2: ({ children }: { children?: ReactNode }) => (
		<h2 className="mt-12 font-serif text-2xl leading-[1.2] font-bold text-neutral-700 md:text-4xl">
			{children}
		</h2>
	),
	h3: ({ children }: { children?: ReactNode }) => (
		<h3 className="mt-8 font-serif text-lg font-bold text-neutral-700 md:text-xl">
			{children}
		</h3>
	),
	p: ({ children }: { children?: ReactNode }) => (
		<p className="my-4 font-sans text-xl leading-normal text-neutral-700">
			{children}
		</p>
	),
	a: ({
		children,
		href,
	}: DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	>) => (
		<a
			href={href}
			className="my-4 font-sans text-xl leading-normal text-neutral-700 underline underline-offset-[3px]"
		>
			{children}
		</a>
	),
	li: ({ children }: { children?: ReactNode }) => (
		<li className="font-sans text-xl leading-normal text-neutral-700">
			{children}
		</li>
	),
	ul: ({ children }: { children?: ReactNode }) => (
		<ul className="list-disc pl-10">{children}</ul>
	),
	ol: ({ children }: { children?: ReactNode }) => (
		<ul className="list-decimal pl-10">{children}</ul>
	),
	code: ({ children }: { children?: ReactNode }) => (
		<code className="bg-grey-100 border-grey-300 rounded-md border px-1 py-0.5 font-mono text-sm text-red-700">
			{children}
		</code>
	),
	pre: ({ children }: { children?: ReactNode }) => <Code>{children}</Code>,
	hr: () => <hr className="mt-10 border-neutral-300" />,
}
