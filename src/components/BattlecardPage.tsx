'use client'

import Link from 'next/link'
import { battlecards, type BattleCard } from '@/lib/battlecards'
import {
  DollarSign, Smartphone, Bot, BarChart3,
  Globe, ShieldCheck, Zap, Headphones,
  Lock, Clock, TrendingUp, Wrench,
  type LucideIcon, Receipt, MousePointerClick, PhoneOff,
  GitBranchPlus, MapPin, Layers,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  DollarSign, Smartphone, Bot, BarChart3,
  Globe, ShieldCheck, Zap, Headphones,
  Lock, Clock, TrendingUp, Wrench,
  Receipt, MousePointerClick, PhoneOff,
  GitBranchPlus, MapPin, Layers,
}

const statusStyles = {
  win:     { bg: 'rgba(15,110,86,0.12)',  color: '#34d399', border: 'rgba(52,211,153,0.25)'  },
  neutral: { bg: 'rgba(133,79,11,0.12)', color: '#fbbf24', border: 'rgba(251,191,36,0.25)'  },
  lose:    { bg: 'rgba(163,45,45,0.12)', color: '#f87171', border: 'rgba(248,113,113,0.25)' },
}

const CellBadge = ({ status, label }: { status: 'win' | 'neutral' | 'lose'; label: string }) => {
  const s = statusStyles[status]
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 9px',
      borderRadius: 20,
      fontSize: '0.72rem',
      fontWeight: 500,
      background: s.bg,
      color: s.color,
      border: `1px solid ${s.border}`,
      lineHeight: 1.5,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}

