'use client'

import { useEffect, useRef } from 'react'


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

      {/* Center glow orb */}
      <div style={{
        position: 'absolute',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        animation: 'auroraFloat 8s ease-in-out infinite',
      }} />

      {/* Top glow line */}
      <div style={{
        position: 'absolute',
        top: 64, left: '15%', right: '15%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(99,102,241,0.4), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Hero content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: 780,
        width: '100%',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 1rem',
          background: 'rgba(59,130,246,0.08)',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: 100,
          fontSize: '0.8rem',
          color: '#93c5fd',
          marginBottom: '2rem',
          animation: 'fadeUp 0.6s ease both',
          backdropFilter: 'blur(10px)',
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
          fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: 'var(--text)',
          marginBottom: '1.5rem',
          animation: 'fadeUp 0.6s 0.1s ease both',
        }}>
          AI Business<br />
          <span style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #22d3ee 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(99,102,241,0.4))',
          }}>
            Communication.
          </span><br />
          <span style={{
            background: 'linear-gradient(135deg, #f0f4ff 0%, #8b95b0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Unified. Intelligent. Scalable.
          </span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text2)',
          maxWidth: 540,
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
            padding: '0.85rem 2.2rem',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
            borderRadius: 10,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 0 40px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 40px rgba(99,102,241,0.6), inset 0 1px 0 rgba(255,255,255,0.15)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
          }}
          >
            Start for Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="/contact" style={{
            padding: '0.85rem 2.2rem',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'var(--text)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            textDecoration: 'none',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
          >
            Talk to Sales
          </a>
        </div>

        {/* Stats strip */}
        <div style={{
          marginTop: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
          padding: '0',
          animation: 'fadeUp 0.6s 0.5s ease both',
          flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            padding: '1.5rem 2.5rem',
            background: 'rgba(13,18,32,0.7)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
            gap: '0',
          }}>
            {[
              { num: '450B+', label: 'Interactions / year', color: '#60a5fa' },
              { num: '900+', label: 'Global Connections', color: '#a78bfa' },
              { num: '5+', label: 'Channels Supported', color: '#22d3ee' },
              { num: '24/7', label: 'Expert Support', color: '#10b981' },
            ].map(({ num, label, color }, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', padding: '0 2rem' }}>
                  <span style={{
                    fontSize: '1.7rem',
                    fontWeight: 800,
                    color,
                    letterSpacing: '-0.03em',
                    display: 'block',
                    filter: `drop-shadow(0 0 12px ${color}66)`,
                  }}>
                    {num}
                  </span>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'var(--text3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginTop: '0.25rem',
                  }}>
                    {label}
                  </div>
                </div>
                {i < 3 && (
                  <div style={{
                    width: 1, height: 40,
                    background: 'rgba(255,255,255,0.08)',
                    flexShrink: 0,
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}