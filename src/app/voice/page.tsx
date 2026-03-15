'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageBox from '@/components/ImageBox'
import { useState } from 'react'
import {
  Globe, Workflow, ShieldCheck, Radio, PhoneCall, Star,
  Rocket, BadgePercent, Lightbulb,
  Languages, Zap, Lock, Network, Phone, Smile,
} from 'lucide-react'

// ── Voice Platform Cards ──────────────────────────────────────────────
const voicePlatform = [
  {
    emoji: '🔐',
    title: 'Voice OTP',
    desc: 'Boost security with Voice SMS as a backup 2FA method, ensuring 100% OTP delivery and minimizing drop-offs for enhanced reliability.',
    href: '/voice-otp',
    color: '#f59e0b',
    img: 'voice-otp-card.png',
  },
  {
    emoji: '📞',
    title: 'IVR System',
    desc: 'Guarantee 99% message delivery within 15 seconds and secure logins for customers, websites, and applications.',
    href: '/ivr',
    color: '#6366f1',
    img: 'voice-ivr-card.png',
  },
  {
    emoji: '📲',
    title: 'Inbound Dialing Service',
    desc: 'Develop adaptable inbound services to enhance brand perception and promptly address customer needs, optimizing response time.',
    href: '/ibd',
    color: '#10b981',
    img: 'voice-inbound-card.png',
  },
  {
    emoji: '📣',
    title: 'Outbound Dialing Service',
    desc: 'Witness a surge in your conversion rate by deploying pre-recorded messages as part of your campaign strategy.',
    href: '/obd',
    color: '#22d3ee',
    img: 'voice-outbound-card.png',
  },
  {
    emoji: '📵',
    title: 'Missed Call Service',
    desc: 'A convenient platform for customers to generate service demand, engage in polls, share opinions, and undergo e-KYC processes.',
    href: '/missed-call',
    color: '#ec4899',
    img: 'voice-missedcall-card.png',
  },
  {
    emoji: '🔒',
    title: 'Number Masking',
    desc: 'An ideal solution for online marketplaces to link customers and businesses securely while prioritizing data privacy and security.',
    href: '/number-masking',
    color: '#a78bfa',
    img: 'voice-masking-card.png',
  },
]

// ── Why Choose ────────────────────────────────────────────────────────
const whyChoose = [
  { icon: Languages,  title: 'Multilingual Content Support', desc: 'Create voice solutions in multiple languages without any complexity and run your marketing campaigns for a diversified customer base.', color: '#f59e0b' },
  { icon: Workflow,   title: 'Efficient Workflows',          desc: 'Create efficient workflows with robust control that help to increase overall customer satisfaction and minimise your operational costs.', color: '#6366f1' },
  { icon: Lock,       title: 'Safe and Secure',              desc: 'Utilize our safe and secure services, effortlessly integrating with your system without causing any disruption to your business.',       color: '#10b981' },
  { icon: Network,    title: 'Direct Operator Connections',  desc: 'Efficient traffic and route management with diverse channels for message delivery.',                                                       color: '#22d3ee' },
  { icon: Phone,      title: 'Inbound and Outbound Calls',   desc: 'Intelligent APIs for handling both incoming and bulk voice calls, ensuring comprehensive customer interactions and feedback.',              color: '#3b82f6' },
  { icon: Smile,      title: 'Rethink Customer Experience',  desc: 'Extremely essential for getting to know your clients and enhancing their experience by allowing them to connect with you easily.',         color: '#ec4899' },
]

// ── Advantages ────────────────────────────────────────────────────────
const advantages = [
  { icon: Rocket,       title: 'Launch Support',         desc: 'Support and advice to help startups launch their businesses successfully.',              color: '#f59e0b' },
  { icon: BadgePercent, title: 'Special Savings',        desc: 'Special savings for newly created and growth-oriented companies.',                        color: '#6366f1' },
  { icon: Lightbulb,    title: 'Unique Use Case Rewards', desc: 'Special incentives for new and unique use cases that push the boundaries of voice tech.', color: '#22d3ee' },
]

// ── Testimonials ──────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Suresh Nair',
    role: 'CTO, FinServe Pro',
    text: 'Baynix Voice OTP completely eliminated our SMS OTP delivery failures. The voice fallback ensures every customer gets their code — our authentication success rate is now 99.8%.',
    avatar: 'SN',
    color: '#f59e0b',
  },
  {
    name: 'Rekha Pillai',
    role: 'Head of CX, ShopGiant',
    text: 'The IVR system from Baynix cut our call centre costs by 40%. Customers navigate to the right department automatically — no more long hold times or misrouted calls.',
    avatar: 'RP',
    color: '#6366f1',
  },
  {
    name: 'Karan Mehta',
    role: 'Founder, DeliverNow',
    text: 'Number masking was a game-changer for our delivery platform. Customers and riders communicate seamlessly without ever seeing each other\'s real numbers. Trust and privacy sorted.',
    avatar: 'KM',
    color: '#22d3ee',
  },
]

