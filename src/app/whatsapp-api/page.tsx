'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { Headphones, Bell, RefreshCw, BookOpen, Zap } from 'lucide-react'

const features = [
  { icon: Headphones, title: 'Real-Time Customer Support', color: '#25d366' },
  { icon: Bell,       title: 'Send Creative Notifications', color: '#f59e0b' },
  { icon: RefreshCw,  title: 'Notify Relevant Updates',     color: '#22d3ee' },
  { icon: BookOpen,   title: 'Showcase Product Catalogs',   color: '#10b981' },
  { icon: Zap,        title: 'Messaging Automation',        color: '#a78bfa' },
]

const splits = [
  {
    badge: 'Broadcast Promotional Messages',
    title: 'Broadcast Promotional Messages Officially',
    bullets: [
      'Send exciting offers, discount coupon codes, and festive wishes hassle-free, without the risk of your number being blocked!',
      'Enjoy uninterrupted communication while spreading joy and savings to your customers.',
      'The WhatsApp corporate API is user-friendly and adaptable to any workflow in the corporate world.',
    ],
    image: '/images/wa-broadcast.png',
    color: '#25d366',
    imageLeft: false,
  },
  {
    badge: 'Customer Support',
    title: 'Automate your Customer Support',
    bullets: [
      'For improved customer interactions, real-time notifications, and automated messaging, integrate the WhatsApp Business API.',
      'Improve user experience with an adaptable chatbot that can handle customised recommendations, troubleshooting, and FAQs.',
      'Use the API to gain insightful knowledge about customer service encounters.',
    ],
    image: '/images/wa-support.png',
    color: '#6366f1',
    imageLeft: true,
  },
  {
    badge: 'WhatsApp Chatbots',
    title: 'Boost Client Interaction with Next-Gen WhatsApp Chatbots',
    bullets: [
      'Discover how to use chatbots to engage customers in a dynamic way.',
      'Easily communicate with clients on their preferred platforms by using WhatsApp Business chatbots, as more businesses embrace this trend.',
      'Use WhatsApp chatbots to improve customer service and engagement that are suited to modern user needs.',
    ],
    image: '/images/wa-chatbot.png',
    color: '#3b82f6',
    imageLeft: false,
  },
  {
    badge: 'Catalogue & Cart',
    title: 'Build Catalogue & Cart on WhatsApp',
    bullets: [
      'Easily handle your orders with WhatsApp by utilising our user-friendly catalogues and cart function.',
      'In just ten minutes, create your catalogue and begin selling without any difficulties!',
    ],
    image: '/images/wa-catalogue.png',
    color: '#10b981',
    imageLeft: true,
  },
  {
    badge: 'WhatsApp Pay',
    title: 'Accept Payments on WhatsApp',
    bullets: [
      'With the smooth integration of WhatsApp Pay and other payment methods, you can effortlessly take payments on WhatsApp.',
      'Increase your income by offering a seamless, familiar checkout experience right inside WhatsApp.',
    ],
    image: '/images/wa-payments.png',
    color: '#f59e0b',
    imageLeft: false,
  },
]

const addons = [
  {
    title: 'WhatsApp-based CRM',
    desc: 'You can improve productivity, optimise your workflow, and deliver unmatched customer care from the comfort of your smartphone with our WhatsApp-powered CRM.',
    color: '#25d366',
    emoji: '🗂️',
  },
  {
    title: 'Free DLT Registration',
    desc: 'Register Your Business on the DLT Platform for Commercial Messaging to Ensure Regulatory Compliance. Take Advantage of Easy DLT Registration for Stress-Free Compliance.',
    color: '#6366f1',
    emoji: '📋',
  },
  {
    title: 'Get 1000 SMS Free',
    desc: 'Use our special offer to unlock the power of effective communication! When you purchase any of our dynamic plans, you will receive 1000 Free SMS Credits as a bonus.',
    color: '#f59e0b',
    emoji: '🎁',
  },
]

const testimonials = [
  {
    name: 'Sneha Kapoor',
    role: 'Marketing Head, StyleHive',
    text: 'Baynix WhatsApp API transformed how we run promotions. Our open rates are through the roof and customer responses have never been faster.',
    avatar: 'SK',
    color: '#25d366',
  },
  {
    name: 'Vikram Nair',
    role: 'Co-founder, QuickCart',
    text: 'The catalogue and cart feature on WhatsApp was exactly what we needed. Setup took less than a day and orders started coming in immediately.',
    avatar: 'VN',
    color: '#6366f1',
  },
  {
    name: 'Meera Joshi',
    role: 'Customer Success Lead, EduPath',
    text: "The chatbot handles 80% of our support queries automatically. Our human agents now focus only on complex cases, which has improved overall satisfaction scores.",
    avatar: 'MJ',
    color: '#3b82f6',
  },
]

