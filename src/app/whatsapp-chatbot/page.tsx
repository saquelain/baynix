'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { AlertCircle, Store, Zap, ShieldCheck, MousePointerClick, Code2, Globe, UserCheck, Plug } from 'lucide-react'

const accordionItems = [
  {
    title: 'Drag-and-Drop Builder',
    content: 'You may create and manage chatbots yourself with simple drag-and-drop interfaces that enable you to configure your chatbot in a matter of minutes. No technical knowledge required.',
    color: '#25d366',
  },
  {
    title: 'Zero Coding',
    content: 'Build fully functional WhatsApp chatbots without writing a single line of code. Our visual builder handles all the logic so you can focus on the conversation flow.',
    color: '#6366f1',
  },
  {
    title: 'Omnichannel',
    content: "Deploy your chatbot across SMS, voice, email, and WhatsApp simultaneously. One bot, every channel — ensuring your customers get consistent support wherever they reach out.",
    color: '#22d3ee',
  },
  {
    title: 'Lead Qualifications',
    content: 'Automatically qualify leads by asking the right questions, scoring responses, and routing hot leads to your sales team in real time — all without human intervention.',
    color: '#f59e0b',
  },
  {
    title: 'Increase Efficiency with Integration',
    content: 'Connect your chatbot to your CRM, Google Sheets, payment gateways, and third-party tools via webhooks and APIs. Automate end-to-end workflows without switching platforms.',
    color: '#a78bfa',
  },
]

const whyChatbot = [
  {
    icon: AlertCircle,
    title: 'Never Miss an Alert',
    desc: 'Transmit urgent messages without ever missing an alert. Instant delivery ensures your customers are always informed.',
    color: '#25d366',
  },
  {
    icon: Store,
    title: 'Ideal for Small Enterprises',
    desc: 'Ideal for small enterprises searching for a simple solution. Get started fast with minimal setup and zero technical overhead.',
    color: '#6366f1',
  },
  {
    icon: Zap,
    title: 'High Throughput',
    desc: '99.5% uptime and high throughput for quick message delivery. Your chatbot stays live and responsive around the clock.',
    color: '#22d3ee',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Communication',
    desc: 'Dependable, secure, and safe method of communication with several parties. End-to-end encryption keeps every conversation protected.',
    color: '#f59e0b',
  },
]

const testimonials = [
  {
    name: 'Kavya Reddy',
    role: 'Marketing Manager, ShopEase',
    text: "Baynix's WhatsApp chatbot cut our response time from hours to seconds. Lead qualification is now fully automated and our sales team only talks to serious buyers.",
    avatar: 'KR',
    color: '#25d366',
  },
  {
    name: 'Nikhil Bose',
    role: 'CTO, HealthFirst',
    text: 'The drag-and-drop builder is genuinely impressive. We had our appointment booking chatbot live on WhatsApp in under two hours — no developers needed.',
    avatar: 'NB',
    color: '#6366f1',
  },
  {
    name: 'Sunita Agarwal',
    role: 'Founder, EduLearn',
    text: 'Omnichannel support was the key feature for us. One bot handles WhatsApp, SMS, and email enquiries. Student support has never been smoother.',
    avatar: 'SA',
    color: '#22d3ee',
  },
]

