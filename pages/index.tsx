import { Box, Grid, GridItem, Link, Text } from '@chakra-ui/layout'
import { EmailIcon, LinkIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, Image, Divider } from '@chakra-ui/react'
import { Footer } from '../componenets/footer'
import Nav from '../componenets/navbar'

const Home = () => {
  return (
    <Box>
      <Nav />
      <Box padding="50px">
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colStart={3} colEnd={4}>
            <Box>
              <Text align="center" fontSize="5xl" fontWeight="bold">
                Home
              </Text>
            </Box>
          </GridItem>
          <GridItem rowStart={2} colStart={3} colEnd={4}>
            <Box>
              <Text align="center" fontSize="3xl" fontWeight="bold">
                Marques Stewart
              </Text>
              <Box>
                <Text align="center" fontSize="large">
                  Hello and welcome to my website! This is a great place to
                  learn all about me. From development projects I have worked
                  on, to blog posts about generally anything of my interest.
                  Want to learn more about me? Go ahead and click the AboutMe
                  button below! Need to get in contact with me? Go ahead and
                  click the contact button!
                </Text>
              </Box>
              <Box padding="30px">
                <ButtonGroup spacing={20}>
                  <Button
                    as="a"
                    href="/aboutme"
                    rightIcon={<LinkIcon />}
                    _hover={{
                      background: 'gray.400',
                    }}
                    color="white"
                    bg="gray.600"
                  >
                    Learn More About Me
                  </Button>
                  <Button
                    as="a"
                    href="/contactme"
                    rightIcon={<EmailIcon />}
                    _hover={{
                      background: 'gray.400',
                    }}
                    color="white"
                    bg="gray.600"
                  >
                    Contact Me
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </GridItem>
          <GridItem rowStart={2} colStart={4}>
            <Image
              alt="selfplaceholder"
              src="selfie1.png"
              boxSize="250px"
              borderRadius="full"
              objectFit="fill"
            ></Image>
          </GridItem>
          <GridItem rowStart={5} colStart={2} colEnd={5}>
            <Divider border="1px" borderColor="black" />
          </GridItem>
          <GridItem rowStart={6} colStart={3} colEnd={4}>
            <Text align="center" fontWeight='bold' fontSize='3xl'>Recent Blogs</Text>
            <Text align='center'>
              Recent Posts will go here
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
