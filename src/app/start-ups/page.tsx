'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import {
  MessageSquare, Mail, Zap, Phone, Mic2,
  CalendarCheck, Star, CreditCard, Tag, Users,
  Inbox, Hash, FileText, CheckCircle2,
  MousePointerClick, BadgeCheck, Building2, Wallet, Send,
  Rocket, BarChart3,
  ArrowRight,
} from 'lucide-react'
import ImageBox from '@/components/ImageBox'

const accent    = '#6366f1'
const accentRgb = '99,102,241'

const channels = [
  { icon: MessageSquare, label: 'WhatsApp', color: '#25d366', bg: 'rgba(37,211,102,0.12)', border: 'rgba(37,211,102,0.25)' },
  { icon: Mail,          label: 'Email',    color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.25)' },
  { icon: Zap,           label: 'RCS',      color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.25)' },
  { icon: MessageSquare, label: 'SMS',      color: '#6366f1', bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.25)' },
  { icon: Mic2,          label: 'Voice',    color: '#ec4899', bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.25)' },
]

const useCases = [
  { icon: CalendarCheck, label: 'Appointment Reminders',   desc: 'Reduce no-shows by sending automated reminders to clients before their scheduled appointments via SMS or WhatsApp.',    color: '#6366f1' },
  { icon: Star,          label: 'Review Collection',       desc: 'Automatically request reviews from happy customers after a purchase or service — boosting your online reputation effortlessly.', color: '#f59e0b' },
  { icon: CreditCard,    label: 'Payment Request',         desc: 'Send instant payment links and due reminders directly to customers via WhatsApp or SMS to speed up collections.',           color: '#10b981' },
  { icon: Tag,           label: 'Discounts and Coupons',   desc: 'Distribute personalised discount codes and limited-time offers to drive repeat purchases and increase customer loyalty.',    color: '#ec4899' },
  { icon: Users,         label: 'Internal Communications', desc: 'Keep your small team aligned with instant internal broadcasts — shift reminders, policy updates, and urgent announcements.',  color: '#22d3ee' },
]

const features = [
  { icon: Inbox,    label: 'Free Incoming Text Messages', desc: 'Receive unlimited inbound messages from your customers at no extra cost — every reply lands in your unified inbox.' },
  { icon: Hash,     label: 'Custom Keyword',              desc: 'Set up custom keywords so customers can opt-in, ask questions, or trigger automated responses simply by texting a word.' },
  { icon: FileText, label: 'Ready-to-use Templates',      desc: 'Choose from a library of pre-approved, professionally written message templates for every common startup use case.' },
]

const advantages = [
  { icon: MousePointerClick, label: 'Easy to use, even for non-technically inclined', desc: 'Our intuitive dashboard requires zero coding knowledge. If you can send a WhatsApp message, you can run a campaign.' },
  { icon: BarChart3,         label: 'Cost-effective with low volume requirements',     desc: 'No minimum spend, no lock-in. Pay only for what you send — perfect for startups watching every rupee.' },
  { icon: Phone,             label: 'Mobile optimized to send campaigns on the go',    desc: 'Launch, monitor, and manage your entire messaging operation from your smartphone — anywhere, anytime.' },
]

const steps = [
  { icon: Rocket,         label: 'Sign up on Baynix',               desc: 'Create your free account in under 2 minutes. No credit card required to get started.' },
  { icon: BadgeCheck,     label: 'Verify your email and phone',      desc: 'Quick verification to keep your account secure and ensure reliable message delivery.' },
  { icon: Building2,      label: 'Provide your company details',     desc: 'Tell us about your business so we can tailor the platform to your specific needs.' },
  { icon: Send,           label: 'Request or buy a sender ID',       desc: 'Get a branded sender name so your customers recognise every message you send.' },
  { icon: Wallet,         label: 'Add funds to your balance',        desc: 'Top up with any amount — small budgets are welcome. No minimum recharge required.' },
]

const testimonials = [
  {
    name: 'Kiran Reddy',
    role: 'Founder, FitLocal Studio',
    text: "Baynix made SMS marketing accessible for our tiny gym business. We set up appointment reminders in 20 minutes. No-shows dropped by 60% and we saved hours of manual calling every week. Worth every rupee.",
    avatar: 'KR',
    color: '#6366f1',
  },
  {
    name: 'Aisha Mohammed',
    role: 'Co-founder, CloudBite Catering',
    text: "We started with just ₹500 in our Baynix balance and ran our first WhatsApp campaign to 200 customers. The order response was 4x better than our Instagram posts. Now messaging is our primary marketing channel.",
    avatar: 'AM',
    color: '#f59e0b',
  },
  {
    name: 'Suresh Babu',
    role: 'Owner, QuickFix Repairs',
    text: "The ready-to-use templates were a lifesaver. I'm not a marketing person but I sent professional-looking review requests and payment reminders within an hour of signing up. My Google ratings went from 3.8 to 4.6 stars.",
    avatar: 'SB',
    color: '#10b981',
  },
]

