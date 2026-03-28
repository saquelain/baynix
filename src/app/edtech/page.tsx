'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PartnerMarquee from '@/components/PartnerMarquee'
import { useState } from 'react'
import {
  Clock, Users, Calendar,
  MessageSquare, Phone, Mail, Bot,
  CheckCircle2,
} from 'lucide-react'
import ImageBox from '@/components/ImageBox'

const accent    = '#8b5cf6'
const accentRgb = '139,92,246'


const tabs = [
  {
    id: 'deadline',
    label: 'Deadline Reminders',
    icon: Clock,
    emoji: '⏰',
    image: 'edtech-deadline.png',
    title: 'Deadline Reminders',
    desc: 'Keep students informed about approaching deadlines and upcoming exams to support their academic success and help them stay organised and prepared. Automated reminders via SMS or WhatsApp ensure no student misses a submission date, fee payment, or exam registration window — reducing administrative follow-ups and improving outcomes.',
    color: '#8b5cf6',
  },
  {
    id: 'meeting',
    label: 'Meeting Reminders',
    icon: Users,
    emoji: '🤝',
    image: 'edtech-meeting.png',
    title: 'Meeting Reminders',
    desc: 'Automatically notify students, parents, and faculty about upcoming parent-teacher meetings, counselling sessions, and one-on-one appointments. Reduce no-shows by up to 60% with timely reminders sent 24 hours and 1 hour before each meeting — keeping all stakeholders aligned and communication flowing smoothly.',
    color: '#ec4899',
  },
  {
    id: 'event',
    label: 'Event Reminders',
    icon: Calendar,
    emoji: '🎓',
    image: 'edtech-event.png',
    title: 'Event Reminders',
    desc: 'Drive attendance at campus events, webinars, open days, cultural fests, and sports meets with automated event reminder campaigns. Segment your audience by course, year, or campus and send personalised invitations via WhatsApp or SMS — complete with event details, location links, and RSVP buttons — all in one message.',
    color: '#10b981',
  },
]

const offerings = [
  {
    icon: MessageSquare,
    title: 'SMS',
    desc: "In India, 91% of individuals keep their mobile phones within arm's reach at all times. Baynix's Bulk SMS Services help educational institutions send text notifications and alerts to a large number of students instantly.",
    color: '#8b5cf6',
  },
  {
    icon: Bot,
    title: 'WhatsApp',
    desc: "WhatsApp is a highly responsive communication medium for educational institutions. Baynix's WhatsApp Business API empowers schools and colleges to address student inquiries promptly with AI Chatbots in real-time.",
    color: '#25d366',
  },
  {
    icon: Phone,
    title: 'Voice',
    desc: 'IVR services help educational institutions decrease call transfer time, minimise administrative costs, accommodate more inquiries, and enhance the overall student experience. Missed Call features automate routine tasks.',
    color: '#f59e0b',
  },
  {
    icon: Mail,
    title: 'Email',
    desc: "Educational institutions can leverage Baynix's Email Marketing Services to send customised newsletters to current students and the broader community, significantly enhancing awareness and increasing student enrollment.",
    color: '#3b82f6',
  },
  {
    icon: Bot,
    title: 'Conversational AI Chatbots',
    desc: 'Ensure your students are always supported with Conversational AI-powered Chatbots. These tools alleviate student concerns around the clock, fostering greater loyalty to your institution without adding staff overhead.',
    color: '#ec4899',
  },
]

const testimonials = [
  {
    name: 'Dr. Kavitha Nair',
    role: 'Principal, Horizon International School',
    text: "Baynix's WhatsApp reminders transformed parent engagement at our school. Attendance at parent-teacher meetings jumped from 54% to 89% after we started sending automated reminders. Parents appreciate the timely, personal touch.",
    avatar: 'KN',
    color: '#8b5cf6',
  },
  {
    name: 'Rajesh Menon',
    role: 'Registrar, TechVista University',
    text: "We use Baynix for exam hall ticket notifications, fee payment reminders, and result announcements. Student queries to our admin desk dropped by 65% because everyone already has the information they need via WhatsApp.",
    avatar: 'RM',
    color: '#ec4899',
  },
  {
    name: 'Sneha Patel',
    role: 'Head of Admissions, EduSpark EdTech',
    text: "Our course enrollment conversions improved by 41% after integrating Baynix's drip campaign workflows. Prospective students receive timely nudges at every stage of the funnel — from webinar invite to payment confirmation.",
    avatar: 'SP',
    color: '#10b981',
  },
]

