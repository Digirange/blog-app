import glob from 'glob'
import fs from 'fs'
import _ from 'lodash'
import path from 'path'
import matter from 'gray-matter'
import { Box } from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export default function IndexPage({ source, posts }) {
    const {
        scope: { title, description, url, date }
    } = source
    return (
        <Box>
            <MDXRemote {...source }/>
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
    
    const postsPath = path.join(process.cwd(), 'posts', 'life', params.slug + '.mdx')
    const post = fs.readFileSync(postsPath, 'utf-8')
    const { content, data } = matter(post)
    const mdxSource = await serialize(content, { scope: data })

    return {
        props: {
            source: mdxSource,
            posts
        }
    }
}
