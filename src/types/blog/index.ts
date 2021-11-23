export type PostImageSource = {
  url: string
  description: string
}

export type FrontMatter = {
  title: string
  excerpt: string
  date: JSX.Element
  tags: JSX.Element[]
  postImage: PostImageSource
}

export type Post = {
  frontMatter: FrontMatter
  slug: string
  source: string
}
