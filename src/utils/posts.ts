import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const POSTS_PATH = join(process.cwd(), 'src/posts')

export const getPostSlugs = () => {
  return fs.readdirSync(POSTS_PATH)
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const fullPath = join(POSTS_PATH, slug)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  const items = fields
    .map((field) => {
      let value
      if (field === 'slug') {
        value = slug.replace(/\.mdx$/, '')
      } else if (field === 'content') {
        value = content
      }
      return value && {[field]: value}
    })
    .reduce((acc, cur) => ({...acc, ...cur}), {data})

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort(
      ({data: {date: d1}}, {data: {date: d2}}) =>
        new Date(d2).getTime() - new Date(d1).getTime(),
    )
  return posts
}
