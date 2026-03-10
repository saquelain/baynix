'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PartnerMarquee from '@/components/PartnerMarquee'
import { useState } from 'react'
import {
  CalendarCheck, CreditCard, FileText,
  Sliders, Award, Plug, Headphones,
} from 'lucide-react'
import Image from 'next/image'

const accent    = '#10b981'
const accentRgb = '16,185,129'


const tabs = [
  {
    id: 'appointment',
    label: 'Appointment Reminders',
    icon: CalendarCheck,
    emoji: '📅',
    image: 'health-appointment.png',
    title: 'Appointment Reminders',
    desc: 'Send timely appointment reminders to patients and doctors to minimise no-shows and ensure attendance at healthcare consultations. This proactive approach improves scheduling efficiency and enhances patient care delivery. Automated reminders via SMS or WhatsApp at 24 hours and 2 hours before each appointment reduce cancellations and help clinics run on schedule.',
    color: '#10b981',
  },
  {
    id: 'payment',
    label: 'Payment Alerts',
    icon: CreditCard,
    emoji: '💳',
    image: 'health-payment.png',
    title: 'Payment Alerts',
    desc: 'Notify patients instantly about billing updates, insurance claim status, co-pay due dates, and payment confirmations. Automated payment alerts reduce outstanding dues and eliminate awkward manual follow-up calls. Patients receive a clear, friendly message with a payment link — making the settlement process seamless and stress-free for both parties.',
    color: '#3b82f6',
  },
  {
    id: 'results',
    label: 'Test Result Notifications',
    icon: FileText,
    emoji: '🧪',
    image: 'health-results.png',
    title: 'Test Result Notifications',
    desc: "Notify patients the moment their lab reports or diagnostic results are ready, with a secure link to view them online. Reduce the volume of inbound calls asking 'are my results ready?' and give patients peace of mind with instant, HIPAA-aware updates. Doctors can also receive automated alerts for critical values that require immediate attention.",
    color: '#f59e0b',
  },
]

const whyBaynix = [
  {
    icon: Sliders,
    title: 'Customisation',
    desc: "Baynix's offerings are inherently scalable and can readily accommodate the unique requirements of your healthcare enterprise. Specify the desired customisations for your institution, and we'll gladly assist you in building the perfect workflow.",
    color: '#10b981',
  },
  {
    icon: Award,
    title: 'Industry Experience',
    desc: "Baynix brings extensive expertise in collaborating with prominent healthcare brands, shaping patient communication journeys to drive impactful outcomes. We've served a mix of small clinics and large hospital chains nationwide for over four years.",
    color: '#3b82f6',
  },
  {
    icon: Plug,
    title: 'Simple Integration',
    desc: "Integrating Baynix into your current hospital management system or clinic software is straightforward. Our integration is swift and our services are user-friendly, with two-way conversational channels providing reliable support around the clock.",
    color: '#f59e0b',
  },
  {
    icon: Headphones,
    title: 'Tech Support',
    desc: "Baynix provides ongoing technical assistance throughout your journey, prioritising meaningful long-term relationships over mere product sales. As a platform-based digital communication provider, we're constantly prepared to expand and scale as your needs grow.",
    color: '#a78bfa',
  },
]

const testimonials = [
  {
    name: 'Dr. Suresh Iyer',
    role: 'Medical Director, LifeCare Hospitals',
    text: "Appointment no-show rates dropped from 34% to 9% after we implemented Baynix's automated WhatsApp reminders. Patients love the convenience and our scheduling team has more time to focus on care rather than chasing confirmations.",
    avatar: 'SI',
    color: '#10b981',
  },
  {
    name: 'Nandita Krishnan',
    role: 'Operations Head, MediPath Diagnostics',
    text: "Our patients used to call the lab 3–4 times asking about their reports. Since we started sending instant result-ready notifications via Baynix, inbound calls dropped by 70% and patient satisfaction scores hit an all-time high.",
    avatar: 'NK',
    color: '#3b82f6',
  },
  {
    name: 'Dr. Vikram Bose',
    role: 'CEO, TeleHealth India',
    text: "Baynix powers our entire teleconsultation reminder and payment workflow. Integration with our HMS took less than two days. The WhatsApp chatbot handles appointment bookings 24/7, freeing our staff to focus on complex patient needs.",
    avatar: 'VB',
    color: '#f59e0b',
  },
]

