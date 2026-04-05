import type { Metadata } from 'next'
import { battlecards } from '@/lib/battlecards'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BattlecardPage from '@/components/BattlecardPage'

export const metadata: Metadata = {
  title: 'Best Respond.io Alternative for Indian Businesses — Baynix vs Respond.io',
  description: 'Looking for a Respond.io alternative? Compare Baynix and Respond.io on features, pricing, WhatsApp API access, and dedicated support for Indian businesses.',
  alternates: { canonical: 'https://baynix.ai/blog/respond-io-alternative' },
  openGraph: {
    title: 'Best Respond.io Alternative for Indian Businesses — Baynix vs Respond.io',
    description: 'Looking for a Respond.io alternative? Compare Baynix and Respond.io on features, pricing, WhatsApp API access, and dedicated support for Indian businesses.',
    url: 'https://baynix.ai/blog/respond-io-alternative',
    siteName: 'Baynix',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Respond.io Alternative for Indian Businesses — Baynix vs Respond.io',
    description: 'Looking for a Respond.io alternative? Compare Baynix and Respond.io on features, pricing, WhatsApp API access, and dedicated support for Indian businesses.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Baynix vs Respond.io — The Best Respond.io Alternative',
  description: 'Looking for a Respond.io alternative? Compare Baynix and Respond.io on features, pricing, WhatsApp API access, and dedicated support for Indian businesses.',
  datePublished: '2025-01-01',
  publisher: { '@type': 'Organization', name: 'Baynix', url: 'https://baynix.ai' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://baynix.ai/blog/respond-io-alternative' },
}

export default function Page() {
  const card = battlecards.find(b => b.slug === 'respond-io')!
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <BattlecardPage card={card} />
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
