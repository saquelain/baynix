'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import {
  ShoppingCart, Truck, GraduationCap, Heart, Landmark,
  Code2, Bot, Globe, CheckCircle2,
  FileText, Table, BarChart2, MessageSquare, Layers,
  MessageCircle, LineChart, Lightbulb, Plug, Zap, Users,
  ArrowRight, Building,
} from 'lucide-react'
import ImageBox from '@/components/ImageBox'
import CTASectionForm from '@/components/CTASectionForm'

const accent    = '#22d3ee'
const accentRgb = '34,211,238'

const industries = [
  { icon: ShoppingCart, label: 'E-Commerce',     color: '#f97316', href: '/e-commerce-d2c' },
  { icon: Truck,        label: 'Logistics',       color: '#f59e0b', href: '/logistics'      },
  { icon: GraduationCap,label: 'EdTech',          color: '#8b5cf6', href: '/edtech'         },
  { icon: Heart,        label: 'Health Care',     color: '#10b981', href: '/health-care'    },
  { icon: Landmark,     label: 'BFSI & FinTech',  color: '#3b82f6', href: '/bsfi-fintech'   },
]

const advantages = [
  {
    icon: Code2,
    title: 'Best Programmable API Flexibility',
    desc: 'Build fully integrated communication solutions with our enterprise-grade REST API, webhooks, and SDKs. Customise every workflow to fit your existing tech stack — no compromises.',
    color: '#22d3ee',
  },
  {
    icon: Bot,
    title: 'Maximum Automation',
    desc: 'Reduce live agent time significantly with intelligent chatbots and automated qualification workflows. Let AI handle routine interactions so your team focuses on high-value conversations.',
    color: '#6366f1',
  },
  {
    icon: Globe,
    title: 'Optimal Global Coverage',
    desc: 'Connect with your clients worldwide through SMS, WhatsApp, RCS, Voice, and Email — with local number support, regional compliance, and carrier-direct routes across 190+ countries.',
    color: '#10b981',
  },
]

const whatYouGet = [
  { icon: FileText,    label: 'Automated invoices every month',              desc: 'Receive clean, detailed invoices automatically at the end of each billing cycle — no manual requests needed.' },
  { icon: Table,       label: 'Unlimited number of Excel imports',            desc: 'Upload and manage contact lists at any scale without restrictions. Bulk import millions of records seamlessly.' },
  { icon: BarChart2,   label: 'Former campaign statistics exports',           desc: 'Export historical campaign performance data in multiple formats for your BI tools, compliance reports, or audits.' },
  { icon: MessageSquare,label: 'Messaging templates for every use case',      desc: 'Access a growing library of pre-approved, industry-specific message templates ready to deploy immediately.' },
  { icon: Layers,      label: 'Multi-channel orchestration',                  desc: 'Orchestrate SMS, WhatsApp, RCS, Voice, and Email campaigns from a single unified enterprise dashboard.' },
]

const howWeHelp = [
  { icon: MessageCircle, title: 'Simplifying Customer Communication', desc: 'Consolidate all customer-facing channels into one platform. Reduce tool sprawl, lower costs, and give every team a unified view of every customer interaction.',  color: '#22d3ee' },
  { icon: LineChart,     title: 'Data Driven Insights',               desc: 'Real-time dashboards and exportable reports give your leadership team full visibility into delivery rates, engagement, conversions, and campaign ROI.',              color: '#6366f1' },
  { icon: Lightbulb,     title: 'Innovative Use Cases',               desc: 'From conversational commerce to AI-powered support deflection — our enterprise team works with you to design communication workflows that create real business value.', color: '#f59e0b' },
  { icon: Bot,           title: 'AI-Powered Conversational Chatbots',  desc: 'Deploy intelligent chatbots across WhatsApp, RCS, and web that handle complex queries, qualify leads, and escalate to live agents only when genuinely needed.',     color: '#ec4899' },
  { icon: Plug,          title: 'Seamless Integrations',               desc: 'Connect Baynix to your CRM, ERP, CDP, or any enterprise system via REST API, webhooks, or pre-built connectors for Salesforce, HubSpot, and more.',               color: '#10b981' },
  { icon: Zap,           title: 'Faster Reach',                        desc: 'Carrier-direct routes, intelligent failover, and a globally distributed infrastructure ensure your messages reach customers in under 5 seconds — at any scale.',       color: '#a78bfa' },
]

