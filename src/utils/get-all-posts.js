const importAll = (r) =>
  r.keys().map((fileName) => ({
    link: fileName.replace(/\/index\.mdx$/, ''),
    module: r(fileName),
  }))

export const posts = importAll(
  require.context('../pages/blog/', false, /\.mdx$/),
)
