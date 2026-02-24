import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Baynix — AI Business Communication Platform',
  description: 'Baynix connects your business with customers through SMS, WhatsApp, RCS, Voice, and Email — all from one powerful AI platform.',
  metadataBase: new URL('https://baynix.ai'),
  openGraph: {
    title: 'Baynix — AI Business Communication Platform',
    description: 'Unified. Intelligent. Scalable.',
    url: 'https://baynix.ai',
    siteName: 'Baynix',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {/* Aurora background blobs */}
        <div className="aurora-1" />
        <div className="aurora-2" />
        <div className="aurora-3" />
        {children}
      </body>
    </html>
  )
}