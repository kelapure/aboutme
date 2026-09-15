import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rohit Kelapure — Builder who bridges deep tech and business',
  description: 'Forward-deployed engineer and co-founder applying AI to hard enterprise problems in healthcare and life sciences. Based in Palo Alto, California.',
  keywords: ['Rohit Kelapure', 'AI', 'Enterprise Software', 'Healthcare AI', '8090', 'Software Factory', 'Cloud Architecture'],
  authors: [{ name: 'Rohit Kelapure' }],
  openGraph: {
    title: 'Rohit Kelapure — Builder who bridges deep tech and business',
    description: 'Forward-deployed engineer and co-founder applying AI to hard enterprise problems in healthcare and life sciences.',
    url: 'https://rohitkelapure.com',
    siteName: 'Rohit Kelapure',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Kelapure — Builder who bridges deep tech and business',
    description: 'Forward-deployed engineer and co-founder applying AI to hard enterprise problems in healthcare and life sciences.',
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
