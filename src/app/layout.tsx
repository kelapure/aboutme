import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rohit Kelapure — Forward-deployed product engineer',
  description: 'Fax is still an API. COBOL still prices claims. I sit with the people who know the exception paths and turn that into product intent agents can execute. Co-founder at 8090.',
  keywords: ['Rohit Kelapure', 'AI', 'Enterprise Software', 'Healthcare AI', '8090', 'Software Factory', 'Applied AI'],
  authors: [{ name: 'Rohit Kelapure' }],
  openGraph: {
    title: 'Rohit Kelapure — Forward-deployed product engineer',
    description: 'I build software factories for work that cannot afford to be wrong. Co-founder at 8090.',
    url: 'https://rohitkelapure.com',
    siteName: 'Rohit Kelapure',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Kelapure — Forward-deployed product engineer',
    description: 'I build software factories for work that cannot afford to be wrong. Co-founder at 8090.',
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