const faqs = [
  {
    q: 'How to create a WhatsApp chatbot?',
    a: "With Baynix, creating a WhatsApp chatbot is simple. Sign up, access the drag-and-drop chatbot builder, design your conversation flow visually, connect it to your WhatsApp Business number, and go live — all without writing any code. Our onboarding team is available to guide you through every step.",
  },
  {
    q: 'Can we create a chatbot on WhatsApp?',
    a: 'Yes. Through the WhatsApp Business API, businesses can build and deploy automated chatbots that respond to customer messages, qualify leads, send notifications, and handle support queries — all within the WhatsApp interface that customers already use daily.',
  },
  {
    q: 'What is the best chatbot for WhatsApp?',
    a: "Baynix offers one of the most complete WhatsApp chatbot solutions available — combining a no-code visual builder, omnichannel deployment, CRM integration, and real-time analytics. It's designed for businesses of all sizes, from small startups to large enterprises.",
  },
  {
    q: 'How do I use a Chatbot on WhatsApp?',
    a: "Once your chatbot is live, customers simply message your WhatsApp Business number as they normally would. The chatbot responds automatically based on the flows you've configured — answering FAQs, collecting information, routing to agents, or completing transactions.",
  },
  {
    q: 'How to Integrate chatbot with WhatsApp?',
    a: 'Baynix handles the WhatsApp Business API integration for you. After signing up, you connect your verified business number, build your chatbot flows in our visual editor, and publish. Webhooks and APIs are available for deeper integration with your existing systems.',
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

export default function WhatsAppChatbotPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)
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
                WhatsApp Chatbot
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1,
                color: 'var(--text)', marginBottom: '1.5rem',
              }}>
                Optimise Your Customer Interaction With Our{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #25d366, #128c7e, #a78bfa)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  Smart WhatsApp Chatbot
                </span>
              </h1>

              <p style={{
                fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem', maxWidth: 480,
              }}>
                Baynix's chatbot capabilities present an unparalleled opportunity to foster dynamic and spontaneous interactions with your clientele. Our unique SAAS-based bots can seamlessly integrate across various messaging channels, including SMS, voice, email, and WhatsApp.
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
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column' as const, gap: '0.75rem',
            }}>
              {/* Uncomment when ready: */}
              <Image src="/images/wa-chatbot-hero.png" alt="WhatsApp Chatbot" fill style={{ objectFit: 'cover', borderRadius: 24 }} />
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
              }}>🤖</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>wa-chatbot-hero.png</div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(37,211,102,0.08), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </section>

        {/* ── AI CHATBOT SERVICES (image left, text right) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
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
            {/* Image left */}
            <div
              style={{
                height: 400, borderRadius: 20,
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
              <Image src="/images/wa-chatbot-services.png" alt="AI Chatbot Services" fill style={{ objectFit: 'cover' }} />
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: 'rgba(37,211,102,0.2)', border: '1px solid rgba(37,211,102,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
              }}>💬</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>wa-chatbot-services.png</div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 50% 100%, rgba(37,211,102,0.1), transparent 70%)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Text right */}
            <div style={{ direction: 'ltr' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: '#25d366', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: '#25d366', display: 'inline-block' }} />
                AI Chatbot Services
              </div>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.25,
                color: 'var(--text)', marginBottom: '1.25rem',
              }}>
                Cross-channel bots that speak your customer's language
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '1rem',
              }}>
                Baynix's versatile cross-channel communication bot effortlessly engages with your customers in their preferred language, providing robust assistance to your sales, marketing, and customer care departments.
              </p>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem',
              }}>
                As numerous companies embrace new platforms to connect with consumers, Baynix's WhatsApp Business chatbots emerge as the perfect solution — catering to the evolving demands of today's consumers and client-facing businesses.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
            </div>
          </div>
        </section>

        {/* ── KEY FEATURES ACCORDION ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(37,211,102,0.06) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start', position: 'relative', zIndex: 1 }}>
            {/* Left heading */}
            <div style={{ position: 'sticky', top: '6rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: '#25d366', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: '#25d366', display: 'inline-block' }} />
                Key Features
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.2,
                color: 'var(--text)', marginBottom: '1.25rem',
              }}>
                Key Features of AI Chatbot
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300,
              }}>
                Everything you need to build, deploy, and scale intelligent chatbots across every messaging channel your customers use.
              </p>
            </div>

            {/* Right accordion */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {accordionItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                    border: openAccordion === i ? `1px solid ${item.color}33` : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16, overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: openAccordion === i ? `0 8px 32px ${item.color}12` : 'none',
                  }}
                >
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    style={{
                      width: '100%', padding: '1.25rem 1.5rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      textAlign: 'left' as const, gap: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                        background: item.color,
                        boxShadow: `0 0 8px ${item.color}`,
                      }} />
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                        {item.title}
                      </span>
                    </div>
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: openAccordion === i ? `${item.color}20` : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'all 0.2s',
                      fontSize: '0.8rem', color: openAccordion === i ? item.color : 'var(--text3)',
                    }}>
                      {openAccordion === i ? '−' : '+'}
                    </div>
                  </button>

                  {openAccordion === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem' }}>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHATBOT (ICONS) ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)',
            top: '50%', right: '10%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: '#25d366', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: '#25d366', display: 'inline-block' }} />
                Benefits
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Why Chatbot?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
              {whyChatbot.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    style={{
                      padding: '2rem 1.5rem',
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 20, position: 'relative', overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                      textAlign: 'center' as const,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.border = `1px solid ${item.color}33`
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${item.color}11`
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
                      background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)`,
                    }} />
                    <div style={{
                      width: 52, height: 52, borderRadius: 16,
                      background: `${item.color}15`, border: `1px solid ${item.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                    }}>
                      <Icon size={22} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CREATE CHATBOT CTA (illustration right) ── */}
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
                letterSpacing: '0.12em', color: '#25d366', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: '#25d366', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.2,
                color: 'var(--text)', marginBottom: '1.25rem',
              }}>
                Create WhatsApp chatbots with Baynix. They'll assist your live agents, helping to get leads, boost sales, and build loyalty.
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem',
              }}>
                Join thousands of businesses using Baynix chatbots to automate customer interactions, qualify leads 24/7, and deliver personalized experiences at scale.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Get Started Now →</a>
            </div>

            {/* Illustration */}
            <div style={{
              height: 380, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(37,211,102,0.1), rgba(99,102,241,0.08))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              flexDirection: 'column' as const, gap: '0.75rem',
            }}>
              {/* Uncomment when ready: */}
              <Image src="/images/wa-chatbot-cta.svg" alt="Create WhatsApp Chatbot" fill style={{ objectFit: 'contain', padding: '2rem' }} />
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
              }}>🚀</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)', fontWeight: 500 }}>wa-chatbot-cta.png</div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 60% 40%, rgba(37,211,102,0.1), transparent 60%)',
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
                Quickly boost delivery rates!
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>
                Get Started With Baynix WhatsApp Chatbot
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
                WhatsApp Chatbot — FAQ's
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