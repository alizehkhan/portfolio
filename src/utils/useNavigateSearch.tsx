import type { URLSearchParamsInit } from 'react-router-dom'
import { createSearchParams, useNavigate } from 'react-router-dom'

export const useNavigateSearch = () => {
	const navigate = useNavigate()
	return (pathname: string, params: URLSearchParamsInit | undefined) =>
		navigate({ pathname, search: `?${createSearchParams(params)}` })
}
