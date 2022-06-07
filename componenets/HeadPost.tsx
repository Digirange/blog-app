import { Box, Text } from '@chakra-ui/react'

const HeadPost = ({ data }) => {
  return (
    <Box>
      <Box>
        <Text fontWeight="bold">{data.title}</Text>
      </Box>
      <Box>
        <Text>{data.description}</Text>
        <Box>
          <Text>{data.date}</Text>
          <Text color='green.600'>#{data.tag}</Text>
        </Box>

        <Text fontWeight="bold">{data.readTime + ' min read'}</Text>
      </Box>
    </Box>
  )
}

export default HeadPost
