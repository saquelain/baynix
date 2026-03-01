'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeftRight, MessageSquare, ShoppingBag, BookOpen, LayoutDashboard, Bell, Bot, Users, ShoppingCart, CalendarClock } from 'lucide-react'

const features = [
  { icon: ArrowLeftRight, title: 'Seamless Transactions',       color: '#25d366' },
  { icon: MessageSquare,  title: 'Seamless Communication',      color: '#6366f1' },
  { icon: ShoppingBag,    title: 'Showcase Products or Services', color: '#22d3ee' },
  { icon: BookOpen,       title: 'Showcase Product Catalogs',   color: '#f59e0b' },
]

const crmFeatures = [
  {
    icon: LayoutDashboard,
    title: 'Lead Management',
    desc: 'Keeping track of leads in Excel and Google Sheets is difficult. We have made an appropriate interactive dashboard for you as a result.',
    color: '#25d366',
  },
  {
    icon: Bell,
    title: 'WhatsApp Notifications',
    desc: 'Receive alerts about new leads straight on WhatsApp to connect with them more quickly and close the leads as soon as possible.',
    color: '#6366f1',
  },
  {
    icon: Bot,
    title: 'DIY Chatbot',
    desc: 'Make your own chatbot on WhatsApp without knowing any code. Just a chatbot with a Google Sheets base.',
    color: '#22d3ee',
  },
  {
    icon: Users,
    title: 'Multi-agent Live Chat',
    desc: 'Provide simultaneous live chat assistance by having several human chat operators connect to the same WhatsApp number.',
    color: '#3b82f6',
  },
  {
    icon: ShoppingCart,
    title: 'WhatsApp Commerce',
    desc: "Connect your products to Facebook's catalogue and streamline the purchasing process. Send notifications, alerts, and more.",
    color: '#f59e0b',
  },
  {
    icon: CalendarClock,
    title: 'Detailed Scheduling',
    desc: 'Organise and plan your consumer communications more efficiently. Make certain that messages are sent at the most convenient moment.',
    color: '#a78bfa',
  },
]

const commerceBullets = [
  'Easy way to share catalogue, prices, collect payment, etc.',
  'Enable Customers to buy in the easiest possible manner.',
  'Integrated with Marketing Automation for easy conversions.',
  'An agent can take over at any stage for assisted buying, without the customer having to change the communication channel.',
  'Capture and analyse each step in customer buying journey to understand preferences.',
]

const testimonials = [
  {
    name: 'Rohit Malhotra',
    role: 'Sales Head, GrowthX India',
    text: 'Baynix WhatsApp CRM completely replaced our messy spreadsheet system. Leads come in on WhatsApp and we close them faster than ever.',
    avatar: 'RM',
    color: '#25d366',
  },
  {
    name: 'Divya Sharma',
    role: 'Founder, BoutiqueBliss',
    text: 'The DIY chatbot feature is incredible. I built my entire product inquiry flow in an afternoon — no code, no agency, just Google Sheets.',
    avatar: 'DS',
    color: '#6366f1',
  },
  {
    name: 'Arjun Patel',
    role: 'Operations Manager, LogiSwift',
    text: 'Multi-agent live chat on one WhatsApp number was the game changer for us. Our team response time dropped by 60% within the first week.',
    avatar: 'AP',
    color: '#3b82f6',
  },
]

