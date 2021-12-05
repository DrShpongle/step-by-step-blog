import Link from 'next/link'
import Head from 'next/head'
import {getAllPosts} from 'utils/posts'
import PageLayout from 'components/layouts/page-layout'
import {PostCard} from 'components/blog/'
import {Post} from 'types/blog/'

type BlogPageProps = {
  posts: Post[]
}

const Blog: React.FC<BlogPageProps> = ({posts}) => {
  return (
    <PageLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h2>Recent posts:</h2>
        <ul className="mt-8 space-y-6">
          {posts.map((post: any) => {
            return <PostCard post={post} key={post.slug} />
          })}
        </ul>
        <div className="flex justify-center mt-8">
          <Link href="/blog/posts/1">
            <a>View all posts</a>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default Blog

export function getStaticProps() {
  // TODO
  // needed fields: ['slug', 'frontMatter']
  const allPosts = getAllPosts(['slug', 'frontMatter', 'source'])
  return {
    props: {
      posts: allPosts.slice(1, 4),
    },
  }
}