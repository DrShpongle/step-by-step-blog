import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const POSTS_PATH = join(process.cwd(), 'src/posts')

export const getPostSlugs = () => {
  return fs.readdirSync(POSTS_PATH)
}

export function getSourceBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  return {data, content}
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  const items = fields
    .map((field) => {
      let value
      if (field === 'slug') {
        value = realSlug
      } else if (field === 'source') {
        // value = serialize(content)
        value = content
      } else if (field === 'frontMatter') {
        // value = serialize(content)
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
