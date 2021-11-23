import {getAllSources, getSourceBySlug} from 'utils/posts'
import {GetStaticPaths, GetStaticProps} from 'next'
import PostLayout from 'components/layouts/post-layout'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import {rehypeAccessibleEmojis} from 'rehype-accessible-emojis'
import {Post} from 'types/blog/'

export default ({post}) => {
  return <PostLayout {...post} />
}

export const getStaticProps = async ({params}) => {
  // TODO
  // needed fields: ['source', 'frontMatter']
  const post = getSourceBySlug(params.slug, ['slug', 'source', 'frontMatter'])
  const {source, frontMatter} = post
  const mdxSource = await serialize(source as string, {
    scope: frontMatter,
    mdxOptions: {rehypePlugins: [rehypeAccessibleEmojis]},
  })
  const serializedPost = {
    ...post,
    source: mdxSource,
  }
  return {
    props: {post: serializedPost},
  }
}

export const getStaticPaths = () => {
  // TODO
  // needed fields: ['slug']
  const posts = getAllSources(['slug', 'source', 'frontMatter'])
  const paths = posts.map((post) => {
    return {
      params: {slug: post.slug},
    }
  })
  return {paths, fallback: false}
}