// ── FAQs ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a voice service?',
    a: "A voice service is a cloud-based communication solution that enables businesses to send and receive automated voice calls at scale. This includes Voice OTP delivery, IVR (Interactive Voice Response) systems, outbound dialling campaigns, missed call services, and number masking — all managed through Baynix's intelligent voice platform.",
  },
  {
    q: 'How do I send a voice text message?',
    a: "With Baynix's Voice API, you can trigger voice messages programmatically. Simply make an API call with the recipient's number and your message text (or audio file), and our platform converts it to a voice call that's delivered to the recipient instantly. You can also schedule campaigns from your Baynix dashboard without any coding.",
  },
  {
    q: 'Are voice services secure?',
    a: 'Yes. Baynix voice services use end-to-end encrypted connections, direct operator routing to prevent interception, and number masking to protect personal data. All communication logs are stored securely, and our infrastructure is compliant with telecom regulatory requirements.',
  },
  {
    q: 'Can voice services be integrated with other applications?',
    a: "Absolutely. Baynix provides robust REST APIs and webhooks that integrate with CRMs, ERPs, ticketing systems, e-commerce platforms, and custom applications. Our SDKs are available for major programming languages, and our team offers dedicated integration support for complex setups.",
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

export default function VoicePage() {
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
                Voice Solutions
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.5rem' }}>
                Top{' '}
                <span style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Voice Call Provider
                </span>
              </h1>

              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1rem', maxWidth: 480 }}>
                As a top-tier voice call provider, Baynix excels in delivering seamless and reliable communication solutions tailored to the diverse needs of businesses. Our cutting-edge technology ensures crystal-clear voice calls that facilitate efficient and effective collaboration.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', maxWidth: 480 }}>
                Whether it's connecting remote teams, enhancing customer support, or conducting conference calls — our robust infrastructure guarantees superior call quality and uninterrupted connectivity.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image */}
            <ImageBox
              src="/images/voice-hero.png"
              alt="Voice Call Provider"
              background="linear-gradient(135deg, rgba(245,158,11,0.1), rgba(99,102,241,0.08), rgba(34,211,238,0.06))"
              border="1px solid rgba(255,255,255,0.08)"
              borderRadius={24}
              boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)"
              imageStyle={{ objectFit: 'contain', borderRadius: 24 }}
            >
              {/* <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>🎙️</div> */}
              {/* <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>voice-hero.png</div> */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(245,158,11,0.08), transparent 60%)', pointerEvents: 'none' }} />
            </ImageBox>
          </div>
        </section>

        {/* ── VOICE PLATFORM CARDS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Our Platform
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Expand your Business with Baynix's Voice Platform
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {voicePlatform.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div
                    style={{ padding: '0', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)', height: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.border = `1px solid ${item.color}33`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${item.color}11` }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />

                    {/* Illustration area */}
                    <div style={{ height: 140, background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as const, gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
                      {/* <Image src={`/images/${item.img}`} alt={item.title} fill style={{ objectFit: 'contain', padding: '1rem' }} /> */}
                      <div style={{ fontSize: '2.5rem' }}>{item.emoji}</div>
                      {/* <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>{item.img}</div> */}
                      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 100%, ${item.color}18, transparent 70%)`, pointerEvents: 'none' }} />
                    </div>

                    {/* Text */}
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.83rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>{item.desc}</p>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: item.color, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        Learn More →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE — 6 ICONS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Why Baynix
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Why Choose Baynix for Voice Services?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {whyChoose.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.border = `1px solid ${item.color}33`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${item.color}11` }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <Icon size={22} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── ADVANTAGES — 3 ICONS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Advantages
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Advantages of Partnering with Baynix for Voice Services
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {advantages.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    style={{ padding: '2.5rem 2rem', textAlign: 'center' as const, background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.border = `1px solid ${item.color}33`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${item.color}11` }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                      <Icon size={24} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── WATCH CAMPAIGNS GROW — CTA + illustration right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)', top: '50%', left: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#fbbf24', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#fbbf24', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Watch Your Marketing Campaigns Grow Using IVR and Voice Systems
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Leverage Baynix's powerful IVR and voice broadcasting platform to automate customer outreach, qualify leads, and drive conversions — all without expanding your team.
              </p>
              <a href="#enquiry" className="glass-btn glass-btn-primary">Get Started Now →</a>
            </div>

            {/* Illustration right */}
            <div
              style={{ transition: 'transform 0.4s ease', borderRadius: 24 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/voice-support.svg"
                alt="Voice Campaigns"
                background="linear-gradient(135deg, rgba(245,158,11,0.1), rgba(99,102,241,0.08))"
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={24}
                boxShadow="inset 0 1px 0 rgba(255,255,255,0.08)"
                padding="2rem"
                imageStyle={{ objectFit: 'contain' }}
              >
                {/* <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>📈</div> */}
                {/* <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>voice-campaigns.png</div> */}
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 60% 40%, rgba(245,158,11,0.1), transparent 60%)', pointerEvents: 'none' }} />
              </ImageBox>
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
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get Started With Baynix Voice Services</p>
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
                Voice Services — FAQ's
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