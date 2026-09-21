import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rohit Kelapure — Forward-Deployed Product Engineer',
  description: 'Applied AI in production. I build software factories for regulated workflows — healthcare intake, legacy rules, enterprise systems with real liability. MCP, agents, evals, and the human gates that make them safe.',
  keywords: ['Rohit Kelapure', 'Applied AI', 'Forward Deployed Engineer', 'MCP', 'Claude', 'Healthcare AI', 'Software Factory', 'Production AI Systems'],
  authors: [{ name: 'Rohit Kelapure' }],
  openGraph: {
    title: 'Rohit Kelapure — Forward-Deployed Product Engineer',
    description: 'Applied AI in production. I build software factories for regulated workflows — healthcare intake, legacy rules, enterprise systems with real liability.',
    url: 'https://rohitkelapure.com',
    siteName: 'Rohit Kelapure',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Kelapure — Forward-Deployed Product Engineer',
    description: 'Applied AI in production. I build software factories for regulated workflows — healthcare intake, legacy rules, enterprise systems with real liability.',
    creator: '@rkela',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
