'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { BarChart2, AlignJustify, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: BarChart2,
    title: 'Real Time Reporting',
    desc: 'Providing instant insights into SMS interactions for businesses, facilitating timely analysis and decision-making.',
    color: '#22d3ee',
  },
  {
    icon: AlignJustify,
    title: 'Standard Length',
    desc: 'Providing instant insights into SMS interactions for businesses, facilitating timely analysis and decision-making.',
    color: '#10b981',
  },
  {
    icon: MessageSquare,
    title: 'Keyword Response',
    desc: 'Customers can respond to a Long Code SMS with a specific keyword. It saves a lot of time for both customers and enterprises.',
    color: '#6366f1',
  },
]

const accordionItems = [
  {
    title: 'Short Setup Time',
    content: 'Long code SMS services can be activated almost instantly, with no lengthy carrier approval process required. Unlike short codes, long codes are available on demand — allowing your business to start sending and receiving SMS messages within minutes of signing up with Baynix.',
    color: '#22d3ee',
  },
  {
    title: 'Two-way Communication',
    content: 'Long codes support true two-way SMS conversations. Customers can reply directly to your messages, enabling interactive support flows, feedback collection, appointment confirmations, and more. Every reply is captured in your Baynix dashboard for easy management.',
    color: '#10b981',
  },
  {
    title: 'Customized Messages',
    content: 'Personalize every message using dynamic fields such as customer name, order ID, appointment details, or any custom variable from your CRM or database. Tailored messages see significantly higher engagement than generic broadcasts.',
    color: '#6366f1',
  },
  {
    title: 'Diverse Audience',
    content: 'Long codes work across all carriers and devices, giving your messages universal reach. They are especially effective for conversational messaging with individual customers, making them ideal for support, authentication, and relationship-driven communication.',
    color: '#a78bfa',
  },
]

const testimonials = [
  {
    name: 'Vikram Joshi',
    role: 'Support Manager, TechDesk',
    text: 'Long codes from Baynix gave us a dedicated number for customer support SMS. Our team can hold two-way conversations right from the dashboard — it\'s transformed how we handle support tickets.',
    avatar: 'VJ',
    color: '#22d3ee',
  },
  {
    name: 'Priyanka Das',
    role: 'CRM Lead, HealthFirst',
    text: 'We use long codes for appointment reminders and patient follow-ups. The two-way communication means patients can confirm or reschedule with a single reply — no-shows dropped by 30%.',
    avatar: 'PD',
    color: '#10b981',
  },
  {
    name: 'Amit Chauhan',
    role: 'Founder, LocalBiz',
    text: 'As a small business, long codes were perfect. Zero setup fees, instant activation, and a real 10-digit number that customers recognize and trust. Baynix made it incredibly simple.',
    avatar: 'AC',
    color: '#6366f1',
  },
]

