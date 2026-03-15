'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageBox from '@/components/ImageBox'
import { useState } from 'react'
import {
  Zap, DollarSign, Layers,
  ShieldCheck, UserCheck, Lock, CreditCard,
  CheckCircle2,
} from 'lucide-react'

// ── Why Baynix cards ──────────────────────────────────────────────────
const whyBaynix = [
  {
    icon: Zap,
    title: 'Quick to Implement',
    bullets: [
      'Reduce time to market by using an included, off-the-shelf API solution.',
      'Execute using an easy process in a day.',
    ],
    color: '#f59e0b',
  },
  {
    icon: DollarSign,
    title: 'Cost-effective',
    bullets: [
      'Pay one fee per session — no extra charges for longer calls or buying a phone number.',
      'Reduce the amount of resources needed for internal growth.',
    ],
    color: '#10b981',
  },
  {
    icon: Layers,
    title: 'Feature Rich',
    bullets: [
      "It's easier to make two-way calls and reuse phone numbers with strong logic.",
      'Top-notch infrastructure ensures fewer call drops and excellent call quality.',
    ],
    color: '#ec4899',
  },
]

// ── API Benefits ──────────────────────────────────────────────────────
const apiBenefits = [
  {
    icon: ShieldCheck,
    title: 'Protect User Data',
    desc: 'Protect user data and privacy, enabling clients to communicate openly with producers without exposing personal contact details.',
    color: '#6366f1',
  },
  {
    icon: UserCheck,
    title: 'Empower Agents',
    desc: 'Empower agents to speak with users directly without disclosing their private phone numbers, maintaining professional boundaries.',
    color: '#f59e0b',
  },
  {
    icon: Lock,
    title: 'Platform Security',
    desc: 'Ensure platform security as well as prevent off-platform exchanges between customers and sellers that could bypass your ecosystem.',
    color: '#10b981',
  },
  {
    icon: CreditCard,
    title: 'Quick Payments',
    desc: 'Link buyers and sellers for seamless transactions without compromising security or privacy at any step of the payment flow.',
    color: '#ec4899',
  },
]

// ── Use cases ─────────────────────────────────────────────────────────
const useCases = [
  'App Cab drivers and passengers',
  'Online shoppers and sellers',
  'Online patients and doctors',
  'Global companies with customers',
]

// ── Testimonials ──────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Ankit Sharma',
    role: 'CTO, RideFast',
    text: "Number masking from Baynix was a must-have for our ride-hailing platform. Drivers and passengers can call each other freely — neither party ever sees the other's real number. Integration took one day using the REST API.",
    avatar: 'AS',
    color: '#6366f1',
  },
  {
    name: 'Meera Nair',
    role: 'Head of Trust & Safety, MarketHub',
    text: "We had serious issues with sellers and buyers taking conversations off-platform. Since implementing Baynix number masking, all communications stay on our platform. Fraud incidents dropped by 70% in three months.",
    avatar: 'MN',
    color: '#f59e0b',
  },
  {
    name: 'Dr. Rajan Pillai',
    role: 'Product Lead, TeleDoc',
    text: "Patient privacy is non-negotiable in healthcare. Baynix's masked calling lets our doctors consult patients without sharing personal numbers. The call quality is crystal clear and our patients feel genuinely secure.",
    avatar: 'RP',
    color: '#10b981',
  },
]

// ── FAQs ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is call masking?',
    a: "Call masking is a telephony feature that replaces the real phone numbers of both parties in a call with a temporary, virtual number. When a call is made through a masked number system, neither the caller nor the receiver sees the other's actual phone number — only the virtual proxy number is visible, keeping both parties' identities private.",
  },
  {
    q: 'What is Number masking?',
    a: "Number masking (also called phone number masking or call masking) is a privacy-protection service that allows two parties to communicate via a temporary virtual number without revealing their real contact details. It is widely used in on-demand platforms such as ride-hailing, food delivery, e-commerce, and telemedicine to protect users while enabling seamless communication.",
  },
  {
    q: 'How can I mask my mobile number?',
    a: "To mask your mobile number using Baynix, you integrate our Number Masking API into your platform. When a session is initiated (e.g., a driver assigned to a passenger), the API automatically generates a temporary virtual number for that session. Both parties call this virtual number, and Baynix routes the call between them invisibly — neither party sees the other's real number. Sessions expire after a configurable duration.",
  },
  {
    q: 'How can I mask my phone number in India?',
    a: "In India, Baynix provides number masking through a pool of licensed virtual numbers that comply with TRAI regulations. Our platform provisions dedicated session numbers, supports all major telecom operators (Jio, Airtel, Vi, BSNL), and offers local number prefixes for better answer rates. Setup requires a simple API integration and takes less than a day to go live.",
  },
]

