import type { Metadata } from 'next'
import { battlecards } from '@/lib/battlecards'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BattlecardPage from '@/components/BattlecardPage'

export const metadata: Metadata = {
  title: 'Best Karix Alternative — Baynix vs Karix Compared',
  description: 'Comparing Baynix and Karix for enterprise messaging? See how they stack up on RCS, pricing flexibility, omnichannel automation, and DPDP compliance.',
  alternates: { canonical: 'https://baynix.ai/blog/karix-alternative' },
  openGraph: {
    title: 'Best Karix Alternative — Baynix vs Karix Compared',
    description: 'Comparing Baynix and Karix for enterprise messaging? See how they stack up on RCS, pricing flexibility, omnichannel automation, and DPDP compliance.',
    url: 'https://baynix.ai/blog/karix-alternative',
    siteName: 'Baynix',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Karix Alternative — Baynix vs Karix Compared',
    description: 'Comparing Baynix and Karix for enterprise messaging? See how they stack up on RCS, pricing flexibility, omnichannel automation, and DPDP compliance.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Baynix vs Karix — The Best Karix Alternative',
  description: 'Comparing Baynix and Karix for enterprise messaging? See how they stack up on RCS, pricing flexibility, omnichannel automation, and DPDP compliance.',
  datePublished: '2025-01-01',
  publisher: { '@type': 'Organization', name: 'Baynix', url: 'https://baynix.ai' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://baynix.ai/blog/karix-alternative' },
}

export default function Page() {
  const card = battlecards.find(b => b.slug === 'karix')!
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
