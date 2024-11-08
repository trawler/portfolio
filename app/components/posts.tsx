import { formatDate, getBlogPosts } from 'app/blog/utils'
import Link from 'next/link'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-1">
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
            href={`/blog/${post.slug}`}
            className="block hover:bg-zinc-700/30 rounded p-2 transition-colors w-full"
          >
            <div className="flex flex-row items-center w-full">
              <div className="w-[90px] shrink-0 font-mono text-zinc-400 text-sm">
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