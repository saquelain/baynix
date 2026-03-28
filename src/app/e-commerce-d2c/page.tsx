'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PartnerMarquee from '@/components/PartnerMarquee'
import ImageBox from '@/components/ImageBox'
import { useState } from 'react'
import {
  Bell, Megaphone, ShoppingCart, MapPin, Zap,
  Users, Headphones, Heart, Settings, TrendingUp,
} from 'lucide-react'

const accent    = '#f97316'
const accentRgb = '249,115,22'


const tabs = [
  {
    id: 'transactional',
    label: 'Transactional Alerts',
    icon: Bell,
    emoji: '🔔',
    image: 'ecom-transactional.png',
    title: 'Transactional Alerts',
    desc: 'Enhance banking services with our APIs for SMS, WhatsApp, IVR, Email, Truecaller, and social messaging. Secure transactions with two-factor authentication, alert customers of suspicious activity, provide quick access to account information via chatbot, and simplify KYC processes on WhatsApp for a seamless customer experience. Streamline your interactions to improve client happiness.',
    color: '#f97316',
  },
  {
    id: 'promotional',
    label: 'Promotional Message',
    icon: Megaphone,
    emoji: '📣',
    image: 'ecom-promotional.png',
    title: 'Promotional Message',
    desc: 'Launch highly targeted promotional campaigns through SMS, WhatsApp, and RCS to reach customers at the right moment. Personalise offers based on purchase history, location, and behaviour to drive higher open rates and conversions. A/B test messages, schedule bulk sends, and track campaign ROI — all from a single dashboard.',
    color: '#ec4899',
  },
  {
    id: 'cart',
    label: 'Cart Reminder',
    icon: ShoppingCart,
    emoji: '🛒',
    image: 'ecom-cart.png',
    title: 'Cart Reminder',
    desc: 'Recover lost revenue automatically. When a shopper abandons their cart, Baynix triggers a personalised reminder via their preferred channel — WhatsApp, SMS, or email — within minutes. Include a dynamic product image, price, and a one-tap checkout link. On average, our clients recover 20–35% of abandoned carts with automated reminders.',
    color: '#6366f1',
  },
  {
    id: 'tracking',
    label: 'Order Tracking',
    icon: MapPin,
    emoji: '📦',
    image: 'ecom-tracking.png',
    title: 'Order Tracking',
    desc: 'Keep customers informed at every step of their delivery journey. Automatically send real-time order status updates — confirmed, dispatched, out for delivery, delivered — via WhatsApp or SMS. Reduce inbound support queries by up to 60% and boost post-purchase satisfaction with proactive, branded tracking notifications.',
    color: '#10b981',
  },
  {
    id: 'automation',
    label: 'Marketing Automation',
    icon: Zap,
    emoji: '⚡',
    image: 'ecom-automation.png',
    title: 'Marketing Automation',
    desc: 'Build powerful event-driven workflows that engage customers automatically — welcome sequences, post-purchase thank-you messages, loyalty reward notifications, re-engagement campaigns, and more. Baynix integrates with your CRM, Shopify, WooCommerce, or custom backend via webhooks and REST APIs to trigger the right message at every customer lifecycle stage.',
    color: '#22d3ee',
  },
]

const benefits = [
  { icon: Users,      title: 'Engage Customers',   desc: 'Send highly targeted, event-based campaigns to increase sales and conversion rates.',                                color: '#f97316' },
  { icon: Headphones, title: 'Support 24/7',        desc: 'A digital contact center with live operators and sophisticated chatbots provides real-time help.',                   color: '#ec4899' },
  { icon: Heart,      title: 'Drive Loyalty',       desc: 'Improve your relationship with customers by sending relevant communications based on their previous choices.',       color: '#6366f1' },
  { icon: Settings,   title: 'Automate Operations', desc: 'Plan and automate reminders, tracking updates, and real-time notifications effortlessly.',                          color: '#10b981' },
  { icon: TrendingUp, title: 'Improve Conversions', desc: 'Automating the customer journey increases sales and reduces cart abandonment significantly.',                       color: '#22d3ee' },
]

const testimonials = [
  {
    name: 'Priya Mehta',
    role: 'Head of Growth, FashionKart',
    text: "Baynix's WhatsApp cart reminders transformed our recovery rate. We went from 8% cart recovery to 31% in just three weeks. The setup was seamless and the support team was incredibly responsive throughout.",
    avatar: 'PM',
    color: '#f97316',
  },
  {
    name: 'Rohan Desai',
    role: 'CTO, NestMart D2C',
    text: "Order tracking notifications via WhatsApp cut our support tickets by 55%. Customers stopped calling to ask 'where is my order?' — they already knew. Our NPS score jumped 22 points after going live with Baynix.",
    avatar: 'RD',
    color: '#ec4899',
  },
  {
    name: 'Sunita Rao',
    role: 'VP Marketing, GlowBox Beauty',
    text: "The promotional campaign tools are exceptional. We ran a Diwali flash sale via Baynix's bulk WhatsApp feature and hit 3.2x our usual day revenue. The segmentation options let us personalise at scale.",
    avatar: 'SR',
    color: '#6366f1',
  },
]

