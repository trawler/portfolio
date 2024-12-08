import { formatDate, getBlogPosts } from 'app/blog/utils'
import { CustomMDX } from 'app/components/mdx'
import { baseUrl } from 'app/sitemap'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  let posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-xl mx-auto text-green-300">
      <div className="border-b border-zinc-700 pb-4 mb-8">
        <div className="flex items-center text-zinc-400 text-sm mb-2">
          <span className="font-mono">visitor@karen:~/blog$</span>
          <span className="ml-2">cat {post.slug}.md</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tighter text-green-400">
          {post.metadata.title}
        </h1>
        <h2 className="text-l font-medium tracking-tighter text-zinc-400">
          {post.metadata.summary}
        </h2>
        <div className="flex items-center mt-2 text-sm text-zinc-300">
          <span className="font-mono">Created:</span>
          <span className="ml-2">{formatDate(post.metadata.publishedAt)}</span>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-zinc-400 text-sm mb-4 font-mono">
          <span></span> Output:
        </div>
        <div className="text-green-300 [&>*]:text-green-300">
          <CustomMDX source={post.content} />
        </div>
      </div>
    </article>
  )
}