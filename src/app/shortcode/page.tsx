'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageBox from '@/components/ImageBox'
import { useState } from 'react'
import { Clock, MessageSquare, Tag, CalendarClock, Plug, LifeBuoy, TrendingUp, Users, Activity } from 'lucide-react'
import CTASectionForm from '@/components/CTASectionForm'

const features = [
  {
    icon: Clock,
    title: 'Time Guarantee',
    desc: 'Our services provide real-time reporting and analytics via a user-friendly web panel, offering detailed information for informed decision-making.',
    color: '#f59e0b',
  },
  {
    icon: MessageSquare,
    title: 'Keyword Response',
    desc: 'Our platform enables automated keyword response, enhancing customer interaction and engagement seamlessly.',
    color: '#22d3ee',
  },
  {
    icon: Tag,
    title: 'Keyword Campaigns',
    desc: 'Implement effective keyword campaigns to drive targeted engagement and optimize customer interaction efficiently.',
    color: '#6366f1',
  },
  {
    icon: CalendarClock,
    title: 'Time Based Campaigns',
    desc: 'Leverage time-based campaigns to optimize engagement strategies and maximize outreach effectiveness efficiently.',
    color: '#10b981',
  },
  {
    icon: Plug,
    title: 'Integration Support',
    desc: 'We offer robust integration support to seamlessly incorporate our services into your existing systems, ensuring smooth operations.',
    color: '#3b82f6',
  },
  {
    icon: LifeBuoy,
    title: 'Support 24 x 7',
    desc: 'Working with us gives you access to our help 24/7. Our quick response teams are here to help you with any problems you may be having.',
    color: '#a78bfa',
  },
]

const accordionItems = [
  {
    title: 'Short Setup Time',
    content: 'The fact that a short code SMS service may be set up quickly is among its biggest benefits. Unlike long codes that can take months to provision, short codes can be activated within days, allowing your business to start reaching customers almost immediately. Our team handles the entire provisioning process for you.',
    color: '#ec4899',
  },
  {
    title: 'Two-way Communication',
    content: 'Short codes enable true two-way SMS conversations with your customers. Recipients can reply directly to your short code number, triggering automated responses, keyword-based workflows, or routing to live agents — creating interactive, engaging customer experiences that long codes cannot match at scale.',
    color: '#f59e0b',
  },
  {
    title: 'Customized Messages',
    content: 'Personalize every message with dynamic fields including customer names, order IDs, appointment times, and custom data from your CRM. Combine personalization with pre-approved templates to maintain brand consistency while making each customer feel individually addressed.',
    color: '#10b981',
  },
  {
    title: 'Diverse Audience',
    content: 'Short codes work across all mobile carriers and devices, giving you universal reach to your entire customer base. Whether your audience uses prepaid or postpaid plans, any carrier, or any device, your short code messages are delivered reliably — no internet connection required.',
    color: '#6366f1',
  },
]

const stats = [
  { icon: TrendingUp, value: '70%',  label: 'Higher Conversions than other channels', color: '#ec4899' },
  { icon: Users,      value: '900+', label: 'Short Code subscribers globally',          color: '#6366f1' },
  { icon: Activity,   value: '3X',   label: 'Open rate than other channels',            color: '#22d3ee' },
]

const testimonials = [
  {
    name: 'Nisha Kapoor',
    role: 'Marketing Director, FashionHub',
    text: 'Our short code campaigns have completely transformed how we do flash sales. Customers text a keyword and instantly get exclusive discount codes. Engagement is through the roof.',
    avatar: 'NK',
    color: '#ec4899',
  },
  {
    name: 'Rajiv Sinha',
    role: 'Head of Operations, QuickServe',
    text: 'The keyword response automation saves our team hours every day. Customers text "ORDER" to our short code and get instant order status updates — no agent needed.',
    avatar: 'RS',
    color: '#6366f1',
  },
  {
    name: 'Meera Pillai',
    role: 'CRM Lead, BankPro',
    text: 'Two-way communication via short code has made our loan application process so much smoother. Customers can respond with a single word and move through the entire funnel.',
    avatar: 'MP',
    color: '#22d3ee',
  },
]