const faqs = [
  {
    q: 'How does Baynix help e-commerce brands reduce cart abandonment?',
    a: 'Baynix connects to your e-commerce platform (Shopify, WooCommerce, or custom) via webhooks. When a user abandons a cart, an automated workflow triggers a personalised message — via WhatsApp, SMS, or both — with product details and a direct checkout link. Timing, message content, and channel are fully configurable. Most clients see a 20–35% recovery rate within the first month.',
  },
  {
    q: 'Which channels does Baynix support for e-commerce communication?',
    a: 'Baynix supports SMS, WhatsApp Business API, RCS, Voice OTP, IVR, Email-to-SMS, and conversational AI chatbots. You can orchestrate multi-channel journeys from a single platform — for example, send a WhatsApp message first, then fall back to SMS if undelivered, and follow up with a voice call for high-value orders.',
  },
  {
    q: 'Can I integrate Baynix with my existing Shopify or WooCommerce store?',
    a: 'Yes. Baynix provides plug-and-play integrations for Shopify and WooCommerce, as well as a RESTful API and webhook support for custom platforms. Most stores are live within a day. Our documentation covers common use cases including order confirmation, shipping updates, delivery alerts, review requests, and loyalty point notifications.',
  },
  {
    q: 'Is Baynix compliant with DND and TRAI regulations in India?',
    a: "Absolutely. All SMS communications through Baynix are routed through registered headers and pre-approved templates in compliance with TRAI DLT regulations. Transactional messages are delivered even to DND numbers as permitted by TRAI guidelines. WhatsApp Business API messages also follow Meta's approved template policies.",
  },
  {
    q: 'How do I track the ROI of my campaigns on Baynix?',
    a: "Baynix's dashboard provides real-time analytics including delivery rate, open rate, click-through rate, and conversion tracking (with UTM parameter support). You can attribute revenue to specific campaigns, compare channel performance, and export reports for your BI tools. Detailed logs are retained for 90 days by default.",
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

export default function EcommerceD2CPage() {
  const [activeTab, setActiveTab]   = useState(0)
  const [openFaq, setOpenFaq]       = useState<number | null>(0)
  const [focused, setFocused]       = useState<string | null>(null)
  const [form, setForm]             = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted]   = useState(false)

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
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div className="ecom-hero-grid" style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.3)`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                E-Commerce & D2C
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1rem' }}>
                Elevating E-commerce
              </h1>
              <h2 style={{ fontSize: 'clamp(1rem, 2.2vw, 1.45rem)', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.4, marginBottom: '1.5rem' }}>
                <span style={{ background: `linear-gradient(135deg, ${accent}, #fb923c, #ec4899)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Improve conversion rates and client loyalty by removing barriers and providing great experiences through their chosen channels.
                </span>
              </h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start For Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            <ImageBox
              src="/images/ecom-hero.png"
              alt="E-Commerce"
              width={1200}
              height={900}
              background={`linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(236,72,153,0.08), rgba(16,185,129,0.05))`}
              border='1px solid rgba(255,255,255,0.08)'
              borderRadius={24}
              boxShadow='inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)'
              imageStyle={{ borderRadius: 24 }}
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

          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Our Solutions
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                In what ways can Baynix support the E-Commerce Industry?
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
            <div className="ecom-tabs-grid" style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: '4rem', alignItems: 'center' }}>
              <ImageBox
                src={`/images/${currentTab.image}`}
                alt={currentTab.title}
                width={1200}
                height={900}
                background={`linear-gradient(135deg, ${currentTab.color}18, rgba(255,255,255,0.03))`}
                border='1px solid rgba(255,255,255,0.08)'
                borderRadius={20}
                boxShadow={`0 24px 60px rgba(0,0,0,0.3), 0 0 60px ${currentTab.color}10`}
                style={{ transition: 'all 0.4s ease' }}
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

        {/* ── BENEFITS — 5 icon cards ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                What You Get
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Everything You Need to Scale E-Commerce Communication
              </h2>
            </div>

            <div className="ecom-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }}>
              {benefits.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} style={{ ...glassCard, padding: '2rem 1.5rem' }}
                    onMouseEnter={cardEnter(item.color)} onMouseLeave={cardLeave}>
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />
                    <div style={{ width: 48, height: 48, borderRadius: 13, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <Icon size={20} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
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

            <div className="ecom-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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
                Supercharge your e-commerce communication today
              </p>
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
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.05) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                E-Commerce & D2C — FAQ's
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