const inputStyle = {
  width: '100%', padding: '0.75rem 1rem',
  background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
  fontSize: '0.9rem', color: 'var(--text)', outline: 'none',
  transition: 'all 0.2s ease', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' as const,
}

const cardEnter = (color: string) => (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
  e.currentTarget.style.border = `1px solid ${color}33`
  e.currentTarget.style.transform = 'translateY(-4px)'
  e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${color}11`
}
const cardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
  e.currentTarget.style.transform = 'translateY(0)'
  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)'
}

export default function NumberMaskingPage() {
  const [openFaq, setOpenFaq]     = useState<number | null>(0)
  const [focused, setFocused]     = useState<string | null>(null)
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  // Accent: violet/purple
  const accent    = '#a78bfa'
  const accentRgb = '167,139,250'

  const getFocusStyle = (field: string) =>
    focused === field
      ? { ...inputStyle, border: `1px solid rgba(${accentRgb},0.5)`, background: 'rgba(255,255,255,0.06)', boxShadow: `0 0 0 3px rgba(${accentRgb},0.1)` }
      : inputStyle

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO — text left, image right ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: `radial-gradient(ellipse, rgba(${accentRgb},0.09) 0%, transparent 70%)`, top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.3)`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                Number Masking
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1rem' }}>
                Number Masking
              </h1>
              <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.65rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '1.25rem' }}>
                <span style={{ background: `linear-gradient(135deg, ${accent}, #c4b5fd, #ec4899)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Integrate Agents and Clients Without Sharing Personal Phone Numbers
                </span>
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', maxWidth: 480 }}>
                Number masking is a special service that ensures callers' privacy and gives them a sense of security and comfort.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image right */}
            <ImageBox
              src="/images/masking-hero.png"
              alt="Number Masking"
              width={800}
              height={440}
              background={`linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(236,72,153,0.08), rgba(16,185,129,0.05))`}
              border="1px solid rgba(255,255,255,0.08)"
              borderRadius={24}
              boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)"
              imageStyle={{ objectFit: 'contain', borderRadius: 24 }}
            >
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, rgba(${accentRgb},0.1), transparent 60%)`, pointerEvents: 'none' }} />
            </ImageBox>
          </div>
        </section>

        {/* ── NUMBER MASKING SERVICES — image left, text right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', right: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl' as any, position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ direction: 'ltr', borderRadius: 20, transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/masking-services.png"
                alt="Number Masking Services"
                width={800}
                height={440}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.1), rgba(236,72,153,0.07))`}
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={20}
                boxShadow="0 24px 60px rgba(0,0,0,0.4)"
                imageStyle={{ objectFit: 'contain' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 100%, rgba(${accentRgb},0.1), transparent 70%)`, pointerEvents: 'none' }} />
              </ImageBox>
            </div>

            {/* Text right */}
            <div style={{ direction: 'ltr' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                The Service
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Number Masking Services
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
                Encrypt communications between two parties to prevent the sharing of private phone numbers.
              </p>

              {/* Bullet points */}
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { label: 'Keep user information safe', desc: 'Help users connect with different service providers like drivers, delivery agents, sellers, technicians, and others without giving out their phone numbers.' },
                  { label: 'Avoid platform leakage', desc: 'Make sure everything like transactions and messages stays only on your platform.' },
                  { label: "Protect the brand's image", desc: "Keep users feeling safe and happy by making sure their privacy is respected and they are secure." },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <CheckCircle2 size={13} color={accent} strokeWidth={2.5} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>{item.label}</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
            </div>
          </div>
        </section>

        {/* ── WHY BAYNIX — 3 icon cards with bullet sub-points ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Why Baynix
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Why Baynix for Number Masking?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {whyBaynix.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} style={{ padding: '2.25rem 2rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                    onMouseEnter={cardEnter(item.color)} onMouseLeave={cardLeave}>
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <Icon size={22} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.7rem' }}>
                      {item.bullets.map((b, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                          <div style={{ width: 18, height: 18, borderRadius: '50%', background: `${item.color}15`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                            <CheckCircle2 size={11} color={item.color} strokeWidth={2.5} />
                          </div>
                          <span style={{ fontSize: '0.83rem', color: 'var(--text2)', lineHeight: 1.65, fontWeight: 300 }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── SMART VOICE CTA — text left, illustration right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.08) 0%, transparent 70%)`, top: '50%', left: '8%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Are You Trying to find Smart Voice Solutions?
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Baynix's Number Masking API is platform-agnostic and integrates with your existing tech stack in hours. Protect your users, secure your platform, and build trust — all through a single API call.
              </p>
              <a href="#enquiry" className="glass-btn glass-btn-primary">Get Started Now →</a>
            </div>

            <div
              style={{ borderRadius: 24, transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/masking-smart.png"
                alt="Smart Voice Solutions"
                width={800}
                height={400}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(236,72,153,0.08))`}
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={24}
                boxShadow="inset 0 1px 0 rgba(255,255,255,0.08)"
                imageStyle={{ objectFit: 'cover' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 60% 40%, rgba(${accentRgb},0.12), transparent 60%)`, pointerEvents: 'none' }} />
              </ImageBox>
            </div>
          </div>
        </section>

        {/* ── API BENEFITS — 4 icon cards ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                API Benefits
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Benefits of Baynix's Number Masking API
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
              {apiBenefits.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} style={{ padding: '2rem 1.75rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                    onMouseEnter={cardEnter(item.color)} onMouseLeave={cardLeave}>
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <Icon size={22} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── USE CASES — image left, tick list right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)', top: '50%', right: '5%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl' as any, position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ direction: 'ltr', borderRadius: 20, transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/masking-usecases.png"
                alt="Number Masking Use Cases"
                width={800}
                height={420}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.1), rgba(16,185,129,0.08))`}
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={20}
                boxShadow="0 24px 60px rgba(0,0,0,0.4)"
                imageStyle={{ objectFit: 'contain' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 100%, rgba(${accentRgb},0.1), transparent 70%)`, pointerEvents: 'none' }} />
              </ImageBox>
            </div>

            {/* Text right */}
            <div style={{ direction: 'ltr' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Use Cases
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.25, color: 'var(--text)', marginBottom: '0.75rem' }}>
                Where All Number Masking Is Used Successfully To Connect
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.7, marginBottom: '2rem' }}>
                Number masking is the trust layer powering the world's leading on-demand platforms. Wherever two strangers need to communicate safely, masking makes it possible.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
                {useCases.map((uc, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={13} color={accent} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.5, fontWeight: 500 }}>{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.06) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Happy Clients
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>What our clients say</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {testimonials.map((t) => (
                <div key={t.name} style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
                  <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${t.color}66, transparent)` }} />
                  <div style={{ fontSize: '2rem', lineHeight: 1, color: `${t.color}40`, fontFamily: 'Georgia, serif', marginBottom: '1rem' }}>"</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem', fontStyle: 'italic' }}>{t.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${t.color}20`, border: `1px solid ${t.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: t.color, flexShrink: 0 }}>{t.avatar}</div>
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
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.06) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Contact Us
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>Quickly boost delivery rates!</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get Started With Baynix Number Masking</p>
            </div>

            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, rgba(${accentRgb},0.5), transparent)` }} />

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
                    <input type="text" placeholder="Your name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={getFocusStyle('name')} />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Email *</label>
                    <input type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} style={getFocusStyle('email')} />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Message *</label>
                    <textarea placeholder="Tell us about your requirements..." required rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)} style={{ ...getFocusStyle('msg'), resize: 'vertical' as const, minHeight: 100 }} />
                  </div>
                  <button type="submit" className="glass-btn glass-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Enquiry Now →</button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.05) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>Number Masking — FAQ's</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: openFaq === i ? `1px solid rgba(${accentRgb},0.3)` : '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: openFaq === i ? `0 8px 32px rgba(${accentRgb},0.1)` : 'none' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' as const, gap: '1rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>{faq.q}</span>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: openFaq === i ? `rgba(${accentRgb},0.2)` : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', fontSize: '0.8rem', color: openFaq === i ? accent : 'var(--text3)' }}>
                      {openFaq === i ? '−' : '+'}
                    </div>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem' }}>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
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