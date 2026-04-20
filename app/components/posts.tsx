import { formatDate, getBlogPosts } from 'app/archive/utils'
import Link from 'next/link'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="divide-y divide-gray-100">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/archive/${post.slug}`}
            className="flex items-baseline gap-6 py-3 group"
          >
            <span className="shrink-0 text-sm text-gray-400 font-mono group-hover:text-brand transition-colors">
              {formatDate(post.metadata.publishedAt, false)}
            </span>
            <span className="text-gray-700 group-hover:text-brand transition-colors font-medium">
              {post.metadata.title}
            </span>
          </Link>
        ))}
    </div>
  )
}
