import glob from 'glob'
import fs from 'fs'
import _ from 'lodash'
import path from 'path'
import matter from 'gray-matter'
import { Box } from '@chakra-ui/react'

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

export async function getStaticProps({ parmas }) {
  const postPaths = path.join(process.cwd(), 'posts/life')
  const globPosts = glob.sync('**/*.mdx', { cwd: postPaths })
  const posts = _.chain(globPosts)
    .map((paths) => fs.readFileSync(path.join(postPaths, paths), 'utf-8'))
    .map((x) => matter(x).data)
    .sortBy((x) => new Date(x.date))
    .reverse()
    .slice(0, 10)
      .value()
    
    const postPath = path.join(process.cwd())
}
