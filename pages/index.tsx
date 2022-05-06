import { Box, Flex, Text } from '@chakra-ui/layout'
import { ColorModeScript } from '@chakra-ui/react'
import { Footer } from '../componenets/footer'
import Nav from '../componenets/navbar'

const Home = () => {
  return (
    <Box>
      <Nav />
        <Footer />
    </Box>
  )
}

export default Home
