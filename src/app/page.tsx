import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import TrustedBy from '@/components/TrustedBy'
import FeaturesGrid from '@/components/FeaturesGrid'
import FeatureSplits from '@/components/FeatureSplits'
import APISection from '@/components/APISection'
import IndustriesGrid from '@/components/IndustriesGrid'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <TrustedBy />
      <FeaturesGrid />
      <FeatureSplits />
      <APISection />
      <IndustriesGrid />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}