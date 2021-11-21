export type PostImageSource = {
  url: string
  description: string
}

export type PostMeta = {
  title: string
  excerpt: string
  // TODO:
  // wtf??
  date: any
  tags: string[]
  postImage: PostImageSource
}

export type Post = {
  meta: PostMeta
  slug: string
}
