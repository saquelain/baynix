'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PartnerMarquee from '@/components/PartnerMarquee'
import ImageBox from '@/components/ImageBox'
import { useState } from 'react'
import { Clock, UserCheck, Route, Hash, BarChart2, Timer, TrendingUp, Users, Activity } from 'lucide-react'
import CTASectionForm from '@/components/CTASectionForm'

const keyFeatures = [
  'Protect your users from phishing attacks, fraudsters, and hackers',
  'Validate user\'s identity every time a request is generated',
  'Deliver the OTP through SMS or via Voice SMS',
  'Deliver emergency alerts, failover alerts, system shutdowns, in just seconds',
  'Provides an additional layer of security with its uniqueness and time-sensitive nature.',
  'Businesses can significantly reduce the risk of fraud with the one-time nature of these SMS',
]

const stats = [
  { icon: TrendingUp, value: '70%',  label: 'Higher Conversions than other channels', color: '#f59e0b' },
  { icon: Users,      value: '900+', label: 'Our subscribers globally',                color: '#6366f1' },
  { icon: Activity,   value: '3X',   label: 'Open rate than other channels',           color: '#22d3ee' },
]

const otpFeatures = [
  {
    icon: Clock,
    title: 'Time Guarantee',
    desc: '99% of communications will be sent within 15 seconds, and your clients\' websites, apps, and logins will all be protected.',
    color: '#f59e0b',
  },
  {
    icon: UserCheck,
    title: 'User Authentication',
    desc: 'By using two factor authentication to confirm their identity, individuals may reduce the chance of being impersonated.',
    color: '#10b981',
  },
  {
    icon: Route,
    title: 'Dedicated Routes',
    desc: 'Send OTPs with confidence thanks to instantaneous routing and dedicated carrier connectivity.',
    color: '#3b82f6',
  },
  {
    icon: Hash,
    title: 'OTP Length',
    desc: 'OTP length can be adjusted to be either four or six digits based on your security requirements.',
    color: '#6366f1',
  },
  {
    icon: BarChart2,
    title: 'Reports and Analytics',
    desc: 'Dashboards with simple layouts that make managing, reporting, and monitoring easier.',
    color: '#22d3ee',
  },
  {
    icon: Timer,
    title: 'Validity Period',
    desc: 'OTP validity can be set to seconds, minutes, or hours depending on your use case.',
    color: '#a78bfa',
  },
]

const testimonials = [
  {
    name: 'Karthik Menon',
    role: 'CTO, SecurePay',
    text: 'Baynix OTP delivery is near-instant. Our checkout conversion improved by 18% after switching — customers were previously abandoning because the OTP took too long to arrive.',
    avatar: 'KM',
    color: '#f59e0b',
  },
  {
    name: 'Divya Rao',
    role: 'Head of Engineering, HealthVault',
    text: 'For a healthcare platform, security is non-negotiable. Baynix OTP Authenticator gives us the reliability and compliance we need, with 99% delivery within 15 seconds consistently.',
    avatar: 'DR',
    color: '#10b981',
  },
  {
    name: 'Sameer Khan',
    role: 'Founder, LendEasy',
    text: 'We handle sensitive financial transactions and OTP authentication is critical. Baynix\'s dedicated routes mean virtually zero delivery failures. Support is also excellent.',
    avatar: 'SK',
    color: '#6366f1',
  },
]

