'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import {
  Target, Bell, Handshake,
  Sliders, Award, Plug, HeartHandshake,
  CheckCircle2,
} from 'lucide-react'
import Image from 'next/image'

const accent    = '#f59e0b'
const accentRgb = '245,158,11'

const partners = [
  { name: 'Hindware',         file: 'hindware.png' },
  { name: 'Dream11',          file: 'dream11.png'  },
  { name: 'Mahindra',         file: 'mahindra.png' },
  { name: 'Junglee Pictures', file: 'junglee.png'  },
  { name: 'Droom',            file: 'droom.png'    },
  { name: 'Godrej',           file: 'godrej.png'   },
]

const tabs = [
  {
    id: 'target',
    label: 'Target More People',
    icon: Target,
    emoji: '🎯',
    image: 'logistics-target.png',
    title: 'Target More People',
    desc: 'Logistics companies can use voice, SMS, or web-based marketing campaigns to spread the word about their brand and increase lead generation. Recurring clients can be sent discount coupons by SMS and WhatsApp, among other media. Reach drivers, warehouse staff, and end customers simultaneously with personalised, channel-specific messaging at scale.',
    color: '#f59e0b',
  },
  {
    id: 'convenience',
    label: 'Convenience Alerts',
    icon: Bell,
    emoji: '🔔',
    image: 'logistics-alerts.png',
    title: 'Convenience Alerts',
    desc: 'Keep customers, drivers, and partners informed at every stage of the delivery journey. Send automated shipment confirmation, out-for-delivery alerts, delay notifications, and proof-of-delivery confirmations via SMS or WhatsApp. Real-time convenience alerts drastically cut inbound support calls and build lasting customer trust in your logistics brand.',
    color: '#22d3ee',
  },
  {
    id: 'supplier',
    label: 'Supplier Management & Partner Interactions',
    icon: Handshake,
    emoji: '🤝',
    image: 'logistics-supplier.png',
    title: 'Supplier Management & Partner Interactions',
    desc: "Streamline B2B communication with suppliers, warehouse partners, and last-mile delivery agents using Baynix's two-way messaging platform. Automate purchase order confirmations, dispatch instructions, route updates, and compliance reminders. Keep your entire logistics ecosystem connected and aligned without the overhead of manual coordination calls.",
    color: '#10b981',
  },
]

const whyBaynix = [
  {
    icon: Sliders,
    title: 'Tailored Solutions',
    desc: "Baynix's solutions are highly adaptable, designed to meet the specific demands of your logistics business. Share your customisation needs with us, and we'll be more than happy to help build the perfect communication workflow.",
    color: '#f59e0b',
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    desc: "With extensive experience partnering with leading logistics companies, Baynix has a track record of enhancing operational efficiency and delivering significant results — supporting logistics firms from small businesses to large enterprises for over four years.",
    color: '#22d3ee',
  },
  {
    icon: Plug,
    title: 'Effortless Integration',
    desc: "Seamlessly incorporate Baynix's products into your existing operations. Our quick and easy integration process ensures a smooth transition, while our user-friendly services guarantee a hassle-free experience with round-the-clock support.",
    color: '#10b981',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    desc: "Baynix is dedicated to providing ongoing technical support throughout your journey. We prioritise building long-term relationships with our clients, focusing on meaningful engagement rather than just product sales — always ready to scale with your needs.",
    color: '#a78bfa',
  },
]

const testimonials = [
  {
    name: 'Arjun Kapoor',
    role: 'Operations Director, SwiftMove Logistics',
    text: "Baynix's delivery alert system completely eliminated our 'where is my order?' calls. Customers now receive automated updates at every milestone — dispatched, in transit, out for delivery, delivered. Our CSAT score jumped from 3.2 to 4.7 stars within two months.",
    avatar: 'AK',
    color: '#f59e0b',
  },
  {
    name: 'Preethi Subramaniam',
    role: 'Head of Fleet, FastTrack Courier',
    text: "We use Baynix to coordinate with 2,000+ delivery agents daily. Route updates, weather alerts, and dispatch instructions are sent via WhatsApp in seconds. Our on-time delivery rate improved by 28% after switching to Baynix's automated messaging.",
    avatar: 'PS',
    color: '#22d3ee',
  },
  {
    name: 'Rahul Tiwari',
    role: 'CTO, PrimeCargo India',
    text: "Integrating Baynix with our TMS took just a day. Now every shipment event automatically triggers the right customer notification. Our support ticket volume dropped by 52% and our net promoter score is the highest it's ever been.",
    avatar: 'RT',
    color: '#10b981',
  },
]

