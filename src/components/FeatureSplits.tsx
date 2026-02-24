'use client'

import Image from 'next/image'
import { useState } from 'react'

const splits = [
  {
    tag: 'One Inbox',
    title: 'Use One Inbox to engage with customers directly.',
    desc: 'Efficiently manage all messages from all channels at the same time, using One Inbox. Never miss a conversation — SMS, WhatsApp, RCS, Voice, and Email all in one place.',
    image: '/images/feature-inbox.png',
    alt: 'Baynix One Inbox — unified messaging dashboard',
    channels: [
      { label: 'WhatsApp', color: '#25d366' },
      { label: 'SMS', color: '#3b82f6' },
      { label: 'RCS', color: '#a78bfa' },
      { label: 'Voice', color: '#f59e0b' },
      { label: 'Email', color: '#22d3ee' },
    ],
    reverse: false,
    accentColor: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.15)',
  },
  {
    tag: 'URL Tracker',
    title: 'Track Your Text Message URLs.',
    desc: 'Shorten your URLs and track click-through rates to see how well your marketing strategy is working. Get real-time analytics on every link you send.',
    image: '/images/feature-url.png',
    alt: 'Baynix URL Tracker — click through rate analytics',
    channels: [],
    reverse: true,
    accentColor: '#22d3ee',
    glowColor: 'rgba(34,211,238,0.15)',
  },
  {
    tag: 'Campaigns',
    title: 'Create Campaigns Focused on the Customer.',
    desc: 'Import and segment your audience to target the right customers with your personalized campaigns. Reach the right people at the right time.',
    image: '/images/feature-campaigns.png',
    alt: 'Baynix Campaigns — audience segmentation',
    channels: [],
    reverse: false,
    accentColor: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.15)',
  },
]

