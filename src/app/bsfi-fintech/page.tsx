'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PartnerMarquee from '@/components/PartnerMarquee'
import { useState } from 'react'
import {
  Bell, CreditCard, Wallet,
  Users, ShieldCheck, Headphones,
  CheckCircle2,
} from 'lucide-react'
import ImageBox from '@/components/ImageBox'
import CTASectionForm from '@/components/CTASectionForm'

const accent    = '#3b82f6'
const accentRgb = '59,130,246'


const tabs = [
  {
    id: 'payment-reminders',
    label: 'Payment Reminders',
    icon: Bell,
    emoji: '💳',
    image: 'fintech-payment-reminders.png',
    title: 'Payment Reminders',
    desc: "Use Baynix's rapid messaging to send instant notifications to your clients about payments and transactions. Enhance communication efficiency by ensuring timely updates on financial activities. Automate due date reminders via SMS or WhatsApp, reducing missed payments and late fees while improving your collections rate significantly.",
    color: '#3b82f6',
  },
  {
    id: 'low-balance',
    label: 'Low-Balance Notifications',
    icon: Wallet,
    emoji: '📉',
    image: 'fintech-low-balance.png',
    title: 'Low-Balance Notifications',
    desc: 'Proactively alert customers the moment their account balance drops below a configurable threshold. Deliver real-time low-balance alerts via SMS, WhatsApp, or push notifications to help customers avoid overdraft fees and declined transactions — building trust and loyalty through transparent, helpful communication.',
    color: '#f59e0b',
  },
  {
    id: 'credit-card',
    label: 'Credit Card Status Notifications',
    icon: CreditCard,
    emoji: '💳',
    image: 'fintech-credit-card.png',
    title: 'Credit Card Status Notifications',
    desc: 'Keep cardholders informed with instant updates on every transaction, payment due date, credit limit changes, reward points earned, and suspicious activity flags. Automated credit card notifications reduce fraud exposure and customer anxiety while significantly lowering inbound support call volume for your contact centre.',
    color: '#10b981',
  },
]

const benefits = [
  {
    icon: Users,
    title: 'Engage Customers',
    desc: 'Sending highly personalised messages across their preferred channels can attract new digital banking consumers and reactivate inactive ones.',
    color: '#3b82f6',
  },
  {
    icon: ShieldCheck,
    title: 'Secure',
    desc: 'Our solution complies with global privacy rules, enabling authentication at several client touchpoints with enterprise-grade encryption.',
    color: '#10b981',
  },
  {
    icon: Headphones,
    title: 'Support',
    desc: 'Use chatbots or our cloud contact centre to offer immediate assistance on any channel. Integrate your systems to give agents a 360° customer view.',
    color: '#6366f1',
  },
]

const conversionPoints = [
  { label: 'Faster loan disbursement alerts',     desc: 'Notify customers the moment their loan is approved and disbursed, reducing anxiety and support calls.' },
  { label: 'Real-time fraud detection alerts',    desc: 'Instantly flag suspicious transactions and prompt customers to verify or block their card with a single tap.' },
  { label: 'Automated KYC completion nudges',     desc: 'Guide customers through KYC steps via WhatsApp chatbot, reducing drop-off and speeding up onboarding.' },
  { label: 'Two-factor authentication via OTP',   desc: 'Secure every login and transaction with time-sensitive OTPs delivered via SMS or voice call.' },
  { label: 'EMI & SIP due date reminders',        desc: 'Automate recurring reminders for EMI, SIP, and insurance premiums to drive on-time payments.' },
]

const testimonials = [
  {
    name: 'Vikram Sinha',
    role: 'VP Technology, FinEdge Bank',
    text: "Baynix transformed our customer communication overnight. Payment reminder open rates jumped to 94% on WhatsApp vs 18% on email. Our collections improved by 38% within the first quarter of going live.",
    avatar: 'VS',
    color: '#3b82f6',
  },
  {
    name: 'Deepa Krishnan',
    role: 'Head of Digital, SwiftPay Fintech',
    text: "The OTP delivery reliability is exceptional — 99.7% delivery within 5 seconds. Our customers no longer complain about missed OTPs during high-traffic periods. Baynix handles our entire authentication flow flawlessly.",
    avatar: 'DK',
    color: '#f59e0b',
  },
  {
    name: 'Amit Joshi',
    role: 'CTO, WealthFolio',
    text: "We integrated Baynix's WhatsApp Business API for portfolio update notifications. Engagement went through the roof — clients actually read their investment updates now. Our AUM grew 22% as clients became more active.",
    avatar: 'AJ',
    color: '#10b981',
  },
]

