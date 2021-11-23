import {getAllSources, getSourceBySlug} from 'utils/posts'
import PostLayout from 'components/layouts/post-layout'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import {rehypeAccessibleEmojis} from 'rehype-accessible-emojis'

export default ({post}) => {
  return <PostLayout {...post} />
}

export async function getStaticProps({params}) {
  const post = getSourceBySlug(params.slug, ['source', 'frontMatter'])
  const {source, frontMatter} = post
  const mdxSource = await serialize(source, {
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
  const posts = getAllSources(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {slug: post.slug},
      }
    }),
    fallback: false,
  }
}
