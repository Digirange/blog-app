import { Box, Link } from '@chakra-ui/react'
import HeadPost from './HeadPost'

const IndexPost = ({ data }) => {
  return (
    <Box paddingBottom="20px">
      <article>
        <HeadPost data={data} />
        <Link
          href={'/blogs' + data.root + data.url}
          _hover={{
            color: 'black',
          }}
          sx={{
            color: 'green',
          }}
        >
          Read More...
        </Link>
      </article>
    </Box>
  )
}

export default IndexPost