const faqs = [
  {
    q: 'What is OTP Authentication?',
    a: 'OTP (One-Time Password) Authentication is a security mechanism that generates a unique, time-sensitive password for each login or transaction attempt. Unlike static passwords, OTPs expire quickly and can only be used once, making them highly resistant to replay attacks and unauthorized access.',
  },
  {
    q: 'How does OTP Authentication work?',
    a: 'When a user attempts to log in or complete a transaction, the system generates a random OTP and sends it to the user\'s registered mobile number via SMS or voice call. The user enters this OTP within the validity window to verify their identity. The OTP is then invalidated, ensuring it cannot be reused.',
  },
  {
    q: 'What is OTP Authentication Service?',
    a: 'An OTP Authentication Service like Baynix provides the infrastructure to generate, deliver, and validate one-time passwords at scale. It includes API integration, dedicated carrier routes for fast delivery, delivery reporting, configurable OTP length and validity, and fallback mechanisms to ensure every OTP reaches its recipient.',
  },
  {
    q: 'How to choose the best OTP service provider?',
    a: 'Look for providers that offer near-instant delivery (under 15 seconds), high delivery rates, dedicated routes rather than shared carriers, global coverage, robust API documentation, real-time analytics, and strong compliance standards. Baynix checks all these boxes with transparent pricing and 24/7 support.',
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

export default function OtpAuthenticatorPage() {
  const [openFaq, setOpenFaq]     = useState<number | null>(0)


  return (
    <>
      <Navbar />

      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(245,158,11,0.09) 0%, transparent 70%)', top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div className="otp-hero-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#fbbf24', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                Start Texting
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.5rem' }}>
                Future-proof{' '}
                <span style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  OTP Authenticator
                </span>
              </h1>

              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', maxWidth: 480 }}>
                It enhances account security by requiring users to provide both their password and a dynamically generated OTP during login. This added layer of security helps prevent unauthorized access to accounts, particularly in online services, applications, or systems where sensitive information is stored.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image */}
            <ImageBox
              src="/images/otp-authenticator-hero.png"
              priority
              alt="OTP Authenticator"
              width={800}
              height={420}
              background="linear-gradient(135deg, rgba(245,158,11,0.1), rgba(99,102,241,0.08), rgba(34,211,238,0.06))"
              border="1px solid rgba(255,255,255,0.08)"
              borderRadius={24}
              boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)"
              imageStyle={{ objectFit: 'contain', borderRadius: 24 }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(245,158,11,0.08), transparent 60%)', pointerEvents: 'none' }} />
            </ImageBox>
          </div>
        </section>

        {/* ── TRUSTED BY — MARQUEE ── */}
        <PartnerMarquee title="Trusted by many of your companies" subtitle="" />

        {/* ── KEY FEATURES (bullets left, image right) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)', top: '50%', left: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div className="otp-keyfeatures-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Key Features
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.75rem' }}>
                Key features of OTP Authenticator
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.9rem' }}>
                {keyFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 2, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b' }} />
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{f}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image right */}
            <div
              style={{ borderRadius: 20, transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/otp-features.png"
                alt="OTP Key Features"
                width={800}
                height={440}
                background="linear-gradient(135deg, rgba(245,158,11,0.1), rgba(99,102,241,0.07))"
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={20}
                boxShadow="0 24px 60px rgba(0,0,0,0.4)"
                imageStyle={{ objectFit: 'cover' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(245,158,11,0.1), transparent 70%)', pointerEvents: 'none' }} />
              </ImageBox>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div className="otp-stats-grid" style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.value} style={{ textAlign: 'center' as const, padding: '2rem 1.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
                  <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${s.color}66, transparent)` }} />
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.color}15`, border: `1px solid ${s.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <Icon size={20} color={s.color} strokeWidth={1.8} />
                  </div>
                  <div style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', background: `linear-gradient(135deg, ${s.color}, ${s.color}99)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.4rem' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text3)', lineHeight: 1.5, fontWeight: 400 }}>{s.label}</div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── OTP API FEATURES GRID (ICONS) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                API Features
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', maxWidth: 700, margin: '0 auto' }}>
                Use the Baynix OTP Authenticator API To Provide Your Applications With Secure OTP Authentication.
              </h2>
            </div>

            <div className="otp-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {otpFeatures.map((f) => {
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

        {/* ── SUPERCHARGE CTA ── */}
        <section style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '1rem' }}>
              Supercharge Your Reach with OTP Authenticator
            </h2>
            <a href="#enquiry" className="glass-btn glass-btn-primary">Get Started Now →</a>
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

            <div className="otp-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get Started With Baynix OTP Authenticator</p>
            </div>

            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)' }} />

              <CTASectionForm />
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
                OTP Authentication Service — FAQ's
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