const faqs = [
  {
    q: 'Is Baynix suitable for very small businesses with a tight budget?',
    a: "Absolutely. Baynix is designed with small businesses in mind. There is no minimum spend, no monthly subscription required to get started, and no lock-in contract. You add funds to your balance and pay only for the messages you send. Many of our startup clients begin with as little as ₹500 and scale up gradually as their business grows.",
  },
  {
    q: 'Do I need technical knowledge to use Baynix?',
    a: "Not at all. Baynix's dashboard is built for business owners, not developers. You can create campaigns, schedule messages, and view delivery reports without writing a single line of code. We also provide ready-to-use message templates for common small business scenarios — just pick, personalise, and send. Our 24/7 support team is always available if you need guidance.",
  },
  {
    q: 'Which messaging channels are available for startups?',
    a: "Baynix supports WhatsApp Business API, SMS, RCS, Email, and Voice from a single platform. For most startups in India, we recommend starting with SMS for broad reach and WhatsApp for high engagement. As your business grows, you can add more channels and build multi-channel workflows — all manageable from the same dashboard.",
  },
  {
    q: 'Can I send messages to customers who haven\'t opted in?',
    a: "For WhatsApp, all recipients must have opted in to receive messages — this is a Meta policy requirement. For SMS, transactional messages can be sent to non-DND numbers, while promotional messages require customer consent. Baynix provides opt-in management tools to help you build a compliant subscriber list. Our team can guide you through the DLT registration process required for SMS in India.",
  },
  {
    q: 'How quickly can I get started after signing up?',
    a: "Most startups are sending their first message within a few hours of signing up. The process involves email verification, adding basic company details, requesting a sender ID (or using a shared one to start faster), and adding a small balance. Our onboarding guide walks you through each step, and our support team is available via WhatsApp chat if you get stuck at any point.",
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

export default function StartupsPage() {
  const [openFaq, setOpenFaq]     = useState<number | null>(0)
  const [focused, setFocused]     = useState<string | null>(null)
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const getFocusStyle = (field: string): React.CSSProperties =>
    focused === field
      ? { ...inputBase, border: `1px solid rgba(${accentRgb},0.5)`, background: 'rgba(255,255,255,0.06)', boxShadow: `0 0 0 3px rgba(${accentRgb},0.1)` }
      : inputBase

  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO — channels as icon pills ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 600, background: `radial-gradient(ellipse, rgba(${accentRgb},0.1) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.06) 0%, transparent 70%)', top: '10%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            {/* Channel pills */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {channels.map((ch) => {
                const Icon = ch.icon
                return (
                  <div key={ch.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1rem', background: ch.bg, border: `1px solid ${ch.border}`, borderRadius: 100, fontSize: '0.82rem', fontWeight: 600, color: ch.color }}>
                    <Icon size={14} strokeWidth={2} />
                    {ch.label}
                  </div>
                )
              })}
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.3)`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              For Startups
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1rem' }}>
              Multichannel Message Marketing<br />
              <span style={{ background: `linear-gradient(135deg, ${accent}, #818cf8, #ec4899)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                for Small Enterprises
              </span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300, maxWidth: 580, margin: '0 auto 2.5rem' }}>
              Don't bother figuring out how to use this communication channel — we make SMS marketing simple, with free templates and 24/7 support.
            </p>
            <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>Start For Free →</a>
          </div>
        </section>

        {/* ── SIMPLIFIED SMS MARKETING — text left, image right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '10%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div className="startups-simplified-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Simple & Powerful
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>
                Simplified Text Message Marketing<br />for Business
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                Don't bother attempting to figure out how to utilise this communication channel! We make sure that using our SMS marketing solutions is simple — including everything from free SMS templates to a 24/7 support staff ready to help at every step.
              </p>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start for Free →</a>
            </div>

            <div
              style={{ transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/startups-simplified.png"
                alt="Simplified SMS Marketing"
                width={800} height={440}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(236,72,153,0.08), rgba(16,185,129,0.05))`}
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={24}
                boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)"
                imageStyle={{ objectFit: 'cover' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, rgba(${accentRgb},0.1), transparent 60%)`, pointerEvents: 'none' }} />
              </ImageBox>
            </div>
          </div>
        </section>

        {/* ── USE CASES — image left, tick list right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', right: '5%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div className="startups-usecases-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl', position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ direction: 'ltr', transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/startups-usecases.png"
                alt="Use Cases"
                width={800} height={460}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.1), rgba(236,72,153,0.07))`}
                border="1px solid rgba(255,255,255,0.08)"
                borderRadius={20}
                boxShadow="0 24px 60px rgba(0,0,0,0.4)"
                imageStyle={{ objectFit: 'cover' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 100%, rgba(${accentRgb},0.1), transparent 70%)`, pointerEvents: 'none' }} />
              </ImageBox>
            </div>

            {/* Text right */}
            <div style={{ direction: 'ltr' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Use Cases
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '0.75rem' }}>
                Essential Use Cases for Small Business
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.7, marginBottom: '2rem' }}>
                Using Baynix solutions to help startups grow — delivering dependable and efficient communication solutions to increase audience reach and improve client interaction.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {useCases.map((uc) => {
                  const Icon = uc.icon
                  return (
                    <div key={uc.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                      <div style={{ width: 34, height: 34, borderRadius: 10, background: `${uc.color}15`, border: `1px solid ${uc.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon size={16} color={uc.color} strokeWidth={2} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>{uc.label}</div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.6, fontWeight: 300 }}>{uc.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES & ADVANTAGES — two cards side by side ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Why Choose Baynix
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Baynix: Ideal SMS Marketing for Small Businesses
              </h2>
            </div>

            <div className="startups-features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {/* Features card */}
              <div style={{ ...glassCard, padding: '2.5rem' }}>
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, rgba(${accentRgb},0.5), transparent)` }} />
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Zap size={22} color={accent} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Features</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {features.map((f) => {
                    const Icon = f.icon
                    return (
                      <div key={f.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <CheckCircle2 size={13} color={accent} strokeWidth={2.5} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>{f.label}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.6, fontWeight: 300 }}>{f.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Advantages card */}
              <div style={{ ...glassCard, padding: '2.5rem' }}>
                <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)' }} />
                <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <BarChart3 size={22} color="#10b981" strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Advantages</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {advantages.map((a) => {
                    const Icon = a.icon
                    return (
                      <div key={a.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <CheckCircle2 size={13} color="#10b981" strokeWidth={2.5} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>{a.label}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.6, fontWeight: 300 }}>{a.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STEPS — horizontal with arrows ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 700, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem' }}>
                It Just Needs A Few Easy Steps
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300, maxWidth: 520, margin: '0 auto' }}>
                Get started for free to experience how easily our messaging solutions work.
              </p>
            </div>

            {/* Steps row */}
            <div className="startups-steps" style={{ display: 'flex', alignItems: 'flex-start', gap: '0', justifyContent: 'center', flexWrap: 'wrap' }}>
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
                    {/* Step card */}
                    <div style={{ width: 170, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                      {/* Number + icon */}
                      <div style={{ position: 'relative', marginBottom: '1rem' }}>
                        <div style={{ width: 60, height: 60, borderRadius: 16, background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 24px rgba(${accentRgb},0.15)` }}>
                          <Icon size={24} color={accent} strokeWidth={1.8} />
                        </div>
                        <div style={{ position: 'absolute', top: -8, right: -8, width: 20, height: 20, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color: '#fff' }}>
                          {i + 1}
                        </div>
                      </div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{step.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text3)', lineHeight: 1.6, fontWeight: 300 }}>{step.desc}</div>
                    </div>

                    {/* Arrow between steps */}
                    {i < steps.length - 1 && (
                      <div className="startups-step-arrow" style={{ display: 'flex', alignItems: 'center', paddingTop: '1.4rem', flexShrink: 0 }}>
                        <div style={{ width: 24, height: 1, background: `rgba(${accentRgb},0.3)` }} />
                        <ArrowRight size={14} color={`rgba(${accentRgb},0.5)`} strokeWidth={2} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Congrats message */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.5rem', background: `rgba(${accentRgb},0.08)`, border: `1px solid rgba(${accentRgb},0.2)`, borderRadius: 100, fontSize: '0.9rem', fontWeight: 600, color: accent, marginBottom: '2rem' }}>
                🎉 Congratulations, you are all set to send and serve!
              </div>
              <div style={{ display: 'block' }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>Start for Free →</a>
              </div>
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

            <div className="startups-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Your startup's communication journey starts here</p>
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
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>Startups — FAQ's</h2>
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