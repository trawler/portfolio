import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, Kubernetes, and open source.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">
          <span className="text-zinc-400">visitor@karen:~$</span> ls blog/latest
        </h2>
      </div>

      <div className="bg-zinc-800/50 rounded-lg p-4">
        <div className="text-zinc-400 text-sm mb-4 font-mono">
          <span></span> Found the following entries:
        </div>
        <div className="text-green-300">
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}
