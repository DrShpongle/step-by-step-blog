import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const POSTS_PATH = join(process.cwd(), 'src/posts')

export const getPostSlugs = () => {
  return fs.readdirSync(POSTS_PATH)
}

export function getSourceBySlug(
  slug: string,
  fields: string[] = ['slug', 'source', 'frontMatter'],
) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)
  let value = {}
  const post = fields
    .map((field) => {
      if (field === 'slug') {
        value = realSlug
      } else if (field === 'source') {
        value = content
      } else if (field === 'frontMatter') {
        value = data
      }
      return value && {[field]: value}
    })
    .reduce((acc, cur) => ({...acc, ...cur}), {})
  return post
}

export function getAllSources(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getSourceBySlug(slug, fields))
    .sort(
      ({frontMatter: {date: d1}}, {frontMatter: {date: d2}}) =>
        new Date(d2).getTime() - new Date(d1).getTime(),
    )
  return posts
}
