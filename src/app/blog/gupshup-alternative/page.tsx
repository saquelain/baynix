import type { Metadata } from 'next'
import { battlecards } from '@/lib/battlecards'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BattlecardPage from '@/components/BattlecardPage'

export const metadata: Metadata = {
  title: 'Best Gupshup Alternative — Baynix vs Gupshup Compared',
  description: 'Comparing Baynix and Gupshup for business messaging? See how they differ on pricing, SMS/RCS/Voice completeness, DPDP compliance, and team inbox.',
  alternates: { canonical: 'https://baynix.ai/blog/gupshup-alternative' },
  openGraph: {
    title: 'Best Gupshup Alternative — Baynix vs Gupshup Compared',
    description: 'Comparing Baynix and Gupshup for business messaging? See how they differ on pricing, SMS/RCS/Voice completeness, DPDP compliance, and team inbox.',
    url: 'https://baynix.ai/blog/gupshup-alternative',
    siteName: 'Baynix',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Gupshup Alternative — Baynix vs Gupshup Compared',
    description: 'Comparing Baynix and Gupshup for business messaging? See how they differ on pricing, SMS/RCS/Voice completeness, DPDP compliance, and team inbox.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Baynix vs Gupshup — The Best Gupshup Alternative',
  description: 'Comparing Baynix and Gupshup for business messaging? See how they differ on pricing, SMS/RCS/Voice completeness, DPDP compliance, and team inbox.',
  datePublished: '2025-01-01',
  publisher: { '@type': 'Organization', name: 'Baynix', url: 'https://baynix.ai' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://baynix.ai/blog/gupshup-alternative' },
}

export default function Page() {
  const card = battlecards.find(b => b.slug === 'gupshup')!
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
