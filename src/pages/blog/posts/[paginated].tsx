import Link from 'next/link'
import {toNumber} from 'lodash'
import {getAllPosts} from 'utils/posts'
import PageLayout from 'components/layouts/page-layout'
import {PostCard} from 'components/blog/'
import {Post} from 'types/blog/'

type PostPageProps = {
  posts: Post[]
  prevPosts: number | null
  nextPosts: number | null
}

export const PostPage: React.FC<PostPageProps> = ({
  posts,
  prevPosts,
  nextPosts,
}) => {
  return (
    <PageLayout>
      <div className="container">
        <ul className="mt-8 space-y-6">
          {posts.map((post: any) => {
            return <PostCard post={post} key={post.slug} />
          })}
        </ul>
        <div>
          <div>
            {prevPosts !== null && (
              <Link href={'/blog/posts/' + prevPosts} passHref>
                <a>« see newer posts</a>
              </Link>
            )}
          </div>
          <div>
            {nextPosts !== null && (
              <Link href={'/blog/posts/' + nextPosts} passHref>
                <a>see older posts »</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default PostPage

export const getStaticProps = async ({params}: any) => {
  const {paginated} = params
  const paginationNumber = toNumber(paginated)
  const allPosts = getAllPosts(['slug', 'source', 'frontMatter'])
  const perPage = 3

  const startIndex = paginationNumber * perPage - perPage
  const endIndex = paginationNumber * perPage - 1
  const prevPosts = paginationNumber === 1 ? null : paginationNumber - 1
  const nextPosts =
    endIndex >= allPosts.length - 1 ? null : paginationNumber + 1

  return {
    props: {
      posts: allPosts.slice(startIndex, endIndex + 1),
      prevPosts,
      nextPosts,
    },
  }
}

export const getStaticPaths = () => {
  // TODO
  // needed fields: ['slug']
  const allPosts = getAllPosts(['slug', 'source', 'frontMatter'])
  const paths = allPosts.map((_, index) => {
    return {
      params: {paginated: `${index + 1}`},
    }
  })
  return {paths, fallback: false}
}
