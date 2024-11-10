export function Navbar() {
  return (
    <nav className="font-mono">
      <div className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <div className="flex items-center justify-center space-x-8">
          <a
            href="/"
            className="text-green-400 hover:text-blue-400 transition-colors"
          >
            ~/home
          </a>
          <a
            href="/blog"
            className="text-green-400 hover:text-blue-400 transition-colors"
          >
            ~/blog
          </a>
          <a
            href="/cv"
            className="text-green-400 hover:text-blue-400 transition-colors"
          >
            ~/resume
          </a>
        </div>
      </div>
    </nav>
  );
}
