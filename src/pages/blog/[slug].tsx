import {getAllPosts, getSourceBySlug} from 'utils/posts'
import PostLayout from 'components/layouts/post-layout'
import {serialize} from 'next-mdx-remote/serialize'
import {rehypeAccessibleEmojis} from 'rehype-accessible-emojis'

export default ({post}) => {
  return <PostLayout {...post} />
}

// export function getStaticProps({params}) {
// const post = getPostBySlug(params.slug, [
//   'title',
//   'excerpt',
//   'date',
//   'slug',
//   'content',
//   'postImage',
//   'tags',
//   'mdxSource',
// ])

//   return {
//     props: {post},
//   }
// }

export async function getStaticProps({params}) {
  // console.log('params:::::', params)
  // const post = getPostBySlug(params.slug, ['source', 'frontMatter', 'slug'])

  const {content, data} = getSourceBySlug(params.slug)
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {rehypePlugins: [rehypeAccessibleEmojis]},
  })
  return {
    props: {post: {source: mdxSource, frontMatter: data, slug: params.slug}},
  }
}

export const getStaticPaths = () => {
  const posts = getAllPosts(['slug'])
  // console.log('posts:', posts)

  return {
    paths: posts.map((slug) => {
      return {
        // TODO
        // wtf?
        params: {...slug},
      }
    }),
    fallback: false,
  }
}
