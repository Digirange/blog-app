import { Box, Text } from '@chakra-ui/react'
import Footer from '../../../componenets/footer'
import Nav from '../../../componenets/navbar'

const LifeBlogIndex = () => {
  return (
    <Box>
      <Nav />
      <Box>
        <Text>This is the index page of the life category</Text>
      </Box>
      <Footer />
    </Box>
  )
}

export default LifeBlogIndex
