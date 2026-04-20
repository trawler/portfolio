import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Archive',
  description: 'Writing on software development, Kubernetes, and open source.',
}

export default function Page() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
        Archive
      </h1>
      <div className="border-t border-gray-100 pt-4">
        <BlogPosts />
      </div>
    </section>
  )
}
