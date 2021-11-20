import type {NextPage, GetStaticProps} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {allPosts} from 'utils/get-all-posts'
import PageLayout from 'components/layouts/page-layout'

const Blog: React.FC = () => {
  console.log('allPosts:', allPosts)
  return (
    <PageLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h2>Posts:</h2>
        <ul className="mt-8 space-y-6">
          {allPosts.map((post: any, index: number) => {
            return (
              <div key={index} className="flex flex-col p-4 bg-blue-dark">
                <Link href={post.href}>
                  <a className="space-y-4 text-white">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <p>{post.date}</p>
                  </a>
                </Link>
              </div>
            )
          })}
        </ul>
      </div>
    </PageLayout>
  )
}

export default Blog