const faqs = [
  {
    q: 'How can Baynix improve last-mile delivery communication?',
    a: "Baynix integrates with your transport management system (TMS) or order management platform via REST API and webhooks. Every shipment milestone — pickup, in-transit, out for delivery, delivered, or failed attempt — automatically triggers a personalised SMS or WhatsApp notification to the end customer. This proactive communication reduces missed deliveries, eliminates 'where is my order?' calls, and significantly improves first-attempt delivery rates.",
  },
  {
    q: 'Can Baynix help logistics companies communicate with delivery agents in the field?',
    a: "Absolutely. Baynix's two-way WhatsApp messaging allows dispatchers to send route updates, delivery instructions, and alerts directly to agents' phones. Agents can reply, confirm pickups, or flag issues in real time. You can also use broadcast SMS for mass announcements to your entire driver fleet simultaneously — ideal for weather disruptions, route changes, or company-wide updates.",
  },
  {
    q: 'Does Baynix support COD (Cash on Delivery) confirmation workflows?',
    a: "Yes. Baynix supports COD confirmation workflows where customers receive a pre-delivery WhatsApp message asking them to confirm availability and preferred delivery time slot. This reduces failed deliveries and return-to-origin (RTO) rates significantly. Post-delivery, automated payment confirmation and digital receipt messages are sent instantly — improving the end-to-end customer experience.",
  },
  {
    q: 'How does Baynix integrate with logistics ERP and TMS platforms?',
    a: "Baynix provides a RESTful API, webhook support, and pre-built connectors for popular logistics and ERP platforms. When a shipment status changes in your TMS, Baynix fires the appropriate notification automatically within milliseconds. Our team assists with custom integration for proprietary systems and most integrations go live within one to two business days with dedicated technical support throughout.",
  },
  {
    q: 'Can I send bulk promotional SMS to our logistics customer base?',
    a: "Yes. Baynix's Bulk SMS and WhatsApp broadcast tools let you send personalised promotional messages — discount coupons, loyalty offers, seasonal campaigns — to your entire customer database simultaneously. Messages support dynamic fields so each recipient receives a personalised version. All campaigns comply with TRAI DLT regulations and include real-time delivery analytics.",
  },
]

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

const glassCard: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 20,
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
}

const inputBase: React.CSSProperties = {
  width: '100%', padding: '0.75rem 1rem',
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
  fontSize: '0.9rem', color: 'var(--text)', outline: 'none',
  transition: 'all 0.2s ease', fontFamily: 'Inter, sans-serif',
  boxSizing: 'border-box',
}

