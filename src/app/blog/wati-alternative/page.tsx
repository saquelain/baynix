import type { Metadata } from 'next'
import { battlecards } from '@/lib/battlecards'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BattlecardPage from '@/components/BattlecardPage'

export const metadata: Metadata = {
  title: 'Best WATI Alternative — Baynix vs WATI Compared',
  description: 'Comparing Baynix and WATI for WhatsApp Business API? See how they stack up on pricing, features, multi-channel support, and reliability.',
  alternates: { canonical: 'https://baynix.ai/blog/wati-alternative' },
  openGraph: {
    title: 'Best WATI Alternative — Baynix vs WATI Compared',
    description: 'Comparing Baynix and WATI for WhatsApp Business API? See how they stack up on pricing, features, multi-channel support, and reliability.',
    url: 'https://baynix.ai/blog/wati-alternative',
    siteName: 'Baynix',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best WATI Alternative — Baynix vs WATI Compared',
    description: 'Comparing Baynix and WATI for WhatsApp Business API? See how they stack up on pricing, features, multi-channel support, and reliability.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Baynix vs WATI — The Best WATI Alternative',
  description: 'Comparing Baynix and WATI for WhatsApp Business API? See how they stack up on pricing, features, multi-channel support, and reliability.',
  datePublished: '2025-01-01',
  publisher: { '@type': 'Organization', name: 'Baynix', url: 'https://baynix.ai' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://baynix.ai/blog/wati-alternative' },
}

export default function Page() {
  const card = battlecards.find(b => b.slug === 'wati')!
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
