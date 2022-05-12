import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import Footer from '../../../componenets/footer'
import Nav from '../../../componenets/navbar'
import _ from 'lodash'

const LifeBlogIndex = ({ posts }) => {
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

export const getStaticProps = async () => {
  const postPaths = path.join(process.cwd(), 'posts/life')
  const globPosts = glob.sync('**/*.mdx', { cwd: postPaths })
  const posts = _.chain(globPosts)
    .map((paths) => fs.readFileSync(path.join(postPaths, paths), 'utf-8'))
    .map((x) => matter(x).data)
    .sortBy((x) => new Date(x.date))
    .reverse()
    .value()
}

export default LifeBlogIndex
