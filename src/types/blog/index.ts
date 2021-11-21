export type PostImageSource = {
  url: string
  description?: string
}

export type PostMeta = {
  title?: string
  excerpt?: string
  date?: string
  tags?: string[]
  postImage?: PostImageSource
}

export type Post = {
  meta?: PostMeta
  slug: string
}
