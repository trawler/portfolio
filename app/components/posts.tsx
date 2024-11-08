import { formatDate, getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-2">
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
            className="block hover:bg-zinc-700/30 rounded p-2 transition-colors"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row md:items-center">
              <div className="flex items-center md:w-[140px] font-mono text-zinc-400 text-sm">
                <span className="mr-2"></span>
                {formatDate(post.metadata.publishedAt, false)}
              </div>
              <p className="text-green-300 font-mono">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