const faqs = [
  {
    q: 'How does Baynix help BFSI companies stay compliant with RBI and TRAI regulations?',
    a: 'Baynix routes all SMS communications through TRAI DLT-registered headers and pre-approved templates. For WhatsApp, all messages follow Meta\'s approved template framework. We also support GDPR and RBI data localisation requirements with India-based data processing. Our compliance team monitors regulatory changes and updates the platform accordingly so your communications always meet current standards.',
  },
  {
    q: 'What channels can I use for financial notifications through Baynix?',
    a: 'Baynix supports SMS, WhatsApp Business API, Voice OTP, IVR, RCS, and Email-to-SMS for financial communications. You can build intelligent fallback logic — for example, attempt WhatsApp delivery first, fall back to SMS if unread after 2 minutes, and escalate to a voice OTP for critical authentication flows. All from a single API integration.',
  },
  {
    q: 'How fast is OTP delivery for authentication use cases?',
    a: "Baynix delivers OTPs with a median latency of under 5 seconds across all major Indian telecom operators (Jio, Airtel, Vi, BSNL). We maintain direct SMPP connections with operators to eliminate aggregator hops. Our infrastructure is built for 99.9% uptime SLA with automatic failover across multiple carrier routes during network congestion.",
  },
  {
    q: 'Can Baynix integrate with our core banking system (CBS)?',
    a: 'Yes. Baynix provides a REST API and webhook framework that integrates with all major CBS platforms including Finacle, Temenos T24, Flexcube, and BaNCS. Our integration layer supports real-time event-triggered messaging — a transaction event in your CBS automatically fires the appropriate customer notification through Baynix within milliseconds.',
  },
  {
    q: 'Is customer data safe when using Baynix for financial communications?',
    a: 'Absolutely. Baynix is ISO 27001 certified and processes all data in encrypted form at rest and in transit. We never store sensitive financial data such as full account numbers or CVVs. Message logs are retained for configurable periods and can be purged on demand. Role-based access controls and full audit trails are available for your compliance team.',
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

export default function BsfiFintechPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [openFaq, setOpenFaq]     = useState<number | null>(0)


  const currentTab = tabs[activeTab]

  return (
    <>
      <Navbar />
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── text left, image right ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: `radial-gradient(ellipse, rgba(${accentRgb},0.09) 0%, transparent 70%)`, top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div className="fintech-hero-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.3)`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                BFSI & Fintech
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '0.75rem' }}>
                SMS For<br />Financial Services
              </h1>
              <h2 style={{ fontSize: 'clamp(1rem, 2.2vw, 1.3rem)', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                <span style={{ background: `linear-gradient(135deg, ${accent}, #60a5fa, #10b981)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Level up your business experience, ensure secure interactions, and increase customer satisfaction with omnichannel communication solutions.
                </span>
              </h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start For Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image right */}
            <ImageBox
              src="/images/fintech-hero.png"
              alt="BFSI Fintech"
              width={800} height={440}
              background={`linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(16,185,129,0.08), rgba(99,102,241,0.06))`}
              border="1px solid rgba(255,255,255,0.08)"
              borderRadius={24}
              boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)"
              imageStyle={{ objectFit: 'cover', borderRadius: 24 }}
            >
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, rgba(${accentRgb},0.1), transparent 60%)`, pointerEvents: 'none' }} />
            </ImageBox>
          </div>
        </section>

        {/* ── TRUSTED BY — MARQUEE ── */}
        <PartnerMarquee />

        {/* ── TABS SECTION ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: `radial-gradient(ellipse, rgba(${accentRgb},0.06) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Platform Features
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Digitally transform your Financial Institution on a single platform
              </h2>
            </div>

            {/* Tab pills */}
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {tabs.map((tab, i) => {
                const Icon = tab.icon
                const isActive = activeTab === i
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.55rem 1.15rem', borderRadius: 100,
                      border: isActive ? `1px solid ${tab.color}55` : '1px solid rgba(255,255,255,0.1)',
                      background: isActive ? `${tab.color}15` : 'rgba(255,255,255,0.03)',
                      color: isActive ? tab.color : 'var(--text2)',
                      fontSize: '0.82rem', fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.25s ease',
                      boxShadow: isActive ? `0 0 20px ${tab.color}22` : 'none',
                    }}
                  >
                    <Icon size={14} strokeWidth={2} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Tab content — image left, text right */}
            <div className="fintech-tabs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <ImageBox
                src={`/images/${currentTab.image}`}
                alt={currentTab.title}
                width={800} height={420}
                background={`linear-gradient(135deg, ${currentTab.color}18, rgba(255,255,255,0.03))`}
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={20}
                boxShadow={`0 24px 60px rgba(0,0,0,0.3), 0 0 60px ${currentTab.color}10`}
                style={{ transition: 'all 0.4s ease' }}
                imageStyle={{ objectFit: 'cover' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 40%, ${currentTab.color}18, transparent 65%)`, pointerEvents: 'none', transition: 'all 0.4s ease' }} />
              </ImageBox>

              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: currentTab.color, marginBottom: '1rem', transition: 'color 0.3s' }}>
                  <span style={{ width: 18, height: 1, background: currentTab.color, display: 'inline-block' }} />
                  {currentTab.label}
                </div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                  {currentTab.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>
                  {currentTab.desc}
                </p>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start For Free →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FASTER CONVERSIONS — image left, text right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', right: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div className="fintech-conversions-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl', position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ direction: 'ltr', transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/fintech-conversions.png"
                alt="Faster Conversions"
                width={800} height={460}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.1), rgba(16,185,129,0.07))`}
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
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Why Baynix
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1rem' }}>
                Faster conversions than before.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Baynix powers every stage of the financial customer journey — from onboarding to retention — with intelligent, automated messaging that drives action and builds lasting trust.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {conversionPoints.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <CheckCircle2 size={13} color={accent} strokeWidth={2.5} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>{item.label}</span>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text2)', fontWeight: 300 }}> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
            </div>
          </div>
        </section>

        {/* ── BENEFITS — 3 icon cards ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Core Benefits
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Built for the Demands of Financial Services
              </h2>
            </div>

            <div className="fintech-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {benefits.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} style={{ ...glassCard, padding: '2.25rem 2rem' }}
                    onMouseEnter={cardEnter(item.color)} onMouseLeave={cardLeave}>
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <Icon size={22} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300 }}>{item.desc}</p>
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

            <div className="fintech-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>
                Get Started With Baynix
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>
                Secure, scalable financial communication — starting today
              </p>
            </div>

            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, rgba(${accentRgb},0.5), transparent)` }} />

              <CTASectionForm />
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
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                BFSI & Fintech — FAQ's
              </h2>
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