const faqs = [
  {
    q: 'What is a Short Code SMS service?',
    a: 'A short code SMS service allows businesses to send and receive SMS using a unique 5 or 6-digit number. Unlike regular 10-digit numbers, short codes support high-throughput messaging, keyword-triggered automated responses, and are pre-approved by carriers — making them ideal for large-scale campaigns, lead generation, and customer engagement programs.',
  },
  {
    q: 'How are short codes different from long codes?',
    a: 'Short codes are 5–6 digit numbers optimized for bulk messaging with carrier-approved high throughput (up to 500 messages per second). Long codes are standard 10-digit numbers suited for conversational, person-to-person messaging. Short codes offer better deliverability, carrier trust, and are purpose-built for business campaigns at scale.',
  },
  {
    q: 'Can I use a shared or dedicated short code?',
    a: 'Both options are available. Shared short codes let multiple businesses use the same number, differentiated by unique keywords — ideal for smaller budgets. Dedicated short codes give your brand exclusive ownership of the number, providing better brand recognition, unrestricted keyword usage, and higher sender trust with customers.',
  },
  {
    q: 'What industries use short code SMS?',
    a: 'Short code SMS is used across retail (flash sales, coupons), banking and finance (OTPs, alerts), healthcare (appointment reminders), entertainment (voting, contests), logistics (delivery updates), and political campaigns. Any industry that needs to reach a broad audience quickly and reliably benefits from short code messaging.',
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

export default function ShortCodePage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)
  const [openFaq, setOpenFaq]             = useState<number | null>(0)


  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(236,72,153,0.09) 0%, transparent 70%)', top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div className="shortcode-hero-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#f472b6', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.5rem' }}>
                Start Using
              </div>

              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.5rem' }}>
                Future-proof{' '}
                <span style={{ background: 'linear-gradient(135deg, #f472b6, #ec4899, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Short Code Service
                </span>
              </h1>

              <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem', maxWidth: 480 }}>
                Enhance your communication strategy and drive business growth with Baynix's short code integration. By incorporating short codes into your communication stack, you can streamline customer interactions, increase engagement, and ultimately boost your profits.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image */}
            <ImageBox
              src="/images/shortcode-hero.png"
              priority
              alt="Short Code Service"
              width={800}
              height={420}
              background="linear-gradient(135deg, rgba(236,72,153,0.1), rgba(99,102,241,0.08), rgba(34,211,238,0.06))"
              border="1px solid rgba(255,255,255,0.08)"
              borderRadius={24}
              boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)"
              imageStyle={{ objectFit: 'cover', borderRadius: 24 }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(236,72,153,0.08), transparent 60%)', pointerEvents: 'none' }} />
            </ImageBox>
          </div>
        </section>

        {/* ── WHAT IS A SHORT CODE ── */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(236,72,153,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#f472b6', marginBottom: '1rem' }}>
              <span style={{ width: 18, height: 1, background: '#f472b6', display: 'inline-block' }} />
              Overview
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '1.25rem' }}>
              What is a Short Code?
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>
              A short code is a unique 5 or 6-digit number primarily utilized for sending bulk promotional messages, generating leads, and conducting extensive campaigns aimed at customers. These codes are easily memorable and can be accessed simply by sending an SMS. They offer a swift and efficient method to connect with your customers and cultivate enduring relationships with them.
            </p>
          </div>
        </section>

        {/* ── FEATURES GRID (ICONS) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#f472b6', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#f472b6', display: 'inline-block' }} />
                Features
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Everything included with Short Code
              </h2>
            </div>

            <div className="shortcode-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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

        {/* ── WHY CHOOSE — ACCORDION + IMAGE ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', top: '50%', right: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {/* Heading */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#f472b6', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#f472b6', display: 'inline-block' }} />
                Why Choose Us
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', maxWidth: 700 }}>
                Why Choose Baynix's Short Code Services?
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, maxWidth: 660, marginTop: '1rem' }}>
                Around 5 billion people worldwide use SMS text messaging, making it the preferred communication method for approximately 65% of the global population. Choosing a Short Code SMS Service for your business can capitalize on this popular medium, driving profits and enhancing customer engagement effectively.
              </p>
            </div>

            <div className="shortcode-why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
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

              {/* Image right */}
              <div
                style={{ borderRadius: 20, transition: 'transform 0.4s ease', position: 'sticky', top: '6rem' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                <ImageBox
                  src="/images/shortcode-why.png"
                  alt="Why Short Code"
                  width={800}
                  height={420}
                  background="linear-gradient(135deg, rgba(236,72,153,0.1), rgba(99,102,241,0.07))"
                  border="1px solid rgba(255,255,255,0.08)"
                  borderRadius={20}
                  boxShadow="0 24px 60px rgba(0,0,0,0.4)"
                  imageStyle={{ objectFit: 'contain' }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(236,72,153,0.1), transparent 70%)', pointerEvents: 'none' }} />
                </ImageBox>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(236,72,153,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div className="shortcode-stats-grid" style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
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

        {/* ── TESTIMONIALS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#f472b6', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#f472b6', display: 'inline-block' }} />
                Happy Clients
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>What our clients say</h2>
            </div>

            <div className="shortcode-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#f472b6', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#f472b6', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>Quickly boost delivery rates!</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get Started With Baynix Short Code Service</p>
            </div>

            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.5), transparent)' }} />

              <CTASectionForm />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: '#f472b6', marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: '#f472b6', display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Short Code Service — FAQ's
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: openFaq === i ? '1px solid rgba(236,72,153,0.3)' : '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: openFaq === i ? '0 8px 32px rgba(236,72,153,0.1)' : 'none' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' as const, gap: '1rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>{faq.q}</span>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: openFaq === i ? 'rgba(236,72,153,0.2)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', fontSize: '0.8rem', color: openFaq === i ? '#f472b6' : 'var(--text3)' }}>
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