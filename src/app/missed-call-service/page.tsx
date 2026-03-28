'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageBox from '@/components/ImageBox'
import { useState } from 'react'
import { BarChart3, MessageSquareReply, Download, Settings2, CheckCircle2 } from 'lucide-react'

// ── Feature cards ─────────────────────────────────────────────────────
const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Reports',
    desc: 'Get real-time reports of prospects and customers who make missed calls.',
    color: '#22d3ee',
  },
  {
    icon: MessageSquareReply,
    title: 'Automate Your Responses',
    desc: 'Enhance customer engagement by sending a quick SMS to users who leave a missed call.',
    color: '#f59e0b',
  },
  {
    icon: Download,
    title: 'Export Data',
    desc: 'Utilize our platform to export customer data seamlessly into your CRM or ERP platform.',
    color: '#10b981',
  },
  {
    icon: Settings2,
    title: 'Customization',
    desc: 'Tailor the service to suit your business needs and enable the optimal experience for your customers.',
    color: '#a78bfa',
  },
]

// ── Key Benefits ──────────────────────────────────────────────────────
const benefits = [
  'Increase ROI of Marketing Campaigns',
  'Enhance customer engagement',
  'Cross-telco connectivity',
  'Detailed real-time reporting',
  'Perfect tool for lead generation',
  'Zero charges to end customers',
  'Business & non-business hours configuration',
  'DLT compliance as per TRAI compliance',
]

// ── Testimonials ──────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Rajesh Kapoor',
    role: 'Marketing Head, GrowthBrands',
    text: "Baynix's missed call service became the backbone of our lead generation. We ran a campaign where customers gave a missed call to opt in — we collected 18,000 verified leads in 72 hours with zero call charges to our audience.",
    avatar: 'RK',
    color: '#22d3ee',
  },
  {
    name: 'Nisha Verma',
    role: 'Digital Strategy, UrbanRetail',
    text: 'The automated SMS callback feature is brilliant. The moment someone misses a call, they get a personalized message within seconds. Our response rate jumped 3x compared to traditional callback systems.',
    avatar: 'NV',
    color: '#f59e0b',
  },
  {
    name: 'Karan Bose',
    role: 'Founder, AgriConnect',
    text: "For our rural customer base, missed call services are the ideal touchpoint. No data, no app, no smartphone needed. Farmers just dial and disconnect — we call back. Baynix's cross-telco connectivity means no one is left out.",
    avatar: 'KB',
    color: '#10b981',
  },
]

