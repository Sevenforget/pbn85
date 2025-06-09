export interface Post {
  id: string
  title: string
  content: string
  author: string
  tags?: string[]
  excerpt: string
  date: string
  readingTime: string
  slug: string
  coverImage: string
}