// Placeholder visuals shown until Figma/Gemini images are ready
const PlaceholderVisuals = [
  // One Inbox placeholder
  () => (
    <div style={{ width: '90%', maxWidth: 380 }}>
      {/* Mock inbox UI */}
      <div style={{
        background: 'rgba(17,24,39,0.9)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 14,
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          padding: '0.75rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(255,255,255,0.03)',
        }}>
          {['#ef4444','#f59e0b','#22c55e'].map(c => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
          ))}
          <span style={{ fontSize: '0.7rem', color: 'var(--text3)', marginLeft: 4 }}>
            Baynix One Inbox
          </span>
        </div>
        {/* Messages */}
        {[
          { ch: 'W', color: '#25d366', bg: 'rgba(37,211,102,0.15)', name: 'Rahul M.', msg: 'Hi! What are your SMS prices?', time: '2m' },
          { ch: 'S', color: '#3b82f6', bg: 'rgba(59,130,246,0.15)', name: 'Priya K.', msg: 'Order confirmed ✓', time: '5m' },
          { ch: 'R', color: '#a78bfa', bg: 'rgba(167,139,250,0.15)', name: 'Amit S.', msg: 'Can I get a demo?', time: '12m' },
          { ch: 'E', color: '#22d3ee', bg: 'rgba(34,211,238,0.15)', name: 'Neha T.', msg: 'Invoice attached 📎', time: '1h' },
        ].map((row, i) => (
          <div key={i} style={{
            padding: '0.75rem 1rem',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: i === 0 ? 'rgba(59,130,246,0.05)' : 'transparent',
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: row.bg,
              border: `1px solid ${row.color}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700, color: row.color,
              flexShrink: 0,
            }}>
              {row.ch}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text)' }}>{row.name}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text3)' }}>{row.time}</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {row.msg}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  // URL Tracker placeholder
  () => (
    <div style={{ width: '90%', maxWidth: 380 }}>
      <div style={{
        background: 'rgba(17,24,39,0.9)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 14,
        padding: '1.5rem',
      }}>
        {/* URL bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 0.75rem',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          marginBottom: '1.5rem',
        }}>
          <span style={{ fontSize: '0.75rem', color: '#22d3ee', fontWeight: 600 }}>bnx.ai/abc123</span>
          <span style={{ marginLeft: 'auto', fontSize: '0.65rem', color: 'var(--text3)' }}>📋 Copy</span>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {[
            { label: 'Total Clicks', val: '2,418', color: '#22d3ee' },
            { label: 'CTR', val: '18.3%', color: '#a78bfa' },
            { label: 'vs last week', val: '↑ 12%', color: '#10b981' },
          ].map((s) => (
            <div key={s.label} style={{
              flex: 1,
              padding: '0.6rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 8,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text3)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div style={{ position: 'relative', height: 60 }}>
          <svg width="100%" height="60" viewBox="0 0 300 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,45 C30,40 60,35 90,25 C120,15 150,30 180,20 C210,10 240,15 300,5"
              fill="none" stroke="#22d3ee" strokeWidth="2"/>
            <path d="M0,45 C30,40 60,35 90,25 C120,15 150,30 180,20 C210,10 240,15 300,5 L300,60 L0,60 Z"
              fill="url(#lineGrad)"/>
          </svg>
        </div>
      </div>
    </div>
  ),

  // Campaigns placeholder
  () => (
    <div style={{ width: '90%', maxWidth: 380 }}>
      <div style={{
        background: 'rgba(17,24,39,0.9)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 14,
        padding: '1.5rem',
      }}>
        {/* Donut chart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(167,139,250,0.6)" strokeWidth="12" strokeDasharray="75 113"/>
            <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(59,130,246,0.6)" strokeWidth="12" strokeDasharray="45 143" strokeDashoffset="-75"/>
            <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(34,211,238,0.6)" strokeWidth="12" strokeDasharray="30 158" strokeDashoffset="-120"/>
            <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="12" strokeDasharray="37 151" strokeDashoffset="-150"/>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
              { label: 'Mumbai', color: '#a78bfa', pct: '40%' },
              { label: 'Delhi', color: '#3b82f6', pct: '25%' },
              { label: 'Bangalore', color: '#22d3ee', pct: '20%' },
              { label: 'Others', color: '#10b981', pct: '15%' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                <span style={{ fontSize: '0.7rem', color: 'var(--text2)' }}>{s.label}</span>
                <span style={{ fontSize: '0.7rem', color: s.color, marginLeft: 'auto' }}>{s.pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
          {[
            { label: 'Age: 25–45', color: '#a78bfa' },
            { label: 'Repeat buyer', color: '#22d3ee' },
            { label: 'Location: IN', color: '#10b981' },
          ].map(chip => (
            <div key={chip.label} style={{
              padding: '0.25rem 0.6rem',
              background: `${chip.color}15`,
              border: `1px solid ${chip.color}33`,
              borderRadius: 100,
              fontSize: '0.68rem',
              color: chip.color,
              fontWeight: 500,
            }}>
              {chip.label}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          padding: '0.75rem',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 8,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          {[
            { label: 'Recipients', val: '12,400' },
            { label: 'Delivered', val: '94.2%' },
            { label: 'Open rate', val: '34%' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>{s.val}</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text3)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
]

export default function FeatureSplits() {
  return (
    <section id="solutions" style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
    }}>
      {splits.map((s, i) => {
        const Placeholder = PlaceholderVisuals[i]
        return (
          <div key={s.tag} style={{
            borderBottom: '1px solid var(--border)',
            padding: '6rem 2rem',
          }}>
            <div
              style={{
                maxWidth: 1100,
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '5rem',
                alignItems: 'center',
                direction: s.reverse ? 'rtl' : 'ltr',
              }}
              className="reveal split-grid"
            >
              {/* Text side */}
              <div style={{ direction: 'ltr' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: s.accentColor,
                  marginBottom: '1rem',
                }}>
                  <span style={{
                    width: 18, height: 1,
                    background: s.accentColor,
                    display: 'inline-block',
                  }} />
                  {s.tag}
                </div>

                <h2 style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.2,
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}>
                  {s.title}
                </h2>

                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text2)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  maxWidth: 460,
                }}>
                  {s.desc}
                </p>

                {/* Channel badges */}
                {s.channels.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '1.5rem',
                  }}>
                    {s.channels.map((c) => (
                      <div key={c.label} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.3rem 0.75rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 100,
                        fontSize: '0.78rem',
                        color: 'var(--text2)',
                        background: 'rgba(255,255,255,0.03)',
                        backdropFilter: 'blur(10px)',
                      }}>
                        <div style={{
                          width: 6, height: 6,
                          borderRadius: '50%',
                          background: c.color,
                          boxShadow: `0 0 6px ${c.color}`,
                        }} />
                        {c.label}
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ marginTop: '2rem' }}>
                  <a href="https://app.baynix.ai" style={{
                    padding: '0.8rem 2rem',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#fff',
                    background: `linear-gradient(135deg, ${s.accentColor}, ${s.accentColor}cc)`,
                    borderRadius: 10,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: `0 0 24px ${s.glowColor}`,
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = `0 8px 30px ${s.glowColor}`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = `0 0 24px ${s.glowColor}`
                  }}
                  >
                    Get Started →
                  </a>
                </div>
              </div>

              {/* Visual side */}
              <div style={{ direction: 'ltr' }}>
                <div
                  className="float-anim"
                  style={{
                    background: 'rgba(13,18,32,0.6)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: `1px solid ${s.accentColor}22`,
                    borderRadius: 20,
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 24px 64px rgba(0,0,0,0.4), 0 0 60px ${s.glowColor}, inset 0 1px 0 rgba(255,255,255,0.05)`,
                    position: 'relative',
                  }}
                >
                  {/* Corner glow */}
                  <div style={{
                    position: 'absolute',
                    top: -60, right: -60,
                    width: 200, height: 200,
                    background: `radial-gradient(circle, ${s.glowColor} 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }} />

                  <Placeholder />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}