// ── FAQs ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is Baynix Missed Call Service?',
    a: "Baynix's Missed Call Service is a cloud-based communication tool that allows businesses to assign a dedicated phone number to which customers can call and disconnect — at no charge to the caller. The system instantly captures the caller's number, triggers automated responses (SMS, callback, or CRM update), and logs the interaction in real-time for business use.",
  },
  {
    q: 'How does the Baynix Missed Call Service work?',
    a: "A customer dials your dedicated missed call number and hangs up before the call connects — incurring zero charges. Baynix's system detects the missed call in real time, captures the caller's mobile number, and triggers your configured automation: sending an instant SMS reply, initiating a callback, adding the lead to your CRM, or triggering any webhook you've set up.",
  },
  {
    q: 'What are the benefits of using Baynix Missed Call Service?',
    a: 'Key benefits include zero cost to the end customer (dramatically improving opt-in rates), 24/7 availability, instant automated responses, real-time dashboard reporting, CRM and ERP data export, cross-telco connectivity across all major Indian carriers, TRAI DLT compliance, and the ability to configure separate flows for business and non-business hours.',
  },
  {
    q: 'How do I Activate Missed Call Service?',
    a: "Activating Baynix's Missed Call Service takes minutes. Sign up on app.baynix.ai, choose a dedicated missed call number, configure your automated response (SMS template, callback flow, or CRM webhook), and go live. Our team provides onboarding support, and the dashboard gives you real-time visibility from the first call.",
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

export default function MissedCallPage() {
  const [openFaq, setOpenFaq]     = useState<number | null>(0)
  const [focused, setFocused]     = useState<string | null>(null)
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const accent = '#22d3ee'
  const accentRgb = '34,211,238'

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
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div className="mc-hero-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.3)`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                Missed Call Service
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1rem' }}>
                Missed Call
              </h1>
              <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.7rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                <span style={{ background: `linear-gradient(135deg, ${accent}, #67e8f9, #f59e0b)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Use Our Missed Call Service To Never Miss An Opportunity
                </span>
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', maxWidth: 480 }}>
                Enable your customers to connect with zero friction — a missed call is all it takes. Capture leads, trigger responses, and build verified databases around the clock.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image right */}
            <ImageBox
              src="/images/missed-call-hero.png"
              alt="Missed Call Service"
              width={800}
              height={440}
              background={`linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(245,158,11,0.08), rgba(16,185,129,0.05))`}
              border="1px solid rgba(255,255,255,0.08)"
              borderRadius={24}
              boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)"
              imageStyle={{ objectFit: 'contain', borderRadius: 24 }}
            >
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, rgba(${accentRgb},0.1), transparent 60%)`, pointerEvents: 'none' }} />
            </ImageBox>
          </div>
        </section>

        {/* ── BEST MISSED CALL SERVICES — image left, text right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', right: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div className="mc-services-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl' as any, position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ direction: 'ltr', borderRadius: 20, transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/missed-call-services.png"
                alt="Best Missed Call Services"
                width={800}
                height={420}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.1), rgba(245,158,11,0.07))`}
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
                About the Service
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Best Missed Call Services
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1rem' }}>
                Baynix's missed call service enables businesses of all sizes to efficiently connect with their customers. With 24/7 availability and no charges to the end customer, this service helps enterprises build a database of verified users for future marketing campaigns.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Modern businesses strive to drive revenues and profitability, and missed calls provide an easy way for customers to reach out without hassle. By simply giving a missed call, customers can relax while companies respond at their convenience, ensuring no revenue is lost.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
            </div>
          </div>
        </section>

        {/* ── FEATURE CARDS — 4 icon cards ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Features
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.3 }}>
                It's Never Been So Easy To Use A Missed Call Service<br />To Help Businesses Grow Their Clients
              </h2>
            </div>

            <div className="mc-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
              {features.map((item) => {
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

        {/* ── SMART VOICE CTA — text left, illustration right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.08) 0%, transparent 70%)`, top: '50%', left: '8%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div className="mc-cta-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Are You Trying to find Smart Voice Solutions?
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Baynix's missed call platform is live in minutes. Choose your number, configure your response flows, and start capturing leads around the clock — no technical complexity, no setup cost.
              </p>
              <a href="#enquiry" className="glass-btn glass-btn-primary">Get Started Now →</a>
            </div>

            <div
              style={{ borderRadius: 24, transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/missed-call-smart.png"
                alt="Smart Voice Solutions"
                width={800}
                height={400}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(245,158,11,0.08))`}
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={24}
                boxShadow="inset 0 1px 0 rgba(255,255,255,0.08)"
                imageStyle={{ objectFit: 'contain' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 60% 40%, rgba(${accentRgb},0.12), transparent 60%)`, pointerEvents: 'none' }} />
              </ImageBox>
            </div>
          </div>
        </section>

        {/* ── KEY BENEFITS — image left, tick list right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)', top: '50%', right: '5%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div className="mc-why-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl' as any, position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ direction: 'ltr', borderRadius: 20, transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/missed-call-benefits.png"
                alt="Key Benefits"
                width={800}
                height={460}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.1), rgba(16,185,129,0.08))`}
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={20}
                boxShadow="0 24px 60px rgba(0,0,0,0.4)"
                imageStyle={{ objectFit: 'contain' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 100%, rgba(${accentRgb},0.1), transparent 70%)`, pointerEvents: 'none' }} />
              </ImageBox>
            </div>

            {/* Text right with tick marks */}
            <div style={{ direction: 'ltr' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Key Benefits
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.25, color: 'var(--text)', marginBottom: '2rem' }}>
                Key Benefits of using Baynix Missed Call Services
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.85rem' }}>
                {benefits.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <CheckCircle2 size={13} color={accent} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.6, fontWeight: 400 }}>{benefit}</span>
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

            <div className="mc-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get Started With Baynix Missed Call Service</p>
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
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>Missed Call Service — FAQ's</h2>
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