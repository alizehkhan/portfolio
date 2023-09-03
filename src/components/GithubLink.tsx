import { IconArrowRight } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const GithubLink = ({ link }: { link: string }) => {
  return (
    <Link
      to={link}
      target="_blank"
      className="mt-4 flex w-fit items-center gap-2 rounded-md  bg-grey-200 px-2 py-1 text-xl"
    >
      Source code
      <IconArrowRight size={20} />
    </Link>
  )
}

export default GithubLink
