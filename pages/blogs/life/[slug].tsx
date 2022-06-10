import glob from 'glob'
import fs from 'fs'
import _ from 'lodash'
import path from 'path'
import matter from 'gray-matter'
import { Box, Text, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Nav from '../../../components/navbar'


export default function IndexPage({ source, posts }) {
  const {
    scope: { title, description, url, date, tag },
  } = source
  const components = { Heading, Text, Image, Box }
  return (
    <Box minHeight='100vh' position='relative'>
      <Nav />
      <Box padding="50px">
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colStart={2} colEnd={5}>
            <MDXRemote {...source} components={components} />
          </GridItem>
        </Grid>
      </Box>

    </Box>
  )
}

export function getStaticPaths() {
  const postPaths = path.join(process.cwd(), 'posts/life')
  const globPosts = glob.sync('**/*.mdx', { cwd: postPaths })
  const paths = _.chain(globPosts)
    .map((paths) => fs.readFileSync(path.join(postPaths, paths), 'utf-8'))
    .map((x) => matter(x).data)
    .map((x) => ({ params: { slug: x.url } }))
    .value()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPostsPaths = path.join(process.cwd(), 'posts/life')
  const globPosts = glob.sync('**/*.mdx', { cwd: allPostsPaths })
  const posts = _.chain(globPosts)
    .map((paths) => fs.readFileSync(path.join(allPostsPaths, paths), 'utf-8'))
    .map((x) => matter(x).data)
    .sortBy((x) => new Date(x.date))
    .reverse()
    .slice(0, 10)
    .value()

  const postsPath = path.join(
    process.cwd(),
    'posts',
    'life',
    params.slug + '.mdx',
  )
  const post = fs.readFileSync(postsPath, 'utf-8')
  const { content, data } = matter(post)
  const mdxSource = await serialize(content, { scope: data })

  return {
    props: {
      source: mdxSource,
      posts,
    },
  }
}
