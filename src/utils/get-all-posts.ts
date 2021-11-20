const POSTS_PATH = '../pages/blog/'

const importAll = (r: any) => {
  return r
    .keys()
    .filter((item: any) => item.includes('pages'))
    .map((fileName: any) => {
      return {
        href: fileName.replace('pages', '').replace('.mdx', ''),
        ...r(fileName).meta,
      }
    })
}

export const allPosts = importAll(require.context(POSTS_PATH, true, /\.mdx$/))