const faqs = [
  {
    q: 'What is WhatsApp Business API?',
    a: 'The WhatsApp Business API is a solution designed for medium and large businesses to communicate with customers at scale. Unlike the WhatsApp Business app, the API allows integration with existing systems, automation of messages, and sending notifications to large audiences — all through a verified business account.',
  },
  {
    q: 'How can I integrate WhatsApp API in my website?',
    a: 'Baynix provides a REST API that you can integrate into your website in minutes. Simply sign up, get your API credentials, and use our documentation and code samples to send messages, set up webhooks for incoming messages, and build automated flows directly from your website backend.',
  },
  {
    q: 'Can I integrate WhatsApp into my app?',
    a: 'Yes. The Baynix WhatsApp Business API supports integration into mobile and web applications via standard REST calls. We provide SDKs and sample code for popular languages including Node.js, Python, PHP, and Java to make integration as straightforward as possible.',
  },
  {
    q: 'Can I do e-commerce on WhatsApp?',
    a: 'Absolutely. With Baynix you can build product catalogues, enable cart functionality, send order updates, and accept payments directly within WhatsApp. This creates a complete end-to-end shopping experience without the customer ever leaving the app.',
  },
  {
    q: 'How can I get WhatsApp API for Business?',
    a: 'Sign up at app.baynix.ai, complete your business verification, and our team will guide you through the WhatsApp Business API onboarding process. We handle the Meta approval process on your behalf and typically have businesses live within 24–48 hours.',
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

export default function WhatsAppApiPage() {
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
                WhatsApp Business API
              </div>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1,
                color: 'var(--text)', marginBottom: '1.5rem',
              }}>
                Complete{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #25d366, #128c7e, #a78bfa)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  WhatsApp Marketing
                </span>
              </h1>

              <p style={{
                fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem', maxWidth: 480,
              }}>
                Design conversational customer journeys with the WhatsApp Business Platform to offer secure interactions, always-on customer support, and create unique journeys across industries. Leverage end-to-end encryption to protect customer data and provide 24/7 customer service with automated responses and chatbots.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Start Free Trial</a>
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
              {/* Uncomment and add your image file when ready */}
              <Image src="/images/wa-hero.png" alt="WhatsApp Business API" fill style={{ objectFit: 'cover', borderRadius: 24 }} />
              {/* <div style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' as const,
                alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                color: 'rgba(255,255,255,0.15)', fontSize: '0.8rem', fontWeight: 500,
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
                }}>💚</div>
                wa-hero.png
              </div> */}
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
                  position: 'relative', overflow: 'hidden', direction: 'ltr',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: `0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px ${split.color}15`,
                  transition: 'transform 0.4s ease',
                  background: `linear-gradient(135deg, ${split.color}10, ${split.color}06)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column' as const, gap: '0.75rem',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                {/* Uncomment and add your image file when ready */}
                <Image src={split.image} alt={split.badge} fill style={{ objectFit: 'cover' }} />
                {/* <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: `${split.color}20`, border: `1px solid ${split.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                }}>📱</div> */}
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>
                  {split.image.split('/').pop()}
                </div>
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
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem', marginBottom: '2rem' }}>
                  {split.bullets.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                        background: `${split.color}15`, border: `1px solid ${split.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: split.color }} />
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">
                  Get Started →
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* ── ADD-ONS ── */}
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
                Included
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Add-Ons
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {addons.map((a) => (
                <div
                  key={a.title}
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
                    e.currentTarget.style.border = `1px solid ${a.color}33`
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${a.color}11`
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
                    background: `linear-gradient(90deg, transparent, ${a.color}66, transparent)`,
                  }} />
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: `${a.color}15`, border: `1px solid ${a.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem', marginBottom: '1.25rem',
                  }}>
                    {a.emoji}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                    {a.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ZERO TOUCH ONBOARDING ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
            top: '50%', right: '10%', transform: 'translateY(-50%)',
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
                Zero Touch Onboarding
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.2,
                color: 'var(--text)', marginBottom: '1.25rem',
              }}>
                Utilising Our Zero Touch Onboarding WhatsApp CRM, Platform, Manage Leads And Expand Your Business
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem',
              }}>
                Get onboarded instantly with no technical complexity. Our platform is designed to get your business live on WhatsApp and managing leads from day one.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Get Started Now →</a>
            </div>

            {/* Illustration */}
            <div style={{
              height: 380, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.08))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              flexDirection: 'column' as const, gap: '0.75rem',
            }}>
              {/* Uncomment and add your illustration file when ready */}
              <Image src="/images/wa-onboarding.svg" alt="Zero Touch Onboarding" fill style={{ objectFit: 'contain', padding: '2rem' }} />
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
              }}>🚀</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>
                wa-onboarding.png
              </div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 60% 40%, rgba(99,102,241,0.12), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
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
                Start Free Trial Today
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>
                Get Started With Baynix WhatsApp Business API
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
                    Start Free Trial →
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
                WhatsApp Business API — FAQ's
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