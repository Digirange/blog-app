import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import Footer from '../../../componenets/footer'
import Nav from '../../../componenets/navbar'
import _ from 'lodash'

const IndexPage = ({ posts }) => {
  return (
    <Box>
      <Nav />
      <Box padding="50px">
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colStart={3} rowStart={1}>
            <Box>
              <Text align="center">Life</Text>
            </Box>
          </GridItem>
          <GridItem colStart={3} rowStart={2}>
            <Text align="center">Posts go here</Text>
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </Box>
  )
}

export const getStaticProps = async () => {
  const postPaths = path.join(process.cwd(), 'posts/life')
  const globPosts = glob.sync('**/*.mdx', { cwd: postPaths })
  const posts = _.chain(globPosts)
    .map((paths) => fs.readFileSync(path.join(postPaths, paths), 'utf-8'))
    .map((x) => matter(x).data)
    .sortBy((x) => new Date(x.date))
    .reverse()
    .value()

  return { props: { posts } }
}

export default IndexPage
