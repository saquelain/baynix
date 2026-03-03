'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { UserCheck, KeyRound, CreditCard, RefreshCcw } from 'lucide-react'

const steps = [
  {
    step: 'Step 1',
    title: 'Login Attempt',
    desc: 'The customer logs into their account with a username and password.',
    color: '#f59e0b',
    img: 'voice-otp-step1.png',
    emoji: '🔑',
  },
  {
    step: 'Step 2',
    title: 'Channel Selection',
    desc: 'A screen is displayed offering them a choice of channels for the delivery of an OTP to authenticate them.',
    color: '#6366f1',
    img: 'voice-otp-step2.png',
    emoji: '📱',
  },
  {
    step: 'Step 3',
    title: 'Voice Call Delivery',
    desc: 'The customer opts to receive a phone call. The OTP is read out clearly via an automated voice message.',
    color: '#10b981',
    img: 'voice-otp-step3.png',
    emoji: '📞',
  },
  {
    step: 'Step 4',
    title: 'OTP Verification',
    desc: 'The customer inputs the OTP from the call into the website or application to complete authentication.',
    color: '#22d3ee',
    img: 'voice-otp-step4.png',
    emoji: '✅',
  },
]

const whyChoose = [
  {
    icon: UserCheck,
    title: 'Authenticate Registrations',
    desc: 'Verify people registering for your services by sending OTPs on the Voice channel.',
    color: '#f59e0b',
  },
  {
    icon: KeyRound,
    title: 'Password Resets',
    desc: 'Lower the risk of account takeovers by sending Voice OTPs for password resets, especially after periods of inactivity.',
    color: '#6366f1',
  },
  {
    icon: CreditCard,
    title: 'Authenticate Transactions',
    desc: "Keep your customers' transactions safe and your business protected by sending OTP codes to verify legitimate transactions without any hassle.",
    color: '#10b981',
  },
  {
    icon: RefreshCcw,
    title: 'User Reactivation',
    desc: "When a user logs in after a long time, verify their identity with Voice OTPs to make sure they're the real account owner.",
    color: '#22d3ee',
  },
]

const testimonials = [
  {
    name: 'Arun Kapoor',
    role: 'Head of Security, BankPlus',
    text: "Voice OTP from Baynix has been a lifesaver. When SMS delivery fails in low-signal areas, the voice call fallback ensures customers always receive their OTP. Zero authentication failures.",
    avatar: 'AK',
    color: '#f59e0b',
  },
  {
    name: 'Sneha Mishra',
    role: 'Product Lead, InsureTech',
    text: "We moved to Voice OTP for high-value transactions. The clarity of the voice delivery means customers rarely misread codes. Our transaction success rate improved by 22% immediately.",
    avatar: 'SM',
    color: '#6366f1',
  },
  {
    name: 'Rohit Batra',
    role: 'Founder, FinFlow',
    text: "Integration was straightforward with Baynix's API. Our developers had Voice OTP live in a day. The dashboard analytics give us complete visibility into delivery rates and call logs.",
    avatar: 'RB',
    color: '#10b981',
  },
]

