'use client'

import Image from 'next/image'

export default function Hero() {


  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8rem 2rem 6rem',
      overflow: 'hidden',
    }}>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Glow top center */}
      <div style={{
        position: 'absolute',
        width: 900, height: 900,
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        top: -300, left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
      }} />

      {/* Hero content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: 860,
        width: '100%',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 1rem',
          background: 'rgba(59,130,246,0.1)',
          border: '1px solid rgba(59,130,246,0.25)',
          borderRadius: 100,
          fontSize: '0.8rem',
          color: '#93c5fd',
          marginBottom: '2rem',
          animation: 'fadeUp 0.6s ease both',
        }}>
          <span style={{
            width: 6, height: 6,
            background: 'var(--accent3)',
            borderRadius: '50%',
            boxShadow: '0 0 8px var(--accent3)',
            display: 'inline-block',
          }} />
          🚀 WhatsApp Business API now available globally
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: 'var(--text)',
          marginBottom: '1.5rem',
          animation: 'fadeUp 0.6s 0.1s ease both',
        }}>
          AI Business Communication.<br />
          <span style={{
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #22d3ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Unified. Intelligent.
          </span><br />
          Scalable.
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text2)',
          maxWidth: 580,
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
          fontWeight: 300,
          animation: 'fadeUp 0.6s 0.2s ease both',
        }}>
          Baynix connects your business with customers through SMS, WhatsApp, RCS, Voice, and Email — all from one powerful AI platform.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          animation: 'fadeUp 0.6s 0.3s ease both',
          flexWrap: 'wrap',
        }}>
          <a href="https://app.baynix.ai" style={{
            padding: '0.8rem 2rem',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: '#fff',
            background: 'var(--accent)',
            borderRadius: 10,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 0 30px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#2563eb'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(59,130,246,0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)'
          }}
          >
            Start for Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="/contact" style={{
            padding: '0.8rem 2rem',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'var(--text)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--border2)',
            borderRadius: 10,
            textDecoration: 'none',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
          >
            Talk to Sales
          </a>
        </div>

        {/* Stats strip — glass */}
        <div style={{
          marginTop: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          padding: '1.5rem 2rem',
          background: 'rgba(13,18,32,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          animation: 'fadeUp 0.6s 0.5s ease both',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          {[
            { num: '450B+', label: 'Interactions / year' },
            { num: '900+', label: 'Global Connections' },
            { num: '5+', label: 'Channels Supported' },
            { num: '24/7', label: 'Expert Support' },
          ].map(({ num, label }, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                  display: 'block',
                }}>
                  <span style={{ color: 'var(--accent)' }}>{num}</span>
                </span>
                <div style={{
                  fontSize: '0.78rem',
                  color: 'var(--text3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginTop: '0.2rem',
                }}>
                  {label}
                </div>
              </div>
              {i < 3 && (
                <div style={{
                  width: 1, height: 40,
                  background: 'rgba(255,255,255,0.1)',
                  flexShrink: 0,
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}