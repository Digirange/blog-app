import { Box, Text } from '@chakra-ui/react'

const HeadPost = ({ data }) => {
  return (
    <Box>
      <Box>
        <Text fontWeight='bold'>{data.title}</Text>
          </Box>
          <Box>
              <Text>
                  { data.description }
              </Text>
              <Text>
                  { data.date }
              </Text>
              <Text>
                  { data.readTime + ' min read' }
              </Text>
          </Box>
    </Box>
  )
}

export default HeadPost
