import { battlecards } from '@/lib/battlecards'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BattlecardPage from '@/components/BattlecardPage'

export const metadata = {
  title: 'Baynix vs WATI — The Best WATI Alternative',
  description: 'Comparing Baynix and WATI across channels, pricing, and support.',
}

export default function Page() {
  const card = battlecards.find(b => b.slug === 'wati')!
  return (
    <>
      <Navbar />
      <BattlecardPage card={card} />
      <Footer />
      <WhatsAppWidget />
    </>
  )
}