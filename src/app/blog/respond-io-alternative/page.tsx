import { battlecards } from '@/lib/battlecards'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BattlecardPage from '@/components/BattlecardPage'

export const metadata = {
  title: 'Baynix vs Respond.io — The Best Respond.io Alternative',
  description: 'Comparing Baynix and Respond.io for Indian businesses.',
}

export default function Page() {
  const card = battlecards.find(b => b.slug === 'respond-io')!
  return (
    <>
      <Navbar />
      <BattlecardPage card={card} />
      <Footer />
      <WhatsAppWidget />
    </>
  )
}