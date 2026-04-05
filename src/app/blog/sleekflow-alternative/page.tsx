import type { Metadata } from 'next'
import { battlecards } from '@/lib/battlecards'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BattlecardPage from '@/components/BattlecardPage'

export const metadata: Metadata = {
  title: 'Best SleekFlow Alternative for Growing Businesses — Baynix vs SleekFlow',
  description: 'Considering SleekFlow? Compare Baynix and SleekFlow on pricing, features, WhatsApp Business API, and customer support to find the best fit.',
  alternates: { canonical: 'https://baynix.ai/blog/sleekflow-alternative' },
  openGraph: {
    title: 'Best SleekFlow Alternative for Growing Businesses — Baynix vs SleekFlow',
    description: 'Considering SleekFlow? Compare Baynix and SleekFlow on pricing, features, WhatsApp Business API, and customer support to find the best fit.',
    url: 'https://baynix.ai/blog/sleekflow-alternative',
    siteName: 'Baynix',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best SleekFlow Alternative for Growing Businesses — Baynix vs SleekFlow',
    description: 'Considering SleekFlow? Compare Baynix and SleekFlow on pricing, features, WhatsApp Business API, and customer support to find the best fit.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Baynix vs SleekFlow — The Best SleekFlow Alternative',
  description: 'Considering SleekFlow? Compare Baynix and SleekFlow on pricing, features, WhatsApp Business API, and customer support to find the best fit.',
  datePublished: '2025-01-01',
  publisher: { '@type': 'Organization', name: 'Baynix', url: 'https://baynix.ai' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://baynix.ai/blog/sleekflow-alternative' },
}

export default function Page() {
  const card = battlecards.find(b => b.slug === 'sleekflow')!
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
