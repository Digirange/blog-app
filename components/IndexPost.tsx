import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import HeadPost from './HeadPost'
import Link from 'next/link'



const IndexPost = ({ data }: any) => {
  const greenColor = useColorModeValue('green.700', 'green.400')
  return (
    <Box paddingBottom="20px">
      <article>
        <HeadPost data={data} />
        <Link href={'/blogs' + data.root + data.url}>
          <Text
            color={greenColor}
            _hover={{
              color: 'black',
              cursor: 'pointer',
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
