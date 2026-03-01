'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { Heart, Users, Palette, Radio, MessageCircle, Hash } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Enhance Customer Loyalty and Trust',
    desc: 'Build customer loyalty and trust through consistent communication, exceptional service, and personalized experiences.',
    color: '#ec4899',
  },
  {
    icon: Users,
    title: 'Engage with Subscribers',
    desc: 'Engage subscribers effectively with personalized messages, exclusive offers, and interactive content through email-to-SMS services.',
    color: '#6366f1',
  },
  {
    icon: Palette,
    title: 'Branding and Customization',
    desc: 'Email-to-SMS service can enhance user experience and reinforce your company\'s identity across every touchpoint.',
    color: '#22d3ee',
  },
  {
    icon: Radio,
    title: 'Direct Operator',
    desc: 'Directly interface with mobile network operators\' systems to deliver SMS messages without intermediaries.',
    color: '#10b981',
  },
  {
    icon: MessageCircle,
    title: 'Easy Customer Feedback',
    desc: 'Easily gather customer feedback via SMS by sending brief prompts and allowing for simple responses.',
    color: '#f59e0b',
  },
  {
    icon: Hash,
    title: 'Set Maximum SMS Length',
    desc: 'Limit potential abuse by restricting messages to a maximum of four texts, each with four words.',
    color: '#a78bfa',
  },
]

const whyBullets = [
  'Affordable, reliable and convenient way to stay in touch with your team, clients or customers.',
  'Easy to set up and no set-up costs.',
  'As easy as click of a button triggering from your email application.',
  'Highly useful in sending emergency alerts or urgent messages and reminders.',
  'Ensures high open rates and better conversion.',
]

const testimonials = [
  {
    name: 'Arjun Tiwari',
    role: 'IT Manager, RetailChain',
    text: 'Email to SMS from Baynix saved us weeks of API integration work. Our existing CRM now sends SMS alerts with zero code changes — just configure the email gateway and it works.',
    avatar: 'AT',
    color: '#ec4899',
  },
  {
    name: 'Shalini Gupta',
    role: 'Operations Lead, InsurePlus',
    text: 'We use it to send policy renewal reminders directly from Outlook. Our team didn\'t need any training — if you can send an email, you can send an SMS. Adoption was instant.',
    avatar: 'SG',
    color: '#6366f1',
  },
  {
    name: 'Mohit Sharma',
    role: 'Founder, QuickDesk',
    text: 'For emergency alerts to field staff, nothing beats Email to SMS. We trigger messages from our existing ticketing system without touching a single line of code. Brilliant product.',
    avatar: 'MS',
    color: '#22d3ee',
  },
]

