import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import './global.css'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL('https://trawler.sh'),
  title: {
    default: 'Karen Almog - Principal Software Engineer',
    template: '%s | Karen Almog'
  },
  description: 'Principal Software Engineer specialized in Kubernetes, cloud-native technologies, and distributed systems. Expert in Go, infrastructure, and platform engineering.',
  keywords: ['Kubernetes', 'Go', 'Software Engineering', 'Cloud Native', 'DevOps', 'Platform Engineering'],
  authors: [{ name: 'Karen Almog' }],
  creator: 'Karen Almog',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trawler.sh',
    title: 'Karen Almog - Principal Software Engineer',
    description: 'Principal Software Engineer specialized in Kubernetes and cloud-native technologies',
    siteName: 'Karen Almog',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Karen Almog - Principal Software Engineer',
      }
    ],
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

const cx = (...classes: (string | undefined | null | false)[]): string => 
  classes.filter(Boolean).join(' ')

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
