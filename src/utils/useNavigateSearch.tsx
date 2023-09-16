import { createSearchParams, useNavigate } from 'react-router-dom'

const useNavigateSearch = () => {
  const navigate = useNavigate()
  return (pathname: string, params: object) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` })
}

export default useNavigateSearch
