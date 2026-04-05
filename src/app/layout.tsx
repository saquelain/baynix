import type { Metadata } from 'next'
import { Inter, Geist, Manrope } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'
import WhatsAppWidget from '@/components/WhatsAppWidget'

const inter = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://baynix.ai'),
  title: {
    template: '%s | Baynix',
    default: 'Baynix — AI Business Communication Platform',
  },
  description: 'Baynix connects your business with customers through SMS, WhatsApp, RCS, Voice, and Email — all from one powerful AI platform.',
  openGraph: {
    title: 'Baynix — AI Business Communication Platform',
    description: 'Unified. Intelligent. Scalable.',
    url: 'https://baynix.ai',
    siteName: 'Baynix',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baynix — AI Business Communication Platform',
    description: 'Baynix connects your business with customers through SMS, WhatsApp, RCS, Voice, and Email — all from one powerful AI platform.',
    site: '@baynixai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://baynix.ai/#organization',
      name: 'Baynix',
      url: 'https://baynix.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://baynix.ai/baynix-logo.png',
      },
      sameAs: [
        'https://www.linkedin.com/company/baynixai',
        'https://twitter.com/baynixai',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://baynix.ai/#website',
      url: 'https://baynix.ai',
      name: 'Baynix',
      publisher: { '@id': 'https://baynix.ai/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://baynix.ai/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="aurora-1" />
        <div className="aurora-2" />
        <div className="aurora-3" />
        <ScrollReveal />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}