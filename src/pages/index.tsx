import type {NextPage} from 'next'
import Head from 'next/head'

import PageLayout from '../components/layouts/page-layout'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <h2>
          Cumque eius veniam necessitatibus magni dicta odio nam iusto provident
          consequatur!
        </h2>
        <h3>
          Harum dolorem adipisci neque dolores et autem pariatur inventore,
          exercitationem ullam!
        </h3>
        <h4>
          Harum dolorem adipisci neque dolores et autem pariatur inventore,
          exercitationem ullam!
        </h4>
        <h5>
          Harum dolorem adipisci neque dolores et autem pariatur inventore,
          exercitationem ullam!
        </h5>
        <h6>
          Harum dolorem adipisci neque dolores et autem pariatur inventore,
          exercitationem ullam!
        </h6>
      </div>
    </PageLayout>
  )
}

export default Home
