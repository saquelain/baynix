'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { Zap, DollarSign, Layers, BarChart2, Receipt, LifeBuoy } from 'lucide-react'

const smppFeatures = [
  {
    title: 'Global SMS Coverage',
    desc: 'Send messages to over 200 countries across the world with reliable telecom partnerships.',
    color: '#3b82f6',
    illustration: '/images/smpp-global.svg',
  },
  {
    title: 'Secure and Reliable Routes',
    desc: 'Enterprise-grade secure gateways with redundant routing to ensure maximum uptime and delivery.',
    color: '#6366f1',
    illustration: '/images/smpp-secure.svg',
  },
  {
    title: 'Transactional & Promotional SMS',
    desc: 'Full support for both transactional and promotional message types across all networks.',
    color: '#22d3ee',
    illustration: '/images/smpp-types.svg',
  },
  {
    title: 'High Throughput Gateway',
    desc: 'Powerful SMS gateway capable of handling millions of messages with low latency and high speed.',
    color: '#10b981',
    illustration: '/images/smpp-throughput.svg',
  },
  {
    title: 'Concatenated & Unicode SMS',
    desc: 'Native support for long messages, binary SMS, and unicode to reach users in any language.',
    color: '#f59e0b',
    illustration: '/images/smpp-unicode.svg',
  },
  {
    title: '24/7 Technical Support',
    desc: 'Our technical team is always available to assist with integration and maximize gateway potential.',
    color: '#a78bfa',
    illustration: '/images/smpp-support.svg',
  },
]

const whyChoose = [
  { icon: Zap,        title: 'Quick to Implement',    desc: 'Get connected to our SMPP gateway in minutes with clear documentation and dedicated onboarding support.',       color: '#3b82f6' },
  { icon: DollarSign, title: 'Cost-effective',         desc: 'Competitive pricing with no hidden fees. Pay only for what you send with flexible volume-based plans.',          color: '#10b981' },
  { icon: Layers,     title: 'Feature Rich',           desc: 'Support for all SMS types — transactional, promotional, unicode, binary, and concatenated — out of the box.',   color: '#6366f1' },
  { icon: BarChart2,  title: 'Real-Time Statistics',   desc: 'Monitor delivery rates, throughput, and campaign performance live from your dashboard.',                         color: '#22d3ee' },
  { icon: Receipt,    title: 'Transparent Billing',    desc: 'Clear, itemized billing with no surprises. Full visibility into usage and costs at all times.',                   color: '#f59e0b' },
  { icon: LifeBuoy,   title: '365 Days of Support',    desc: 'Round-the-clock support every day of the year. Our team is always ready to resolve issues fast.',                color: '#a78bfa' },
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CTO, FinEdge Technologies',
    text: 'Baynix SMPP gateway has been rock solid for our transactional alerts. Throughput is excellent and the team was incredibly helpful during integration.',
    avatar: 'RS',
    color: '#3b82f6',
  },
  {
    name: 'Priya Menon',
    role: 'Head of Marketing, RetailX',
    text: 'We switched to Baynix for our promotional campaigns and saw a 40% improvement in delivery rates. The real-time dashboard is a game changer.',
    avatar: 'PM',
    color: '#6366f1',
  },
  {
    name: 'Aditya Verma',
    role: 'Founder, MessagingPro',
    text: 'As an SMS aggregator, reliability is everything. Baynix delivers on every front — uptime, speed, support, and pricing. Highly recommended.',
    avatar: 'AV',
    color: '#22d3ee',
  },
]

const faqs = [
  {
    q: 'What is an SMPP Gateway?',
    a: 'SMPP (Short Message Peer-to-Peer) is an industry-standard protocol used by telecom entities to exchange SMS messages. An SMPP Gateway allows applications to connect directly to telecom networks to send and receive high volumes of SMS with low latency and high reliability.',
  },
  {
    q: 'Who should use an SMPP Gateway API?',
    a: 'SMPP is ideal for enterprises, SMS aggregators, wholesalers, and resellers who need to send bulk SMS at high throughput. It is especially suited for businesses that require direct carrier-grade connectivity and need to send millions of messages reliably.',
  },
  {
    q: 'What SMS types does Baynix SMPP support?',
    a: 'Baynix SMPP Gateway supports all major SMS types including standard SMS, concatenated (long) messages, unicode messages for multilingual content, binary SMS, and both transactional and promotional message categories.',
  },
  {
    q: 'How do I get started with the Baynix SMPP Gateway?',
    a: 'Simply sign up for an account at app.baynix.ai, request SMPP access from your dashboard, and our technical team will provide you with your SMPP credentials and assist with integration into your existing application or platform.',
  },
]

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: '0.9rem',
  color: 'var(--text)',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'Inter, sans-serif',
  boxSizing: 'border-box' as const,
}

