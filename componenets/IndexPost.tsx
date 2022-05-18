import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import HeadPost from './HeadPost'

const IndexPost = ({ data }) => {
  return (
    <Box>
      <article>
        <HeadPost data={data} />
        <Link href={'/blog' + data.root + data.url}>
          <a>Read more... </a>
        </Link>
      </article>
    </Box>
  )
}

export default IndexPost