const steps = [
  { icon: Building,      label: 'Talk to our enterprise team',          desc: 'Schedule a discovery call and tell us about your communication challenges and scale.' },
  { icon: Layers,        label: 'Get a tailored solution design',        desc: 'We architect a custom workflow and channel strategy built specifically for your business.' },
  { icon: Plug,          label: 'Integrate with your existing stack',    desc: 'Our technical team handles the integration with your CRM, ERP, or custom platform.' },
  { icon: Bot,           label: 'Go live with automation',               desc: 'Deploy chatbots, campaigns, and alerts — with dedicated onboarding support throughout.' },
  { icon: LineChart,     label: 'Scale and optimise continuously',       desc: 'Monitor performance, refine workflows, and expand channels as your enterprise grows.' },
]

const testimonials = [
  {
    name: 'Rajeev Khanna',
    role: 'Chief Digital Officer, RetailMax Group',
    text: "Baynix's enterprise API gave us the flexibility to build exactly the customer communication stack we needed. We integrated with Salesforce in 3 days and now process 4 million messages per month across 8 channels from a single platform.",
    avatar: 'RK',
    color: '#22d3ee',
  },
  {
    name: 'Ananya Sharma',
    role: 'VP Operations, MegaLogistics India',
    text: "The automation capabilities are extraordinary. We went from 120 live agents handling delivery queries to 28 — with better customer satisfaction scores. Baynix's AI chatbot handles 78% of all inbound queries without human intervention.",
    avatar: 'AS',
    color: '#6366f1',
  },
  {
    name: 'Deepak Menon',
    role: 'CTO, FinServe Enterprise',
    text: "Global coverage was our biggest requirement — we operate in 14 countries. Baynix supports all of them with local compliance built in. Our OTP delivery success rate improved from 91% to 99.4% after switching to Baynix's carrier-direct routes.",
    avatar: 'DM',
    color: '#10b981',
  },
]