const faqs = [
  {
    q: 'What Long Codes are used for?',
    a: 'Long codes are 10-digit phone numbers primarily used for person-to-person and business-to-consumer SMS messaging. They are ideal for two-way conversational messaging, customer support, appointment reminders, OTP delivery, lead follow-up, and any use case where you need a dedicated, recognizable number for ongoing customer relationships.',
  },
  {
    q: 'What is the difference between shortcode and long code SMS?',
    a: 'Short codes are 5–6 digit numbers designed for high-volume, one-way or keyword-based campaigns with carrier-approved throughput. Long codes are standard 10-digit numbers suited for conversational, two-way messaging with individual customers at lower volume. Short codes excel at mass broadcasts; long codes excel at personal, direct communication.',
  },
  {
    q: 'What is a long code text message?',
    a: 'A long code text message is an SMS sent to or from a standard 10-digit phone number. For businesses, this means customers receive messages from a consistent, recognizable number — just like receiving a text from a regular mobile phone — which builds familiarity and trust compared to short codes or random sender IDs.',
  },
  {
    q: "What's a Long Code?",
    a: 'A Long Code is a standard 10-digit phone number (e.g., +91-XXXXX-XXXXX in India, or 1-8YY toll-free format in the US) used for SMS and MMS communication. Businesses use long codes to establish a dedicated, persistent number for customer interactions — enabling two-way messaging, keyword responses, and conversational support at scale.',
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

export default function LongCodesPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)
  const [openFaq, setOpenFaq]             = useState<number | null>(0)
  const [focused, setFocused]             = useState<string | null>(null)
  const [form, setForm]                   = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted]         = useState(false)

  const getFocusStyle = (field: string) =>
    focused === field
      ? { ...inputStyle, border: '1px solid rgba(34,211,238,0.5)', background: 'rgba(255,255,255,0.06)', boxShadow: '0 0 0 3px rgba(34,211,238,0.1)' }
      : inputStyle

  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(34,211,238,0.09) 0%, transparent 70%)', top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(34,211,238,0.12)', border: '1px solid rgba(34,211,238,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#22d3ee', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                No Experience Required
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.5rem' }}>
                Future-proof{' '}
                <span style={{ background: 'linear-gradient(135deg, #22d3ee, #10b981, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Long Codes Services
                </span>
              </h1>

              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', maxWidth: 480 }}>
                Ensure user security with Baynix's Long Code service, facilitating seamless identity verification for online transactions and data protection across SMS, Voice, and WhatsApp channels.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image */}
            <div style={{ height: 420, borderRadius: 24, background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(16,185,129,0.08), rgba(99,102,241,0.06))', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {/* Uncomment when ready: */}
              <Image src="/images/longcode-hero.png" alt="Long Codes Service" fill style={{ objectFit: 'contain', borderRadius: 24 }} />
              <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(34,211,238,0.15)', border: '1px solid rgba(34,211,238,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>📞</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>longcode-hero.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(34,211,238,0.08), transparent 60%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── WHAT IS A LONG CODE ── */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#22d3ee', marginBottom: '1rem' }}>
              <span style={{ width: 18, height: 1, background: '#22d3ee', display: 'inline-block' }} />
              Overview
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '1.25rem' }}>
              What is a Long Code?
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>
              A Long Code is a 10-digit phone number used for exchanging SMS and MMS communications. Examples include toll-free numbers in the form of 1-8YY. Unlike short codes, long codes provide a dedicated, recognizable number for direct, conversational messaging with your customers.
            </p>
          </div>
        </section>

        {/* ── FEATURES GRID (3 ICONS) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#22d3ee', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#22d3ee', display: 'inline-block' }} />
                Features
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Everything included with Long Codes
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.border = `1px solid ${f.color}33`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${f.color}11` }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${f.color}66, transparent)` }} />
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${f.color}15`, border: `1px solid ${f.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <Icon size={22} color={f.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{f.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── GET STARTED CTA ── */}
        <section style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '1rem' }}>
              Get started with Baynix Long Codes for direct and efficient SMS communication
            </h2>
            <a href="#enquiry" className="glass-btn glass-btn-primary">Get Started Now →</a>
          </div>
        </section>

        {/* ── WHY CHOOSE — ACCORDION + STICKY IMAGE ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', top: '50%', right: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#22d3ee', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#22d3ee', display: 'inline-block' }} />
                Why Choose Us
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', maxWidth: 600 }}>
                Why Choose Baynix's Long Code Services?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
              {/* Accordion */}
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
                {accordionItems.map((item, i) => (
                  <div
                    key={i}
                    style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: openAccordion === i ? `1px solid ${item.color}33` : '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: openAccordion === i ? `0 8px 32px ${item.color}12` : 'none' }}
                  >
                    <button
                      onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                      style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' as const, gap: '1rem' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', flexShrink: 0, background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>{item.title}</span>
                      </div>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: openAccordion === i ? `${item.color}20` : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', fontSize: '0.8rem', color: openAccordion === i ? item.color : 'var(--text3)' }}>
                        {openAccordion === i ? '−' : '+'}
                      </div>
                    </button>
                    {openAccordion === i && (
                      <div style={{ padding: '0 1.5rem 1.25rem' }}>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Sticky image right */}
              <div
                style={{ height: 420, borderRadius: 20, position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)', transition: 'transform 0.4s ease', background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(99,102,241,0.07))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem', position: 'sticky' as const, top: '6rem' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                {/* Uncomment when ready: */}
                <Image src="/images/longcode-why.png" alt="Why Long Codes" fill style={{ objectFit: 'contain' }} />
                <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(34,211,238,0.2)', border: '1px solid rgba(34,211,238,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📊</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>longcode-why.png</div>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(34,211,238,0.1), transparent 70%)', pointerEvents: 'none' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#22d3ee', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#22d3ee', display: 'inline-block' }} />
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
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#22d3ee', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#22d3ee', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>Quickly boost delivery rates!</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get Started With Baynix Long Codes</p>
            </div>

            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)' }} />

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
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#22d3ee', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#22d3ee', display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Long Code SMS Service — FAQ's
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: openFaq === i ? '1px solid rgba(34,211,238,0.3)' : '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: openFaq === i ? '0 8px 32px rgba(34,211,238,0.1)' : 'none' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' as const, gap: '1rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>{faq.q}</span>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: openFaq === i ? 'rgba(34,211,238,0.2)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', fontSize: '0.8rem', color: openFaq === i ? '#22d3ee' : 'var(--text3)' }}>
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