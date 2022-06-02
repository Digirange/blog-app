import { Box, Flex, Grid, GridItem, Text, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import Footer from '../componenets/footer'
import Nav from '../componenets/navbar'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contactme = () => {
  return (
    <Box height="100vh">
      <Nav />
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colStart={2} rowStart={15} rowEnd={40}>
          <Box height="100%" bg="red" width="100%">
            <Text align="center">Need to get in contact with me?</Text>
            <Box paddingTop="20px">
              <Text fontWeight="bold">Email - MStewWebDev@Gmail.com</Text>
            </Box>
            <Box display="flex" paddingTop="60px">
              <Box
                _hover={{
                  cursor: 'pointer',
                }}
              >
                <Box paddingTop="5px">
                  <Link href="https://github.com/digirange">
                    <Text fontWeight="bold">GitHub -</Text>
                  </Link>
                </Box>
              </Box>
              <Box paddingLeft="8px">
                <IconButton
                  as="a"
                  href="https://github.com/Digirange"
                  aria-label="GitHub"
                  icon={<FaGithub fontSize="1.25rem" />}
                />
              </Box>
            </Box>
            <Box display="flex" paddingTop="60px">
              <Box
                _hover={{
                  cursor: 'pointer',
                }}
              >
                <Box paddingTop='8px'>
                  <Link href="https://www.linkedin.com/in/marques-stewart-160485192/">
                    <Text fontWeight="bold">Linkedin -</Text>
                  </Link>
                </Box>
              </Box>
              <Box paddingLeft="8px">
                <IconButton
                  as="a"
                  href="https://www.linkedin.com/in/marques-stewart-160485192/"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="1.25rem" />}
                />
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  )
}

export default Contactme
