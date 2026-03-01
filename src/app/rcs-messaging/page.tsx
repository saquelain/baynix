'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { Users, Puzzle, Palette, ShieldCheck, MessageSquare, ImagePlay, CheckCircle, XCircle } from 'lucide-react'

const rcsFeatures = [
  {
    icon: Users,
    title: 'Customer Friendly Tool',
    desc: 'RCS supports interactive features such as polls, surveys, and appointment scheduling directly within the messaging interface.',
    color: '#3b82f6',
  },
  {
    icon: Puzzle,
    title: 'Integration with Other Services',
    desc: 'RCS can integrate with other services and apps, allowing users to interact with businesses for customer support.',
    color: '#6366f1',
  },
  {
    icon: Palette,
    title: 'Branding and Customization',
    desc: 'Businesses can customize their RCS messages with branding elements such as logos and colors, providing a more engaging experience.',
    color: '#22d3ee',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Communication',
    desc: 'RCS supports end-to-end encryption for messages, ensuring that communication between users is secure and private.',
    color: '#10b981',
  },
  {
    icon: MessageSquare,
    title: 'Enhanced Messaging',
    desc: 'RCS supports typing indicators, read receipts, and presence information indicating if a user is online or offline.',
    color: '#f59e0b',
  },
  {
    icon: ImagePlay,
    title: 'High-quality Media Sharing',
    desc: 'RCS allows sharing high-quality images, videos, and audio clips, unlike traditional SMS which compresses media files.',
    color: '#a78bfa',
  },
]

const rcsAdvantages = [
  '8000 Characters',
  'High-quality images',
  'Delivered, read and typing receipts',
  'Group chat',
  'Location sharing',
  'Video calls',
  'Branded calls',
]

const smsAdvantages = [
  '160 Characters',
  'Delivered receipts',
]

const testimonials = [
  {
    name: 'Aditya Kumar',
    role: 'Marketing Director, RetailPlus',
    text: 'RCS transformed our campaigns completely. The open rates are 3x better than SMS and customers actually engage with our interactive messages instead of ignoring them.',
    avatar: 'AK',
    color: '#3b82f6',
  },
  {
    name: 'Sneha Patel',
    role: 'Head of CX, BankFirst',
    text: 'The branded messaging with our logo and verified sender ID has built enormous trust with our customers. Phishing concerns have dropped and engagement is up.',
    avatar: 'SP',
    color: '#6366f1',
  },
  {
    name: 'Rohit Sinha',
    role: 'CTO, DeliveryFast',
    text: 'The automatic SMS fallback is a lifesaver. We never worry about message delivery failures — if RCS doesn\'t reach, it falls back seamlessly. Zero messages lost.',
    avatar: 'RS',
    color: '#22d3ee',
  },
]