const faqs = [
  {
    q: 'How does Baynix help reduce patient no-shows?',
    a: "Baynix integrates with your hospital management system or clinic scheduling software to automatically send appointment reminder messages via SMS or WhatsApp — typically at 24 hours and 2 hours before the appointment. Patients can confirm or reschedule directly from the message, allowing your team to fill cancelled slots. Most healthcare clients see no-show rates drop by 60–75% within the first month.",
  },
  {
    q: 'Is patient data safe when using Baynix for healthcare communication?',
    a: "Yes. Baynix is designed with healthcare privacy in mind. All data is encrypted in transit and at rest. We do not store sensitive health information in message logs — only the notification metadata. Access controls, audit trails, and configurable data retention policies are available to help you meet regulatory requirements. We recommend consulting your compliance team for jurisdiction-specific obligations.",
  },
  {
    q: 'Can Baynix integrate with hospital management systems (HMS) and EMR platforms?',
    a: "Absolutely. Baynix provides a RESTful API and webhook support that integrates with popular HMS and EMR platforms. When a patient appointment is booked, a lab result is finalised, or a bill is generated in your system, Baynix automatically fires the appropriate patient notification. Most integrations go live within one to two business days with dedicated technical support throughout the process.",
  },
  {
    q: 'Which channels work best for healthcare communication?',
    a: "WhatsApp is the most effective channel for appointment reminders and result notifications in India, with open rates exceeding 90%. SMS serves as a reliable fallback for patients without smartphones. Voice OTP is ideal for patient authentication. IVR is excellent for appointment booking self-service and reducing call centre load. Baynix supports all these channels from a single platform with intelligent channel fallback logic.",
  },
  {
    q: 'Can Baynix support multi-location hospital chains?',
    a: "Yes. Baynix's platform supports multi-location and multi-department setups with centralised reporting and location-specific configurations. Each branch can have its own sender ID, message templates, and communication workflows, while your central team maintains visibility across all locations through a unified dashboard. Role-based access controls ensure each location's staff sees only their own data.",
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

export default function HealthCarePage() {
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
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.3)`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Healthcare
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '0.75rem' }}>
                SMS For<br />Healthcare
              </h1>
              <h2 style={{ fontSize: 'clamp(1rem, 2.2vw, 1.3rem)', fontWeight: 500, lineHeight: 1.5, marginBottom: '1.5rem' }}>
                <span style={{ background: `linear-gradient(135deg, ${accent}, #34d399, #3b82f6)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Utilise customised omnichannel communication solutions to enhance patient care efficiency and foster a robust healthcare environment.
                </span>
              </h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start For Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            <div style={{ height: 440, borderRadius: 24, background: `linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(59,130,246,0.08), rgba(245,158,11,0.05))`, border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.75rem' }}>
              <Image src="/images/health-hero.png" alt="Healthcare" fill style={{ objectFit: 'contain', borderRadius: 24 }} />
              <div style={{ width: 72, height: 72, borderRadius: 20, background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🏥</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>health-hero.png</div>
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, rgba(${accentRgb},0.1), transparent 60%)`, pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <PartnerMarquee />

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
                In what ways can Baynix support the Healthcare Industry?
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
                {/* <Image src={`/images/${currentTab.image}`} alt={currentTab.title} fill style={{ objectFit: 'contain' }} /> */}
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
                Why Baynix for Healthcare?
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
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Better patient communication starts today</p>
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
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>Healthcare — FAQ's</h2>
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