import { Box, Text, Grid, Divider } from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import IndexPost from '../../../components/IndexPost'

import Nav from '../../../components/navbar'
import _ from 'lodash'
import { slugRoot } from '../../../constants'

const IndexPage = ({ posts }: any) => {
  return (
    <Box minHeight="100vh" position="relative">
      <Nav />
      <Box>
        <Text fontSize="5xl" fontWeight="bold" align="center">
          Life
        </Text>
        <Box maxWidth="55%" ml="auto" mr="auto">
          <Divider border="1px" borderColor="black" />
        </Box>
      </Box>
      <Box padding="50px" sx={{ maxWidth: '50%', ml: 'auto', mr: 'auto' }}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {posts.map((post: any) => (
            <IndexPost key={post.link} data={post} />
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export const getStaticProps = async () => {
  const postPaths = path.join(process.cwd(), slugRoot.life)
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
