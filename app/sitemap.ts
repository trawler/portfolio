import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://trawler.sh'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let pages = [    {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/resume`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
    },
  ]
  return [...pages, ...routes, ...blogs]
}
