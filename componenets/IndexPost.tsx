import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import HeadPost from './HeadPost'

const IndexPost = ({ data }) => {
  return (
    <Box paddingBottom='20px'>
      <article>
        <HeadPost data={data} />
        <Link href={'/blogs' + data.root + data.url}>
          <a>Read more... </a>
        </Link>
      </article>
    </Box>
  )
}

export default IndexPost