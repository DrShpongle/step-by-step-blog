export type PostImageSource = {
  url: string
  description: string
}

export type FrontMatter = {
  title: string
  excerpt: string
  date: string
  tags: string[]
  postImage: PostImageSource
}

export type Post = {
  frontMatter: FrontMatter
  slug: string
  source: string
}