export default function LogisticsPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [openFaq, setOpenFaq]     = useState<number | null>(0)
  const [focused, setFocused]     = useState<string | null>(null)
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const getFocusStyle = (field: string): React.CSSProperties =>
    focused === field
      ? { ...inputBase, border: `1px solid rgba(${accentRgb},0.5)`, background: 'rgba(255,255,255,0.06)', boxShadow: `0 0 0 3px rgba(${accentRgb},0.1)` }
      : inputBase

  const currentTab = tabs[activeTab]

  return (
    <>
      <Navbar />
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: `radial-gradient(ellipse, rgba(${accentRgb},0.09) 0%, transparent 70%)`, top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.3)`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Logistics
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '0.75rem' }}>
                Text Messaging For<br />Logistics
              </h1>
              <h2 style={{ fontSize: 'clamp(1rem, 2.2vw, 1.3rem)', fontWeight: 500, lineHeight: 1.5, marginBottom: '1.5rem' }}>
                <span style={{ background: `linear-gradient(135deg, ${accent}, #fbbf24, #22d3ee)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  In today's logistics industry, personalisation is crucial, and SMS logistics solutions play a pivotal role in enhancing your customer experience.
                </span>
              </h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start For Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            <div style={{ height: 440, borderRadius: 24, background: `linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(34,211,238,0.08), rgba(16,185,129,0.05))`, border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.75rem' }}>
              <Image src="/images/logistics-hero.png" alt="Logistics" fill style={{ objectFit: 'contain', borderRadius: 24 }} />
              <div style={{ width: 72, height: 72, borderRadius: 20, background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🚚</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>logistics-hero.png</div>
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, rgba(${accentRgb},0.1), transparent 60%)`, pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text2)', marginBottom: '0.25rem' }}>Elevate your company with us</p>
          <p style={{ textAlign: 'center', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text3)', marginBottom: '2rem', fontWeight: 600 }}>just like 100+ others</p>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ display: 'flex', gap: '1.5rem', animation: 'ticker 30s linear infinite', width: 'max-content' }}>
              {[...Array(2)].map((_, repeat) => (
                <div key={repeat} style={{ display: 'flex', gap: '1.5rem' }}>
                  {partners.map((p) => (
                    <div key={`${repeat}-${p.name}`} style={{ flexShrink: 0, width: 160, height: 70, borderRadius: 12, overflow: 'hidden' }}>
                      <img src={`/images/${p.file}`} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'fill', borderRadius: 12 }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TABS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: `radial-gradient(ellipse, rgba(${accentRgb},0.06) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Our Solutions
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                In what ways can Baynix support the Logistics Industry?
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {tabs.map((tab, i) => {
                const Icon = tab.icon
                const isActive = activeTab === i
                return (
                  <button key={tab.id} onClick={() => setActiveTab(i)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 1.15rem', borderRadius: 100, border: isActive ? `1px solid ${tab.color}55` : '1px solid rgba(255,255,255,0.1)', background: isActive ? `${tab.color}15` : 'rgba(255,255,255,0.03)', color: isActive ? tab.color : 'var(--text2)', fontSize: '0.82rem', fontWeight: isActive ? 700 : 500, cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.25s ease', boxShadow: isActive ? `0 0 20px ${tab.color}22` : 'none' }}>
                    <Icon size={14} strokeWidth={2} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div style={{ height: 420, borderRadius: 20, background: `linear-gradient(135deg, ${currentTab.color}18, rgba(255,255,255,0.03))`, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.75rem', position: 'relative', overflow: 'hidden', boxShadow: `0 24px 60px rgba(0,0,0,0.3), 0 0 60px ${currentTab.color}10`, transition: 'all 0.4s ease' }}>
                <Image src={`/images/${currentTab.image}`} alt={currentTab.title} fill style={{ objectFit: 'contain' }} />
                <div style={{ width: 80, height: 80, borderRadius: 20, background: `${currentTab.color}20`, border: `1px solid ${currentTab.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', transition: 'all 0.4s ease' }}>{currentTab.emoji}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>{currentTab.image}</div>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 40%, ${currentTab.color}18, transparent 65%)`, pointerEvents: 'none', transition: 'all 0.4s ease' }} />
              </div>

              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: currentTab.color, marginBottom: '1rem', transition: 'color 0.3s' }}>
                  <span style={{ width: 18, height: 1, background: currentTab.color, display: 'inline-block' }} />
                  {currentTab.label}
                </div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>{currentTab.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>{currentTab.desc}</p>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start For Free →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY BAYNIX — 4 icon cards ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Why Baynix
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Why Baynix for Logistics?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
              {whyBaynix.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} style={{ ...glassCard, padding: '2rem 1.75rem' }} onMouseEnter={cardEnter(item.color)} onMouseLeave={cardLeave}>
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <Icon size={22} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.65rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.06) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Happy Clients
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Hear Straight From Our Happy Clients
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {testimonials.map((t) => (
                <div key={t.name} style={{ ...glassCard, padding: '2rem' }}>
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
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Contact Us
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>Get Started With Baynix</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Smarter logistics communication starts here</p>
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
                    <textarea placeholder="Tell us about your requirements..." required rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)} style={{ ...getFocusStyle('msg'), resize: 'vertical', minHeight: 100 }} />
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
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>Logistics — FAQ's</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: openFaq === i ? `1px solid rgba(${accentRgb},0.3)` : '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: openFaq === i ? `0 8px 32px rgba(${accentRgb},0.1)` : 'none' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
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