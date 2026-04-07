import type { Metadata } from 'next'
import { battlecards } from '@/lib/battlecards'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BattlecardPage from '@/components/BattlecardPage'

export const metadata: Metadata = {
  title: 'Best Interakt Alternative — Baynix vs Interakt Compared',
  description: 'Comparing Baynix and Interakt for WhatsApp Business API? See how they differ on multi-channel support, enterprise certifications, API depth, and international reach.',
  alternates: { canonical: 'https://baynix.ai/blog/interakt-alternative' },
  openGraph: {
    title: 'Best Interakt Alternative — Baynix vs Interakt Compared',
    description: 'Comparing Baynix and Interakt for WhatsApp Business API? See how they differ on multi-channel support, enterprise certifications, API depth, and international reach.',
    url: 'https://baynix.ai/blog/interakt-alternative',
    siteName: 'Baynix',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interakt Alternative — Baynix vs Interakt Compared',
    description: 'Comparing Baynix and Interakt for WhatsApp Business API? See how they differ on multi-channel support, enterprise certifications, API depth, and international reach.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Baynix vs Interakt — The Best Interakt Alternative',
  description: 'Comparing Baynix and Interakt for WhatsApp Business API? See how they differ on multi-channel support, enterprise certifications, API depth, and international reach.',
  datePublished: '2025-01-01',
  publisher: { '@type': 'Organization', name: 'Baynix', url: 'https://baynix.ai' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://baynix.ai/blog/interakt-alternative' },
}

export default function Page() {
  const card = battlecards.find(b => b.slug === 'interakt')!
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