const faqs = [
  {
    q: 'What is a WhatsApp CRM?',
    a: 'A WhatsApp CRM is a customer relationship management system built on top of the WhatsApp Business API. It allows businesses to manage leads, track conversations, automate responses, assign chats to agents, and run marketing campaigns — all directly from WhatsApp, without needing a separate CRM app.',
  },
  {
    q: 'How does a WhatsApp CRM benefit my business?',
    a: "It centralises all your customer communication on a platform your customers already use daily. You get faster response times, automated lead capture, real-time notifications for new leads, and a full view of every customer's journey — without the complexity of traditional CRM software.",
  },
  {
    q: 'What features does the WhatsApp CRM offer?',
    a: 'Baynix WhatsApp CRM includes lead management dashboards, WhatsApp notifications for new leads, a no-code DIY chatbot builder, multi-agent live chat on a single number, WhatsApp Commerce with catalogue integration, and detailed scheduling for customer communications.',
  },
  {
    q: 'Is it easy to integrate the WhatsApp CRM with my existing systems?',
    a: 'Yes. Baynix WhatsApp CRM is designed for zero-touch onboarding. It integrates with Google Sheets for chatbot data, Facebook Catalogue for commerce, and offers webhook support for connecting to your existing tools. Most businesses are live within a day.',
  },
  {
    q: 'Can I use the WhatsApp CRM to automate messages and responses?',
    a: 'Absolutely. You can build automated chatbot flows for FAQs, lead qualification, product recommendations, and order updates — all without writing code. You can also schedule broadcast messages to specific segments and set up trigger-based notifications.',
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

export default function WhatsAppCrmPage() {
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
                WhatsApp CRM
              </div>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1,
                color: 'var(--text)', marginBottom: '0.75rem',
              }}>
                Transform Your{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #25d366, #128c7e, #a78bfa)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  CRM Experience
                </span>
              </h1>

              <h2 style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 500,
                color: 'var(--text2)', letterSpacing: '-0.01em',
                marginBottom: '1.25rem',
              }}>
                Streamline Leads with Baynix CRM on WhatsApp
              </h2>

              <p style={{
                fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem', maxWidth: 480,
              }}>
                Say goodbye to cumbersome apps and complicated interfaces. With Baynix, managing your leads, tracking sales, and nurturing relationships is as simple as sending a message on WhatsApp. Helping 2000+ Businesses Across India To Automate Leads, Manage Tasks, Broadcast Messages and more.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero image */}
            <div style={{
              height: 440, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(18,140,126,0.08), rgba(99,102,241,0.06))',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column' as const, gap: '0.75rem',
            }}>
              {/* Uncomment when ready: */}
              <Image src="/images/wa-crm-hero.png" alt="WhatsApp CRM" fill style={{ objectFit: 'cover', borderRadius: 24 }} />
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
              }}>🗂️</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>wa-crm-hero.png</div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(37,211,102,0.08), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </section>

        {/* ── UNLOCKING FEATURES (ICONS) ── */}
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
                      padding: '2rem 1.5rem', width: 200, textAlign: 'center' as const,
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
                      background: `${f.color}15`, border: `1px solid ${f.color}25`,
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

        {/* ── WHATSAPP COMMERCE SPLIT (image left) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(37,211,102,0.08) 0%, transparent 70%)',
            top: '50%', right: '10%', transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: 1100, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '4rem', alignItems: 'center',
            direction: 'rtl' as any,
            position: 'relative', zIndex: 1,
          }}>
            {/* Image (left side via rtl trick) */}
            <div
              style={{
                height: 420, borderRadius: 20,
                position: 'relative', overflow: 'hidden', direction: 'ltr',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(37,211,102,0.1)',
                transition: 'transform 0.4s ease',
                background: 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(18,140,126,0.07))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column' as const, gap: '0.75rem',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {/* Uncomment when ready: */}
              <Image src="/images/wa-crm-commerce.png" alt="WhatsApp Commerce" fill style={{ objectFit: 'cover' }} />
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: 'rgba(37,211,102,0.2)', border: '1px solid rgba(37,211,102,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
              }}>🛒</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>wa-crm-commerce.png</div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 50% 100%, rgba(37,211,102,0.1), transparent 70%)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Text */}
            <div style={{ direction: 'ltr' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.72rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', fontWeight: 700,
                color: '#25d366', marginBottom: '1rem',
                padding: '0.3rem 0.9rem',
                background: 'rgba(37,211,102,0.12)',
                border: '1px solid rgba(37,211,102,0.25)',
                borderRadius: 100,
              }}>
                WhatsApp Commerce
              </div>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.25,
                color: 'var(--text)', marginBottom: '1.25rem',
              }}>
                How Baynix Can Use WhatsApp Commerce To Grow Your Business?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem', marginBottom: '2rem' }}>
                {commerceBullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                      background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#25d366' }} />
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{b}</p>
                  </div>
                ))}
              </div>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Get Started →</a>
            </div>
          </div>
        </section>

        {/* ── CRM FEATURES GRID (ICONS) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
            top: '50%', right: '10%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Everything Included
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Everything you need to manage customers on WhatsApp
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {crmFeatures.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    style={{
                      padding: '2rem',
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
                      e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${f.color}11`
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
                      width: 48, height: 48, borderRadius: 14,
                      background: `${f.color}15`, border: `1px solid ${f.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}>
                      <Icon size={22} color={f.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                      {f.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>
                      {f.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── ENABLE CUSTOMER INTERACTION CTA ── */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(37,211,102,0.08) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.75rem', textTransform: 'uppercase' as const,
              letterSpacing: '0.12em', color: '#25d366', marginBottom: '1rem',
            }}>
              <span style={{ width: 18, height: 1, background: '#25d366', display: 'inline-block' }} />
              Tap into the Power
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
              letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem',
            }}>
              Enable Customer Interaction: Tap into the Power of WhatsApp CRM
            </h2>
            <p style={{
              fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300,
              maxWidth: 560, margin: '0 auto 2rem', lineHeight: 1.7,
            }}>
              Join 2000+ businesses across India already using Baynix to automate leads, manage tasks, and broadcast messages on WhatsApp.
            </p>
            <a href="#enquiry" className="glass-btn glass-btn-primary">Get Started Now →</a>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
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
                Happy Clients
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                What our clients say
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, position: 'relative', overflow: 'hidden',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                    background: `linear-gradient(90deg, transparent, ${t.color}66, transparent)`,
                  }} />
                  <div style={{
                    fontSize: '2rem', lineHeight: 1, color: `${t.color}40`,
                    fontFamily: 'Georgia, serif', marginBottom: '1rem',
                  }}>"</div>
                  <p style={{
                    fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.7,
                    fontWeight: 300, marginBottom: '1.5rem', fontStyle: 'italic',
                  }}>
                    {t.text}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: `${t.color}20`, border: `1px solid ${t.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, color: t.color, flexShrink: 0,
                    }}>
                      {t.avatar}
                    </div>
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
                Quickly boost delivery rates!
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>
                Get Started With Baynix WhatsApp CRM
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
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>Enquiry Sent!</h3>
                  <p style={{ color: 'var(--text2)', fontWeight: 300 }}>We'll get back to you within 24 hours.</p>
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
                    Enquiry Now →
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
                WhatsApp CRM — FAQ's
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