const faqs = [
  {
    q: 'Can I send Email to SMS?',
    a: 'Yes. With Baynix\'s Email to SMS gateway, you can send text messages directly from any email client — Outlook, Gmail, Apple Mail, or any other. Simply compose an email addressed to the recipient\'s mobile number followed by our gateway domain, and it\'s delivered as an SMS instantly.',
  },
  {
    q: 'How do I convert an Email to a text message?',
    a: 'Baynix provides a unique gateway email address. To convert your email to SMS, address your email to [recipient_number]@baynix-sms.com (or your configured gateway domain). The subject or body of the email becomes the SMS message text. No software installation or API integration is required.',
  },
  {
    q: 'How to send an Email via Text Message?',
    a: 'Compose your email as normal, set the recipient address to the mobile number with the Baynix gateway domain appended, write your message in the email body, and hit send. The recipient receives it as a standard SMS on their phone within seconds. It works from any device that can send email.',
  },
  {
    q: 'What is send Email to SMS Gateway?',
    a: 'An Email to SMS Gateway is a server-side service that accepts incoming emails addressed to mobile numbers and converts them into SMS messages, which are then delivered to the recipient\'s phone via carrier networks. Baynix\'s gateway handles the conversion, routing, and delivery automatically with high reliability and real-time reporting.',
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

export default function EmailToSmsPage() {
  const [openFaq, setOpenFaq]     = useState<number | null>(0)
  const [focused, setFocused]     = useState<string | null>(null)
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const getFocusStyle = (field: string) =>
    focused === field
      ? { ...inputStyle, border: '1px solid rgba(99,102,241,0.5)', background: 'rgba(255,255,255,0.06)', boxShadow: '0 0 0 3px rgba(99,102,241,0.1)' }
      : inputStyle

  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)', top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                No Experience Required
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.5rem' }}>
                Future-proof{' '}
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #6366f1, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Email Messages as SMS
                </span>
              </h1>

              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', maxWidth: 480 }}>
                Email to SMS software enables you to convert an email to a text message with no effort. Sending your emails as text messages ensures that they are seen instead of being lost in the inbox clutter. Ideal if you want to send SMS from CRM systems, external software, or plugins without setting up an API integration.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image */}
            <div style={{ height: 420, borderRadius: 24, background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(167,139,250,0.08), rgba(34,211,238,0.06))', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {/* Uncomment when ready: */}
              <Image src="/images/email-sms-hero.png" alt="Email to SMS" fill style={{ objectFit: 'contain', borderRadius: 24 }} />
              <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>✉️</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>email-sms-hero.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(99,102,241,0.1), transparent 60%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID (ICONS) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#a78bfa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#a78bfa', display: 'inline-block' }} />
                Features
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Email To SMS Features
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

        {/* ── WHY CHOOSE — CTA STRIP ── */}
        <section style={{ padding: '3.5rem 2rem', borderBottom: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '1rem' }}>
              Why Choose Baynix for Email to SMS Services?
            </h2>
            <a href="#why" className="glass-btn glass-btn-primary">Get Started Now →</a>
          </div>
        </section>

        {/* ── WHY CHOOSE — illustration right ── */}
        <section id="why" style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', top: '50%', left: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            {/* Text left */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#a78bfa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#a78bfa', display: 'inline-block' }} />
                Why Baynix
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.25, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Why Choose Baynix for Email to SMS Services?
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.75rem' }}>
                At Baynix, we offer a reliable Email to SMS solution that ensures you can effortlessly reach your customers, no matter their location. Our email to text gateway guarantees delivery and boasts excellent open rates, ensuring your messages reach their intended recipients.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem', marginBottom: '2rem' }}>
                {whyBullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 2, background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1' }} />
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{b}</p>
                  </div>
                ))}
              </div>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Get Started →</a>
            </div>

            {/* Illustration right */}
            <div
              style={{ height: 460, borderRadius: 20, position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)', transition: 'transform 0.4s ease', background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(167,139,250,0.07))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {/* Uncomment when ready: */}
              <Image src="/images/email-sms-why.svg" alt="Why Email to SMS" fill style={{ objectFit: 'contain' }} />
              {/* <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📬</div> */}
              {/* <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>email-sms-why.png</div> */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(99,102,241,0.12), transparent 70%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE — image left, text right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)', top: '50%', right: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl' as any, position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ height: 400, borderRadius: 20, position: 'relative', overflow: 'hidden', direction: 'ltr', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)', transition: 'transform 0.4s ease', background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(99,102,241,0.07))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.75rem' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {/* Uncomment when ready: */}
              <Image src="/images/email-sms-integrate.png" alt="Email SMS Integration" fill style={{ objectFit: 'cover' }} />
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(236,72,153,0.2)', border: '1px solid rgba(236,72,153,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🔗</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>email-sms-integrate.png</div>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(236,72,153,0.1), transparent 70%)', pointerEvents: 'none' }} />
            </div>

            {/* Text right */}
            <div style={{ direction: 'ltr' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#f472b6', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#f472b6', display: 'inline-block' }} />
                Seamless Integration
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.25, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Integrate our powerful tool to automate your communications
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Send messages directly from your email client to multiple recipients with ease. Whether you're using Outlook, Gmail, or any CRM that supports email sending — our gateway transforms your outgoing emails into SMS messages with zero technical overhead. You can communicate with customers and co-workers by sending an email from your computer, tablet, or phone.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#a78bfa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#a78bfa', display: 'inline-block' }} />
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
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#a78bfa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#a78bfa', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>Quickly boost delivery rates!</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get Started With Baynix Email to SMS</p>
            </div>

            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }} />

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
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#a78bfa', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#a78bfa', display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Send Email to SMS — FAQ's
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: openFaq === i ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: openFaq === i ? '0 8px 32px rgba(99,102,241,0.1)' : 'none' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' as const, gap: '1rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>{faq.q}</span>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: openFaq === i ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', fontSize: '0.8rem', color: openFaq === i ? '#a78bfa' : 'var(--text3)' }}>
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