const faqs = [
  {
    q: 'What makes Baynix suitable for large enterprise deployments?',
    a: "Baynix is built for enterprise scale from the ground up. Our infrastructure handles billions of messages per month with 99.9% uptime SLA, carrier-direct routes for maximum deliverability, dedicated IP pools, and a fully redundant architecture across multiple data centres. Enterprise accounts receive a dedicated account manager, custom SLAs, priority support, and direct escalation paths to our engineering team.",
  },
  {
    q: 'How does Baynix handle multi-country and multi-language deployments?',
    a: "Baynix supports communication in 190+ countries with local number provisioning, region-specific compliance templates, and Unicode message support for all major languages including Hindi, Tamil, Bengali, Arabic, and more. Our platform automatically routes messages through the optimal carrier path for each destination country to maximise delivery rates and minimise latency.",
  },
  {
    q: 'What security and compliance certifications does Baynix hold?',
    a: "Baynix is ISO 27001 certified and complies with GDPR, India's PDPB, TRAI DLT regulations, and regional telecom regulations across all supported markets. We offer dedicated data residency options for enterprises with strict data localisation requirements. Full audit logs, role-based access controls, SSO integration, and API key management are available for enterprise accounts.",
  },
  {
    q: 'Can Baynix integrate with our existing CRM and enterprise systems?',
    a: "Yes. Baynix provides pre-built connectors for Salesforce, HubSpot, Microsoft Dynamics, SAP, and Oracle. For custom enterprise systems, our REST API, webhooks, and event streaming capabilities allow deep bidirectional integration. Our enterprise technical team provides hands-on integration support and can work within your change management process for large deployments.",
  },
  {
    q: 'How is enterprise pricing structured?',
    a: "Enterprise pricing is tailored to your specific volume, channel mix, and feature requirements. We offer committed volume pricing with significant discounts versus pay-as-you-go rates, dedicated infrastructure options, custom SLA packages, and flexible billing cycles. Contact our enterprise sales team for a custom quote — most enterprise proposals are delivered within 48 hours of an initial discovery call.",
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

export default function EnterprisesPage() {
  const [openFaq, setOpenFaq]     = useState<number | null>(0)


  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO — industry icons ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 800, height: 600, background: `radial-gradient(ellipse, rgba(${accentRgb},0.08) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)', top: '10%', right: '5%', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            {/* Industry pills */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {industries.map((ind) => {
                const Icon = ind.icon
                return (
                  <a key={ind.label} href={ind.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1rem', background: `${ind.color}12`, border: `1px solid ${ind.color}28`, borderRadius: 100, fontSize: '0.82rem', fontWeight: 600, color: ind.color, textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${ind.color}20`; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${ind.color}12`; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <Icon size={14} strokeWidth={2} />
                    {ind.label}
                  </a>
                )
              })}
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.3)`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              For Enterprises
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '1rem' }}>
              We Develop Successfully<br />
              <span style={{ background: `linear-gradient(135deg, ${accent}, #67e8f9, #6366f1)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Customised Conversations
              </span><br />
              For Different Industries
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300, maxWidth: 600, margin: '0 auto 2.5rem' }}>
              Enterprise-grade multichannel communication — fully customised, infinitely scalable, and designed to drive engagement at every touchpoint.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>Get Started Now →</a>
              <a href="#enquiry" className="glass-btn glass-btn-secondary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>Talk to Sales</a>
            </div>
          </div>
        </section>

        {/* ── OUR ADVANTAGES — 3 cards ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Our Advantages
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                Built for Enterprise Scale
              </h2>
            </div>

            <div className="enterprise-advantages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {advantages.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} style={{ ...glassCard, padding: '2.25rem 2rem' }} onMouseEnter={cardEnter(item.color)} onMouseLeave={cardLeave}>
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <Icon size={22} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET — image left, tick list right ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', right: '5%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

          <div className="enterprise-whatyouget-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', direction: 'rtl', position: 'relative', zIndex: 1 }}>
            {/* Image left via rtl */}
            <div
              style={{ direction: 'ltr', transition: 'transform 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <ImageBox
                src="/images/enterprises-whatyouget.png"
                alt="What You Get"
                width={800} height={480}
                background={`linear-gradient(135deg, rgba(${accentRgb},0.1), rgba(99,102,241,0.07))`}
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
                What You Get
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '0.75rem' }}>
                Everything Your Enterprise Needs, Out of the Box
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.7, marginBottom: '2rem' }}>
                All enterprise accounts come with a comprehensive feature set designed to make large-scale communication management effortless.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
                {whatYouGet.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                      <div style={{ width: 34, height: 34, borderRadius: 10, background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.22)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon size={16} color={accent} strokeWidth={2} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>{item.label}</div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.6, fontWeight: 300 }}>{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Get Started Now →</a>
            </div>
          </div>
        </section>

        {/* ── HOW WE HELP — 6 icon cards ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 700, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.06) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                How We Help
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                How Baynix Can Help Your Business
              </h2>
            </div>

            <div className="enterprise-howwehelp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {howWeHelp.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} style={{ ...glassCard, padding: '2rem 1.75rem' }} onMouseEnter={cardEnter(item.color)} onMouseLeave={cardLeave}>
                    <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg, transparent, ${item.color}66, transparent)` }} />
                    <div style={{ width: 48, height: 48, borderRadius: 13, background: `${item.color}15`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.1rem' }}>
                      <Icon size={20} color={item.color} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── STEPS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 700, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                How It Works
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem' }}>
                Explore &amp; Have the Most Customer Engagement Like Never Before
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300, maxWidth: 520, margin: '0 auto' }}>
                From discovery to full deployment — our enterprise onboarding is fast, guided, and built around your team's needs.
              </p>
            </div>

            <div className="enterprise-steps" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap' }}>
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.label} style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{ width: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 0.5rem' }}>
                      <div style={{ position: 'relative', marginBottom: '1rem' }}>
                        <div style={{ width: 64, height: 64, borderRadius: 18, background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 24px rgba(${accentRgb},0.15)` }}>
                          <Icon size={26} color={accent} strokeWidth={1.8} />
                        </div>
                        <div style={{ position: 'absolute', top: -8, right: -8, width: 22, height: 22, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color: '#000' }}>
                          {i + 1}
                        </div>
                      </div>
                      <div style={{ fontSize: '0.83rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{step.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text3)', lineHeight: 1.6, fontWeight: 300 }}>{step.desc}</div>
                    </div>

                    {i < steps.length - 1 && (
                      <div className="enterprise-step-arrow" style={{ display: 'flex', alignItems: 'center', paddingTop: '1.5rem', flexShrink: 0 }}>
                        <div style={{ width: 24, height: 1, background: `rgba(${accentRgb},0.3)` }} />
                        <ArrowRight size={14} color={`rgba(${accentRgb},0.5)`} strokeWidth={2} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>Get Started Now →</a>
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

            <div className="enterprise-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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
                Contact Sales
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>Talk to Our Enterprise Team</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Get a tailored solution for your organisation's communication needs</p>
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
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>Enterprises — FAQ's</h2>
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