const faqs = [
  {
    q: 'How does Voice OTP work?',
    a: "When a user initiates an action requiring verification, Baynix's system generates a unique, time-sensitive OTP and triggers an automated voice call to the user's registered mobile number. The OTP is read aloud clearly multiple times, and the user enters it into the application to complete authentication.",
  },
  {
    q: 'Is Voice OTP secure?',
    a: 'Yes. Voice OTPs are time-sensitive (expiring within seconds to minutes), single-use, and delivered over telecom carrier networks rather than internet channels — making them resistant to phishing and SIM-swap attacks. Each OTP is generated using cryptographically secure algorithms.',
  },
  {
    q: 'Can I opt out of Voice OTP and choose other authentication methods?',
    a: "Absolutely. Voice OTP is typically offered as one channel option alongside SMS OTP and email verification. Baynix's platform supports multi-channel authentication, and your integration can present users with channel choices or automatically fall back to voice if SMS delivery fails.",
  },
  {
    q: 'Are there any additional charges for using Voice OTP?',
    a: 'Voice OTP is priced per successful call delivery. Baynix offers transparent, competitive per-call pricing with no hidden fees. Volume-based pricing plans are available for businesses with high authentication traffic. Contact our team for a custom quote based on your monthly call volume.',
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

export default function VoiceOtpPage() {
  const [openFaq, setOpenFaq]     = useState<number | null>(0)
  const [focused, setFocused]     = useState<string | null>(null)
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const getFocusStyle = (field: string) =>
    focused === field
      ? { ...inputStyle, border: '1px solid rgba(245,158,11,0.5)', background: 'rgba(255,255,255,0.06)', boxShadow: '0 0 0 3px rgba(245,158,11,0.1)' }
      : inputStyle

  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(245,158,11,0.09) 0%, transparent 70%)', top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#fbbf24', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                Voice OTP
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, color: 'var(--text)', marginBottom: '1.5rem' }}>
                Amplify your Message with{' '}
                <span style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Clarity and Impact
                </span>
              </h1>

              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', maxWidth: 480 }}>
                Utilize our cloud-enabled and scalable services to relay your vital messages securely via voice OTP.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image */}
            <div style={{ height: 420, borderRadius: 24, background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(99,102,241,0.08), rgba(34,211,238,0.06))', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}>
              <Image src="/images/voice-otp-hero.png" alt="Voice OTP" fill style={{ objectFit: 'contain', borderRadius: 24 }} />
              <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>🔐</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>voice-otp-hero.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(245,158,11,0.08), transparent 60%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── VOICE OTP SERVICES — image left, text right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', top: '50%', right: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl' as any, position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ height: 400, borderRadius: 20, direction: 'ltr', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)', transition: 'transform 0.4s ease', background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(99,102,241,0.07))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <Image src="/images/voice-otp-services.png" alt="Voice OTP Services" fill style={{ objectFit: 'contain' }} />
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🛡️</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>voice-otp-services.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(245,158,11,0.1), transparent 70%)', pointerEvents: 'none' }} />
            </div>

            {/* Text right */}
            <div style={{ direction: 'ltr' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Voice OTP Services
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Reliable, secure user authentication via voice
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1rem' }}>
                Voice OTP services offer businesses a reliable and secure method for authenticating users during online transactions and account logins. Through automated voice calls, these services deliver unique, time-sensitive codes to users, ensuring the protection of sensitive information.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Integration with existing authentication systems is seamless, allowing businesses to incorporate voice OTP functionality into their applications or websites with ease.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — VERTICAL TIMELINE ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Process
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                How the Voice OTP Process Works
              </h2>
            </div>

            {/* Timeline — alternating left/right */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0', position: 'relative' }}>
              {/* Center vertical line */}
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)', transform: 'translateX(-50%)', zIndex: 0 }} />

              {steps.map((step, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', gap: '0', alignItems: 'center', marginBottom: i < steps.length - 1 ? '3rem' : 0, position: 'relative', zIndex: 1 }}>

                    {/* Left card or spacer */}
                    {isLeft ? (
                      <div style={{ paddingRight: '2.5rem', textAlign: 'right' as const }}>
                        <div style={{ display: 'inline-block', padding: '1.75rem 2rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: `1px solid ${step.color}22`, borderRadius: 20, boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 0 30px ${step.color}08`, textAlign: 'left' as const, maxWidth: 360, width: '100%' }}>
                          {/* Illustration — no border, full bleed, bigger */}
                          <div style={{ height: 150, borderRadius: 10, overflow: 'hidden', marginBottom: '1.25rem', position: 'relative', background: `linear-gradient(135deg, ${step.color}15, ${step.color}06)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image src={`/images/${step.img}`} alt={step.title} fill style={{ objectFit: 'contain', borderRadius: 10 }} />
                            <div style={{ fontSize: '4rem' }}>{step.emoji}</div>
                            <div style={{ position: 'absolute', bottom: 5, right: 8, fontSize: '0.58rem', color: 'rgba(255,255,255,0.1)' }}>{step.img}</div>
                          </div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: step.color, textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{step.step}</div>
                          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>{step.title}</h3>
                          <p style={{ fontSize: '0.83rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}

                    {/* Center dot */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${step.color}20`, border: `2px solid ${step.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, color: step.color, boxShadow: `0 0 20px ${step.color}33`, zIndex: 2, flexShrink: 0 }}>
                        {i + 1}
                      </div>
                    </div>

                    {/* Right card or spacer */}
                    {!isLeft ? (
                      <div style={{ paddingLeft: '2.5rem' }}>
                        <div style={{ display: 'inline-block', padding: '1.75rem 2rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: `1px solid ${step.color}22`, borderRadius: 20, boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 0 30px ${step.color}08`, maxWidth: 360, width: '100%' }}>
                          {/* Illustration — no border, full bleed, bigger */}
                          <div style={{ height: 150, borderRadius: 10, overflow: 'hidden', marginBottom: '1.25rem', position: 'relative', background: `linear-gradient(135deg, ${step.color}15, ${step.color}06)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image src={`/images/${step.img}`} alt={step.title} fill style={{ objectFit: 'contain', borderRadius: 10 }} />
                            <div style={{ fontSize: '4rem' }}>{step.emoji}</div>
                            <div style={{ position: 'absolute', bottom: 5, right: 8, fontSize: '0.58rem', color: 'rgba(255,255,255,0.1)' }}>{step.img}</div>
                          </div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: step.color, textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{step.step}</div>
                          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>{step.title}</h3>
                          <p style={{ fontSize: '0.83rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── START USING — illustration right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)', top: '50%', left: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Start using Voice for verifying users and transactions.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Deploy Voice OTP in minutes using Baynix's simple REST API. Secure every login, transaction, and registration with a frictionless voice-based verification experience your customers will trust.
              </p>
              <a href="#enquiry" className="glass-btn glass-btn-primary">Get Started Now →</a>
            </div>

            {/* Illustration right */}
            <div
              style={{ height: 380, borderRadius: 24, background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(99,102,241,0.08))', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)', flexDirection: 'column' as const, gap: '0.75rem', transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <Image src="/images/voice-otp-cta.svg" alt="Voice OTP CTA" fill style={{ objectFit: 'contain', padding: '2rem' }} />
              <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>🚀</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>voice-otp-cta.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 60% 40%, rgba(245,158,11,0.1), transparent 60%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE — 4 icon cards + image right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', top: '50%', right: '5%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            {/* Left — heading + 4 horizontal cards */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Why Choose Baynix
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '2rem' }}>
                Why Choose Baynix for Voice OTP Services?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
                {whyChoose.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, display: 'flex', alignItems: 'flex-start', gap: '1rem', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.border = `1px solid ${item.color}33`; e.currentTarget.style.transform = 'translateX(4px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateX(0)' }}
                    >
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={18} color={item.color} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.3rem' }}>{item.title}</h3>
                        <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Image right */}
            <div
              style={{ height: 500, borderRadius: 20, position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)', transition: 'transform 0.4s ease', background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(99,102,241,0.07))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <Image src="/images/voice-otp-why.png" alt="Why Voice OTP" fill style={{ objectFit: 'cover' }} />
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🔒</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>voice-otp-why.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(245,158,11,0.1), transparent 70%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
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
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>Quickly boost delivery rates!</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get Started With Baynix Voice OTP</p>
            </div>

            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)' }} />

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
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Voice OTP — FAQ's
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: openFaq === i ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: openFaq === i ? '0 8px 32px rgba(245,158,11,0.1)' : 'none' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' as const, gap: '1rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>{faq.q}</span>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: openFaq === i ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', fontSize: '0.8rem', color: openFaq === i ? '#fbbf24' : 'var(--text3)' }}>
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