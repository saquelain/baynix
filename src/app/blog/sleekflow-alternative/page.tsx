import { battlecards } from '@/lib/battlecards'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import BattlecardPage from '@/components/BattlecardPage'

export const metadata = {
  title: 'Baynix vs SleekFlow — The Best SleekFlow Alternative',
  description: 'Comparing Baynix and SleekFlow for growing businesses.',
}

export default function Page() {
  const card = battlecards.find(b => b.slug === 'sleekflow')!
  return (
    <>
      <Navbar />
      <BattlecardPage card={card} />
      <Footer />
      <WhatsAppWidget />
    </>
  )
}