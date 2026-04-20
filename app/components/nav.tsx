export function Navbar() {
  return (
    <nav className="border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="text-xs font-semibold tracking-widest uppercase text-brand hover:text-brand/70 transition-colors"
          >
            ~/home
          </a>
          <a
            href="/archive"
            className="text-xs font-semibold tracking-widest uppercase text-brand hover:text-brand/70 transition-colors"
          >
            ~/archive
          </a>
          <a
            href="/cv"
            className="text-xs font-semibold tracking-widest uppercase text-brand hover:text-brand/70 transition-colors"
          >
            ~/resume
          </a>
        </div>
      </div>
    </nav>
  );
}
