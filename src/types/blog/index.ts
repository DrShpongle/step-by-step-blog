export type PostImageSource = {
  url: string
  description: string
}

export type PostMeta = {
  title: string
  excerpt: string
  // TODO:
  // wtf??
  date: JSX.Element
  tags: JSX.Element[]
  postImage: PostImageSource
}

export type Post = {
  meta: PostMeta
  slug: string
}
