import { Box, Text, Grid, GridItem, Divider, } from '@chakra-ui/react'
import Link from 'next/link'
import Footer from '../../componenets/footer'
import Nav from '../../componenets/navbar'

const BlogsIndex = () => {
  return (
    <Box>
      <Nav />
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colStart={3} colEnd={4} rowStart={1}>
          <Box paddingTop="50px">
            <Text align="center" fontSize="5xl" fontWeight="bold">
              Blogs
            </Text>
          </Box>
          <Box paddingTop="30px">
            <Text fontSize="3xl" fontWeight="bold" align="center">
              Categories
            </Text>
          </Box>
        </GridItem>
        <GridItem colStart={2} rowStart={2}>
          <Box>
            <Link href="blogs/developer">
              <a>
                <Text align="center" fontSize="xl">
                  Developer
                </Text>
              </a>
            </Link>
          </Box>
        </GridItem>
        <GridItem colStart={3} rowStart={2}>
          <Box>
            <Link href="blogs/life">
              <a>
                <Text align="center" fontSize="xl">
                  Life
                </Text>
              </a>
            </Link>
          </Box>
        </GridItem>
        <GridItem colStart={4} rowStart={2}>
          <Box>
            <Link href="blogs/sports">
              <a>
                <Text align="center" fontSize="xl">
                  Sports
                </Text>
              </a>
            </Link>
          </Box>
        </GridItem>
        <GridItem rowStart={4} colStart={2} colEnd={5}>
          <Divider border="1px" borderColor="black" />
        </GridItem>
        <GridItem rowStart={5} colStart={2} colEnd={4}>
          <Box paddingTop="10px">
            <Text fontSize="xl" fontWeight="bold">
              Recent Blogs
            </Text>
          </Box>
          <Box>
            <Text>This is where any recent blog will go</Text>
          </Box>
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  )
}

export default BlogsIndex
