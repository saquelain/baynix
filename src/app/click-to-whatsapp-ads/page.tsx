'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { Headphones, Bell, RefreshCw, BookOpen, Zap } from 'lucide-react'

const features = [
  { icon: Headphones, title: 'Real-Time Customer Support', color: '#3b82f6' },
  { icon: Bell, title: 'Send Creative Notifications', color: '#f59e0b' },
  { icon: RefreshCw, title: 'Notify Relevant Updates', color: '#22d3ee' },
  { icon: BookOpen, title: 'Showcase Product Catalogs', color: '#10b981' },
  { icon: Zap, title: 'Messaging Automation', color: '#a78bfa' },
]

const splits = [
  {
    badge: 'Automated Chat',
    title: 'Boost sales and discovery through an engaging chat experience.',
    desc: 'Use guided discussion flows and icebreakers to engage potential customers. Information collection, product recommendation, and sales agent connection all happen automatically. Make shopping easy for them by allowing them to explore catalogues, add items to their carts, and finish the checkout process all using WhatsApp.',
    image: '/images/ctwa-automated-chat.png',
    color: '#25d366',
    imageLeft: false,
  },
  {
    badge: 'Social CRM for Marketing',
    title: 'Boost retargeting performance with first party data.',
    desc: 'Are you facing challenges with limited user-level data for effective targeting? Enhance your customer profiles by collecting names, mobile numbers, and interests in a CRM. This allows you to send targeted marketing messages and reengage with relevant segments, maximizing ROI and lowering CPC.',
    image: '/images/ctwa-social-crm.png',
    color: '#6366f1',
    imageLeft: true,
  },
  {
    badge: 'Analytics and Insights',
    title: 'Track end-to-end journey for accurate marketing attribution.',
    desc: 'Discover which Facebook ad campaigns drive conversations to your inbox. Move beyond impressions and clicks by implementing a lead labeling system to measure performance. Evaluate bot interactions, lead progression, and inquiry quality for a comprehensive understanding of your campaign effectiveness.',
    image: '/images/ctwa-analytics.png',
    color: '#3b82f6',
    imageLeft: false,
  },
]

const solutions = [
  'One-on-one, personalised online consultations',
  'Connect, advise, and form enduring relationships.',
  'Make directions more suited to win their hearts.',
  'Make customised orders based on the preferences of individual customers.',
  'Arrange site visits in a seamless manner.',
  'At the convenience of your clients, schedule on-site visits.',
  'Utilize an online-merge-offline experience to streamline your processes.',
  'Maximize the possibilities of your marketing campaign.',
  'Develop deep-rooted trust through nurturing.',
  'Turn consumers into ardent supporters of your company.',
]

