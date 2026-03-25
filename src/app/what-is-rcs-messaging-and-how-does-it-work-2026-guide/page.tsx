'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, Wifi } from 'lucide-react'

export default function RcsGuidePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 600, height: 500, background: 'radial-gradient(ellipse, rgba(34,211,238,0.09) 0%, transparent 70%)', top: '0%', left: '10%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 300, background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)', top: '10%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.83rem', color: 'var(--text3)', textDecoration: 'none', marginBottom: '2rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text2)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text3)'}
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#22d3ee', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
              RCS Messaging
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              What Is RCS Messaging and How Does It Work? (2026 Guide)
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Unlock the Future of Business Messaging with Rich Communication Services. In today&apos;s digital world, customers expect more than plain text — they want rich, interactive experiences delivered seamlessly on their phones.
            </p>

            {/* Icon banner */}
            <div style={{ height: 220, background: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(59,130,246,0.1) 100%)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Wifi size={72} color="#22d3ee" strokeWidth={1.1} style={{ opacity: 0.7 }} />
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '3rem 2rem' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Full article coming soon. We&apos;re putting the finishing touches on this comprehensive 2026 guide to RCS messaging.
              </p>
              <Link href="/blog" className="glass-btn glass-btn-primary glass-btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', padding: '0.6rem 1.3rem', borderRadius: 10, fontSize: '0.88rem' }}>
                <ArrowLeft size={14} /> Back to Blog
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
