import { Box, Text } from '@chakra-ui/react'
import Footer from '../../../componenets/footer'
import Nav from '../../../componenets/navbar'

const DevBlogIndex = () => {
  return (
    <Box>
      <Nav />
      <Box>
        <Text>This is the index page of the dev category</Text>
      </Box>
      <Footer />
    </Box>
  )
}

export default DevBlogIndex
