import { Box, Text } from '@chakra-ui/react'
import HeadPost from './HeadPost'
import Link from 'next/link'

const IndexPost = ({ data }) => {
  return (
    <Box paddingBottom="20px">
      <article>
        <HeadPost data={data} />
        <Link href={'/blogs' + data.root + data.url}>
          <Text color='green.600' _hover={{
            color: 'black',
            cursor: 'pointer'
          }}
          >
            Read More ...
         </Text>
        </Link>
      </article>
    </Box>
  )
}

export default IndexPost
