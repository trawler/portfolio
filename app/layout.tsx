import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import './global.css'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Karen Almog',
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Karen Almog',
    description: 'Kubernetes developer and open source enthusiast.',
    url: baseUrl,
    siteName: 'Karen Almog',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'bg-zinc-900',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="min-h-screen bg-zinc-900 text-green-400 font-mono">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-zinc-800 rounded-lg p-4 my-8">
                <div className="flex items-center gap-2 mb-4 border-b border-zinc-700 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-zinc-400 ml-2 font-mono">terminal@karen:~$</span>
                </div>
                {children}
              </div>
            </div>
          </main>
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