export default function BattlecardPage({ card }: { card: BattleCard }) {
  const others = battlecards.filter(b => b.slug !== card.slug)

  return (
    <main style={{
      background: 'var(--bg)',
      minHeight: '100vh',
      paddingTop: 64,
      color: 'var(--text)',
    }}>

      {/* Hero */}
      <section style={{
        padding: '5rem 2rem 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Glow blobs */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(ellipse 700px 400px at 50% 100%, ${card.accentColor}18 0%, transparent 70%)`,
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.75rem', color: 'var(--text3)', marginBottom: '1.5rem',
          }}>
            <Link href="/" style={{ color: 'var(--text3)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text2)' }}>Baynix vs {card.competitor}</span>
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em',
            color: 'var(--accent)', marginBottom: '1rem',
            padding: '0.3rem 0.8rem',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: 20,
            background: 'rgba(99,102,241,0.08)',
          }}>
            Competitor Comparison
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            Baynix vs{' '}
            <span style={{ color: card.accentColor }}>{card.competitor}</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text2)',
            fontWeight: 400,
            fontStyle: 'italic',
            marginBottom: '1rem',
            lineHeight: 1.6,
          }}>
            "{card.tagline}"
          </p>

          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text3)',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            {card.verdict}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/pricing" className="glass-btn glass-btn-primary">
              See Baynix Pricing →
            </a>
            <a href="/contact" className="glass-btn glass-btn-secondary">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '4rem 2rem',
        display: 'grid',
        gridTemplateColumns: '220px 1fr',
        gap: '3rem',
        alignItems: 'start',
      }}
      className="battlecard-grid"
      >

        {/* Sticky sidebar TOC */}
        <aside style={{
          position: 'sticky',
          top: 90,
        }}
        className="battlecard-sidebar"
        >
          <div style={{
            padding: '1.25rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            borderRadius: 14,
          }}>
            <p style={{
              fontSize: '0.65rem', textTransform: 'uppercase',
              letterSpacing: '0.1em', color: 'var(--text3)',
              marginBottom: '1rem', fontWeight: 600,
            }}>
              On this page
            </p>
            {[
                { href: '#limitations', label: `${card.competitor}'s Limitations` },
              { href: '#comparison', label: 'Feature Comparison' },
              { href: '#pain-points', label: 'Key Differences' },
              { href: '#verdict', label: 'Final Verdict' },
              { href: '#others', label: 'Other Comparisons' },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{
                display: 'block',
                fontSize: '0.8rem',
                color: 'var(--text3)',
                textDecoration: 'none',
                padding: '0.4rem 0.5rem',
                borderRadius: 6,
                marginBottom: '0.15rem',
                transition: 'all 0.15s',
                borderLeft: '2px solid transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.borderLeftColor = card.accentColor
                e.currentTarget.style.paddingLeft = '0.75rem'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text3)'
                e.currentTarget.style.borderLeftColor = 'transparent'
                e.currentTarget.style.paddingLeft = '0.5rem'
                e.currentTarget.style.background = 'transparent'
              }}
              >
                {label}
              </a>
            ))}

            {/* Other comparisons in sidebar */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <p style={{
                fontSize: '0.65rem', textTransform: 'uppercase',
                letterSpacing: '0.1em', color: 'var(--text3)',
                marginBottom: '0.75rem', fontWeight: 600,
              }}>
                Also compare
              </p>
              {others.map(b => (
                <Link key={b.slug} href={b.path} style={{
                  display: 'block',
                  fontSize: '0.78rem',
                  color: 'var(--text3)',
                  textDecoration: 'none',
                  padding: '0.35rem 0.5rem',
                  borderRadius: 6,
                  marginBottom: '0.1rem',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text3)'
                  e.currentTarget.style.background = 'transparent'
                }}
                >
                  vs {b.competitor} →
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

            {/* Limitations Section */}
<section id="limitations">
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
    fontSize: '0.72rem', textTransform: 'uppercase' as const,
    letterSpacing: '0.12em', color: '#f87171',
    padding: '0.3rem 0.8rem',
    border: '1px solid rgba(248,113,113,0.3)',
    borderRadius: 20,
    background: 'rgba(248,113,113,0.08)',
    marginBottom: '1.25rem',
  }}>
    Why switch?
  </div>

  <h2 style={{
    fontSize: '1.4rem', fontWeight: 700,
    marginBottom: '0.75rem', letterSpacing: '-0.02em',
  }}>
    Why you should consider a {card.competitor} alternative
  </h2>

  <p style={{
    fontSize: '0.9rem', color: 'var(--text3)',
    lineHeight: 1.8, fontWeight: 300,
    marginBottom: '2rem',
    padding: '1.25rem 1.5rem',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    borderLeft: `3px solid ${card.accentColor}`,
  }}>
    {card.limitationsIntro}
  </p>

  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
    {card.limitations.map((l, i) => {
      const Icon = iconMap[l.icon] ?? Bot
      return (
        <div key={l.title} style={{
          display: 'flex',
          gap: '1.25rem',
          padding: '1.25rem 1.5rem',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          alignItems: 'flex-start',
          transition: 'border-color 0.2s, background 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${l.iconColor}40`
          e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
        }}
        >
          {/* Number + Icon */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
            <div style={{
              width: 40, height: 40,
              borderRadius: 10,
              background: `${l.iconColor}15`,
              border: `1px solid ${l.iconColor}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 0 12px ${l.iconColor}15`,
            }}>
              <Icon size={18} color={l.iconColor} strokeWidth={1.8} />
            </div>
            <span style={{
              fontSize: '0.65rem', fontWeight: 700,
              color: 'var(--text3)', letterSpacing: '0.05em',
            }}>
              0{i + 1}
            </span>
          </div>

          {/* Content */}
          <div>
            <h3 style={{
              fontSize: '0.95rem', fontWeight: 700,
              color: 'var(--text)', marginBottom: '0.4rem',
            }}>
              {l.title}
            </h3>
            <p style={{
              fontSize: '0.82rem', color: 'var(--text3)',
              lineHeight: 1.7, fontWeight: 300, margin: 0,
            }}>
              {l.body}
            </p>
          </div>
        </div>
      )
    })}
  </div>
</section>

          {/* Comparison Table */}
          <section id="comparison">
            <h2 style={{
              fontSize: '1.4rem', fontWeight: 700,
              marginBottom: '0.4rem', letterSpacing: '-0.02em',
            }}>
              Feature Comparison
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '1.5rem' }}>
              Baynix vs {card.competitor} — side by side
            </p>

            <div style={{
              border: '1px solid var(--border)',
              borderRadius: 16,
              overflow: 'hidden',
            }}>
              {/* Table header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ padding: '0.9rem 1.25rem', fontSize: '0.75rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Feature
                </div>
                <div style={{ padding: '0.9rem 1rem', fontSize: '0.8rem', fontWeight: 700, color: '#34d399', textAlign: 'center' }}>
                  Baynix
                </div>
                <div style={{ padding: '0.9rem 1rem', fontSize: '0.8rem', fontWeight: 600, color: card.accentColor, textAlign: 'center' }}>
                  {card.competitor}
                </div>
              </div>

              {/* Table rows */}
              {card.features.map((f, i) => (
                <div
                  key={f.name}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    borderBottom: i < card.features.length - 1 ? '1px solid var(--border)' : 'none',
                    background: f.highlight
                      ? 'rgba(52,211,153,0.03)'
                      : i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                  onMouseLeave={e => (e.currentTarget.style.background = f.highlight ? 'rgba(52,211,153,0.03)' : i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)')}
                >
                  <div style={{
                    padding: '0.85rem 1.25rem',
                    fontSize: '0.85rem',
                    color: 'var(--text2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    {f.highlight && (
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#34d399', flexShrink: 0,
                        boxShadow: '0 0 6px #34d399',
                      }} />
                    )}
                    {f.name}
                  </div>

                  {/* Baynix column */}
                  <div style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CellBadge status={f.baynix.status} label={f.baynix.label} />
                  </div>

                  {/* Competitor column */}
                  <div style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CellBadge status={f.competitor.status} label={f.competitor.label} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pain Points */}
            <section id="pain-points">
            <h2 style={{
                fontSize: '1.4rem', fontWeight: 700,
                marginBottom: '0.4rem', letterSpacing: '-0.02em',
            }}>
                Key Differences
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '1.5rem' }}>
                Where Baynix pulls ahead
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
            }}
            className="pain-grid"
            >
                {card.painPoints.map((p) => {
                const Icon = iconMap[p.icon] ?? Bot
                return (
                    <div key={p.title} style={{
                    padding: '1.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${card.accentColor}50`
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    >
                    <div style={{
                        position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
                        background: `linear-gradient(90deg, transparent, ${card.accentColor}40, transparent)`,
                    }} />

                    {/* Icon container */}
                    <div style={{
                        width: 42, height: 42,
                        borderRadius: 12,
                        background: `${p.iconColor}18`,
                        border: `1px solid ${p.iconColor}35`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                        boxShadow: `0 0 16px ${p.iconColor}20`,
                    }}>
                        <Icon size={20} color={p.iconColor} strokeWidth={1.8} />
                    </div>

                    <h3 style={{
                        fontSize: '0.95rem', fontWeight: 700,
                        marginBottom: '0.5rem', color: 'var(--text)',
                    }}>
                        {p.title}
                    </h3>
                    <p style={{
                        fontSize: '0.82rem', color: 'var(--text3)',
                        lineHeight: 1.7, fontWeight: 300,
                    }}>
                        {p.body}
                    </p>
                    </div>
                )
                })}
            </div>
            </section>

          {/* Verdict CTA */}
          <section id="verdict" style={{
            padding: '2.5rem',
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${card.accentColor}30`,
            borderRadius: 20,
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: '20%', right: '20%', height: 1,
              background: `linear-gradient(90deg, transparent, ${card.accentColor}60, transparent)`,
            }} />
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: `radial-gradient(ellipse 500px 200px at 50% 100%, ${card.accentColor}10 0%, transparent 70%)`,
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{
                fontSize: '0.7rem', textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'var(--text3)',
                marginBottom: '0.75rem',
              }}>
                Final Verdict
              </p>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 800, letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}>
                Ready to switch to Baynix?
              </h2>
              <p style={{
                fontSize: '0.9rem', color: 'var(--text3)',
                maxWidth: 500, margin: '0 auto 2rem',
                lineHeight: 1.7, fontWeight: 300,
              }}>
                Join businesses that chose Baynix for transparent pricing, true omnichannel reach, and support that actually responds.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/contact" className="glass-btn glass-btn-primary">
                  Get Started Free →
                </a>
                <a href="https://developers.baynix.ai" target="_blank" rel="noopener noreferrer" className="glass-btn glass-btn-secondary">
                  View API Docs
                </a>
              </div>
            </div>
          </section>

          {/* Other comparisons */}
          <section id="others">
            <h2 style={{
              fontSize: '1.1rem', fontWeight: 700,
              marginBottom: '1rem', letterSpacing: '-0.02em',
            }}>
              More comparisons
            </h2>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {others.map(b => (
                <Link key={b.slug} href={b.path} style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  fontSize: '0.82rem',
                  color: 'var(--text3)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = b.accentColor
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text3)'
                  e.currentTarget.style.background = 'transparent'
                }}
                >
                  Baynix vs {b.competitor} →
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}