export default function SmppPlatformPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [focused, setFocused] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const getFocusStyle = (field: string) =>
    focused === field
      ? {
          ...inputStyle,
          border: '1px solid rgba(99,102,241,0.5)',
          background: 'rgba(255,255,255,0.06)',
          boxShadow: '0 0 0 3px rgba(99,102,241,0.1)',
        }
      : inputStyle

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{
            position: 'absolute', width: 700, height: 500,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
            top: '50%', left: '30%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', width: 400, height: 400,
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)',
            top: '20%', right: '5%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.3rem 0.9rem',
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: 100, fontSize: '0.72rem', fontWeight: 700,
                color: '#a78bfa', letterSpacing: '0.1em',
                textTransform: 'uppercase' as const, marginBottom: '1.5rem',
              }}>
                No Experience Required
              </div>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1,
                color: 'var(--text)', marginBottom: '1.5rem',
              }}>
                Future-proof{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #22d3ee)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  SMPP Gateway
                </span>
              </h1>

              <p style={{
                fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem', maxWidth: 480,
              }}>
                Our SMPP SMS Gateway API is extensively utilized by enterprises, SMS aggregators, wholesalers, and resellers. It enables seamless integration with enterprise applications or software to send both transactional and promotional bulk SMS globally. Our API supports concatenated SMS, binary SMS, and unicode messages.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero illustration placeholder */}
            <div style={{
              height: 400, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.08), rgba(34,211,238,0.06))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.3)',
            }}>
              {/* Replace src with your actual image later */}
              <Image src="/images/smpp-hero.png" alt="Click to WhatsApp Ads" fill style={{ objectFit: 'contain', borderRadius: 24 }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(99,102,241,0.1), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)',
            top: '50%', right: '10%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                What We Offer
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Features of our SMPP Gateway API
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {smppFeatures.map((f) => (
                <div
                  key={f.title}
                  style={{
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, position: 'relative', overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.border = `1px solid ${f.color}33`
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${f.color}11`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)'
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                    background: `linear-gradient(90deg, transparent, ${f.color}66, transparent)`,
                  }} />

                  {/* Illustration placeholder */}
                  <div style={{
                    width: '100%', height: 130, borderRadius: 12,
                    background: `linear-gradient(135deg, ${f.color}12, ${f.color}06)`,
                    border: `1px solid ${f.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem', position: 'relative', overflow: 'hidden',
                    flexDirection: 'column' as const, gap: '0.4rem',
                  }}>
                    <Image src={f.illustration} alt={f.title} fill style={{ objectFit: 'contain', padding: '1rem' }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `radial-gradient(circle at 50% 100%, ${f.color}15, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />
                  </div>

                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEND AUTOMATED MESSAGES / CTA SPLIT ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
            top: '50%', left: '20%', transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Global Reach
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.2,
                color: 'var(--text)', marginBottom: '1.25rem',
              }}>
                Send Automated Messages From Your System To More Than{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  200 Countries
                </span>{' '}
                Across The World.
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem',
              }}>
                Our technical team is always available to assist with the necessary integration to maximize the potential of the SMPP gateway within your existing application. Enterprises, aggregators, and resellers trust us for reliable global delivery.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Get Started Now →</a>
            </div>

            {/* Illustration placeholder */}
            <div style={{
              height: 360, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.08))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              flexDirection: 'column' as const, gap: '0.75rem',
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: 'rgba(59,130,246,0.15)',
                border: '1px solid rgba(59,130,246,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem',
              }}>🌍</div>
              <Image src="/images/smpp-getstarted.svg" alt="Engage" fill style={{ objectFit: 'contain', padding: '1rem', filter: "invert(0.3)" }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 60% 40%, rgba(59,130,246,0.1), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Why Baynix
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Why Choose Baynix for SMPP Services?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {whyChoose.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    style={{
                      padding: '2rem',
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 20, position: 'relative', overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.border = `1px solid ${item.color}33`
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${item.color}11`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)'
                    }}
                  >
                    <div style={{
                      position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                      background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)`,
                    }} />
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}>
                      <Icon size={22} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Happy Clients
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                What our clients say
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, position: 'relative', overflow: 'hidden',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                    background: `linear-gradient(90deg, transparent, ${t.color}66, transparent)`,
                  }} />

                  {/* Quote */}
                  <div style={{
                    fontSize: '2rem', lineHeight: 1, color: `${t.color}40`,
                    fontFamily: 'Georgia, serif', marginBottom: '1rem',
                  }}>
                    "
                  </div>

                  <p style={{
                    fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.7,
                    fontWeight: 300, marginBottom: '1.5rem', fontStyle: 'italic',
                  }}>
                    {t.text}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: `${t.color}20`,
                      border: `1px solid ${t.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, color: t.color,
                      flexShrink: 0,
                    }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)' }}>{t.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text3)', fontWeight: 400 }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENQUIRY FORM ── */}
        <section id="enquiry" style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem',
              }}>
                Quickly boost delivery rates!
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>
                Get Started With Baynix SMPP Gateway
              </p>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
              }} />

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>Enquiry Sent!</h3>
                  <p style={{ color: 'var(--text2)', fontWeight: 300 }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Name *</label>
                    <input
                      type="text" placeholder="Your name" required
                      value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      style={getFocusStyle('name')}
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Email *</label>
                    <input
                      type="email" placeholder="your@email.com" required
                      value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      style={getFocusStyle('email')}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Message *</label>
                    <textarea
                      placeholder="Tell us about your requirements..." required rows={4}
                      value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)}
                      style={{ ...getFocusStyle('msg'), resize: 'vertical' as const, minHeight: 100 }}
                    />
                  </div>
                  <button type="submit" className="glass-btn glass-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Enquiry Now →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                SMPP Gateway — FAQ's
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                    border: openFaq === i ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16, overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: openFaq === i ? '0 8px 32px rgba(99,102,241,0.1)' : 'none',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', padding: '1.25rem 1.5rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      textAlign: 'left' as const, gap: '1rem',
                    }}
                  >
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: openFaq === i ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'all 0.2s',
                      fontSize: '0.8rem', color: openFaq === i ? '#a78bfa' : 'var(--text3)',
                    }}>
                      {openFaq === i ? '−' : '+'}
                    </div>
                  </button>

                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem' }}>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}