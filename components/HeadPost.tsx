import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const HeadPost = ({ data }: any) => {
  const greenColor = useColorModeValue('green.700', 'green.400')
  return (
    <Box>
      <Box>
        <Text fontWeight="bold">{data.title}</Text>
      </Box>
      <Box>
        <Text>{data.description}</Text>
        <Box>
          <Text>{data.date}</Text>
          <Text color={greenColor}>#{data.tag}</Text>
        </Box>

        <Text fontWeight="bold">{data.readTime + ' min read'}</Text>
      </Box>
    </Box>
  )
}

export default HeadPost
