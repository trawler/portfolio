import { formatDate, getBlogPosts } from 'app/archive/utils'
import { CustomMDX } from 'app/components/mdx'
import { baseUrl } from 'app/sitemap'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  let posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)
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
      url: `${baseUrl}/archive/${post.slug}`,
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

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl">
      <div className="border-b border-gray-100 pb-6 mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">
          {post.metadata.title}
        </h1>
        <p className="text-gray-500 text-sm">
          {post.metadata.summary}
        </p>
        <p className="text-gray-400 text-sm mt-2">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>

      <div className="prose text-gray-700">
        <CustomMDX source={post.content} />
      </div>
    </article>
  )
}