const faqs = [
  {
    q: 'What are Click to WhatsApp Ads?',
    a: 'Click to WhatsApp Ads are Facebook or Instagram ads that open a WhatsApp conversation when clicked. Instead of directing users to a landing page, the ad opens WhatsApp directly, allowing businesses to engage leads in real-time through a familiar messaging interface.',
  },
  {
    q: 'How do Click to WhatsApp Ads help generate leads?',
    a: 'These ads eliminate friction in the lead generation process. When a user clicks the ad, they are instantly connected to your WhatsApp, where automated flows can collect their information, answer questions, recommend products, and even complete sales — all without human intervention.',
  },
  {
    q: 'Can I automate conversations from Click to WhatsApp Ads?',
    a: 'Yes. Baynix allows you to set up automated chat flows that trigger the moment a user clicks your ad and opens WhatsApp. These flows can qualify leads, collect first-party data, showcase product catalogs, and route conversations to the right human agent when needed.',
  },
  {
    q: 'How does Baynix track conversions from WhatsApp Ads?',
    a: 'Baynix provides end-to-end analytics that connects your Facebook ad campaigns to WhatsApp conversations. You can track which campaigns drive the most conversations, monitor lead progression through your funnel, and measure bot interaction quality — giving you accurate marketing attribution.',
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

export default function ClickToWhatsAppAdsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [focused, setFocused] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const getFocusStyle = (field: string) =>
    focused === field
      ? {
          ...inputStyle,
          border: '1px solid rgba(37,211,102,0.5)',
          background: 'rgba(255,255,255,0.06)',
          boxShadow: '0 0 0 3px rgba(37,211,102,0.1)',
        }
      : inputStyle

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{
            position: 'absolute', width: 700, height: 500,
            background: 'radial-gradient(ellipse, rgba(37,211,102,0.08) 0%, transparent 70%)',
            top: '50%', left: '30%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', width: 400, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
            top: '20%', right: '5%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.3rem 0.9rem',
                background: 'rgba(37,211,102,0.12)',
                border: '1px solid rgba(37,211,102,0.3)',
                borderRadius: 100, fontSize: '0.72rem', fontWeight: 700,
                color: '#25d366', letterSpacing: '0.1em',
                textTransform: 'uppercase' as const, marginBottom: '1.5rem',
              }}>
                WhatsApp Ads
              </div>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1,
                color: 'var(--text)', marginBottom: '1.5rem',
              }}>
                Engage WhatsApp users with your ads to get{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #25d366, #128c7e, #a78bfa)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  double the leads.
                </span>
              </h1>

              <p style={{
                fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem', maxWidth: 480,
              }}>
                To increase your speed-to-lead, automate discussions that happen after users click on WhatsApp advertising. Along the process, gather first-party information to support successful retargeting campaigns. Using a single inbox, route chats to human agents and monitor conversions.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image */}
            <div style={{
              height: 420, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(18,140,126,0.08), rgba(99,102,241,0.06))',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)',
            }}>
              <Image src="/images/ctwa-hero.png" alt="Click to WhatsApp Ads" fill style={{ objectFit: 'cover', borderRadius: 24 }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(37,211,102,0.08), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </section>

        {/* ── UNLOCKING FEATURES ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(37,211,102,0.06) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: '#25d366', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: '#25d366', display: 'inline-block' }} />
                Key Features
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Unlocking the New Features of WhatsApp Service Provider
              </h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' as const, gap: '1rem' }}>
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    style={{
                      display: 'flex', flexDirection: 'column' as const,
                      alignItems: 'center', gap: '1rem',
                      padding: '2rem 1.5rem', width: 180, textAlign: 'center' as const,
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 20, position: 'relative', overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.border = `1px solid ${f.color}33`
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 40px rgba(0,0,0,0.3), 0 0 24px ${f.color}18`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)'
                    }}
                  >
                    <div style={{
                      position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                      background: `linear-gradient(90deg, transparent, ${f.color}66, transparent)`,
                    }} />
                    <div style={{
                      width: 52, height: 52, borderRadius: 16,
                      background: `${f.color}15`,
                      border: `1px solid ${f.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={22} color={f.color} strokeWidth={1.8} />
                    </div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>
                      {f.title}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── SPLIT SECTIONS ── */}
        {splits.map((split) => (
          <section key={split.badge} style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', width: 500, height: 400,
              background: `radial-gradient(ellipse, ${split.color}08 0%, transparent 70%)`,
              top: '50%', ...(split.imageLeft ? { right: '10%' } : { left: '10%' }),
              transform: 'translateY(-50%)', pointerEvents: 'none',
            }} />

            <div style={{
              maxWidth: 1100, margin: '0 auto',
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '4rem', alignItems: 'center',
              direction: split.imageLeft ? 'rtl' : 'ltr' as any,
              position: 'relative', zIndex: 1,
            }}>
              {/* Image */}
              <div
                style={{
                  height: 380, borderRadius: 20,
                  position: 'relative', overflow: 'hidden',
                  direction: 'ltr',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: `0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px ${split.color}15`,
                  transition: 'transform 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                <Image src={split.image} alt={split.badge} fill style={{ objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 100%, ${split.color}12, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Text */}
              <div style={{ direction: 'ltr' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.72rem', textTransform: 'uppercase' as const,
                  letterSpacing: '0.12em', fontWeight: 700,
                  color: split.color, marginBottom: '1rem',
                  padding: '0.3rem 0.9rem',
                  background: `${split.color}12`,
                  border: `1px solid ${split.color}25`,
                  borderRadius: 100,
                }}>
                  {split.badge}
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800,
                  letterSpacing: '-0.03em', lineHeight: 1.25,
                  color: 'var(--text)', marginBottom: '1.25rem',
                }}>
                  {split.title}
                </h2>
                <p style={{
                  fontSize: '0.95rem', color: 'var(--text2)',
                  lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem',
                }}>
                  {split.desc}
                </p>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">
                  Get Started →
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* ── ONE SOLUTION ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
            top: '50%', left: '20%', transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                One Solution
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.2,
                color: 'var(--text)', marginBottom: '1.5rem',
              }}>
                One solution for all customer-centric businesses
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.6rem' }}>
                {solutions.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                      background: 'rgba(37,211,102,0.15)',
                      border: '1px solid rgba(37,211,102,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#25d366' }} />
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.6, fontWeight: 300 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div style={{
              height: 480, borderRadius: 20,
              position: 'relative', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
            }}>
              <Image src="/images/ctwa-solution.png" alt="One solution for all businesses" fill style={{ objectFit: 'cover' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 30% 70%, rgba(37,211,102,0.1), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </section>

        {/* ── ENQUIRY FORM ── */}
        <section id="enquiry" style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(37,211,102,0.06) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: '#25d366', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: '#25d366', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem',
              }}>
                Are you excited to try?
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>
                Join the waiting list — Get Started With Baynix
              </p>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(37,211,102,0.5), transparent)',
              }} />

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>You're on the list!</h3>
                  <p style={{ color: 'var(--text2)', fontWeight: 300 }}>We'll reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Name *</label>
                    <input
                      type="text" placeholder="Your name" required
                      value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      style={getFocusStyle('name')}
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Email *</label>
                    <input
                      type="email" placeholder="your@email.com" required
                      value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      style={getFocusStyle('email')}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Message *</label>
                    <textarea
                      placeholder="Tell us about your requirements..." required rows={4}
                      value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)}
                      style={{ ...getFocusStyle('msg'), resize: 'vertical' as const, minHeight: 100 }}
                    />
                  </div>
                  <button type="submit" className="glass-btn glass-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Join Waiting List →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(37,211,102,0.05) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: '#25d366', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: '#25d366', display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Click to WhatsApp Ads — FAQ's
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                    border: openFaq === i ? '1px solid rgba(37,211,102,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16, overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: openFaq === i ? '0 8px 32px rgba(37,211,102,0.08)' : 'none',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', padding: '1.25rem 1.5rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      textAlign: 'left' as const, gap: '1rem',
                    }}
                  >
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: openFaq === i ? 'rgba(37,211,102,0.15)' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'all 0.2s',
                      fontSize: '0.8rem', color: openFaq === i ? '#25d366' : 'var(--text3)',
                    }}>
                      {openFaq === i ? '−' : '+'}
                    </div>
                  </button>

                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem' }}>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>
                        {faq.a}
                      </p>
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