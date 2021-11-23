import {getPostBySlug, getAllPosts, getMatterSource} from 'utils/posts'
import PostLayout from 'components/layouts/post-layout'
import matter from 'gray-matter'
import {serialize} from 'next-mdx-remote/serialize'

export default (props) => {
  return <PostLayout post={props.post} source={props.source} />
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
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'content',
    'postImage',
    'tags',
    'mdxSource',
  ])
  // MDX text - can be from a local file, database, anywhere
  //   const source = `---
  // title: Test
  // ---

  // Some **mdx** text, with a component <MdxComponent>ddddddd</MdxComponent>
  //   `

  const {content, data} = getMatterSource(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'content',
    'postImage',
    'tags',
    'mdxSource',
  ])
  const mdxSource = await serialize(content, {scope: data})
  return {props: {source: mdxSource, frontMatter: data, post}}
}

export const getStaticPaths = () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {...post},
      }
    }),
    fallback: false,
  }
}
