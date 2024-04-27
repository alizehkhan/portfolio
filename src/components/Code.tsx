/* eslint-disable jsx-a11y/no-static-element-interactions */

import {
	transformerNotationDiff,
	transformerNotationHighlight,
} from '@shikijs/transformers'
import { useState } from 'react'
import { codeToHtml } from 'shiki'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Code = ({ children }: { children: any }) => {
	const code: string = children?.props.children
	const language: string = children?.props.className.match(/language-(.+)/)[1]

	// const [isCopied, setIsCopied] = useState(false)
	// const [isHovered, setIsHovered] = useState(false)

	const [html, setHtml] = useState('')

	codeToHtml(code, {
		lang: language,
		theme: 'poimandres',
		transformers: [transformerNotationDiff(), transformerNotationHighlight()],
	}).then(setHtml)

	// const copyToClipboard = (code: string) => {
	// 	navigator?.clipboard?.writeText(code).then(() => {
	// 		setIsCopied(true)
	// 		setTimeout(() => setIsCopied(false), 500)
	// 	})
	// }

	return <div className="mt-5" dangerouslySetInnerHTML={{ __html: html }}></div>
}
