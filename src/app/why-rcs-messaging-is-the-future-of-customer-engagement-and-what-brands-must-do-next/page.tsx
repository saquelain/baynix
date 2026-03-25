'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, MessageSquare } from 'lucide-react'

export default function RcsFuturePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* Hero */}
        <section style={{ padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 600, height: 500, background: 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)', top: '0%', left: '10%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 300, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', top: '10%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.83rem', color: 'var(--text3)', textDecoration: 'none', marginBottom: '2rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text2)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text3)'}
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
              Customer Engagement
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Why RCS Messaging Is the Future of Customer Engagement (And What Brands Must Do Next)
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '2rem' }}>
              In the age of mobile-first communication, messaging is evolving faster than ever. Traditional SMS has served businesses well for decades — with reliability and simplicity that made text messaging indispensable. But now, Rich Communication Services (RCS messaging) is rewriting the rules of customer engagement.
            </p>

            {/* Icon banner */}
            <div style={{ height: 220, background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.1) 100%)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={72} color="#3b82f6" strokeWidth={1.1} style={{ opacity: 0.7 }} />
            </div>
          </div>
        </section>

        {/* Coming Soon content placeholder */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '3rem 2rem' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Full article coming soon. Check back for the complete guide on why RCS is transforming customer engagement and what your brand needs to do to stay ahead.
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
