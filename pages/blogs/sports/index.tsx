import { Box, Text } from '@chakra-ui/react'
import Footer from '../../../componenets/footer'
import Nav from '../../../componenets/navbar'

const SportsBlogIndex = () => {
  return (
    <Box>
      <Nav />
      <Box>
        <Text>This is the index page of the sports category</Text>
      </Box>
      <Footer />
    </Box>
  )
}

export default SportsBlogIndex