const faqs = [
  {
    q: 'What is RCS Messaging?',
    a: 'RCS (Rich Communication Services) is the next evolution of SMS. It enhances traditional text messaging by adding features like high-quality media sharing, group chats, read receipts, typing indicators, branded sender profiles, and interactive elements like polls and carousels — all delivered through the native messaging app on Android devices.',
  },
  {
    q: 'How does Rich Communication Service work?',
    a: 'RCS works over data networks (Wi-Fi or mobile data) through a device\'s native messaging app. When you send an RCS message, it travels through an RCS-enabled carrier network to the recipient. If the recipient\'s device or carrier doesn\'t support RCS, the message automatically falls back to SMS, ensuring delivery.',
  },
  {
    q: 'How do I know if I have RCS Messaging?',
    a: 'On Android devices, if your Messages app shows features like read receipts, typing indicators, or the ability to send high-resolution photos without compression, you have RCS enabled. You can also check in Settings > Chat features within the Google Messages app. Baynix handles carrier-side RCS enablement for businesses.',
  },
  {
    q: 'Is RCS Messaging free?',
    a: 'For end users, RCS messages use data rather than SMS credits, so standard data charges may apply. For businesses, Baynix offers competitive RCS Business Messaging pricing with pay-as-you-go and volume plans. Contact our team for a custom quote based on your messaging volume.',
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

const partners = [
  { name: 'Hindware',        file: 'hindware.png',  color: '#3b82f6' },
  { name: 'Dream11',         file: 'dream11.png',   color: '#10b981' },
  { name: 'Mahindra',        file: 'mahindra.png',  color: '#6366f1' },
  { name: 'Junglee Pictures',file: 'junglee.png',   color: '#f59e0b' },
  { name: 'Droom',           file: 'droom.png',     color: '#22d3ee' },
  { name: 'Godrej',          file: 'godrej.png',    color: '#a78bfa' },
]

export default function RcsMessagingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [focused, setFocused]  = useState<string | null>(null)
  const [form, setForm]        = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const getFocusStyle = (field: string) =>
    focused === field
      ? { ...inputStyle, border: '1px solid rgba(59,130,246,0.5)', background: 'rgba(255,255,255,0.06)', boxShadow: '0 0 0 3px rgba(59,130,246,0.1)' }
      : inputStyle

  return (
    <>
      <Navbar />

      {/* Ticker keyframe */}
      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(59,130,246,0.09) 0%, transparent 70%)', top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                No Experience Required
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.5rem' }}>
                Future-proof{' '}
                <span style={{ background: 'linear-gradient(135deg, #60a5fa, #6366f1, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  RCS Business Messaging
                </span>
              </h1>

              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', maxWidth: 480 }}>
                It enhances traditional SMS by adding features like high-quality media sharing, group chats, read receipts, and typing indicators. RCS is designed to work across different devices and networks, enabling seamless communication and interaction.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image */}
            <div style={{ height: 420, borderRadius: 24, background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.08), rgba(34,211,238,0.06))', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {/* Uncomment when ready: */}
              <Image src="/images/rcs-hero.png" alt="RCS Business Messaging" fill style={{ objectFit: 'contain', borderRadius: 24 }} />
              <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>📱</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>rcs-hero.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(59,130,246,0.08), transparent 60%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── TRUSTED BY — MARQUEE ── */}
        <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
          <p style={{ textAlign: 'center', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: 'var(--text3)', marginBottom: '2rem', fontWeight: 600 }}>
            Trusted by many of your companies
          </p>

          <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Left fade */}
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
            {/* Right fade */}
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />

            {/* Track */}
            <div style={{ display: 'flex', gap: '1.5rem', animation: 'ticker 30s linear infinite', width: 'max-content' }}>
              {[...Array(2)].map((_, repeat) => (
                <div key={repeat} style={{ display: 'flex', gap: '1.5rem' }}>
                  {partners.map((partner) => (
                    <div key={`${repeat}-${partner.name}`} style={{ flexShrink: 0, width: 160, height: 70, borderRadius: 12, overflow: 'hidden' }}>
                      <img src={`/images/${partner.file}`} alt={partner.name} style={{ width: '100%', height: '100%', objectFit: 'fill', borderRadius: 12 }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE RCS (image right) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', top: '50%', left: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#60a5fa', display: 'inline-block' }} />
                Why RCS
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Why Choose Rich Communication Services?
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
                RCS offers enhanced messaging with features like media sharing and group chats, seamlessly integrating with SMS infrastructure for universal compatibility and improved customer engagement opportunities for businesses.
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' as const }}>
                {[
                  { value: '70%', label: 'Higher Conversions than other channels', color: '#3b82f6' },
                  { value: '900+', label: 'RCS subscribers globally', color: '#6366f1' },
                  { value: '3X', label: 'Open rate than other channels', color: '#22d3ee' },
                ].map(s => (
                  <div key={s.value} style={{ flex: '1 1 120px' }}>
                    <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.04em', background: `linear-gradient(135deg, ${s.color}, ${s.color}99)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.25rem' }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text3)', lineHeight: 1.5, fontWeight: 400 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image right */}
            <div
              style={{ height: 420, borderRadius: 20, position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)', transition: 'transform 0.4s ease', background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.07))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {/* Uncomment when ready: */}
              <Image src="/images/rcs-why.png" alt="Why Choose RCS" fill style={{ objectFit: 'cover' }} />
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📊</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>rcs-why.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(59,130,246,0.1), transparent 70%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── RCS FEATURES GRID (ICONS) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#60a5fa', display: 'inline-block' }} />
                Features
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Rich Communication Services Features
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {rcsFeatures.map((f) => {
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
          <div style={{ position: 'absolute', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '1rem' }}>
              Supercharge Your Reach with RCS
            </h2>
            <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Get Started Now →</a>
          </div>
        </section>

        {/* ── RCS VS SMS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#60a5fa', display: 'inline-block' }} />
                Comparison
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                RCS vs SMS
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {/* RCS */}
              <div style={{ padding: '2.5rem', background: 'rgba(59,130,246,0.05)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 20, position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>📲</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#60a5fa', letterSpacing: '-0.02em' }}>RCS Advantages</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
                  {rcsAdvantages.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle size={16} color="#3b82f6" strokeWidth={2} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SMS */}
              <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>💬</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text2)', letterSpacing: '-0.02em' }}>SMS Advantages</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {smsAdvantages.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle size={16} color="var(--text3)" strokeWidth={2} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
                {/* missing RCS features shown as crossed out */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                  {rcsAdvantages.slice(2).map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem', opacity: 0.35 }}>
                      <XCircle size={16} color="var(--text3)" strokeWidth={2} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text3)', fontWeight: 400, textDecoration: 'line-through' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>
              Every interaction counts because each touchpoint is significant.
            </p>
          </div>
        </section>

        {/* ── DEPENDABLE FALLBACK (image right) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', top: '50%', left: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#60a5fa', display: 'inline-block' }} />
                Smart Fallback
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.25, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Dependable messaging with an easy fallback plan
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Our advanced fallback features will guarantee that your messages always reach their intended audience. RCS communications automatically convert to SMS, WhatsApp, or even phone conversations when delivery problems arise — ensuring continuous communication with zero message loss.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Know More →</a>
            </div>

            {/* Image right */}
            <div
              style={{ height: 380, borderRadius: 20, position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)', transition: 'transform 0.4s ease', background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(34,211,238,0.07))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {/* Uncomment when ready: */}
              <Image src="/images/rcs-fallback.png" alt="RCS Fallback" fill style={{ objectFit: 'cover' }} />
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🔄</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>rcs-fallback.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(59,130,246,0.1), transparent 70%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── TRANSFORM (image left) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', top: '50%', right: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl' as any, position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ height: 380, borderRadius: 20, position: 'relative', overflow: 'hidden', direction: 'ltr', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)', transition: 'transform 0.4s ease', background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(59,130,246,0.07))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {/* Uncomment when ready: */}
              <Image src="/images/rcs-transform.png" alt="Transform customer interaction" fill style={{ objectFit: 'cover' }} />
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>✨</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>rcs-transform.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(99,102,241,0.1), transparent 70%)', pointerEvents: 'none' }} />
            </div>

            {/* Text right */}
            <div style={{ direction: 'ltr' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#a78bfa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#a78bfa', display: 'inline-block' }} />
                Transform
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.25, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Transform the way you interact with your customers.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Rich Communication Services have made texting as interesting as WhatsApp. It's also the perfect corporate communication tool thanks to its wealth of features — verified sender, location sharing, and photo and video sharing — all within the native messaging app.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Know More →</a>
            </div>
          </div>
        </section>

        {/* ── ZERO TOUCH ONBOARDING CTA ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '1rem' }}>
              <span style={{ width: 18, height: 1, background: '#60a5fa', display: 'inline-block' }} />
              Zero Touch Onboarding
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem' }}>
              Utilising Our Zero Touch Onboarding Platform, Manage Leads And Expand Your Business
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.7, marginBottom: '2rem' }}>
              Get onboarded in minutes with no technical complexity. Start sending RCS messages to your customers today.
            </p>
            <a href="#enquiry" className="glass-btn glass-btn-primary">Get Started Now →</a>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#60a5fa', display: 'inline-block' }} />
                Happy Clients
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                What our clients say
              </h2>
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
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#60a5fa', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>Quickly boost delivery rates!</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get Started With Baynix RCS Messaging</p>
            </div>

            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)' }} />

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
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#60a5fa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#60a5fa', display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                RCS Messaging — FAQ's
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: openFaq === i ? '1px solid rgba(59,130,246,0.3)' : '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: openFaq === i ? '0 8px 32px rgba(59,130,246,0.1)' : 'none' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' as const, gap: '1rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>{faq.q}</span>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: openFaq === i ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', fontSize: '0.8rem', color: openFaq === i ? '#60a5fa' : 'var(--text3)' }}>
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