const faqs = [
  {
    q: 'How can Baynix help educational institutions improve student engagement?',
    a: "Baynix enables schools and universities to communicate with students and parents through their preferred channels — SMS, WhatsApp, Voice, and Email. Automated workflows send timely reminders for deadlines, events, and meetings, while AI chatbots handle routine queries 24/7. This multi-channel approach ensures no student feels out of the loop, significantly improving engagement and satisfaction.",
  },
  {
    q: 'Can Baynix send bulk notifications to thousands of students at once?',
    a: "Yes. Baynix's Bulk SMS and WhatsApp broadcast capabilities can send personalised messages to unlimited recipients simultaneously. Each message can include dynamic fields like the student's name, roll number, course, or fee amount — making mass communication feel personal. Delivery reports are available in real time so you know exactly who received your message.",
  },
  {
    q: 'Is WhatsApp Business API suitable for schools in India?',
    a: "Absolutely. WhatsApp has over 500 million users in India, making it the most effective channel for reaching students and parents. Baynix provides a fully managed WhatsApp Business API setup including template approval, green-tick verification support, and a shared team inbox so your administrative staff can manage all conversations from one dashboard.",
  },
  {
    q: 'How do IVR and Missed Call services benefit educational institutions?',
    a: "IVR (Interactive Voice Response) allows students and parents to get answers to common queries — result status, fee dues, timetable information — without speaking to a staff member. Missed Call services can be used for quick polls, attendance confirmation, or opt-in campaigns. Together, these voice tools reduce administrative workload significantly while improving the experience for students and parents.",
  },
  {
    q: 'Can we integrate Baynix with our existing student management system (SMS/ERP)?',
    a: "Yes. Baynix provides a REST API and webhook support that integrates with popular student management systems and ERP platforms. When a student's record is updated in your system — fee paid, result published, admission confirmed — Baynix automatically triggers the relevant communication. Most integrations go live within one to two business days.",
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

export default function EdtechPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [openFaq, setOpenFaq]     = useState<number | null>(0)
  const [focused, setFocused]     = useState<string | null>(null)
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

        {/* ── HERO ── text left, image right ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: `radial-gradient(ellipse, rgba(${accentRgb},0.09) 0%, transparent 70%)`, top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)', top: '20%', right: '5%', pointerEvents: 'none' }} />

          <div className="edtech-hero-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${accentRgb},0.12)`, border: `1px solid rgba(${accentRgb},0.3)`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                EdTech & Education
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '0.75rem' }}>
                Text Messaging For<br />Schools & Universities
              </h1>
              <h2 style={{ fontSize: 'clamp(1rem, 2.2vw, 1.3rem)', fontWeight: 500, lineHeight: 1.5, marginBottom: '1.5rem' }}>
                <span style={{ background: `linear-gradient(135deg, ${accent}, #a78bfa, #ec4899)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  With omnichannel communications solutions, schools, universities, and other educational institutions make parents' lives easier while offering excellent student care.
                </span>
              </h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start For Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            <ImageBox
              src="/images/edtech-hero.png"
              alt="EdTech"
              width={800} height={440}
              background={`linear-gradient(135deg, rgba(${accentRgb},0.12), rgba(236,72,153,0.08), rgba(16,185,129,0.05))`}
              border="1px solid rgba(255,255,255,0.08)"
              borderRadius={24}
              boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.4)"
              imageStyle={{ objectFit: 'contain', borderRadius: 24 }}
            >
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, rgba(${accentRgb},0.1), transparent 60%)`, pointerEvents: 'none' }} />
            </ImageBox>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <PartnerMarquee />

        {/* ── TABS ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 700, height: 500, background: `radial-gradient(ellipse, rgba(${accentRgb},0.06) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                Our Solutions
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                In what ways can Baynix support the Education Industry?
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {tabs.map((tab, i) => {
                const Icon = tab.icon
                const isActive = activeTab === i
                return (
                  <button key={tab.id} onClick={() => setActiveTab(i)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.55rem 1.15rem', borderRadius: 100, border: isActive ? `1px solid ${tab.color}55` : '1px solid rgba(255,255,255,0.1)', background: isActive ? `${tab.color}15` : 'rgba(255,255,255,0.03)', color: isActive ? tab.color : 'var(--text2)', fontSize: '0.82rem', fontWeight: isActive ? 700 : 500, cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.25s ease', boxShadow: isActive ? `0 0 20px ${tab.color}22` : 'none' }}>
                    <Icon size={14} strokeWidth={2} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <div className="edtech-tabs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
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
                <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--text)', marginBottom: '1.25rem' }}>{currentTab.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>{currentTab.desc}</p>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start For Free →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── OFFERINGS — 5 icon cards ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: `radial-gradient(ellipse, rgba(${accentRgb},0.07) 0%, transparent 70%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: accent, marginBottom: '1rem' }}>
                <span style={{ width: 18, height: 1, background: accent, display: 'inline-block' }} />
                What We Offer
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>
                What Baynix Can Offer For Your Institution
              </h2>
            </div>

            <div className="edtech-offerings-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }}>
              {offerings.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} style={{ ...glassCard, padding: '2rem 1.5rem' }} onMouseEnter={cardEnter(item.color)} onMouseLeave={cardLeave}>
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

            <div className="edtech-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
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
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>Empower your institution with smarter student communication</p>
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
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>EdTech & Education — FAQ's</h2>
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